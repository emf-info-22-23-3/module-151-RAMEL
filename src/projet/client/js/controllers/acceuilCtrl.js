class acceuilCtrl {
  constructor() {
    var cmbEquipe = document.getElementById("cmbEquipe");
    var cmbJoueurs = document.getElementById("cmbJoueur");
    var butConnect = document.getElementById("connecter");

    $.getScript("js/beans/Equipe.js");
    $.getScript("js/beans/Joueur.js");
    http.chargerEquipe(this.chargerPaysSuccess, this.gestionErreurEquipe);

    cmbEquipe.addEventListener("change", () => {
        http.chargerJoueur(
            cmbEquipe.value,
            this.chargerJoueurSuccess,
            this.gestionErreurJoueur
        );
    });

    cmbJoueurs.addEventListener("change", this.afficheInfoJoueur.bind(this));

    butConnect.addEventListener("click", () => {
        http.connect(document.getElementById("username").value, document.getElementById("mot de passe").value, this.connectSuccess, this.gestionErreurLogin);
    });
  }

  connectSuccess(data, text, jqXHR) {
    if ($(data).find("result").text() != null) {
        alert("Login ok");
        indexCtrl.loadAuthentifie();
    }
    else {
        alert("Erreur lors du login");
    }

  }

  chargerPaysSuccess(data, text, jqXHR) {
    var cmbEquipe = document.getElementById("cmbEquipe");
    $(data)
        .find("equipe")
        .each(function () {
            var equipe = new Equipe();
            equipe.setNom($(this).find("nom").text());
            equipe.setPk($(this).find("pk_equipe").text());
            cmbEquipe.options[cmbEquipe.options.length] = new Option(
                equipe,
                JSON.stringify(equipe.pk_equipe)
            );
        });
  }

  chargerJoueurSuccess(data, text, jqXHR) {
    var cmbJoueurs = document.getElementById("cmbJoueur");
    cmbJoueurs.options.length = 0;
    $(data).find("joueur").each(function () {
        var joueur = new Joueur();
        joueur.setNom($(this).find("nom").text());
        joueur.setDatenaissance($(this).find("dateNaissance").text());
        joueur.setNbrBut($(this).find("nbrBut").text());
        joueur.setNbrTitre($(this).find("nbrTitre").text());
        joueur.setFkPhoto($(this).find("fk_photo").text());
        joueur.setFkPosition($(this).find("fk_position").text());
        joueur.setSalaire($(this).find("salaire").text());
        joueur.setNumero($(this).find("numero").text());

        cmbJoueurs.options[cmbJoueurs.options.length] = new Option(
            joueur,
            JSON.stringify(joueur)
        );
    });
  }

  gestionErreurEquipe(xhr, status, error) {
    console.error("Erreur lors du chargement des équipes :", status, error);
    alert(
        "Une erreur est survenue lors du chargement des équipes. Veuillez réessayer plus tard."
    );
  }

  gestionErreurJoueur(xhr, status, error) {
    console.error("Erreur lors du chargement des équipes :", status, error);
    alert(
        "Une erreur est survenue lors du chargement des équipes. Veuillez réessayer plus tard."
    );
  }

  gestionErreurLogin(xhr, status, error){
    console.error("Erreur lors de votre login : ", status, error);
    alert("une erreur est survenue lors de votre login");
  }

  afficheInfoJoueur(event) {
    var cmbJoueurs = document.getElementById("cmbJoueur");
    var joueurJson = JSON.parse(cmbJoueurs.value);
    document.getElementById("nom").textContent = joueurJson.nom;
    document.getElementById("dateNaissance").textContent =joueurJson.datenaissance;
    document.getElementById("salaire").textContent = joueurJson.salaire + " CHF";
    document.getElementById("nbrBut").textContent = joueurJson.nbrBut;
    document.getElementById("nbrTitre").textContent = joueurJson.nbrTitre;
    document.getElementById("numero").textContent = joueurJson.numero;
    document.getElementById("position").textContent = joueurJson.fk_position;
    document.getElementById("photo").src = joueurJson.fk_photo;
  }
}