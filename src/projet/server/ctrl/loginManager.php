<?php 
	include_once('wrk/LoginBDManager.php');
	include_once('beans/Login.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$paysBD = new LoginBDManager();
			echo $paysBD->getInXML();
		}
	}
?>