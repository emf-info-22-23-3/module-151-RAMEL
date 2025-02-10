SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `bd_SwissHockey` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `bd_SwissHockey`;

-- Table T_Canton
CREATE TABLE T_Canton (
    PK_Canton INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    abreviation VARCHAR(2) NOT NULL
);

--
-- Contenu de la table `T_Canton`
--

INSERT INTO `T_Canton` (`Nom`) VALUES
('Zurich'),
('Berne'),
('Lucerne'),
('Uri'),
('Schwyz'),
('Obwald'),
('Nidwald'),
('Glaris'),
('Zoug'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),
('Slovénie'),

-- Table T_Equipe
CREATE TABLE T_Equipe (
    PK_Equipe INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    abreviation VARCHAR(5) NOT NULL,
    dateCreation DATE,
    photo VARCHAR(45),
    trophe VARCHAR(200),
    fkCanton INT,
    FOREIGN KEY (fkCanton) REFERENCES T_Canton(PK_Canton)
);

-- Table T_Position
CREATE TABLE T_Position (
    PK_Position INT PRIMARY KEY AUTO_INCREMENT,
    position VARCHAR(2) NOT NULL
);

-- Table T_Nationalite
CREATE TABLE T_Nationalite (
    PK_Nationalite INT PRIMARY KEY AUTO_INCREMENT,
    nationalite VARCHAR(45) NOT NULL
);

-- Table T_Joueur
CREATE TABLE T_Joueur (
    PK_Joueur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(45) NOT NULL,
    prenom VARCHAR(45) NOT NULL,
    dateNaissance DATE,
    photo VARCHAR(45),
    description VARCHAR(200),
    fkPosition INT,
    fkEquipe INT,
    fkNationalite INT,
    FOREIGN KEY (fkPosition) REFERENCES T_Position(PK_Position),
    FOREIGN KEY (fkEquipe) REFERENCES T_Equipe(PK_Equipe),
    FOREIGN KEY (fkNationalite) REFERENCES T_Nationalite(PK_Nationalite)
);

-- Table T_Utilisateur
CREATE TABLE T_Utilisateur (
    PK_Utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    Login VARCHAR(20) NOT NULL,
    Password VARCHAR(64) NOT NULL
);

-- Table T_Match
CREATE TABLE T_Match (
    PK_Match INT PRIMARY KEY AUTO_INCREMENT,
    equipeDom VARCHAR(5) NOT NULL,
    equipeVisit VARCHAR(5) NOT NULL,
    date DATE NOT NULL,
    heure VARCHAR(5),
    goalDom INT,
    goalVisit INT
);

-- Table TR_Match_Equipe (Table de relation)
CREATE TABLE TR_Match_Equipe (
    RfMatch INT,
    RfEquipe INT,
    PRIMARY KEY (RfMatch, RfEquipe),
    FOREIGN KEY (RfMatch) REFERENCES T_Match(PK_Match),
    FOREIGN KEY (RfEquipe) REFERENCES T_Equipe(PK_Equipe)
);