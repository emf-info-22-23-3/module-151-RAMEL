$().ready(function () {
    // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
    http = new servicesHttp();
    indexCtrl = new IndexCtrl();  // ctrl principal
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
      this.vue.chargerVue("acceuil", () => new acceuilCtrl());
    }

    loadEquipe() {
      this.vue.chargerVue("equipe", () => new equipeCtrl());
    }

    loadJoueur() {
      this.vue.chargerVue("joueur", () => new joueurCtrl());
    }
  }