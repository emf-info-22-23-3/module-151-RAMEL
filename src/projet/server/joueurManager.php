<?php 
	include_once('wrk/JoueurBDManager.php');
	include_once('beans/Joueur.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$paysBD = new JoueurBDManager();
			echo $paysBD->getInXML();
		}
	}
?>