<?php
session_start();
class sessionManager {
    // Démarrer la session si elle n'est pas déjà démarrée
    public function openSession($user)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }

        // stocker les informations de l'utilisateur dans la session
        $_SESSION['user'] = $user;
    }

    public function destroySession()
    {
        // détruire la session et toutes ses variables
        session_unset();
        session_destroy();
    }

    // Vérifier si l'utilisateur est connecté
    public function isConnected()
    {
        return isset($_SESSION['user']);
    }


    public function currentUser()
    {
        // Si un utilisateur est connecté, on retourne ses informations
        return isset($_SESSION['user']);
    }
}
?>