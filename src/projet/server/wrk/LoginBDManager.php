
<?php
include_once('Connexion.php');
class LoginBDManager
{
    /**
     * Fonction permettant de vérifier si le login et le mot de passe sont corrects.
     * 
     * @param String $username. Login de l'utilisateur
     * @return String. Mot de passe de l'utilisateur
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
