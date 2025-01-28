<?php
	$bdd = new PDO('mysql:host=localhost;dbname=nomDB', 'root', 'emf123');
	$reponse = $bdd->prepare('SELECT * FROM jeux');
	$reponse->execute();
	$jeux = $reponse->fetchALL();
	
	$compteur = 0;

	while (compteur < count($reponse)) {
		echo $reponse[compteur];
		$compteur++;
	}
	$reponse->closeCursor();
?>
