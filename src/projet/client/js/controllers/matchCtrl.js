class matchCtrl {
    constructor(){
      http.chargerMatch(this.chargerMatchSuccess, this.chargerMatchError);
    }

    chargerMatchSuccess(data, text, jqXHR) {   

    }

    chargerEqchargerMatchErroruipeError(request, status, error) {
        alert("Erreur lors de la lecture des matchs: " + error);
    }
}