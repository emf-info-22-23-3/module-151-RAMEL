class EquipeCtrl {
  estConnect = "false";

  constructor() {
    this.estConnect = this.checkLogin();
    console.log(this.estConnect);

    http.chargerEquipe(this.chargerEquipeSuccess, this.chargerEquipeError);

    var modifierEq = document.getElementById("enregistrer");
    modifierEq.addEventListener("click", () => {
      $(".card").each(function () {
        console.log($("#postId").value);
        /**http.modifierEquipe(
          $(".postId").value,
          $(".trophe").value,
          this.afficheModificationSuccess.bind(this),
          this.afficheModificationErreur
        );**/ 
      });
    });
  }

  checkLogin() {
    var result = "false";
    if (sessionStorage.getItem("isConnected") == "true") {
      console.log("connecter");
      document.getElementById("enregistrer").style.display = "block";
      result = "true";
    } else {
      console.log("non-connecter");
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
            '<input type="hidden" id="postId"/>' +
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
            '<strong>trophe :<input type="text" id="modif" class="trophe"></strong>' +
            "</div>" +
            '<div class="form-group">' +
            '<strong>canton :<input type="text" class="fkCanton"></strong>' +
            "</div>" +
            "</div>"
        );

        if (this.estConnect == "false") {
          console.log(this.estConnect);
          card.find("input").attr("readonly", true);
        } else {
          card.find("input").attr("readonly", true);
          card.find("#modif").attr("readonly", false);
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

  /**chargerEquipeSuccess(data, text, jqXHR) {   
        // Vider le conteneur pour éviter les doublons
        $("#content").empty();
    
        // Pour chaque joueur présent dans le XML
        $(data).find("equipe").each(function () {
            // Créer une carte en utilisant un template HTML
            var card = $(
                '<div class="card">' +
                    '<div class="image">' +
                        '<div class="placeholder-image">' +
                            '<img alt="Image joueur" class="photo">' +
                        '</div>' +
                    '</div>' +
                    '<div class="info">' +
                        '<div class="info-line"><strong>nom :</strong> <label class="nom"></label></div>' +
                        '<div class="info-line"><strong>abreviation :</strong> <label class="abreviation"></label></div>' +
                        '<div class="info-line"><strong>date création :</strong> <label class="dateCreation"></label></div>' +
                        '<div class="info-line"><strong>trophe :</strong> <label class="trophe"></label></div>' +
                        '<div class="info-line"><strong>canton :</strong> <label class="fkCanton"></label></div>' +
                    '</div>' +
                '</div>'
            );
    
            // Remplir la carte avec les données du joueur
            card.find(".nom").text($(this).find("nom").text());
            card.find(".abreviation").text($(this).find("abreviation").text());
            card.find(".dateCreation").text($(this).find("dateCreation").text());
            card.find(".trophe").text($(this).find("trophe").text());
            card.find(".fkCanton").text($(this).find("fkCanton").text());
            card.find(".photo").attr("src", $(this).find("photo").text());
    
            // Ajouter la carte générée dans le conteneur
            $("#content").append(card);
        });
    }**/

  afficheModificationSuccess() {
    
  }

  afficheModificationErreur(request, status, error) {
    alert("Erreur lors de la modification des Equipes: " + error);
  }

  chargerEquipeError(request, status, error) {
    alert("Erreur lors de la lecture des Equipes: " + error);
  }
}
