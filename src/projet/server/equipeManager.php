<?php
// Démarrage de la session
session_start();

// Configuration des en-têtes CORS pour autoriser les requêtes depuis n'importe quelle origine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");

// Inclusion des fichiers nécessaires pour la gestion des équipes
include_once('wrk/EquipeBDManager.php');
include_once('beans/Equipe.php');
include_once('SessionManager.php');

// Vérifie si la méthode de requête HTTP est définie
if (isset($_SERVER['REQUEST_METHOD'])) {

    // Gestion de la récupération des équipes (GET)
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        // Crée une instance du gestionnaire de base de données des équipes
        $equipeBD = new EquipeBDManager();
        
        // Récupère les données des équipes au format XML et les affiche
        echo $equipeBD->getInXML();
    }
    $session = new SessionManager();

    // Gestion de la mise à jour des trophées de l'équipe (PUT)
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

        if ($session->isConnected()) {
            // Lit les données brutes de la requête et les analyse en tableau associatif
            parse_str(file_get_contents("php://input"), $vars);

            // Vérifie si les paramètres nécessaires sont présents
            if (isset($vars['pk_equipe']) && isset($vars['trophe'])) {

                $equipeBD = new EquipeBDManager();
            
                // Met à jour les informations de l'équipe (après avoir nettoyé les données)
                echo $equipeBD->update(
                    htmlspecialchars($vars['pk_equipe'], ENT_QUOTES, 'utf-8'),
                    htmlspecialchars($vars['trophe'], ENT_QUOTES, 'utf-8')
                );
            }
        } else {
			http_response_code(401);
			echo '<result>Pas connecté</result>';
		}
    }
}
?>
