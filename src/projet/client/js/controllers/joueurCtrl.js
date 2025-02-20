class joueurCtrl {
    constructor(){
      http.chargerJoueur(this.chargerJoueurSuccess, this.chargerJoueurError);
    }

    chargerJoueurSuccess(data, text, jqXHR) {   
        // Vider le conteneur pour éviter les doublons
        $("#content").empty();
    
        // Pour chaque joueur présent dans le XML
        $(data).find("joueur").each(function () {
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
                        '<div class="info-line"><strong>prénom :</strong> <label class="prenom"></label></div>' +
                        '<div class="info-line"><strong>Date naissance :</strong> <label class="dateNaissance"></label></div>' +
                        '<div class="info-line"><strong>description :</strong> <label class="description"></label></div>' +
                        '<div class="info-line"><strong>position :</strong> <label class="position"></label></div>' +
                        '<div class="info-line"><strong>équipe :</strong> <label class="equipe"></label></div>' +
                        '<div class="info-line"><strong>nationalité :</strong> <label class="nationalite"></label></div>' +
                    '</div>' +
                '</div>'
            );
    
            // Remplir la carte avec les données du joueur
            card.find(".nom").text($(this).find("nom").text());
            card.find(".prenom").text($(this).find("prenom").text());
            card.find(".dateNaissance").text($(this).find("dateNaissance").text());
            card.find(".description").text($(this).find("description").text());
            card.find(".position").text($(this).find("fkPosition").text());
            card.find(".equipe").text($(this).find("fkEquipe").text());
            card.find(".nationalite").text($(this).find("fkNationalite").text());
            card.find(".photo").attr("src", $(this).find("photo").text());
    
            // Ajouter la carte générée dans le conteneur
            $("#content").append(card);
        });
    }

    /**chargerJoueurSuccess(data, text, jqXHR) {   
        $(data).find("joueur").each(function () {
            document.getElementById("nom").textContent = $(this).find("nom").text();
            document.getElementById("prenom").textContent = $(this).find("prenom").text();
            document.getElementById("dateNaissance").textContent = $(this).find("dateNaissance").text();
            document.getElementById("description").textContent = $(this).find("description").text();
            document.getElementById("position").textContent = $(this).find("position").text();
            document.getElementById("equipe").textContent = $(this).find("equipe").text();
            document.getElementById("photo").src = "https://ramela.emf-informatique.ch/151/img/EVZ.png";
        });
    }**/

    /**chargerJoueurSuccess(data, text, jqXHR) {   
        $(data).find("joueur").each(function () {
            var j = new joueur();
            j.setNom($(this).find("nom").text());
            j.setPrenom($(this).find("prenom").text());
            j.setDateNaissance($(this).find("dateNaissance").text());
            j.setPhoto($(this).find("photo").text());
            j.setDescription($(this).find("description").text());
            j.setFkPosition($(this).find("fkPosition").text());
            j.setFkEquipe($(this).find("fkEquipe").text());
            j.setFkNationalite($(this).find("fkNationalite").text());
            document.getElementById("nom").textContent = j.getNom;
            document.getElementById("prenom").textContent = j.getPrenon;
            document.getElementById("dateNaissance").textContent = j.getDateNaissance;
            document.getElementById("description").textContent = j.getDescription;
            document.getElementById("position").textContent = j.getFkPosition;
            document.getElementById("equipe").textContent = j.getFkEquipe;
            //document.getElementById("nationaite").textContent = j.getFkNationalite;
            //document.getElementById("photo").src = j.getPhoto;
        });
    }**/

    chargerJoueurError(request, status, error) {
        alert("Erreur lors de la lecture des joueurs: " + error);
    }
}