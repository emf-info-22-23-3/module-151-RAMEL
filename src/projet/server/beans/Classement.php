<?php 
  class Classement {
    private $pk_equipe;

    private $nom;

    private $GP;

    private $G;

    private $PTS;

    public function __construct($pk_equipe, $nom, $GP, $G, $PTS)
    {
      $this->pk_equipe = $pk_equipe;
      $this->nom = $nom;
      $this->GP = $GP;
      $this->G = $G;
      $this->PTS = $PTS;
    }

    public function getPkEquipe()
    {
      return $this->pk_equipe;
    }

    public function getNom()
    {
      return $this->nom;
    }

    public function getGP()
    {
      return $this->GP;
    }

    public function getG()
    {
      return $this->G;
    }

    public function getPTS()
    {
      return $this->PTS;
    }
    
    public function toXML()
    {
      $result = '<classement>';
      $result = $result . '<pk_equipe>'.$this->getPkEquipe().'</pk_equipe>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '<GP>'.$this->getGP().'</GP>';
      $result = $result . '<G>'.$this->getG().'</G>';
      $result = $result . '<PTS>'.$this->getPTS().'</PTS>';
      $result = $result . '</classement>';
      return $result;
    }
  }
?>