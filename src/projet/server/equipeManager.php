<?php 
	include_once('wrk/EquipeBDManager.php');
	include_once('beans/Equipe.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET') {
			$equipeBD = new EquipeBDManager();
			echo $equipeBD->getInXML();
		}

		if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
			//lit les données brutes de la requête (php://input) et de les analyser en un tableau $vars
			parse_str(file_get_contents("php://input"), $vars);
			if (isset($vars['pk_equipe']) and isset($vars['trophe'])) {
	
				$joueurBD = new JoueurBDManager();
				echo $joueurBD->update(
					htmlspecialchars( $vars['pk_equipe'],ENT_QUOTES, 'utf-8'),
					htmlspecialchars( $vars['trophe'],ENT_QUOTES, 'utf-8'),
				);
			}
		}
	}
?>