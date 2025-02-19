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

    chargerMatch(fk_equipe,successCallback, errorCallback){
      $.ajax({
        type: "GET",
        dataType: "xml",
        url: BASE_URL + "matchManager.php",
        data:'FK_equipe=' + fk_equipe,
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
  