<?php 
	include_once('Connexion.php');
        
	class  CantonBDManager
	{
		/**
		* Fonction permettant la lecture des cantons.
		* Cette fonction permet de retourner la liste des cantons se trouvant dans la liste
		*
		* @return liste de canton
		*/
		public function readCanton()
		{
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery("select * from T_Canton", array());
			foreach($query as $data){
				$canton = new Canton($data['PK_Canton'], $data['nom'], $data['abreviation']);
				$liste[$count++] = $canton;
			}	
			return $liste;	
		}
		
		/**
		* Fonction permettant de retourner la liste des cantons en XML.
		*
		* @return String. Liste des cantons en XML
		*/
		public function getInXML()
		{
			$listCanton = $this->readCanton();
			$result = '<listeCanton>';
			for($i=0;$i<sizeof($listCanton);$i++) 
			{
				$result = $result .$listCanton[$i]->toXML();
			}
			$result = $result . '</listeCanton>';
			return $result;
		}
	}
?>