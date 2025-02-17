class acceuilCtrl {
    constructor() {
      http.equipe((data) => this.Select(data));
      
      $("#nom").change(() => {
        http.equipe((data) => this.ValeurEquipe(data));
      });
      $("#nom").change(() => {
        http.imageEquipe((data) => this.ImageEquipe(data));
      });
  
      $("#carte").click(() => {
        this.carte();
      });
  
      $("#match").click(() => {
        this.Match();
      });
    }
  
    Select(data) {
      data.forEach((nom) => {
        let equipe = document.createElement("option");
        equipe.text = `${nom.equipe}`;
        equipe.value = `${nom.pkequipe}`
        document.getElementById("nom").appendChild(equipe);
      });
      http.equipe((data) => this.ValeurEquipe(data));
      http.imageEquipe((data) => this.ImageEquipe(data));
    }
  
    ValeurEquipe(data) {
      let select = document.getElementById("nom");
      let valeur = select.options[select.selectedIndex].value;
  
      data.forEach((nom) => {
        if (`${nom.pkequipe}` == valeur) {
          document.getElementById("creation").innerText = `${nom.datefondation}`;
          document.getElementById("patinoire").innerText = `${nom.stade}`;
        }
      });
    }
  
    ImageEquipe(data) {
      let select = document.getElementById("nom");
      let valeur = select.options[select.selectedIndex].value;
  
      data.forEach((nom) => {
        if (`${nom.fkEquipe}` == valeur) {
          document.getElementById("image").src = `${nom.coordonneeImage}`;
        }
      });
    }
  
    carte() {
      indexCtrl.loadCarte();
    }
  
    Match() {
      let select = document.getElementById("nom");
      let valeur = select.options[select.selectedIndex].value;
      let nom = select.options[select.selectedIndex].text;
      console.log(valeur)
      indexCtrl.loadMatch(valeur, nom);
    }
  }
  