<?php
include_once('Connexion.php');

/**
 * ClassementBDManager
 *
 * Classe permettant la gestion du classement des équipes via la base de données.
 * Elle permet notamment de récupérer les équipes triées par points, ainsi que de
 * générer une représentation XML de ces équipes.
 */
class ClassementBDManager
{
    /**
     * Récupère la liste des équipes depuis la base de données.
     * Les équipes sont triées par nombre de points décroissant, puis par nombre de victoires.
     *
     * @return Classement[] Liste des objets Classement représentant les équipes.
     */
    public function readEquipe()
    {
        $count = 0;
        $liste = array();
        $connection = Connexion::getInstance();
        $query = $connection->selectQuery(
            "SELECT *
             FROM T_Equipe
             ORDER BY PTS DESC, G",
            array()
        );

        foreach ($query as $data) {
            $classement = new Classement(
                $data['PK_Equipe'],
                $data['nom'],
                $data['GP'],
                $data['G'],
                $data['PTS']
            );
            $liste[$count++] = $classement;
        }

        return $liste;
    }

    /**
     * Génère une représentation XML de la liste des équipes.
     *
     * @return string Chaîne XML contenant les équipes.
     */
    public function getInXML()
    {
        $listEquipe = $this->readEquipe();
        $result = '<listeClassement>';

        for ($i = 0; $i < sizeof($listEquipe); $i++) {
            $result .= $listEquipe[$i]->toXML();
        }

        $result .= '</listeClassement>';
        return $result;
    }
}
?>
