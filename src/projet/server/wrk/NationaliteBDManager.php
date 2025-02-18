<?php 
	include_once('Connexion.php');
        
	class  NationaliteBDManager
	{
		/**
		* Fonction permettant la lecture des nationalites.
		* Cette fonction permet de retourner la liste des nationalites se trouvant dans la liste
		*
		* @return liste de nationalite
		*/
		public function readNationalite()
		{
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery("select * from T_Nationalite", array());
			foreach($query as $data){
				$nationalite = new Nationalite($data['PK_Nationalite'], $data['nationalite']);
				$liste[$count++] = $nationalite;
			}	
			return $liste;	
		}
		
		/**
		* Fonction permettant de retourner la liste des Nationalites en XML.
		*
		* @return String. Liste des nationalites en XML
		*/
		public function getInXML()
		{
			$listNationalite = $this->readNationalite();
			$result = '<listeNationalite>';
			for($i=0;$i<sizeof($listNationalite);$i++) 
			{
				$result = $result .$listNationalite[$i]->toXML();
			}
			$result = $result . '</listeNationalite>';
			return $result;
		}
	}
?>