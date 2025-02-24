<?php
session_start();
require_once("SessionManager.php");
require_once("wrk/LoginBDManager.php");

$sessionManager = new SessionManager();


if (isset($_SERVER['REQUEST_METHOD'])) {

    

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['action'] == 'connect') {
        if (isset($_POST['login']) && isset($_POST['password'])) {
            $username = $_POST['login'];
            $password = $_POST['password'];
            $loginBD = new LoginBDManager();

            $result = $loginBD->checkLogin($username);
            if ($result != null) {
                if (password_verify($password, $result['password'])) {

                    $sessionManager->openSession($username);
                    echo '<result>true</result>';
                } else {
                    echo '<result>Mot de passe incorrect </result>';
                }
            } else {
                echo '<result>false</result>';
            }
        }
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['action'] == 'deconnect') {
        $sessionManager->destroySession();
        echo '<result>true</result>';
    }
}