class EquipeCtrl {
  constructor() {

    this.checkLogin();

    http.chargerEquipe(this.chargerEquipeSuccess, this.chargerEquipeError);

    var modifierEq = document.getElementById("enregistrer");
    modifierEq.addEventListener("click", () => {
      $(".card").each(function () {
          this.appelModifierEquipe($(this).find('.postId').val(), $(this).find('.trophe').val())
      });
    });
  }

  checkLogin() {
    var result = false;
    if (sessionStorage.getItem("isConnected") == "true") {
      document.getElementById("enregistrer").style.display = "block";
      result = true;
    } else {
      document.getElementById("enregistrer").style.display = "none";
    }
    return result;
  }

  chargerEquipeSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter les doublons
    $("#content").empty();

    // Pour chaque equipe présent dans le XML
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

  appelModifierEquipe(postId, trophe) {
    http.modifierEquipe(
      postId,
      trophe,
      this.afficheModificationSuccess,
      this.afficheModificationErreur
    );
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

  chargerEquipeError(request, status, error) {
    alert("Erreur lors de la lecture des Equipes: " + error);
  }
}
