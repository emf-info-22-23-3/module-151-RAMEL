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
			$query = $connection->selectQuery("SELECT T_Match.*, equipeDOM.nom AS equipeDOM, equipeVIS.nom AS equipeVIS FROM T_Match 
			LEFT JOIN T_Equipe AS equipeDOM ON T_Match.fkEquipeDOM = equipeDOM.PK_Equipe 
			LEFT JOIN T_Equipe AS equipeVIS ON T_Match.fkEquipeVIS = equipeVIS.PK_Equipe", array());
			foreach($query as $data){
				$match = new MatchDB($data['PK_Match'], $data['date'], $data['heure'], $data['goalDom'], $data['goalVisit'], $data['equipeDOM'], $data['equipeVIS']);
				$liste[$count++] = $match;
			}	
			return $liste;	
		}

		public function ajoutMatch($date, $heure, $fkEquipeDom, $fkEquipeVIS) {
			$query = "INSERT INTO T_Match (date, heure, fkEquipeDOM, fkEquipeVIS) 
        	values(:date, :heure, :fkEquipeDOM, :fkEquipeVIS)";
        	$params = array(
            	'date' => $date,
            	'heure' => $heure,
            	'fkEquipeDom' => $fkEquipeDom,
            	'fkEquipeVIS' => $fkEquipeVIS,
        	);
        	$res = connexion::getInstance()->ExecuteQuery($query, $params);
        	if ($res > 0) {
            	return true;
        	} else {
        	    return false;
        	}
		}
		
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