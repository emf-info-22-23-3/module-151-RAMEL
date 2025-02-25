<?php
class SessionManager {
    // Ouvrir une session pour un utilisateur
    public function openSession($user)
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        $_SESSION['user'] = $user;
    }

    // Fermer la session de l'utilisateur
    public function destroySession()
    {
        session_unset();
        session_destroy();
    }

    // Vérifier si un utilisateur est connecté
    public function isConnected()
    {
        return isset($_SESSION['user']);
    }


    // Récupérer les informations de l'utilisateur connecté
    public function currentUser()
    {
        return isset($_SESSION['user']);
    }
}
?>