<?php
require_once './wrk/DB.php';
require_once './beans/Equipes.php';
require_once './beans/Joueurs.php';
require_once './ctrl/Ctrl.php';

$ctrl = new Ctrl();

if($_GET['action'] == "equipe") {
	$equipes = $ctrl->getEquipesXML();
    echo $equipes;
}

if($_GET['action'] == "joueur") {
    $joueurs = $ctrl->getJoueursXML($_GET['equipeId']);
    echo $joueurs;
}
?>