class matchCtrl {
    constructor(){
      http.chargerMatch(this.chargerMatchSuccess, this.chargerMatchError);
    }

    chargerMatchSuccess(data, text, jqXHR) {   
      $(data).find("match").each(function () {
        document.getElementById("equipeDOM").textContent = $(this).find("fkEquipeDom").text();
        document.getElementById("heure").textContent = $(this).find("heure").text();
        document.getElementById("equipeVIS").textContent = $(this).find("fkEquipeVIS").text();
    });
    }

    chargerEqchargerMatchErroruipeError(request, status, error) {
        alert("Erreur lors de la lecture des matchs: " + error);
    }
}