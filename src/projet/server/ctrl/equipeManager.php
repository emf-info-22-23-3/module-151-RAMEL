<?php 
	include_once('wrk/EquipeBDManager.php');
	include_once('beans/Equipe.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$paysBD = new EquipeBDManager();
			echo $paysBD->getInXML();
		}
	}
?>