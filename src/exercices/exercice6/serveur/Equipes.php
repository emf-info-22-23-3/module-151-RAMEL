<?php
  class Equipes {
    private $refCtrl;
    private $equipes;
    
    public function __construct() {
      require_once('Ctrl.php');
      $this->refCtrl = new Ctrl();
      $this->equipes = $this->refCtrl->getEquipes();
    }

    function ajouteCelluleHtml($contenu, $id){
      echo "<tr><td>{$id}</td><td>{$contenu}</td></tr>";
    }

    function equipe() {
      for ($i=0; $i < count($this->equipes); $i++) { 
        ajouteCelluleHtml($this->equipes[$i],$i);
      }
    }
  }
?>