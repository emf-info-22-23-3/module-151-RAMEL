/**
 * Classe EquipeCtrl
 * Cette classe gère les interactions liées aux équipes, y compris le chargement des données,
 * la modification des informations des équipes et la gestion des erreurs.
 */
class EquipeCtrl {
  /**
   * Constructeur de la classe EquipeCtrl.
   * Initialise les données des équipes, configure les événements et vérifie si l'utilisateur est connecté.
   */
  constructor() {
    // Vérifier si l'utilisateur est connecté
    this.checkLogin();

    // Charger les données des équipes
    http.chargerEquipe(this.chargerEquipeSuccess, this.chargerEquipeError);

    // Ajouter un événement pour le bouton "Enregistrer"
    var modifierEq = document.getElementById("enregistrer");
    modifierEq.addEventListener("click", function () {
      // Parcourir chaque carte d'équipe et envoyer les modifications
      $(".card").each(function () {
        http.modifierEquipe(
          $(this).find(".postId").val(),
          $(this).find(".trophe").val(),
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
   * Gère le succès du chargement des données des équipes.
   * Affiche les équipes sous forme de cartes dans le conteneur principal.
   * @param {XMLDocument} data - Données XML des équipes.
   * @param {string} text - Texte de la réponse.
   * @param {jqXHR} jqXHR - Objet de la requête AJAX.
   */
  chargerEquipeSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter les doublons
    $("#content").empty();

    // Pour chaque équipe présente dans le XML
    $(data)
      .find("equipe")
      .each(function () {
        // Créer une carte en utilisant un template HTML
        var card = $(
          '<div class="card">' +
            '<div class="image">' +
            '<div class="placeholder-image">' +
            '<img alt="Image joueur" class="photo">' +
            "</div>" +
            "</div>" +
            '<input type="hidden" class="postId"/>' +
            '<div class="form-group">' +
            '<strong>nom :<input type="text" class="nom"></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>abreviation :<input type="text" class="abreviation"></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>date création :<input type="text" class="dateCreation"></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>trophe :<input type="text" class="trophe"></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>canton :<input type="text" class="fkCanton"></strong>' +
            "</div>" +
            "</div>"
        );

        // Rendre certains champs modifiables si l'utilisateur est connecté
        if (sessionStorage.getItem("isConnected") == "true") {
          card.find("input").attr("readonly", true);
          card.find(".trophe").attr("readonly", false);
        } else {
          card.find("input").attr("readonly", true);
        }

        // Remplir la carte avec les données de l'équipe
        card.find(".postId").val($(this).find("pk_equipe").text());
        card.find(".nom").val($(this).find("nom").text());
        card.find(".abreviation").val($(this).find("abreviation").text());
        card.find(".dateCreation").val($(this).find("dateCreation").text());
        card.find(".trophe").val($(this).find("trophe").text());
        card.find(".fkCanton").val($(this).find("fkCanton").text());
        card.find(".photo").attr("src", $(this).find("photo").text());

        // Ajouter la carte générée dans le conteneur
        $("#content").append(card);
      });
  }

  /**
   * Gère le succès de la modification des informations d'une équipe.
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
   * Gère les erreurs lors de la modification des informations d'une équipe.
   * Affiche un message d'erreur.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  afficheModificationErreur(request, status, error) {
    alert("Erreur lors de la modification des équipes: " + error);
  }

  /**
   * Gère les erreurs lors du chargement des données des équipes.
   * Affiche un message d'erreur.
   * @param {jqXHR} request - Objet de la requête AJAX.
   * @param {string} status - Statut de la requête.
   * @param {string} error - Message d'erreur.
   */
  chargerEquipeError(request, status, error) {
    alert("Erreur lors de la lecture des équipes: " + error);
  }
}
