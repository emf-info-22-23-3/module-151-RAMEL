class MatchCtrl {
  constructor() {
    http.chargerMatch(this.chargerMatchSuccess, this.chargerMatchError);

    this.checkLogin();

    http.chargerEquipe(this.chargerEquipeSuccess, this.chargerEquipeError);

    // Définir la valeur de l'élément input de type date avec la date du jour
    var today = new Date();
    var formattedDate = today.toISOString().slice(0, 10);
    document.getElementById("dateInput").value = formattedDate;

    var ajouterMatch = document.getElementById("enregistrer");
    ajouterMatch.addEventListener("click", function () {
      if (document.getElementById("dateInput").value > formattedDate) {
        http.ajouterMatch(
          document.getElementById("dateInput").value,
          document.getElementById("heure").value,
          document.getElementById("equipeDOM").value,
          document.getElementById("equipeVIS").value,
          this.afficheAjoutSuccess,
          this.afficheAjoutErreur
        );
      } else {
        this.afficheAjoutErreur;
      }
    });

    var fkEquipeDomicil = document.getElementById("equipeDOM");
    fkEquipeDomicil.addEventListener("click", function () {
      http.getPKEquipe(
        document.getElementById("equipeDOM").value,
        this.afficheGetPKDOMSuccess,
        this.afficheGetPKErreur
      );
    });

    var fkEquipeVisiteur = document.getElementById("equipeVIS");
    fkEquipeVisiteur.addEventListener("click", function () {
      http.getPKEquipe(
        document.getElementById("equipeVIS").value,
        this.afficheGetPKVISSuccess,
        this.afficheGetPKErreur
      );
    });
  }

  checkLogin() {
    if (sessionStorage.getItem("isConnected") === "true") {
      console.log("connecter");
      document.getElementById("ajouter").style.display = "block";
    } else {
      console.log("non-connecter");
      document.getElementById("ajouter").style.display = "none";
    }
  }

  chargerMatchSuccess(data, text, jqXHR) {
    // Vider le conteneur pour éviter d'accumuler d'anciennes données
    $("#contener").empty();

    // Pour chaque élément <match> dans la réponse
    $(data)
      .find("match")
      .each(function () {
        // Créer une nouvelle ligne HTML pour le match
        var matchRow = $(
          '<div class="match-row">' +
            '<span class="equipeDOM"></span>' +
            '<span class="goalDom"></span>' +
            '<span class="date"></span>' +
            '<span class="heure"></span>' +
            '<span class="goalVisit"></span>' +
            '<span class="equipeVIS"></span>' +
            "</div>"
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

  chargerEquipeSuccess(data, text, jqXHR) {
    $("#equipeDOM").empty();
    $("#equipeVIS").empty();

    // Pour chaque equipe présent dans le XML
    $(data)
      .find("equipe")
      .each(function () {
        var nomEquipe = $(this).find("nom").text();
        var optionDOM = $("<option></option>").text(nomEquipe).val(nomEquipe);
        var optionVIS = $("<option></option>").text(nomEquipe).val(nomEquipe);
        $("#equipeDOM").append(optionDOM);
        $("#equipeVIS").append(optionVIS);
      });
  }

  afficheGetPKDOMSuccess(data, text, jqXHR) {
    console.log("test");
    document.getElementById("postIdEquipeDom").value = $(data).find("pk_equipe").val();
  }

  afficheGetPKVISSuccess(data, text, jqXHR) {
    console.log("test");
    document.getElementById("postIdEquipeVis").value = $(data).find("pk_equipe").val();
  }

  afficheAjoutSuccess(data, text, jqXHR) {
    if ($(data).text() == "true") {
      alert("ajout réussie");
    } else {
      alert("Aucun ajout réaliser ou donnée invalide");
    }
  }

  afficheAjoutErreur(request, status, error) {
    alert("Erreur lors de l'ajout du match: " + error);
  }

  chargerMatchError(request, status, error) {
    console.error(error);
    alert("Erreur lors de la lecture des matchs: " + error);
  }

  chargerEquipeError(request, status, error) {
    console.error(error);
    alert("Erreur lors de la lecture des equipes: " + error);
  }

  afficheGetPKErreur(request, status, error) {
    console.error(error);
    alert("Erreur lors de récupération de la PK: " + error);
  }
}
