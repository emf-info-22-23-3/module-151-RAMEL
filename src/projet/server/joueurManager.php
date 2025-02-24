<?php 
	include_once('wrk/JoueurBDManager.php');
	include_once('beans/Joueur.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$joueurBD = new JoueurBDManager();
			echo $joueurBD->getInXML();
		}

		if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
			//lit les données brutes de la requête (php://input) et de les analyser en un tableau $vars
			parse_str(file_get_contents("php://input"), $vars);
			if (isset($vars['pk_joueur']) and isset($vars['description'])) {
	
				$joueurBD = new JoueurBDManager();
				echo $joueurBD->update(
					htmlspecialchars( $vars['pk_joueur'],ENT_QUOTES, 'utf-8'),
					htmlspecialchars( $vars['description'],ENT_QUOTES, 'utf-8'),
				);
			}
		}
	}
?>