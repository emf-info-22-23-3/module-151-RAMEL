<?php 
	include_once('wrk/ClassementBDManager.php');
	include_once('beans/Classement.php');
        
    if (isset($_SERVER['REQUEST_METHOD']))
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET')
		{
			$classementBD = new ClassementBDManager();
			echo $classementBD->getInXML();
		}
	}
?>