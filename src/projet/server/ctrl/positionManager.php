<?php 
	include_once('wrk/PositionBDManager.php');
	include_once('beans/Position.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$paysBD = new PositionBDManager();
			echo $paysBD->getInXML();
		}
	}
?>