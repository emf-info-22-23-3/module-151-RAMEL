<?php
// Configuration des en-têtes CORS pour autoriser les requêtes depuis n'importe quelle origine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");  

// Inclusion des fichiers nécessaires pour la gestion des joueurs
include_once('SessionManager.php');
include_once('wrk/JoueurBDManager.php');
include_once('beans/Joueur.php');

// Vérifie si la méthode de requête HTTP est définie
if (isset($_SERVER['REQUEST_METHOD'])) {

    // Gestion de la récupération des joueurs (GET)
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        // Crée une instance du gestionnaire de base de données des joueurs
        $joueurBD = new JoueurBDManager();
        
        // Récupère les données des joueurs au format XML et les affiche
        echo $joueurBD->getInXML();
    }

    // Gestion de la mise à jour des joueurs (PUT)
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $session = new SessionManager();

        if ($session->isConnected()) {
            // Lit les données brutes de la requête et les convertit en tableau associatif
            parse_str(file_get_contents("php://input"), $vars);
        
            // Vérifie si les paramètres nécessaires sont présents
            if (isset($vars['pk_joueur']) && isset($vars['description'])) {
    
                // Crée une instance du gestionnaire de base de données des joueurs
                $joueurBD = new JoueurBDManager();

                // Met à jour le joueur avec les données fournies (après les avoir sécurisées)
                echo $joueurBD->update(
                    htmlspecialchars($vars['pk_joueur'], ENT_QUOTES, 'utf-8'),
                    htmlspecialchars($vars['description'], ENT_QUOTES, 'utf-8')
                );
            }
        } else {
			http_response_code(401);
			echo '<result>Pas connecté</result>';
		}
    }
}
?>
