<?php 
  class Nationalite
  {
    private $pk_nationalite;

    private $nationalite;

    public function __construct($pk_nationalite, $nom)
    {
      $this->nationalite = $nationalite;
      $this->pk_nationalite = $pk_nationalite;    
    }

    public function getNationalite()
    {
      return $this->nationalite;
    }

    public function getPkNationalite()
    {
      return $this->nationalite;
    }

    public function toXML()
    {
      $result = '<nationalite>';
      $result = $result . '<pk_nationalite>'.$this->getPkNationalite().'</pk_nationalite>';
      $result = $result . '<nationalite>'.$this->getNationalite().'</nationalite>';
      $result = $result . '</nationalite>';
      return $result;
    }
  }
?>