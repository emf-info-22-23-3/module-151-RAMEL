<?php 
  class Position
  {
    private $pk_position;

    private $position;

    public function __construct($pk_position, $position)
    {
      $this->pk_position = $pk_position;
      $this->position = $position;    
    }
    
    public function getPkPosition()
    {
      return $this->position;
    }

    public function getPosition()
    {
      return $this->nom;
    }

    public function toXML()
    {
      $result = '<position>';
      $result = $result . '<pk_position>'.$this->getPkPosition().'</pk_position>';
      $result = $result . '<position>'.$this->getPosition().'</position>';
      $result = $result . '</position>';
      return $result;
    }
  }
?>