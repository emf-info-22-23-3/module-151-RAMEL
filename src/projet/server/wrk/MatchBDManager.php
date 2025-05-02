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
			LEFT JOIN T_Equipe AS equipeVIS ON T_Match.fkEquipeVIS = equipeVIS.PK_Equipe ORDER BY date", array());
			foreach($query as $data){
				$match = new MatchDB($data['PK_Match'], $data['date'], $data['heure'], $data['goalDom'], $data['goalVisit'], $data['equipeDOM'], $data['equipeVIS'], $data['fkEquipeDOM'], $data['fkEquipeVIS']);
				$liste[$count++] = $match;
			}	
			return $liste;	
		}

		/**
		 * Fonction permettant l'ajout d'un match.
		 * 
		 * @param $date : date du match
		 * @param $heure : heure du match
		 * @param $fkEquipeDOM : PK de l'équipe domicile
		 * @param $fkEquipeVIS : PK de l'équipe visiteur
		 * @return String : Résultat de la mise à jour
		 */
		public function ajoutMatch($date, $heure, $fkEquipeDOM, $fkEquipeVIS) {
			$query = "INSERT INTO T_Match (date, heure, fkEquipeDOM, fkEquipeVIS) 
        	values(:date, :heure, :fkEquipeDOM, :fkEquipeVIS)";
        	$params = array(
            	':date' => $date,
            	':heure' => $heure,
            	':fkEquipeDOM' => $fkEquipeDOM,
            	':fkEquipeVIS' => $fkEquipeVIS,
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