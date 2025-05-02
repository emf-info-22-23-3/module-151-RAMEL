/*
  But :    Classe qui permet de charger dynamiquement les vues HTML dans l'application.
  Auteur : Anthony Ramel
  Date :   11.06.2024 / V1.0
*/

/**
 * Classe VueService
 * Cette classe est responsable du chargement des vues HTML dans un conteneur spécifique.
 */
class VueService {
  /**
   * Constructeur de la classe VueService.
   */
  constructor() {}

  /**
   * Charge une vue HTML dans le conteneur principal de l'application.
   * @param {string} vue - Nom de la vue à charger (sans l'extension `.html`).
   * @param {function} callback - Fonction de rappel (callback) à exécuter une fois la vue chargée (facultatif).
   */
  chargerVue(vue, callback) {
    // Charger la vue demandée dans le conteneur avec l'ID "view"
    $("#view").load("views/" + vue + ".html", function () {
      // Si une fonction de callback est spécifiée, on l'appelle ici
      if (typeof callback !== "undefined") {
        callback();
      }
    });
  }
}
