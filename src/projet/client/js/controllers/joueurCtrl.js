class joueurCtrl {
    constructor(){
      http.chargerJoueur(this.chargerJoueurSuccess, this.chargerJoueurError);
    }

    /**chargerJoueurSuccess(data, text, jqXHR) {   
        var joueurs = data['joueurs'];
        for (var i = 0; i < joueurs.length; i++) {
            var nom = messages[i]["nom"];
            var prenom = messages[i]["prenom"]; 
            var dateNaissance = messages[i]["dateNaissance"]; 
            var photo = messages[i]["photo"]; 
            var description = messages[i]["description"]; 
            var fkPosition = messages[i]["fkPosition"]; 
            var fkEquipe = messages[i]["fkEquipe"]; 
            var fkNationalite = messages[i]["fkNationalite"]; 
            document.getElementById("nom").textContent = $(this).find("nom").text();
            document.getElementById("prenom").textContent = prenom;
            document.getElementById("dateNaissance").textContent = dateNaissance;
            document.getElementById("description").textContent = description;
            document.getElementById("position").textContent = fkPosition;
            document.getElementById("equipe").textContent = fkEquipe;
            document.getElementById("nationalite").textContent = fkNationalite;
            document.getElementById("photo").src = photo;
        }
    }**/

    chargerJoueurSuccess(data, text, jqXHR) {   
        $(data).find("joueur").each(function () {
            document.getElementById("nom").textContent = $(this).find("nom").text();
            document.getElementById("prenom").textContent = $(this).find("prenom").text();
            document.getElementById("dateNaissance").textContent = $(this).find("dateNaissance").text();
            document.getElementById("description").textContent = $(this).find("description").text();
            document.getElementById("position").textContent = $(this).find("position").text();
            document.getElementById("equipe").textContent = $(this).find("equipe").text();
            document.getElementById("photo").src = "https://ramela.emf-informatique.ch/151/img/EVZ.png";
        });
    }

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

    afficheInfoJoueur(event) {
      var cmbJoueurs = document.getElementById("cmbJoueur");
      var joueurJson = JSON.parse(cmbJoueurs.value);
      document.getElementById("nom").textContent = joueurJson.nom;
      document.getElementById("prenom").textContent = joueurJson.datenaissance;
      document.getElementById("dateNaissance").textContent = joueurJson.salaire;
      document.getElementById("description").textContent = joueurJson.nbrBut;
      document.getElementById("position").textContent = joueurJson.nbrTitre;
      document.getElementById("equipe").textContent = joueurJson.numero;
      document.getElementById("nationalite").textContent = joueurJson.fk_position;
      document.getElementById("photo").src = joueurJson.fk_photo;
  }

    chargerJoueurError(request, status, error) {
        alert("Erreur lors de la lecture des joueurs: " + error);
    }

    addMessagesSuccess(data, text, jqXHR) {   
        var txt = data['result'];
        if(txt) {
		    location.reload();
	    }
	    else{
		    alert("Erreur lors de l'ajout");
	    }	
    }

    addMessagesError(request, status, error) {
        alert("Erreur lors de l'ajout du message: " + error);
    }
}