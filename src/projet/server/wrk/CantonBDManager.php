<?php 
	include_once('Connexion.php');
	include_once('beans/Canton.php');
        
	class  CantonBDManager
	{
		/**
		* Fonction permettant la lecture des canton.
		* Cette fonction permet de retourner la liste des canton se trouvant dans la liste
		*
		* @return liste de Pays
		*/
		public function readPays()
		{
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery("select * from T_Canton order by Nom", array());
			foreach($query as $data){
				$canton = new Canton($data['PK_Canton'], $data['nom'], $data['abreviation']);
				$liste[$count++] = $pays;
			}	
			return $liste;	
		}
		
		/**
		* Fonction permettant de retourner la liste des pays en XML.
		*
		* @return String. Liste des pays en XML
		*/
		public function getInXML()
		{
			$listPays = $this->readPays();
			$result = '<listePays>';
			for($i=0;$i<sizeof($listPays);$i++) 
			{
				$result = $result .$listPays[$i]->toXML();
			}
			$result = $result . '</listePays>';
			return $result;
		}
	}
?>