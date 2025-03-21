class JoueurCtrl {
  constructor() {
    this.checkLogin();

    http.chargerJoueur(this.chargerJoueurSuccess, this.chargerJoueurError);

    var modifierJo = document.getElementById("enregistrer");
    modifierJo.addEventListener("click", function () {
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
        //card.find(".photo").attr("src", $(this).find("photo").text());

        // Ajouter la carte générée dans le conteneur
        $("#content").append(card);
      });
  }

  afficheModificationSuccess(data, text, jqXHR) {
    if ($(data).text() == "true") {
      alert("Modification réussie");
    } else {
      alert("Aucune donnée modifié ou donnée invalide");
    }
  }

  afficheModificationErreur(request, status, error) {
    alert("Erreur lors de la modification des Equipes: " + error);
  }

  chargerJoueurError(request, status, error) {
    alert("Erreur lors de la lecture des joueurs: " + error);
  }
}
