var BASE_URL = "../server/";
//var BASE_URL = "http://localhost:8080/projet/server/";

/**
 * Classe ServicesHttp
 * Cette classe centralise les appels HTTP pour interagir avec le serveur.
 * Elle utilise jQuery pour effectuer des requêtes AJAX.
 */
class ServicesHttp {
  constructor() {}

  /**
   * Charge les données des équipes depuis le serveur.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  chargerEquipe(successCallback, errorCallback) {
    $.ajax({
      type: "GET",
      dataType: "xml",
      url: BASE_URL + "equipeManager.php",
      data: "action=charger",
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Charge les données des joueurs depuis le serveur.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  chargerJoueur(successCallback, errorCallback) {
    $.ajax({
      type: "GET",
      dataType: "xml",
      url: BASE_URL + "joueurManager.php",
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Charge les données des matchs depuis le serveur.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  chargerMatch(successCallback, errorCallback) {
    $.ajax({
      type: "GET",
      dataType: "xml",
      url: BASE_URL + "matchManager.php",
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Charge les données du classement depuis le serveur.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  chargerClassement(successCallback, errorCallback) {
    $.ajax({
      type: "GET",
      dataType: "xml",
      url: BASE_URL + "classementManager.php",
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Connecte un utilisateur en envoyant ses identifiants au serveur.
   * @param {string} login - Nom d'utilisateur.
   * @param {string} password - Mot de passe.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  connect(login, password, successCallback, errorCallback) {
    $.ajax({
      type: "POST",
      dataType: "xml",
      url: BASE_URL + "loginManager.php",
      data: "action=connect&login=" + login + "&password=" + password,
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Vérifie si un utilisateur est connecté.
   * @param {string} login - Nom d'utilisateur.
   * @param {string} password - Mot de passe.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  checkConnect(login, password, successCallback, errorCallback) {
    $.ajax({
      type: "POST",
      dataType: "xml",
      url: BASE_URL + "loginManager.php",
      data: "action=checkConnect&login=" + login + "&password=" + password,
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Déconnecte un utilisateur.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  deconnect(successCallback, errorCallback) {
    $.ajax({
      type: "POST",
      dataType: "xml",
      url: BASE_URL + "loginManager.php",
      data: "action=deconnect",
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Modifie les informations d'un joueur.
   * @param {number} pk_joueur - Identifiant du joueur.
   * @param {string} description - Nouvelle description du joueur.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  modifierJoueur(pk_joueur, description, successCallback, errorCallback) {
    $.ajax({
      type: "PUT",
      dataType: "xml",
      url: BASE_URL + "joueurManager.php",
      data:
        "action=modifier&pk_joueur=" +
        pk_joueur +
        "&description=" +
        description,
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Modifie les informations d'une équipe.
   * @param {number} pk_equipe - Identifiant de l'équipe.
   * @param {string} trophe - Nouveau trophée de l'équipe.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  modifierEquipe(pk_equipe, trophe, successCallback, errorCallback) {
    $.ajax({
      type: "PUT",
      dataType: "xml",
      url: BASE_URL + "equipeManager.php",
      data:
        "action=modifier&pk_equipe=" +
        pk_equipe +
        "&trophe=" +
        trophe,
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Récupère l'identifiant d'une équipe à partir de son nom.
   * @param {string} nom - Nom de l'équipe.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  getPKEquipe(nom, successCallback, errorCallback) {
    $.ajax({
      type: "GET",
      dataType: "xml",
      url: BASE_URL + "equipeManager.php",
      data: "action=getPK&nom=" + nom,
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Ajoute un nouveau match.
   * @param {string} date - Date du match.
   * @param {string} heure - Heure du match.
   * @param {number} fkEquipeDom - Identifiant de l'équipe domicile.
   * @param {number} fkEquipeVIS - Identifiant de l'équipe visiteur.
   * @param {function} successCallback - Fonction appelée en cas de succès.
   * @param {function} errorCallback - Fonction appelée en cas d'erreur.
   */
  ajouterMatch(date, heure, fkEquipeDom, fkEquipeVIS, successCallback, errorCallback) {
    $.ajax({
      type: "POST",
      dataType: "xml",
      url: BASE_URL + "matchManager.php",
      data:
        "action=ajouter&date=" +
        date +
        "&heure=" +
        heure +
        "&fkEquipeDom=" +
        fkEquipeDom +
        "&fkEquipeVIS=" +
        fkEquipeVIS,
      success: successCallback,
      error: errorCallback,
    });
  }

  /**
   * Centralise la gestion des erreurs HTTP.
   * @param {function} httpErrorCallbackFn - Fonction appelée en cas d'erreur HTTP.
   */
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
