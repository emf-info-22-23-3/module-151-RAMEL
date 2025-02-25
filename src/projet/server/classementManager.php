<?php
// Configuration des en-têtes CORS pour autoriser les requêtes depuis n'importe quelle origine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");

// Inclusion des fichiers nécessaires pour la gestion des classements
include_once('wrk/ClassementBDManager.php');
include_once('beans/Classement.php');

// Vérifie si la méthode de requête HTTP est définie
if (isset($_SERVER['REQUEST_METHOD'])) {

    // Gestion de la récupération des classements (GET)
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        // Crée une instance du gestionnaire de base de données des classements
        $classementBD = new ClassementBDManager();
        
        // Récupère les données des classements au format XML et les affiche
        echo $classementBD->getInXML();
    }
}
?>
