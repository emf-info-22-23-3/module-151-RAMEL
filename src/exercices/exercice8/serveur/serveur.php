<?php
require_once './wrk/Wrk.php';
require_once './beans/Equipes.php';
require_once './beans/Joueurs.php';

$wrk = new Wrk();

if($_GET['action'] == "equipe") {
	$equipes = $wrk->getEquipesXML();
    echo $equipes;
}

if($_GET['action'] == "joueur") {
    $joueurs = $wrk->getJoueursXML($_GET['equipeId']);
    echo $joueurs;
}
?>