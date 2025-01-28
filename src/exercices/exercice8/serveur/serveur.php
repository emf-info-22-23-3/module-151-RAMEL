<?php
require_once './wrk/Wrk.php';
require_once './beans/Equipes.php';

$wrk = new Wrk();
$equipes = $wrk->getEquipesXML();
echo $equipes;