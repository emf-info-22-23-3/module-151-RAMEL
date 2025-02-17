<?php 
  class Utilisateur
  {

    private $nom;

    private $pk_utilisateur;

    public function __construct($pk_utilisateur, $nom)
    {
      $this->nom = $nom;
      $this->pk_utilisateur = $pk_utilisateur;    
    }

    public function getNom()
    {
      return $this->nom;
    }

    public function getPkUtilisateur()
    {
      return $this->utilisateur;
    }

    public function toXML()
    {
      $result = '<utilisateur>';
      $result = $result . '<pk_utilisateur>'.$this->getPkUtilisateur().'</pk_utilisateur>';
      $result = $result . '<nom>'.$this->getNom().'</nom>';
      $result = $result . '</utilisateur>';
      return $result;
    }
  }
?>