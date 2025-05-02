/**
 * Classe MatchCtrl
 * Cette classe gère les interactions liées aux matchs, y compris le chargement des données,
 * l'ajout de nouveaux matchs et la gestion des erreurs.
 */
class MatchCtrl {
  /**
   * Constructeur de la classe MatchCtrl.
   * Initialise les données des matchs et des équipes, configure les événements et définit la date du jour.
   */
  constructor() {
    // Charger les données des matchs
    http.chargerMatch(this.chargerMatchSuccess, this.chargerMatchError);

    // Vérifier si l'utilisateur est connecté
    this.checkLogin();

    // Charger les données des équipes
    http.chargerEquipe(this.chargerEquipeSuccess, this.chargerEquipeError);

    // Définir la valeur de l'élément input de type date avec la date du jour
    var today = new Date();
    var formattedDate = today.toISOString().slice(0, 10);
    document.getElementById("dateInput").value = formattedDate;

    // Ajouter un événement pour le bouton "Enregistrer"
    var ajouterMatch = document.getElementById("enregistrer");
    ajouterMatch.addEventListener("click", () => {
      // Vérifier les conditions avant d'ajouter un match
      if (
        document.getElementById("dateInput").value > formattedDate &&
        document.getElementById("equipeDOM").value !== document.getElementById("equipeVIS").value &&
        document.getElementById("heure").value !== ""
      ) {
        // Ajouter un nouveau match
        http.ajouterMatch(
          document.getElementById("dateInput").value,
          document.getElementById("heure").value,
          document.getElementById("equipeDOM").value,
          document.getElementById("equipeVIS").value,
          this.chargerMatchSuccess,
          this.afficheAjoutErreur
        );
      } else {
        // Afficher un message d'erreur si les conditions ne sont pas remplies
        alert("Veuillez choisir une date valide et/ou des équipes différentes et une heure.");
      }
    });
  }

  /**
   * Vérifie si l'utilisateur est connecté.
   * Si l'utilisateur est connecté, affiche le formulaire d'ajout de match.
   * Sinon, masque le formulaire.
   */
  checkLogin() {
    if (sessionStorage.getItem("isConnected") === "true") {
      console.log("connecté");
      document.getElementById("ajouter").style.display = "block";
    } else {
      console.log("non-connecté");
      document.getElementById("ajouter").style.display = "none";
    }
  }

  /**
   * Gère le succès du chargement des données des matchs.
   * Affiche les matchs dans le conteneur principal.
   * @param {XMLDocument} data - Données XML des matchs.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  chargerMatchSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter d'accumuler d'anciennes données
    $("#contener").empty();

    // Pour chaque élément <match> dans la réponse
    $(data)
      .find("match")
      .each(function () {
        // Créer une nouvelle ligne HTML pour le match
        var matchRow = $(
          '<div class="match-row">' +
            '<span class="equipeDOM"></span>' +
            '<span class="goalDom"></span>' +
            '<span class="date"></span>' +
            '<span class="heure"></span>' +
            '<span class="goalVisit"></span>' +
            '<span class="equipeVIS"></span>' +
            "</div>"
        );

        // Remplir la ligne avec les données du match
        matchRow.find(".equipeDOM").text($(this).find("fkEquipeDom").text());
        matchRow.find(".goalDom").text($(this).find("goalDom").text());
        matchRow.find(".date").text($(this).find("date").text());
        matchRow.find(".heure").text($(this).find("heure").text());
        matchRow.find(".goalVisit").text($(this).find("goalVisit").text());
        matchRow.find(".equipeVIS").text($(this).find("fkEquipeVIS").text());

        // Ajouter la ligne au conteneur principal
        $("#contener").append(matchRow);
      });
  }

  /**
   * Gère le succès du chargement des données des équipes.
   * Ajoute les équipes dans les listes déroulantes (select) pour les équipes domicile et visiteur.
   * @param {XMLDocument} data - Données XML des équipes.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  chargerEquipeSuccess(data, text, jqXHR) {
    // Vider les listes déroulantes
    $("#equipeDOM").empty();
    $("#equipeVIS").empty();

    // Pour chaque équipe présente dans le XML
    $(data)
      .find("equipe")
      .each(function () {
        var nomEquipe = $(this).find("nom").text();
        var pkEquipe = $(this).find("pk_equipe").text();
        var optionDOM = $("<option></option>").text(nomEquipe).val(pkEquipe);
        var optionVIS = $("<option></option>").text(nomEquipe).val(pkEquipe);
        $("#equipeDOM").append(optionDOM);
        $("#equipeVIS").append(optionVIS);
      });
  }

  /**
   * Affiche un message d'erreur en cas d'échec lors de l'ajout d'un match.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  afficheAjoutErreur(request, status, error) {
    alert("Erreur lors de l'ajout du match: " + error);
  }

  /**
   * Affiche un message d'erreur en cas d'échec lors du chargement des matchs.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  chargerMatchError(request, status, error) {
    console.error(error);
    alert("Erreur lors de la lecture des matchs: " + error);
  }

  /**
   * Affiche un message d'erreur en cas d'échec lors du chargement des équipes.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  chargerEquipeError(request, status, error) {
    console.error(error);
    alert("Erreur lors de la lecture des équipes: " + error);
  }
}
