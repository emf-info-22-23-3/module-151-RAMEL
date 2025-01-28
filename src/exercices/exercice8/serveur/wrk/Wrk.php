<?php
require_once("./wrk/DB.php");

class Wrk {
    
    private $db;

    public function __construct() {
        $this->db = new DB();
    }

    public function getJoueursXML($idEquipe)
    {
        $joueurs = $this->db->getJoueurs($idEquipe);
        
        // Création de l'objet XML
        $xml = new SimpleXMLElement('<joueurs></joueurs>');
        
        foreach ($joueurs as $joueur) {
            $joueurElement = $xml->addChild('joueur');
            $joueurElement->addChild('id', $joueur->getId());
            $joueurElement->addChild('nom', $joueur->getName());
            $joueurElement->addChild('equipe', $joueur->getFKEquipe());
            $joueurElement->addChild('points', $joueur->getPoints());
        }

        // Retourne le XML sous forme de chaîne
        return $xml->asXML();
    }

    public function getEquipesXML()
    {
        $equipes = $this->db->getEquipes();
        
        $xml = new SimpleXMLElement('<equipes></equipes>');
        
        foreach ($equipes as $equipe) {
            $equipeElement = $xml->addChild('equipe');
            $equipeElement->addChild('id', $equipe->getId());
            $equipeElement->addChild('nom', $equipe->getNom());
        }

        // Retourne le XML sous forme de chaîne
        return $xml->asXML();
    }


}