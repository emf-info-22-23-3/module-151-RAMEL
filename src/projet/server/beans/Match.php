<?php 
  class Match
  {
    private $pk_match;

    private $date;

    private $heure;

    private $goalDom;

    private $goalVisit;

    private $fkEquipeDom;

    private $fkEquipeVIS;

    public function __construct($pk_match, $date, $heure, $goalDom, $goalVisit, $fkEquipeDom, $fkEquipeVIS)
    {
      $this->pk_match = $pk_match;
      $this->date = $date;
      $this->heure = $heure;
      $this->goalDom = $goalDom;
      $this->goalVisit = $goalVisit;
      $this->fkEquipeDom = $fkEquipeDom;
      $this->fkEquipeVIS = $fkEquipeVIS;
    }

    public function getPkMatch()
    {
      return $this->match;
    }

    public function get()
    {
      return $this->nom;
    }

    public function toXML()
    {
      $result = '<match>';
      $result = $result . '<pk_match>'.$this->getPkMatch().'</pk_match>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '</match>';
      return $result;
    }
  }
?>