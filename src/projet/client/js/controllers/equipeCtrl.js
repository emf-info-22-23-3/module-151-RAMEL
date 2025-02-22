class equipeCtrl {
    constructor(){
      http.chargerEquipe(this.chargerEquipeSuccess, this.chargerEquipeError);
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
    

    chargerEquipeSuccess(data, text, jqXHR) {   
        // Vider le conteneur pour éviter les doublons
        $("#content").empty();
    
        // Pour chaque equipe présent dans le XML
        $(data).find("equipe").each(function () {
            // Créer une carte en utilisant un template HTML
            var card = $(
                '<div class="card">' +
                    '<div class="image">' +
                        '<div class="placeholder-image">' +
                            '<img alt="Image joueur" class="photo">' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<strong>nom :<input class="nom" type="text"></strong>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<strong>abreviation :<input type="text" class="abreviation"></strong>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<strong>date création :<input type="text" class="dateCreation"></strong>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<strong>trophe :<input type="text" class="trophe"></strong>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<strong>canton :<input type="text" class="fkCanton"></strong>' +
                    '</div>' +
                '</div>'
            );
            card.find('input').attr('readonly', true);
    
            // Remplir la carte avec les données de l'équipe
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

    chargerEquipeError(request, status, error) {
        alert("Erreur lors de la lecture des Equipes: " + error);
    }
}