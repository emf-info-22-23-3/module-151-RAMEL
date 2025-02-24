class JoueurCtrl {
  constructor() {
    http.chargerJoueur(this.chargerJoueurSuccess, this.chargerJoueurError);

    this.checkLogin();

    var modifier = document.getElementById("enregistrer");
    modifier.addEventListener("click", () => {
      http.modifierJoueur(
        document.getElementById("nom").value,
        document.getElementById("prenom").value,
        document.getElementById("dateNaissance").value,
        document.getElementById("description").value,
        document.getElementById("position").value,
        document.getElementById("equipe").value,
        document.getElementById("nationalite").value,
        JSON.parse(cmbJoueurs.value).pk_joueur,
        this.afficheModificationSuccess.bind(this),
        this.afficheModificationErreur
      );
    });
  }

  checkLogin() {
    if (sessionStorage.getItem("isConnected") === "true") {
      console.log("connecter");
      document.getElementById("enregistrer").style.display = "block";
    } else {
      console.log("non-connecter");
      document.getElementById("enregistrer").style.display = "none";
    }
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
        console.log($(".postId").val());

        // Ajouter la carte générée dans le conteneur
        $("#content").append(card);
      });
  }

  chargerJoueurError(request, status, error) {
    alert("Erreur lors de la lecture des joueurs: " + error);
  }
}
