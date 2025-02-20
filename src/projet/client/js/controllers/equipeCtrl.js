class equipeCtrl {
    constructor(){
      http.chargerEquipe(this.chargerEquipeSuccess, this.chargerEquipeError);
    }

    chargerEquipeSuccess(data, text, jqXHR) {   
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
    }

    chargerEquipeError(request, status, error) {
        alert("Erreur lors de la lecture des Equipes: " + error);
    }
}