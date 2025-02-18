class acceuilCtrl {
    constructor(){

    }

    chargerMessagesSuccess(data, text, jqXHR) {   
        var txt = '';
	    var messages = data['messages'];
        for (var i = 0; i < messages.length; i++) {
		    var auteur = messages[i]["auteur"];
		    var corps = messages[i]["corps"]; 
		    $('#tableContent').append("<tr><td>" + auteur + "</td><td>" + corps + "</td></tr>");
	    }
    }

    chargerMessagesError(request, status, error) {
        alert("Erreur lors de la lecture des messages: " + error);
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

    

$(document).ready(function() {
  $.getScript("javascripts/helpers/dateHelper.js", function() {
    console.log("dateHelper.js chargé !");
  });
  $.getScript("javascripts/services/servicesHttp.js", function() {
    console.log("servicesHttp.js chargé !");
    chargerJoueur(chargerMessagesSuccess, chargerMessagesError);
  });
  $("#ajouter").click(function(){ 
	var auteur = document.getElementById("txtAuteur").value;
	var message = document.getElementById("txtMessage").value;
	ajouterMessage(auteur, message, addMessagesSuccess, addMessagesError);
  });
});
}