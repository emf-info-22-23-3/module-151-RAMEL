<?php
class DB {
    private $bdd;

    public function __construct(){
        $this->bdd = new PDO('mysql:host=database;dbname=hockey_stats', 'root', 'root');
    }

    public function getJoueurs($idEquipe)
    {
        $reponse = $this->bdd->prepare('SELECT * FROM t_joueur WHERE FK_equipe =' . $idEquipe);
        $reponse->execute();
        $joueurs = array();
        while ($joueur = $reponse->fetch()) {
            array_push($joueurs, new Joueurs($joueur['PK_joueur'], $joueur['Nom'], $joueur['FK_equipe']), $joueur['Points']);
        }
        $reponse->closeCursor();
        return $joueurs;
    }
    public function getEquipes()
    {
        $reponse = $this->bdd->prepare('SELECT * FROM t_equipe');
        $reponse->execute();
        $equipes = array();
        while ($equipe = $reponse->fetch()) {
            array_push($equipes, new Equipes($equipe['PK_equipe'], $equipe['Nom']));
        }
        $reponse->closeCursor();
        return $equipes;
    }
}	
?>
