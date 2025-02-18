<?php 
	include_once('Connexion.php');
        
	class  PositionBDManager
	{
		/**
		* Fonction permettant la lecture des positions.
		* Cette fonction permet de retourner la liste des positions se trouvant dans la liste
		*
		* @return liste de position
		*/
		public function readPosition()
		{
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery("select * from T_Position", array());
			foreach($query as $data){
				$position = new Position($data['PK_Position'], $data['position']);
				$liste[$count++] = $position;
			}	
			return $liste;	
		}
		
		/**
		* Fonction permettant de retourner la liste des positions en XML.
		*
		* @return String. Liste des positions en XML
		*/
		public function getInXML()
		{
			$listPosition = $this->readPosition();
			$result = '<listePosition>';
			for($i=0;$i<sizeof($listPosition);$i++) 
			{
				$result = $result .$listPosition[$i]->toXML();
			}
			$result = $result . '</listePosition>';
			return $result;
		}
	}
?>