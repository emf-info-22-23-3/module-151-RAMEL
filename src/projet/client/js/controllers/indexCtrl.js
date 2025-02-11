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
  
    // avec arrow function
    loadMatch(fkEquipe) {
      this.vue.chargerVue("match", function () {
        new MatchCtrl(fkEquipe);
      });
    }
  
    // avec function classique
    loadAccueil() {
      this.vue.chargerVue("accueil", () => new acceuilNonAuthentifieCtrl());
    }
  
    loadCarte() {
      this.vue.chargerVue("carte", () => new CarteCtrl());
    }
  }