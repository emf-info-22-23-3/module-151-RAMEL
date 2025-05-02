/**
 * Classe AcceuilCtrl
 * Cette classe gère les interactions sur la page d'accueil, y compris la connexion, 
 * la déconnexion, le chargement des matchs du jour et le classement.
 */
class AcceuilCtrl {
  /**
   * Constructeur de la classe AcceuilCtrl.
   * Initialise les événements pour les boutons de connexion et de déconnexion,
   * vérifie si l'utilisateur est connecté et charge les données des matchs et du classement.
   */
  constructor() {
    var butConnect = document.getElementById("connexion");
    var butDeconnect = document.getElementById("deconnexion");

    // Vérifier si l'utilisateur est connecté
    this.checkLogin();

    // Charger les données des matchs et du classement
    http.chargerMatch(this.chargerMatchSuccess, this.chargerMatchError);
    http.chargerClassement(
      this.chargerClassementSuccess,
      this.chargerClassementError
    );

    // Ajouter un événement pour le bouton "Connexion"
    butConnect.addEventListener("click", () => {
      http.connect(
        document.getElementById("username").value,
        document.getElementById("pwd").value,
        this.connectSuccess,
        this.gestionErreurConnect
      );
    });

    // Ajouter un événement pour le bouton "Déconnexion"
    butDeconnect.addEventListener("click", () => {
      http.deconnect(this.deconnectSuccess, this.gestionErreurDeconnect);
    });
  }

  /**
   * Vérifie si l'utilisateur est connecté.
   * Affiche ou masque les boutons "Connexion" et "Déconnexion" en fonction de l'état de connexion.
   */
  checkLogin() {
    if (sessionStorage.getItem("isConnected") === "true") {
      document.getElementById("deconnexion").style.display = "block";
      document.getElementById("connexion").style.display = "none";
    } else {
      document.getElementById("deconnexion").style.display = "none";
      document.getElementById("connexion").style.display = "block";
    }
  }

  /**
   * Gère le succès de la connexion.
   * Met à jour l'état de connexion et affiche un message de confirmation.
   * @param {XMLDocument} data - Données XML de la réponse.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  connectSuccess(data, text, jqXHR) {
    if ($(data).find("result").text() == "true") {
      alert("Connexion réussie");
      sessionStorage.setItem("isConnected", "true");
      document.getElementById("deconnexion").style.display = "block";
      document.getElementById("connexion").style.display = "none";
    } else {
      alert("Erreur durant la connexion");
    }
  }

  /**
   * Gère le succès de la déconnexion.
   * Met à jour l'état de connexion et affiche un message de confirmation.
   * @param {XMLDocument} data - Données XML de la réponse.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  deconnectSuccess(data, text, jqXHR) {
    if ($(data).find("result").text() == "true") {
      sessionStorage.removeItem("isConnected");
      alert("Déconnexion réussie :)");
      document.getElementById("deconnexion").style.display = "none";
      document.getElementById("connexion").style.display = "block";
    } else {
      alert("Erreur durant la déconnexion");
    }
  }

  /**
   * Gère le succès du chargement des matchs.
   * Affiche les matchs du jour dans le conteneur principal.
   * @param {XMLDocument} data - Données XML des matchs.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  chargerMatchSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter d'accumuler d'anciennes données
    $("#contener").empty();

    var compteur = 0;
    // Pour chaque élément <match> dans la réponse
    $(data)
      .find("match")
      .each(function () {
        var today = new Date();
        var formattedDate = today.toISOString().slice(0, 10);
        if ($(this).find("date").text() == formattedDate) {
          compteur++;
          // Créer une nouvelle ligne HTML pour le match
          var matchRow = $(
            '<div class="match-row-acceuil">' +
              '<span class="equipeDOM"></span>' +
              '<span class="goalDom"></span>' +
              '<span class="heure"></span>' +
              '<span class="goalVisit"></span>' +
              '<span class="equipeVIS"></span>' +
              "</div>"
          );

          // Remplir la ligne avec les données du match
          matchRow.find(".equipeDOM").text($(this).find("fkEquipeDom").text());
          matchRow.find(".goalDom").text($(this).find("goalDom").text());
          matchRow.find(".heure").text($(this).find("heure").text());
          matchRow.find(".goalVisit").text($(this).find("goalVisit").text());
          matchRow.find(".equipeVIS").text($(this).find("fkEquipeVIS").text());
        }
        // Ajouter la ligne au conteneur principal
        $("#contener").append(matchRow);
      });

    if (compteur == 0) {
      var pasMatch = $(
        '<div class="no-match-row-acceuil">Pas de match ce jour</div>'
      );
      $("#contener").append(pasMatch);
    }
  }

  /**
   * Gère le succès du chargement du classement.
   * Affiche les données du classement dans un tableau.
   * @param {XMLDocument} data - Données XML du classement.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  chargerClassementSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter les doublons
    $("#classement").empty();

    // Pour chaque joueur présent dans le XML
    $(data)
      .find("classement")
      .each(function () {
        // Créer une carte en utilisant un template HTML
        var tableau = $(
          "<tr>" +
            '<td class="equipe"></td>' +
            '<td class="GP"></td>' +
            '<td class="G"></td>' +
            '<td class="PTS"></td>' +
            '<td class="PGP"></td>' +
            "</tr>"
        );

        // Remplir la carte avec les données du joueur
        tableau.find(".equipe").text($(this).find("nom").text());
        tableau.find(".GP").text($(this).find("GP").text());
        tableau.find(".G").text($(this).find("G").text());
        tableau.find(".PTS").text($(this).find("PTS").text());
        let nombre = $(this).find("PTS").text() / $(this).find("GP").text();
        let formate = nombre.toFixed(3);
        tableau.find(".PGP").text(formate);

        // Ajouter la carte générée dans le conteneur
        $("#classement").append(tableau);
      });
  }

  /**
   * Gère les erreurs lors du chargement du classement.
   * Affiche un message d'erreur.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  chargerClassementError(request, status, error) {
    console.error(error);
    alert("Erreur lors de la lecture du classement: " + error);
  }

  /**
   * Gère les erreurs lors du chargement des matchs.
   * Affiche un message d'erreur.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  chargerMatchError(request, status, error) {
    console.error(error);
    alert("Erreur lors de la lecture des matchs: " + error);
  }

  /**
   * Gère les erreurs lors de la connexion.
   * Affiche un message d'erreur.
   * @param {jqXHR} xhr - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  gestionErreurConnect(xhr, status, error) {
    console.error("Erreur lors de votre connexion : ", status, error);
    alert("Une erreur est survenue lors de votre connexion");
  }

  /**
   * Gère les erreurs lors de la déconnexion.
   * Affiche un message d'erreur.
   * @param {jqXHR} xhr - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  gestionErreurDeconnect(xhr, status, error) {
    console.error("Erreur lors de votre déconnexion : ", status, error);
    alert("Une erreur est survenue lors de votre déconnexion");
  }
}
