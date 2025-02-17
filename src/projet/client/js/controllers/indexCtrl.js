$().ready(function () {
    // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
    http = new servicesHttp();
    indexCtrl = new IndexCtrl();  // ctrl principal
    http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
  });
  
  class IndexCtrl {
    constructor() {
      this.vue = new VueService();
      this.loadAccueilNonAuthentifie();
    }
  
    afficherErreurHttp(msg) {
      alert(msg);
    }
  
    // avec function classique
    loadAccueilNonAuthentifie() {
      this.vue.chargerVue("acceuilNonAuthentifie", () => new acceuilNonAuthentifieCtrl());
    }

    loadAccueilAuthentifie() {
      this.vue.chargerVue("acceuilAuthentifie", () => new acceuilNonAuthentifieCtrl());
    }

    loadEquipeNonAuthentifie() {
      this.vue.chargerVue("equipeNonAuthentifie", () => new acceuilNonAuthentifieCtrl());
    }
    
    loadEquipeAuthentifie() {
      this.vue.chargerVue("equipeAuthentifie", () => new acceuilNonAuthentifieCtrl());
    }

    loadJoueurNonAuthentifie() {
      this.vue.chargerVue("joueurNonAuthentifie", () => new acceuilNonAuthentifieCtrl());
    }

    loadJoueurAuthentifie() {
      this.vue.chargerVue("joueurAuthentifie", () => new acceuilNonAuthentifieCtrl());
    }
  }