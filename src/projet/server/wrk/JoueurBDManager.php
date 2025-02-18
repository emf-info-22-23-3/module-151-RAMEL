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
			$query = $connection->selectQuery("select * from T_Joueur", array());
			foreach($query as $data){
				$joueur = new Joueur($data['PK_Joueur'], $data['nom'], $data['prenom'], $data['dateNaissance'], $data['photo'], $data['description'], $data['fkPosition'], $data['fkEquipe'], $data['fkNationalite']);
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