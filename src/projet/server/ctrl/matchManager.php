<?php 
	include_once('wrk/MatchBDManager.php');
	include_once('beans/Match.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$paysBD = new MatchBDManager();
			echo $paysBD->getInXML();
		}
	}
?>