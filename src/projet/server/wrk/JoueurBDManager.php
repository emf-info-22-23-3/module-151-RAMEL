<?php 
include_once('Connexion.php');

/**
 * Classe JoueurBDManager
 *
 * Cette classe permet de gérer l'accès aux données des joueurs depuis la base de données.
 */
class JoueurBDManager
{
	/**
	 * Fonction permettant la lecture des joueurs.
	 * Cette fonction permet de retourner la liste des joueurs se trouvant dans la liste.
	 *
	 * @return array Liste des objets Joueur
	 */		
	public function readJoueur(){
		$count = 0;
		$liste = array();
		$connection = Connexion::getInstance();
		$query = $connection->selectQuery(
			"SELECT T_Joueur.*, T_Equipe.nom AS equipe, T_Position.position AS position, T_Nationalite.nationalite AS nationalite
			 FROM T_Joueur
			 LEFT JOIN T_Equipe ON T_Joueur.fkEquipe = T_Equipe.PK_Equipe
			 LEFT JOIN T_Position ON T_Joueur.fkPosition = T_Position.PK_Position
			 LEFT JOIN T_Nationalite ON T_Joueur.fkNationalite = T_Nationalite.PK_Nationalite", 
			array());
		foreach($query as $data){
			$joueur = new Joueur($data['PK_Joueur'], $data['nom'], $data['prenom'], $data['dateNaissance'], $data['photo'], $data['description'], $data['position'], $data['equipe'], $data['nationalite']);
			$liste[$count++] = $joueur;
		}	
		return $liste;	
	}

	/**
	 * Fonction permettant de mettre à jour la description d'un joueur.
	 * 
	 * @param int $pk_joueur Identifiant du joueur
	 * @param string $description Description du joueur
	 * @return string Résultat de la mise à jour en XML
	 */
	public function update($pk_joueur, $description) {
    	$query = "UPDATE T_Joueur set description = :description where PK_Joueur = :pk_joueur";
        $params = array(
    	    'pk_joueur' => $pk_joueur,
        	'description' => $description,
        );
        $res = connexion::getInstance()->executeQuery($query, $params);
	    if ($res > 0) {
    	    return '<result>True</result>';
    	} else {
        	return '<result>False</result>';
    	}
	}

	/**
	 * Fonction permettant de retourner la liste des joueurs en XML.
	 *
	 * @return string Liste des joueurs au format XML
	 */
	public function getInXML()
	{
		$listJoueur = $this->readJoueur();
		$result = '<listeJoueur>';
		for($i=0;$i<sizeof($listJoueur);$i++) 
		{
			$result = $result .$listJoueur[$i]->toXML();
		}
		$result = $result . '</listeJoueur>';
		return $result;
	}
}
?>
