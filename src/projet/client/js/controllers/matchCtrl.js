class matchCtrl {
    constructor(){
      http.chargerMatch(this.chargerMatchSuccess, this.chargerMatchError);
    }

    chargerMatchSuccess(data, text, jqXHR) {
      // Vider le conteneur pour éviter d'accumuler d'anciennes données
      $("#contener").empty();
  
      // Pour chaque élément <match> dans la réponse
      $(data).find("match").each(function () {
          // Créer une nouvelle ligne HTML pour le match
          var matchRow = $(
              '<div class="match-row">' +
                  '<span class="equipeDOM"></span>' +
                  '<span class="goalDom"></span>' +
                  '<span class="date"></span>' +
                  '<span class="heure"></span>' +
                  '<span class="goalVisit"></span>' +
                  '<span class="equipeVIS"></span>' +
              '</div>'
          );
  
          // Remplir la ligne avec les données du match
          matchRow.find(".equipeDOM").text($(this).find("fkEquipeDom").text());
          matchRow.find(".goalDom").text($(this).find("goalDom").text());
          matchRow.find(".date").text($(this).find("date").text());
          matchRow.find(".heure").text($(this).find("heure").text());
          matchRow.find(".goalVisit").text($(this).find("goalVisit").text());
          matchRow.find(".equipeVIS").text($(this).find("fkEquipeVIS").text());
  
          // Ajouter la ligne au conteneur principal
          $("#contener").append(matchRow);
      });
  }

    chargerMatchError(request, status, error) {
      console.error(error);
        alert("Erreur lors de la lecture des matchs: " + error);
    }
}