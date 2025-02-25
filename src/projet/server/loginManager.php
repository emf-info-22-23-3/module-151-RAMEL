<?php
// Démarrage de la session
session_start();

// Configuration des en-têtes CORS pour autoriser les requêtes depuis n'importe quelle origine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");

// Inclusion des fichiers nécessaires pour la gestion des sessions et des connexions
require_once("SessionManager.php");
require_once("wrk/LoginBDManager.php");

// Initialisation du gestionnaire de session
$sessionManager = new SessionManager();

// Vérifie si la méthode de requête HTTP est définie
if (isset($_SERVER['REQUEST_METHOD'])) {
    
    // Gestion de la connexion
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['action'] == 'connect') {
        // Vérifie si les champs login et password sont présents
        if (isset($_POST['login']) && isset($_POST['password'])) {
            $username = $_POST['login'];
            $password = $_POST['password'];
            
            // Création de l'instance du gestionnaire de connexion
            $loginBD = new LoginBDManager();
            
            // Vérifie si l'utilisateur existe dans la base de données
            $result = $loginBD->checkLogin($username);
            
            if ($result != null) {
                // Vérifie si le mot de passe hashé correspond
                if (password_verify($password, $result['password'])) {
                    // Ouvre la session si les identifiants sont corrects
                    $sessionManager->openSession($username);
                    echo '<result>true</result>';
                } else {
                    // Mot de passe incorrect
                    echo '<result>Mot de passe incorrect</result>';
                }
            } else {
                // Utilisateur non trouvé
                echo '<result>false</result>';
            }
        }
    }

    // Gestion de la déconnexion
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['action'] == 'deconnect') {
        // Détruit la session en cours
        $sessionManager->destroySession();
        echo '<result>true</result>';
    }
}
?>
