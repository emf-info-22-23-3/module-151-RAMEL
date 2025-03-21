SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE DATABASE IF NOT EXISTS `bd_SwissHockey` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `bd_SwissHockey`;

-- Table T_Canton
CREATE TABLE IF NOT EXISTS `T_Canton` (
  `PK_Canton` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `abreviation` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`PK_Canton`))
ENGINE = InnoDB;

--
-- Contenu de la table `T_Canton`
--

INSERT INTO `T_Canton` (`nom`, `abreviation`) VALUES
('Argovie', 'AG'),
('Appenzell Rhodes-Extérieures', 'AR'),
('Appenzell Rhodes-Intérieures', 'AI'),
('Bâle-Campagne', 'BL'),
('Bâle-Ville', 'BS'),
('Berne', 'BE'),
('Fribourg', 'FR'),
('Genève', 'GE'),
('Glaris', 'GL'),
('Grisons', 'GR'),
('Jura', 'JU'),
('Lucerne', 'LU'),
('Neuchâtel', 'NE'),
('Nidwald', 'NW'),
('Obwald', 'OW'),
('Schaffhouse', 'SH'),
('Schwytz', 'SZ'),
('Soleure', 'SO'),
('Saint-Gall', 'SG'),
('Tessin', 'TI'),
('Thurgovie', 'TG'),
('Uri', 'UR'),
('Valais', 'VS'),
('Vaud', 'VD'),
('Zoug', 'ZG'),
('Zurich', 'ZH');

