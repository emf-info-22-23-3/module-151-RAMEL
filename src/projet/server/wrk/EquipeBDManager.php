<?php 
	include_once('Connexion.php');
        
	/**
	 * Classe EquipeBDManager
	 * 
	 * Cette classe permet d'effectuer des opérations CRUD sur les équipes
	 * dans la base de données, telles que la lecture, la mise à jour,
	 * ou la génération de résultats en XML.
	 */
	class EquipeBDManager
	{
		/**
		 * Fonction permettant la lecture des équipes.
		 * Cette fonction permet de retourner la liste des équipes se trouvant dans la liste.
		 *
		 * @return array Liste d'objets Equipe
		 */
		public function readEquipe()
		{
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery(
				"SELECT T_Equipe.*, T_Canton.nom AS canton
				 FROM T_Equipe
				 LEFT JOIN T_Canton ON T_Equipe.fkCanton = T_Canton.PK_Canton", 
				array());
			foreach($query as $data){
				$equipe = new Equipe($data['PK_Equipe'], $data['nom'], $data['abreviation'], $data['dateCreation'], $data['photo'], $data['trophe'], $data['canton']);
				$liste[$count++] = $equipe;
			}	
			return $liste;	
		}

		/**
		 * Fonction permettant de mettre à jour la description d'une équipe.
		 * 
		 * @param int $pk_equipe Identifiant de l'équipe
		 * @param string $trophe Trophée de l'équipe
		 * @return string Résultat de la mise à jour (en XML)
		 */
		public function update($pk_equipe, $trophe) {
        	$query = "UPDATE T_Equipe set trophe = :trophe where PK_Equipe = :pk_equipe";
	        $params = array(
    	        'pk_equipe' => $pk_equipe,
        	    'trophe' => $trophe,
        	);
	        $res = connexion::getInstance()->executeQuery($query, $params);
    	    if ($res > 0) {
        	    return '<result>True</result>';
        	} else {
            	return '<result>False</result>';
        	}
    	}

		/**
		 * Fonction permettant de retourner le PK d'une équipe.
		 * 
		 * @param string $nom Nom de l'équipe
		 * @return string PK de l'équipe ou "False" en XML
		 */
		public function getPK($nom) {
        	$query = "SELECT PK_Equipe FROM T_Equipe WHERE nom = :nom";
	        $params = array(
		        'nom' => $nom,
			);
	        $res = connexion::getInstance()->selectSingleQuery($query, $params);
		    if ($res > 0) {
      			return '<pk_equipe>'.$res['PK_Equipe'].'</pk_equipe>';
			} else {
				return '<pk_equipe>False</pk_equipe>';
			}
    	}

		/**
		 * Fonction permettant de retourner la liste des équipes en XML.
		 *
		 * @return string Liste des équipes au format XML
		 */
		public function getInXML()
		{
			$listEquipe = $this->readEquipe();
			$result = '<listeEquipe>';
			for($i=0;$i<sizeof($listEquipe);$i++) 
			{
				$result = $result .$listEquipe[$i]->toXML();
			}
			$result = $result . '</listeEquipe>';
			return $result;
		}
	}
