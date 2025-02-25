<?php
// Configuration des en-têtes CORS pour autoriser les requêtes depuis n'importe quelle origine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");

	// Inclusion du gestionnaire de base de données pour les matchs
	include_once('wrk/MatchBDManager.php');
	// Inclusion de la classe MatchDB (probablement une entité représentant un match)
	include_once('beans/MatchDB.php');

	// Vérifie si la méthode de requête HTTP est définie
	if (isset($_SERVER['REQUEST_METHOD']))
	{
    	// Vérifie si la requête est de type GET
	    if ($_SERVER['REQUEST_METHOD'] == 'GET')
    	{
        	// Crée une instance du gestionnaire de base de données des matchs
        	$matchBD = new MatchBDManager();
        
        	// Récupère les données des matchs au format XML et les affiche
        	echo $matchBD->getInXML();
    	}
	}
?>
