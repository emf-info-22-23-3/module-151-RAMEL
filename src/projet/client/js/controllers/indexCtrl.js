$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  http = new ServicesHttp();
  indexCtrl = new IndexCtrl(); // ctrl principal
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
    this.loadAccueil();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  // avec function classique
  loadAccueil() {
    this.vue.chargerVue("acceuil", () => new AcceuilCtrl());
  }

  loadEquipe() {
    this.vue.chargerVue("equipe", () => new EquipeCtrl());
  }

  loadJoueur() {
    this.vue.chargerVue("joueur", () => new JoueurCtrl());
  }

  loadMatch() {
    this.vue.chargerVue("match", () => new MatchCtrl());
  }
}
