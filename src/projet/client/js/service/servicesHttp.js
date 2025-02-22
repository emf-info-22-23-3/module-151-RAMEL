var BASE_URL = "http://localhost:8080/projet/server/";

class servicesHttp {

    constructor(){
      
    }


    chargerEquipe(successCallback, errorCallback) {
      $.ajax({
        type: "GET",
        dataType: "xml",
        url: BASE_URL + "equipeManager.php",
        success: successCallback,
        error: errorCallback
      });
    }

    chargerJoueur(successCallback, errorCallback){
      $.ajax({
        type: "GET",
        dataType: "xml",
        url: BASE_URL + "joueurManager.php",
        success: successCallback,
        error: errorCallback
      });
    }

    chargerMatch(successCallback, errorCallback){
      $.ajax({
        type: "GET",
        dataType: "xml",
        url: BASE_URL + "matchManager.php",
        success: successCallback,
        error: errorCallback
      });
    }

    chargerClassement(successCallback, errorCallback){
      $.ajax({
        type: "GET",
        dataType: "xml",
        url: BASE_URL + "classementManager.php",
        success: successCallback,
        error: errorCallback
      });
    }

    connect(login, password, successCallback, errorCallback) {
      $.ajax({
        type: "POST",
        dataType: "xml",
        url: BASE_URL + "loginManager.php",
        data: 'action=connect&login=' + login + '&password=' + password,
        success: successCallback,
        error: errorCallback
      });
    }

    modifierJoueur (nom, prenom, dateNaissance, description, fkPosition, fkEquipe, fkNationalite, pk_joueur,successCallback, errorCallback){
      $.ajax({
        type: "PUT",
        dataType: "xml",
        url: BASE_URL + "joueurManager.php",
        data: 'action=ajouter&nom=' + nom + '&prenom=' + prenom + '&dateNaissance=' + dateNaissance + '&description=' + description + 
        '&fkPosition=' + fkPosition + '&fkEquipe=' + fkEquipe + '&fkNationalite=' + fkNationalite + "&pk_joueur" + pk_joueur,
        success: successCallback,
        error: errorCallback
      });
    }

    modifierEquipe (nom, abreviation, dateCreation, trophe, fkCanton, pk_equipe,successCallback, errorCallback){
      $.ajax({
        type: "PUT",
        dataType: "xml",
        url: BASE_URL + "joueurManager.php",
        data: 'action=ajouter&nom=' + nom + '&abreviation=' + abreviation + '&dateCreation=' + dateCreation + '&trophe=' + trophe + 
        '&fkCanton=' + fkCanton + '&pk_equipe=' + pk_equipe,
        success: successCallback,
        error: errorCallback
      });
    }

    ajouterMatch (date, heure, fkEquipeDom, fkEquipeVIS, successCallback, errorCallback) {
      $.ajax({
        type: "POST",
        dataType: "xml",
        url: BASE_URL,
        data: 'action=ajouter&date=' + date + '&heure=' + heure + '&fkEquipeDom=' + fkEquipeDom + '&fkEquipeVIS=' + fkEquipeVIS,
        success: successCallback,
        error: errorCallback
      });
    }
  
    centraliserErreurHttp(httpErrorCallbackFn) {
      $.ajaxSetup({
        error: function (xhr, exception) {
          let msg;
          if (xhr.status === 0) {
            msg = "Pas d'accès à la ressource serveur demandée !";
          } else if (xhr.status === 404) {
            msg = "Page demandée non trouvée [404] !";
          } else if (xhr.status === 500) {
            msg = "Erreur interne sur le serveur [500] !";
          } else if (exception === "parsererror") {
            msg = "Erreur de parcours dans le JSON !";
          } else if (exception === "timeout") {
            msg = "Erreur de délai dépassé [Time out] !";
          } else if (exception === "abort") {
            msg = "Requête Ajax stoppée !";
          } else {
            msg = "Erreur inconnue : \n" + xhr.responseText;
          }
          httpErrorCallbackFn(msg);
        },
      });
    }
  }
  