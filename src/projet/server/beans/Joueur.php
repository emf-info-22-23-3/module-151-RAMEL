<?php 
  class Joueur
  {
    private $pk_joueur;

    private $nom;

    private $prenom;

    private $dateNaissance;

    private $photo;

    private $description;

    private $fkPosition;

    private $fkEquipe;

    private $fkNationalite;

    public function __construct($pk_joueur, $nom, $prenom, $dateNaissance, $photo, $description, $fkPosition, $fkEquipe, $fkNationalite)
    {
      $this->pk_joueur = $pk_joueur;
      $this->nom = $nom;
      $this->prenom = $prenom;
      $this->dateNaissance = $dateNaissance;
      $this->photo = $photo;
      $this->description = $description;
      $this->fkPosition = $fkPosition;
      $this->fkEquipe = $fkEquipe;
      $this->fkNationalite = $fkNationalite;
    }

    public function getPkJoueur()
    {
      return $this->joueur;
    }

    public function getNom()
    {
      return $this->nom;
    }

    public function getPrenom()
    {
      return $this->prenom;
    }

    public function getDateNaissance()
    {
      return $this->dateNaissance;
    }

    public function getPhoto()
    {
      return $this->photo;
    }

    public function getDescription()
    {
      return $this->description;
    }

    public function getFkPosition()
    {
      return $this->fkPosition;
    }

    public function getFkEquipe()
    {
      return $this->fkEquipe;
    }

    public function getFkNationalite()
    {
      return $this->fkNationalite;
    }

    public function toXML()
    {
      $result = '<joueur>';
      $result = $result . '<pk_joueur>'.$this->getPkJoueur().'</pk_joueur>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '<prenom>'.$this->getPrenom().'</prenom>';
      $result = $result . '<dateNaissance>'.$this->getDateNaissance().'</dateNaissance>';
      $result = $result . '<photo>'.$this->getPhoto().'</photo>';
      $result = $result . '<description>'.$this->getDescription().'</description>';
      $result = $result . '<fkPosition>'.$this->getFkPosition().'</fkPosition>';
      $result = $result . '<fkEquipe>'.$this->getFkEquipe().'</fkEquipe>';
      $result = $result . '<fkNationalite>'.$this->getFkNationalite().'</fkNationalite>';
      $result = $result . '</joueur>';
      return $result;
    }
  }
?>