-- Table T_Equipe
CREATE TABLE IF NOT EXISTS `T_Equipe` (
  `PK_Equipe` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(50) NOT NULL,
  `abreviation` VARCHAR(5) NOT NULL,
  `dateCreation` DATE NOT NULL,
  `photo` VARCHAR(100) NOT NULL,
  `trophe` VARCHAR(200) NULL,
  `GP` INT NOT NULL,
  `G` VARCHAR(10) NOT NULL,
  `PTS` INT NOT NULL,
  `fkCanton` INT NOT NULL,
  PRIMARY KEY (`PK_Equipe`),
  INDEX `fk_T_Equipe_T_Canton1_idx` (`fkCanton` ASC) VISIBLE,
  CONSTRAINT `fk_T_Equipe_T_Canton1`
    FOREIGN KEY (`fkCanton`)
    REFERENCES `T_Canton` (`PK_Canton`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

--
-- Contenu de la table `T_Equipe`
--

INSERT INTO `T_Equipe` (`nom`, `abreviation`, `dateCreation`, `photo`, `trophe`, `GP`, `G`, `PTS`, `fkCanton`) VALUES
('HC Ajoie', 'HCA', '1973-01-01', 'img/equipe/HCA.png', '', 49, '109:176', 46, 11),
('HC Ambrì-Piotta', 'HCAP', '1937-01-01', 'img/equipe/HCAP.png', '', 49, '136:151', 67, 20),
('SC Bern', 'SCB', '1931-01-01', 'img/equipe/SCB.png', '', 49, '155:134', 85, 6),
('EHC Biel-Bienne', 'EHCB', '1939-01-01', 'img/equipe/EHCB.png', '', 48, '118:118', 67, 6),
('HC Davos', 'HCD', '1921-01-01', 'img/equipe/HCD.png', '', 48, '137:118', 80, 10),
('HC Fribourg-Gottéron', 'HCFG', '1937-01-01', 'img/equipe/HCFG.png', '', 48, '122:119', 76, 7),
('Genève-Servette HC', 'GSHC', '1905-01-01', 'img/equipe/GSHC.png', '', 48, '130:143', 62, 8),
('EHC Kloten', 'EHCK', '1934-01-01', 'img/equipe/EHCK.png', '', 48, '122:139', 70, 26),
('Lausanne HC', 'LHC', '1922-01-01', 'img/equipe/LHC.png', '', 49, '151:119', 97, 24),
('HC Lugano', 'HCL', '1941-01-01', 'img/equipe/HCL.png', '', 49, '129:155', 60, 20),
('SCL Tigers', 'SCL', '1946-01-01', 'img/equipe/SCL.png', '', 48, '121:114', 70, 6),
('SC Rapperswil-Jona Lakers', 'SCRJ', '1945-01-01', 'img/equipe/SCRJ.png', '', 48, '129:145', 64, 19),
('ZSC Lions', 'ZSC', '1930-01-01', 'img/equipe/ZSC.png', '', 47, '140:103', 88, 26),
('EV Zug', 'EVZ', '1967-01-01', 'img/equipe/EVZ.png', '', 48, '160:125', 82, 25);

-- Table T_Position
CREATE TABLE IF NOT EXISTS `T_Position` (
  `PK_Position` INT NOT NULL AUTO_INCREMENT,
  `position` VARCHAR(9) NOT NULL,
  PRIMARY KEY (`PK_Position`))
ENGINE = InnoDB;

--
-- Contenu de la table `T_Position`
--

INSERT INTO `T_Position` (`position`) VALUES
('Attaquant'),
('Défenseur'),
('Gardien');


-- Table T_Nationalite
CREATE TABLE IF NOT EXISTS `T_Nationalite` (
  `PK_Nationalite` INT NOT NULL AUTO_INCREMENT,
  `nationalite` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`PK_Nationalite`))
ENGINE = InnoDB;

--
-- Contenu de la table `T_Nationalite`
--

INSERT INTO `T_Nationalite` (`nationalite`) VALUES
('Afghan'),
('Albanais'),
('Algérien'),
('Allemand'),
('Américain'),
('Andorran'),
('Angolais'),
('Antiguais-et-Barbudien'),
('Argentin'),
('Arménien'),
('Australien'),
('Autrichien'),
('Azerbaïdjanais'),
('Bahaméen'),
('Bahreïnien'),
('Bangladais'),
('Barbadien'),
('Belge'),
('Belizien'),
('Béninois'),
('Bhoutanais'),
('Biélorusse'),
('Birman'),
('Bolivien'),
('Bosnien'),
('Botswanais'),
('Brésilien'),
('Britannique'),
('Brunéien'),
('Bulgare'),
('Burkinabé'),
('Burundais'),
('Cambodgien'),
('Camerounais'),
('Canadien'),
('Capverdien'),
('Centrafricain'),
('Chilien'),
('Chinois'),
('Chypriote'),
('Colombien'),
('Comorien'),
('Congolais'),
('Costaricain'),
('Croate'),
('Cubain'),
('Danois'),
('Djiboutien'),
('Dominicain'),
('Dominiquais'),
('Égyptien'),
('Émirati'),
('Équatorien'),
('Érythréen'),
('Espagnol'),
('Estonien'),
('Éthiopien'),
('Fidjien'),
('Finlandais'),
('Français'),
('Gabonais'),
('Gambien'),
('Géorgien'),
('Ghanéen'),
('Grenadien'),
('Guatémaltèque'),
('Guinéen'),
('Guyanien'),
('Haïtien'),
('Hondurien'),
('Hongrois'),
('Indien'),
('Indonésien'),
('Irakien'),
('Iranien'),
('Irlandais'),
('Islandais'),
('Israélien'),
('Italien'),
('Ivoirien'),
('Jamaïcain'),
('Japonais'),
('Jordanien'),
('Kazakhstanais'),
('Kényan'),
('Kirghiz'),
('Kiribatien'),
('Koweïtien'),
('Laotien'),
('Lesothien'),
('Letton'),
('Libanais'),
('Libérien'),
('Libyen'),
('Liechtensteinois'),
('Lituanien'),
('Luxembourgeois'),
('Macédonien'),
('Malaisien'),
('Malawien'),
('Maldivien'),
('Malien'),
('Maltais'),
('Marocain'),
('Marshallais'),
('Mauricien'),
('Mauritanien'),
('Mexicain'),
('Micronésien'),
('Moldave'),
('Monégasque'),
('Mongol'),
('Monténégrin'),
('Mozambicain'),
('Namibien'),
('Nauruan'),
('Népalais'),
('Nigérien'),
('Nigérian'),
('Norvégien'),
('Néo-Zélandais'),
('Omanais'),
('Ougandais'),
('Ouzbek'),
('Pakistanais'),
('Palaosien'),
('Palestinien'),
('Panaméen'),
('Papouasien-Néo-Guinéen'),
('Paraguayen'),
('Néerlandais'),
('Péruvien'),
('Philippin'),
('Polonais'),
('Portugais'),
('Qatari'),
('Roumain'),
('Russe'),
('Rwandais'),
('Saint-Lucien'),
('Saint-Marinais'),
('Salvadorien'),
('Samoan'),
('Saoudien'),
('Sénégalais'),
('Serbe'),
('Singapourien'),
('Slovaque'),
('Slovène'),
('Somalien'),
('Soudanais'),
('Sri-Lankais'),
('Sud-Africain'),
('Sud-Soudanais'),
('Suédois'),
('Suisse'),
('Surinamais'),
('Syrien'),
('Tadjik'),
('Tanzanien'),
('Tchadien'),
('Tchèque'),
('Thaïlandais'),
('Timorais'),
('Togolais'),
('Tongien'),
('Trinidadien'),
('Tunisien'),
('Turkmén'),
('Turc'),
('Tuvaluan'),
('Ukrainien'),
('Uruguayen'),
('Vanuatais'),
('Vatican'),
('Vénézuélien'),
('Vietnamien'),
('Yéménite'),
('Zambien'),
('Zimbabwéen');

-- Table T_Joueur
CREATE TABLE IF NOT EXISTS `T_Joueur` (
  `PK_Joueur` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `prenom` VARCHAR(45) NOT NULL,
  `dateNaissance` DATE NOT NULL,
  `photo` VARCHAR(100) NOT NULL,
  `description` VARCHAR(200) NULL,
  `fkPosition` INT NOT NULL,
  `fkEquipe` INT NOT NULL,
  `fkNationalite` INT NOT NULL,
  PRIMARY KEY (`PK_Joueur`),
  INDEX `fk_T_Joueur_T_Position_idx` (`fkPosition` ASC) VISIBLE,
  INDEX `fk_T_Joueur_T_Equipe1_idx` (`fkEquipe` ASC) VISIBLE,
  INDEX `fk_T_Joueur_T_Nationalite1_idx` (`fkNationalite` ASC) VISIBLE,
  CONSTRAINT `fk_T_Joueur_T_Position`
    FOREIGN KEY (`fkPosition`)
    REFERENCES `T_Position` (`PK_Position`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_Joueur_T_Equipe1`
    FOREIGN KEY (`fkEquipe`)
    REFERENCES `T_Equipe` (`PK_Equipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_Joueur_T_Nationalite1`
    FOREIGN KEY (`fkNationalite`)
    REFERENCES `T_Nationalite` (`PK_Nationalite`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

--
-- Contenu de la table `T_Joueur`
--

INSERT INTO T_Joueur (`prenom`, `nom`, `dateNaissance`, `photo`, `description`, `fkPosition`, `fkEquipe`, `fkNationalite`)
VALUES
('Julius', 'Nättinen', '1997-01-14', 'img/joueur/Nattinen.png', '', 1, 1, 59),
('Anttoni', 'Honka', '2000-10-05', 'img/joueur/AHonka.png', '', 2, 1, 59),
('Benjamin', 'Conz', '1991-09-13', 'img/joueur/Conz.png', '', 3, 1, 156),
('Dominik', 'Kubalik', '1995-08-21', 'img/joueur/Kubalik.png', '', 1, 2, 162),
('Jesse', 'Virtanen', '1991-08-07', 'img/joueur/Virtanen.png', '', 2, 2, 59),
('Gilles', 'Senn', '1996-03-01', 'img/joueur/Senn.png', '', 3, 2, 156),
('Austin', 'Czarnik', '1992-12-12', 'img/joueur/Czarnik.png', '', 1, 3, 5),
('Romain', 'Loeffel', '1991-03-10', 'img/joueur/Loeffel.png', '', 2, 3, 156),
('Adam', 'Reideborn', '1992-01-18', 'img/joueur/Reideborn.png', '', 3, 3, 155),
('Toni', 'Rajala', '1991-03-29', 'img/joueur/Rajala.png', '', 1, 4, 59),
('Alexander', 'Yakovenko', '1998-02-22', 'img/joueur/Yakovenko.png', '', 2, 4, 138),
('Harri', 'Säteri', '1989-12-29', 'img/joueur/Sateri.png', '', 3, 4, 59),
('Adam', 'Tambellini', '1994-11-01', 'img/joueur/Tambellini.png', '', 1, 5, 35),
('Julius', 'Honka', '1995-12-03', 'img/joueur/Honka.png', '', 2, 5, 59),
('Sandro', 'Aeschlimann', '1994-12-26', 'img/joueur/Aeschlimann.png', '', 3, 5, 156),
('Lucas', 'Wallmark', '1995-09-05', 'img/joueur/Wallmark.png', '', 1, 6, 155),
('Ryan', 'Gunderson', '1985-08-16', 'img/joueur/Gunderson.png', '', 2, 6, 5),
('Reto', 'Berra', '1987-01-03', 'img/joueur/Berra.png', '', 3, 6, 156),
('Sakari', 'Manninen', '1992-02-10', 'img/joueur/Manninen.png', '', 1, 7, 59),
('Sami', 'Vatanen', '1991-06-03', 'img/joueur/Vatanen.png', '', 2, 7, 59),
('Antti', 'Raanta', '1989-05-12', 'img/joueur/Raanta.png', '', 3, 7, 59),
('Miro', 'Aaltonen', '1993-06-07', 'img/joueur/Aaltonen.png', '', 1, 8, 59),
('Sami', 'Niku', '1996-10-10', 'img/joueur/Niku.png', '', 2, 8, 59),
('Sandro', 'Zurkirchen', '1990-02-25', 'img/joueur/Zurkirchen.png', '', 3, 8, 156),
('Antti', 'Suomela', '1994-03-17', 'img/joueur/Suomela.png', '', 1, 9, 59),
('David', 'Sklenicka', '1996-09-08', 'img/joueur/Sklenicka.png', '', 2, 9, 162),
('Kevin', 'Pasche', '2003-02-14', 'img/joueur/Pasche.png', '', 3, 9, 156),
('Luca', 'Fazzini', '1995-03-17', 'img/joueur/Fazzini.png', '', 1, 10, 156),
('Santeri', 'Alatalo', '1990-05-09', 'img/joueur/Alatalo.png', '', 2, 10, 156),
('Niklas', 'Schlegel', '1994-08-03', 'img/joueur/Schlegel.png', '', 3, 10, 156),
('Harri', 'Pesonen', '1988-08-06', 'img/joueur/Pesonen.png', '', 1, 11, 59),
('Vili', 'Saarijärvi', '1997-05-15', 'img/joueur/Saarijarvi.png', '', 2, 11, 59),
('Stéphane', 'Charlin', '2000-08-30', 'img/joueur/Charlin.png', '', 3, 11, 156),
('Malte', 'Strömwall', '1994-08-24', 'img/joueur/Stromwall.png', '', 1, 12, 155),
('Philip', 'Holm ', '1991-12-08', 'img/joueur/Holm.png', '', 2, 12, 59),
('Melvin', 'Nyffeler', '1994-12-16', 'img/joueur/Nyffeler.png', '', 3, 12, 156),
('Derek', 'Grant', '1990-04-20', 'img/joueur/Grant.png', '', 1, 13, 35),
('Dean', 'Kukan', '1993-06-08', 'img/joueur/Kukan.png', '', 2, 13, 156),
('Simon', 'Hrubec ', '1991-06-30', 'img/joueur/Hrubec.png', '', 3, 13, 162),
('Lino', 'Martschini', '1993-01-21', 'img/joueur/Martschini.png', '', 1, 14, 156),
('Lukas', 'Bengtsson', '1994-04-14', 'img/joueur/Bengtsson.png', '', 2, 14, 155),
('Tim', 'Wolf', '1992-01-25', 'img/joueur/Wolf.png', '', 3, 14, 156);

-- Table T_Match
CREATE TABLE IF NOT EXISTS `T_Match` (
  `PK_Match` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `heure` VARCHAR(5) NOT NULL,
  `goalDom` INT NULL,
  `goalVisit` INT NULL,
  `fkEquipeDOM` INT NOT NULL,
  `fkEquipeVIS` INT NOT NULL,
  PRIMARY KEY (`PK_Match`),
  INDEX `fk_T_Match_T_Equipe1_idx` (`fkEquipeDom` ASC) VISIBLE,
  INDEX `fk_T_Match_T_Equipe2_idx` (`fkEquipeVIS` ASC) VISIBLE,
  CONSTRAINT `fk_T_Match_T_Equipe1`
    FOREIGN KEY (`fkEquipeDom`)
    REFERENCES `T_Equipe` (`PK_Equipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_Match_T_Equipe2`
    FOREIGN KEY (`fkEquipeVIS`)
    REFERENCES `T_Equipe` (`PK_Equipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

--
-- Contenu de la table `T_Match`
--

INSERT INTO `T_Match` (`date`, `heure`, `goalDom`, `goalVisit`, `fkEquipeDOM`, `fkEquipeVIS`) VALUES
('2024-09-20', '19:45', 5, 4, 13, 2),
('2024-09-21', '19:45', 4, 0, 6, 10),
('2024-10-11', '19:45', 6, 0, 9, 6),
('2024-10-19', '19:45', 4, 0, 6, 10),
('2024-11-14', '20:00', 2, 0, 9, 13),
('2024-12-23', '19:45', 0, 3, 4, 3),
('2025-01-10', '19:45', 5, 2, 12, 8),
('2025-01-30', '19:45', 3, 2, 5, 7),
('2025-02-14', '19:45', 6, 1, 14, 12);

INSERT INTO `T_Match` (`date`, `heure`, `fkEquipeDOM`, `fkEquipeVIS`) VALUES
('2025-02-21', '19:45', 1, 3),
('2025-02-21', '19:45', 5, 6),
('2025-02-27', '19:45', 8, 14),
('2025-02-27', '19:45', 7, 10),
('2025-03-01', '19:45', 11, 1),
('2025-03-01', '19:45', 14, 9);

-- Table T_Utilisateur
CREATE TABLE IF NOT EXISTS `T_Utilisateur` (
  `PK_Utilisateur` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(20) NOT NULL,
  `password` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`PK_Utilisateur`))
ENGINE = InnoDB;

--
-- Contenu de la table `T_Utilisateur`
--

INSERT INTO `T_Utilisateur` (`login`, `password`) VALUES
('Admin', '$2y$10$q1TqfSxmiIRwMDN21UoW5uLujh0.SaZb/M5WO39GCiO.kkxhefJXC'),
('adm-RAM', '$2y$10$q1TqfSxmiIRwMDN21UoW5uLujh0.SaZb/M5WO39GCiO.kkxhefJXC'),
('adm-local', '$2y$10$I1t0QDeDKRhdQzHDFBr2nOPsbifIhB1LRbx2NLhy7ERXG4A2Degx2');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;