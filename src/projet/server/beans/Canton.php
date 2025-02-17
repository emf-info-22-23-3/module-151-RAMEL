<?php 
  class Canton
  {
    private $pk_canton;

    private $nom;

    private $abreviation;

    public function __construct($pk_canton, $nom, $abreviation)
    {
        $this->pk_canton = $pk_canton;  
        $this->nom = $nom;
        $this->abreviation = $abreviation;  
    }
    
    public function getPkCanton()
    {
      return $this->canton;
    }
    
    public function getNom()
    {
      return $this->nom;
    }

    public function getAbreviation()
    {
      return $this->abreviation;
    }

    public function toXML()
    {
      $result = '<canton>';
      $result = $result . '<pk_canton>'.$this->getPkCanton().'</pk_canton>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '<abreviation>'.$this->getAbreviation().'</abreviation>';
      $result = $result . '</canton>';
      return $result;
    }
  }
?>