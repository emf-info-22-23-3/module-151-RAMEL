<?php
include_once('Connexion.php');

/**
 * Classe LoginBDManager
 *
 * Cette classe permet de gérer les opérations de connexion liées aux utilisateurs.
 */
class LoginBDManager
{
    /**
     * Fonction permettant de vérifier si le login et le mot de passe sont corrects.
     * Elle récupère le mot de passe associé à un nom d'utilisateur donné.
     * 
     * @param string $username Login de l'utilisateur
     * @return array|null Mot de passe de l'utilisateur (sous forme de tableau associatif), ou null si non trouvé
     */
    function checkLogin($username) {
        $result = null;
        $requete = "SELECT password from T_Utilisateur where login = :username";
        $params = array('username' => $username);
        $data = Connexion::getInstance()->selectSingleQuery($requete, $params);
        if (count($data) > 0) {
            $result = $data;
        }
        return $result;
    }
}
