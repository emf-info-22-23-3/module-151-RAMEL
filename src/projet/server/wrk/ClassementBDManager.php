<?php 
	include_once('Connexion.php');
        
	class  ClassementBDManager {
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
				"SELECT *
				 FROM T_Equipe
				 ORDER BY PTS DESC", 
				array());
			foreach($query as $data){
				$classement = new Classement($data['PK_Equipe'], $data['nom'], $data['GP'], $data['G'], $data['PTS'], $data['PGP']);
				$liste[$count++] = $classement;
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
			$result = '<listeClassement>';
			for($i=0;$i<sizeof($listEquipe);$i++) 
			{
				$result = $result .$listEquipe[$i]->toXML();
			}
			$result = $result . '</listeClassement>';
			return $result;
		}
	}
?>