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
?>