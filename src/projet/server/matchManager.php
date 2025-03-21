<?php
// Démarrage de la session
session_start();

// Configuration des en-têtes CORS pour autoriser les requêtes depuis n'importe quelle origine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");

	// Inclusion du gestionnaire de base de données pour les matchs
	include_once('wrk/MatchBDManager.php');
	// Inclusion de la classe MatchDB (probablement une entité représentant un match)
	include_once('beans/MatchDB.php');

	include_once('SessionManager.php');

	// Vérifie si la méthode de requête HTTP est définie
	if (isset($_SERVER['REQUEST_METHOD'])) {
    	// Vérifie si la requête est de type GET
	    if ($_SERVER['REQUEST_METHOD'] == 'GET'){
        	// Crée une instance du gestionnaire de base de données des matchs
        	$matchBD = new MatchBDManager();
        
        	// Récupère les données des matchs au format XML et les affiche
        	echo $matchBD->getInXML();
    	}

		//Gestion de l'ajout d'un joueur
		if ($_SERVER['REQUEST_METHOD'] == 'POST') {
			// Création d'une instance de SessionManager pour gérer les sessions utilisateur
			$session = new SessionManager();

			//Vérifie que l'utilisateur est connecté
			if ($session->isConnected()) {
				$matchBD = new MatchBDManager();
				//vérifie si les variables existent et sont pas nulls
				if (isset($_POST['date']) and isset($_POST['heure']) and isset($_POST['fkEquipeDom']) and isset($_POST['fkEquipeVIS'])) {
					//Vérifie si l'ajout est réussie
					if($matchBD->ajoutMatch(
						$_POST['date'],
						htmlspecialchars($_POST['heure'], ENT_QUOTES, 'utf-8'),
						htmlspecialchars($_POST['fkEquipeDom'], ENT_QUOTES, 'utf-8'),
						htmlspecialchars($_POST['fkEquipeVIS'], ENT_QUOTES, 'utf-8'),
					)){
						http_response_code(200);
						echo '<result>true</result>';
					} else {
						http_response_code(500);
						echo '<result>false</result>';
					}
				} else {
					http_response_code(400);
					echo '<result>Champs invalide</result>';
				}
			} else {
				http_response_code(401);
				echo '<result>Pas connecté</result>';
			}
		}
	}
?>
