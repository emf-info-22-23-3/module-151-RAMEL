<?php 
	include_once('Connexion.php');        
	class  MatchBDManager
	{
		/**
		* Fonction permettant la lecture des matchs.
		* Cette fonction permet de retourner la liste des matchs se trouvant dans la liste
		*
		* @return liste de match
		*/
		public function readMatch() {
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery("select * from T_Match", array());
			foreach($query as $data){
                print_r($data);
				$match = new MatchDB($data['PK_Match'], $data['date'], $data['heure'], $data['goalDom'], $data['goalVisit'], $data['fkEquipeDom'], $data['fkEquipeVIS']);
				$liste[$count++] = $match;
			}	
			return $liste;	
		}

		/**public function readMatch() {
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery("SELECT T_Match.*,  T_EquipeDOM.nom AS equipeDom, T_EquipeVIS.nom AS equipeVIS from T_Match
			LEFT JOIN T_Equipe T_EquipeDOM ON T_Match.fkEquipeDom = T_Equipe.PK_Equipe
			LEFT JOIN T_Equipe T_EquipeVIS ON T_Match.fkEquipeVIS = T_Equipe.PK_Equipe", array());
			foreach($query as $data){
                print_r($data);
				$match = new MatchDB($data['PK_Match'], $data['date'], $data['heure'], $data['goalDom'], $data['goalVisit'], $data['equipeDom'], $data['equipeVIS']);
				$liste[$count++] = $match;
			}	
			return $liste;	
		}**/
		
		/**
		* Fonction permettant de retourner la liste des matchs en XML.
		*
		* @return String. Liste des matchs en XML
		*/
		public function getInXML()
		{
			$listMatch = $this->readMatch();
			$result = '<listeMatch>';
			for($i=0;$i<sizeof($listMatch);$i++) 
			{
				$result = $result .$listMatch[$i]->toXML();
			}
			$result = $result . '</listeMatch>';
			return $result;
		}
	}
?>