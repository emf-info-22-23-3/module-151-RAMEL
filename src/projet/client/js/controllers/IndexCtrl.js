/**
 * Initialisation de l'application.
 * Ce code est exécuté lorsque le DOM est prêt.
 * - Initialise les services HTTP.
 * - Crée une instance du contrôleur principal `IndexCtrl`.
 * - Configure la gestion centralisée des erreurs HTTP.
 */
$().ready(function () {
  // `http` et `indexCtrl` sont des variables globales accessibles depuis n'importe où
  http = new ServicesHttp();
  indexCtrl = new IndexCtrl(); // Contrôleur principal
  http.centraliserErreurHttp(IndexCtrl.afficherErreurHttp);
});

/**
 * Classe IndexCtrl
 * Cette classe est le contrôleur principal de l'application.
 * Elle gère le chargement des différentes vues et leur initialisation.
 */
class IndexCtrl {
  /**
   * Constructeur de la classe IndexCtrl.
   * Initialise le service de gestion des vues et charge la vue d'accueil par défaut.
   */
  constructor() {
    this.vue = new VueService(); // Service pour charger les vues HTML
    this.loadAccueil(); // Charger la vue d'accueil par défaut
  }

  /**
   * Affiche un message d'erreur HTTP.
   * Cette méthode est utilisée pour afficher les erreurs HTTP centralisées.
   * @param {string} msg - Message d'erreur à afficher.
   */
  afficherErreurHttp(msg) {
    alert(msg);
  }

  /**
   * Charge la vue d'accueil.
   * Initialise le contrôleur associé à la vue d'accueil (`AcceuilCtrl`).
   */
  loadAccueil() {
    this.vue.chargerVue("acceuil", () => new AcceuilCtrl());
  }

  /**
   * Charge la vue des équipes.
   * Initialise le contrôleur associé à la vue des équipes (`EquipeCtrl`).
   */
  loadEquipe() {
    this.vue.chargerVue("equipe", () => new EquipeCtrl());
  }

  /**
   * Charge la vue des joueurs.
   * Initialise le contrôleur associé à la vue des joueurs (`JoueurCtrl`).
   */
  loadJoueur() {
    this.vue.chargerVue("joueur", () => new JoueurCtrl());
  }

  /**
   * Charge la vue des matchs.
   * Initialise le contrôleur associé à la vue des matchs (`MatchCtrl`).
   */
  loadMatch() {
    this.vue.chargerVue("match", () => new MatchCtrl());
  }
}
