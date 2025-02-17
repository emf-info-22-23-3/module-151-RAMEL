<?php 
	include_once('wrk/SessionBDManager.php');
	include_once('beans/Session.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$paysBD = new SessionBDManager();
			echo $paysBD->getInXML();
		}
	}
?>