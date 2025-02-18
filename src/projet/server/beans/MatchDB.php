<?php 
  class MatchDB {
    
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
      return $this->pk_match;
    }

    public function getDate()
    {
      return $this->date;
    }

    public function getHeure()
    {
      return $this->heure;
    }

    public function getGoalDom()
    {
      return $this->goalDom;
    }

    public function getGoalVisit()
    {
      return $this->goalVisit;
    }

    public function getFkEquipeDom()
    {
      return $this->fkEquipeDom;
    }

    public function getFkEquipeVIS()
    {
      return $this->fkEquipeVIS;
    }

    public function toXML()
    {
      $result = '<match>';
      $result = $result . '<pk_match>'.$this->getPkMatch().'</pk_match>';
      $result = $result . '<date>'.$this->getDate().'</date>';
      $result = $result . '<heure>'.$this->getHeure().'</heure>';
      $result = $result . '<goalDom>'.$this->getGoalDom().'</goalDom>';
      $result = $result . '<goalVisit>'.$this->getGoalVisit().'</goalVisit>';
      $result = $result . '<fkEquipeDom>'.$this->getFkEquipeDom().'</fkEquipeDom>';
      $result = $result . '<fkEquipeVIS>'.$this->getFkEquipeVIS().'</fkEquipeVIS>';
      $result = $result . '</match>';
      return $result;
    }
  }
?>