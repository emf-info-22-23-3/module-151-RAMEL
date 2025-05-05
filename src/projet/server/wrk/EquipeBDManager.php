<?php 
	include_once('Connexion.php');
        
	class  EquipeBDManager
	{
		/**
		* Fonction permettant la lecture des equipes.
		* Cette fonction permet de retourner la liste des equipes se trouvant dans la liste
		*
		* @return liste de equipe
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
		 * Fonction permettant de mettre à jour la description d'une equipe.
		 * 
		 * @param $pk_equipe : Identifiant de l'équipe
		 * @param $trophe : trophe de l'équipe
		 * @return String : Résultat de la mise à jour
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
		 * Fonction permettant de retourner le PK d'une equipe.
		 * 
		 * @param $nom : nom de l'équipe
		 * @return String : PK de l'équipe
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
		* Fonction permettant de retourner la liste des equipes en XML.
		*
		* @return String. Liste des equipes en XML
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
