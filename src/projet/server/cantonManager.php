<?php 
	include_once('wrk/CantonBDManager.php');
	include_once('beans/Canton.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$cantonBD = new CantonBDManager();
			echo $cantonBD->getInXML();
		}
	}
?>