/*
 * Contrôleur de la vue "index.html"
 *
 * @author Olivier Neuhaus
 * @version 1.0 / 20-SEP-2013
 */

/**
 * Méthode appelée lors du retour avec succès du résultat des équipes
 * @param {type} data
 * @param {type} text
 * @param {type} jqXHR
 */
function chargerTeamSuccess(data, text, jqXHR) {
	// Appelé lorsque la liste des équipes est reçue
    var cmbEquipes = document.getElementById("cmbEquipes");
    cmbEquipes.options.length = 0;
    $(data).find("equipe").each(function() {
        var equipe = new Equipe();
        equipe.setPk($(this).find("id").text());
        equipe.setNom($(this).find("nom").text());
        cmbEquipes.options[cmbEquipes.options.length] = new Option(equipe, JSON.stringify(equipe));
    });
}

/**
 * Méthode appelée lors du retour avec succès du résultat des joueurs
 * @param {type} data
 * @param {type} text
 * @param {type} jqXHR
 */
function chargerPlayerSuccess(data, text, jqXHR) {
	// Appelé lorsque la liste des joueurs est reçue
    var cmbJoueurs = document.getElementById("cmbJoueurs");
    cmbJoueurs.options.length = 0;
    $(data).find("joueur").each(function() {
        var joueur = new Joueur();
        joueur.setNom($(this).find("nom").text())
        joueur.setPoints($(this).find("points").text())
	    cmbJoueurs.options[cmbJoueurs.options.length] = new Option(joueur, JSON.stringify(joueur));
    });
}

/**
 * Méthode appelée en cas d'erreur lors de la lecture du webservice
 * @param {type} data
 * @param {type} text
 * @param {type} jqXHR
 */
function chargerTeamError(request, status, error) {
    alert("erreur : " + error + ", request: " + request + ", status: " + status);
}

