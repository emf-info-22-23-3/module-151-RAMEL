<?php 
  class Equipe
  {
    private $pk_equipe;

    private $nom;

    private $abreviation;

    private $dateCreation;

    private $photo;

    private $trophe;

    private $fkCanton;

    public function __construct($pk_equipe, $nom, $abreviation, $dateCreation, $photo, $trophe, $fkCanton)
    {
      $this->pk_equipe = $pk_equipe;
      $this->nom = $nom;
      $this->abreviation = $abreviation;
      $this->dateCreation = $dateCreation;
      $this->photo = $photo;
      $this->trophe = $trophe;
      $this->fkCanton = $fkCanton;
    }

    public function getPkEquipe()
    {
      return $this->pk_equipe;
    }

    public function getNom()
    {
      return $this->nom;
    }

    public function getAbreviation()
    {
      return $this->abreviation;
    }

    public function getDateCreation()
    {
      return $this->dateCreation;
    }

    public function getPhoto()
    {
      return $this->photo;
    }

    public function getTrophe()
    {
      return $this->trophe;
    }

    public function getFkCanton()
    {
      return $this->fkCanton;
    }
    
    public function toXML()
    {
      $result = '<equipe>';
      $result = $result . '<pk_equipe>'.$this->getPkEquipe().'</pk_equipe>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '<abreviation>'.$this->getAbreviation().'</abreviation>';
      $result = $result . '<dateCreation>'.$this->getDateCreation().'</dateCreation>';
      $result = $result . '<photo>'.$this->getPhoto().'</photo>';
      $result = $result . '<trophe>'.$this->getTrophe().'</trophe>';
      $result = $result . '<fkCanton>'.$this->getFkCanton().'</fkCanton>';
      $result = $result . '</equipe>';
      return $result;
    }
  }
