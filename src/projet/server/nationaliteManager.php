<?php 
	include_once('wrk/NationaliteBDManager.php');
	include_once('beans/Nationalite.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$nationaliteBD = new NationaliteBDManager();
			echo $nationaliteBD->getInXML();
		}
	}
?>