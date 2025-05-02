/**
 * Classe JoueurCtrl
 * Cette classe gère les interactions liées aux joueurs, y compris le chargement des données,
 * la modification des informations des joueurs et la gestion des erreurs.
 */
class JoueurCtrl {
  /**
   * Constructeur de la classe JoueurCtrl.
   * Initialise les données des joueurs, configure les événements et vérifie si l'utilisateur est connecté.
   */
  constructor() {
    // Vérifier si l'utilisateur est connecté
    this.checkLogin();

    // Charger les données des joueurs
    http.chargerJoueur(this.chargerJoueurSuccess, this.chargerJoueurError);

    // Ajouter un événement pour le bouton "Enregistrer"
    var modifierJo = document.getElementById("enregistrer");
    modifierJo.addEventListener("click", function () {
      // Parcourir chaque carte de joueur et envoyer les modifications
      $(".card").each(function () {
        http.modifierJoueur(
          $(this).find(".postId").val(),
          $(this).find(".description").val(),
          this.afficheModificationSuccess,
          this.afficheModificationErreur
        );
      });
    });
  }

  /**
   * Vérifie si l'utilisateur est connecté.
   * Si l'utilisateur est connecté, affiche le bouton "Enregistrer".
   * Sinon, masque le bouton.
   * @returns {string} "true" si l'utilisateur est connecté, sinon "false".
   */
  checkLogin() {
    var result = "false";
    if (sessionStorage.getItem("isConnected") == "true") {
      document.getElementById("enregistrer").style.display = "block";
      result = "true";
    } else {
      document.getElementById("enregistrer").style.display = "none";
    }
    return result;
  }

  /**
   * Gère le succès du chargement des données des joueurs.
   * Affiche les joueurs sous forme de cartes dans le conteneur principal.
   * @param {XMLDocument} data - Données XML des joueurs.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  chargerJoueurSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter les doublons
    $("#content").empty();

    // Pour chaque joueur présent dans le XML
    $(data)
      .find("joueur")
      .each(function () {
        // Créer une carte en utilisant un template HTML
        var card = $(
          '<div class="card">' +
            '<div class="image">' +
            '<div class="placeholder-image">' +
            '<img alt="Image joueur" class="photo">' +
            "</div>" +
            "</div>" +
            '<div class="form-group">' +
            '<input type="hidden" class="postId"/>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>nom :<input type="text" class="nom" readonly></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>prénom :<input type="text" class="prenom" readonly></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>date naissance :<input type="text" class="dateNaissance" readonly></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>description :<input type="text" class="description" readonly></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>position :<input type="text" class="position" readonly></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>équipe :<input type="text" class="equipe" readonly></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>nationalité :<input type="text" class="nationalite" readonly></strong>' +
            "</div>" +
            "</div>"
        );

        // Rendre certains champs modifiables si l'utilisateur est connecté
        if (sessionStorage.getItem("isConnected") == "true") {
          card.find("input").attr("readonly", true);
          card.find(".description").attr("readonly", false);
        } else {
          card.find("input").attr("readonly", true);
        }

        // Remplir la carte avec les données du joueur
        card.find(".postId").val($(this).find("pk_joueur").text());
        card.find(".nom").val($(this).find("nom").text());
        card.find(".prenom").val($(this).find("prenom").text());
        card.find(".dateNaissance").val($(this).find("dateNaissance").text());
        card.find(".description").val($(this).find("description").text());
        card.find(".position").val($(this).find("fkPosition").text());
        card.find(".equipe").val($(this).find("fkEquipe").text());
        card.find(".nationalite").val($(this).find("fkNationalite").text());
        card.find(".photo").attr("src", $(this).find("photo").text());

        // Ajouter la carte générée dans le conteneur
        $("#content").append(card);
      });
  }

  /**
   * Gère le succès de la modification des informations d'un joueur.
   * Affiche un message de confirmation.
   * @param {XMLDocument} data - Données XML de la réponse.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  afficheModificationSuccess(data, text, jqXHR) {
    if ($(data).text() == "true") {
      alert("Modification réussie");
    } else {
      alert("Aucune donnée modifiée ou donnée invalide");
    }
  }

  /**
   * Gère les erreurs lors de la modification des informations d'un joueur.
   * Affiche un message d'erreur.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  afficheModificationErreur(request, status, error) {
    alert("Erreur lors de la modification des joueurs: " + error);
  }

  /**
   * Gère les erreurs lors du chargement des données des joueurs.
   * Affiche un message d'erreur.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  chargerJoueurError(request, status, error) {
    alert("Erreur lors de la lecture des joueurs: " + error);
  }
}
