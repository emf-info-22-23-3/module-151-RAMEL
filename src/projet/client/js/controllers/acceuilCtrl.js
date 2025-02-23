class acceuilCtrl {
  constructor(){
    var butConnect = document.getElementById("connexion");
    var butDeconnect = document.getElementById("deconnexion");

    http.chargerMatch(this.chargerMatchSuccess, this.chargerMatchError);
    http.chargerClassement(this.chargerClassementSuccess, this.chargerClassementError);

    butConnect.addEventListener("click", () => {
      http.connect(document.getElementById("username").value, document.getElementById("pwd").value, this.connectSuccess, this.gestionErreurConnect);
    });

    butDeconnect.addEventListener("click", () => {
      http.deconnect(this.deconnectSuccess, this.gestionErreurDeconnect);
    });

    document.getElementById("deconnexion").style.display = "none";
  }

  connectSuccess(data, text, jqXHR) {
    if ($(data).find("result").text() != null) {
        alert("Login ok");
        sessionStorage.setItem("isConnected", "true");
        document.getElementById("deconnexion").style.display = "visible";
        document.getElementById("connexion").style.display = "none";
    }
    else {
        alert("Erreur lors du login");
    }
  }
  
  deconnectSuccess(data, text, jqXHR) {
    if ($(data).find("result").text() != null) {
      sessionStorage.removeItem("isConnected");
      alert("Déconnexion réussie :)");
      indexCtrl.loadNonAuthentifie();
    } else {
      alert("Erreur lors du login");
    }
  }

  chargerMatchSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter d'accumuler d'anciennes données
    $("#contener").empty();

    var compteur = 0;
    // Pour chaque élément <match> dans la réponse
    $(data).find("match").each(function () {
        var today = new Date();
        var formattedDate = today.toISOString().slice(0, 10);
        if($(this).find("date").text() == formattedDate){
          compteur++;
          // Créer une nouvelle ligne HTML pour le match
          var matchRow = $(
            '<div class="match-row-acceuil">' +
                '<span class="equipeDOM"></span>' +
                  '<span class="goalDom"></span>' +
                '<span class="heure"></span>' +
                '<span class="goalVisit"></span>' +
                '<span class="equipeVIS"></span>' +
            '</div>'
          );

          // Remplir la ligne avec les données du match
          matchRow.find(".equipeDOM").text($(this).find("fkEquipeDom").text());
          matchRow.find(".goalDom").text($(this).find("goalDom").text());
          matchRow.find(".heure").text($(this).find("heure").text());
          matchRow.find(".goalVisit").text($(this).find("goalVisit").text());
          matchRow.find(".equipeVIS").text($(this).find("fkEquipeVIS").text());
        }
        // Ajouter la ligne au conteneur principal
        $("#contener").append(matchRow);
    });

    if(compteur == 0){
      var pasMatch = $(
        '<div class="no-match-row-acceuil">Pas de match ce jour</div>'
      );
      $("#contener").append(pasMatch);
    }
  }

  chargerClassementSuccess(data, text, jqXHR) {   
    // Vider le conteneur pour éviter les doublons
    $("#classement").empty();

    // Pour chaque joueur présent dans le XML
    $(data).find("classement").each(function () {
      // Créer une carte en utilisant un template HTML
      var tableau = $(
        '<tr>' +
          '<td class="equipe"></td>' +
          '<td class="GP"></td>' +
          '<td class="G"></td>' +
          '<td class="PTS"></td>' +
          '<td class="PGP"></td>' +
        '</tr>'
      );

      // Remplir la carte avec les données du joueur
      tableau.find(".equipe").text($(this).find("nom").text());
      tableau.find(".GP").text($(this).find("GP").text());
      tableau.find(".G").text($(this).find("G").text());
      tableau.find(".PTS").text($(this).find("PTS").text());
      let nombre = $(this).find("PTS").text()/$(this).find("GP").text();
      let formate = nombre.toFixed(3);
      tableau.find(".PGP").text(formate);

      // Ajouter la carte générée dans le conteneur
      $("#classement").append(tableau);
    });
  }

  chargerClassementError(request, status, error) {
    console.error(error);
      alert("Erreur lors de la lecture du classement: " + error);
  }

  chargerMatchError(request, status, error) {
    console.error(error);
      alert("Erreur lors de la lecture des matchs: " + error);
  }

  gestionErreurConnect(xhr, status, error) {
    console.error("Erreur lors de votre connexion : ", status, error);
    alert("une erreur est survenue lors de votre connexion");
  }

  gestionErreurDeconnect(xhr, status, error) {
    console.error("Erreur lors de votre déconnexion : ", status, error);
    alert("une erreur est survenue lors de votre déconnexion");
  }
}