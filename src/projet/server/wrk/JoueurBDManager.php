<?php 
	include_once('Connexion.php');
        
	class  JoueurBDManager
	{
		/**
		* Fonction permettant la lecture des joueurs.
		* Cette fonction permet de retourner la liste des joueurs se trouvant dans la liste
		*
		* @return liste de joueur
		*/		
		public function readJoueur()
		{
			$count = 0;
			$liste = array();
			$connection = Connexion::getInstance();
			$query = $connection->selectQuery(
				"SELECT T_Joueur.*, T_Equipe.nom AS equipe, T_Position.position AS position, T_Nationalite.nationalite AS nationalite
				 FROM T_joueur
				 LEFT JOIN T_Equipe ON T_Joueur.fkEquipe = T_Equipe.PK_Equipe
				 LEFT JOIN T_Position ON T_Joueur.fkPosition = T_Position.PK_Position
				 LEFT JOIN T_Nationalite ON T_Joueur.fkNationalite = T_Nationalite.PK_Nationalite", 
				array());
			foreach($query as $data){
				$joueur = new Joueur($data['PK_Joueur'], $data['nom'], $data['prenom'], $data['dateNaissance'], $data['photo'], $data['description'], $data['position'], $data['equipe'], $data['nationalite']);
				$liste[$count++] = $joueur;
			}	
			return $liste;	
		}

		/**
		* Fonction permettant de retourner la liste des jouers en XML.
		*
		* @return String. Liste des joueurs en XML
		*/
		public function getInXML()
		{
			$listJoueur = $this->readJoueur();
			$result = '<listeJoueur>';
			for($i=0;$i<sizeof($listJoueur);$i++) 
			{
				$result = $result .$listJoueur[$i]->toXML();
			}
			$result = $result . '</listeJoueur>';
			return $result;
		}
	}
?>