SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `bd_SwissHockey` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `bd_SwissHockey`;

-- Table T_Canton
CREATE TABLE IF NOT EXISTS `T_Canton` (
    `PK_Canton` INT PRIMARY KEY AUTO_INCREMENT,
    `nom` VARCHAR(45) NOT NULL,
    `abreviation` VARCHAR(2) NOT NULL,
    PRIMARY KEY (`PK_Canton`)
);

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
    `PK_Equipe` INT PRIMARY KEY AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `abreviation` VARCHAR(5) NOT NULL,
    `dateCreation` DATE NOT NULL,
    `photo` VARCHAR(60) NOT NULL,
    `trophe` VARCHAR(200),
    `fkCanton` INT NOT NULL,
    PRIMARY KEY (`PK_Equipe`),
    FOREIGN KEY (`fkCanton`) REFERENCES `T_Canton`(`PK_Canton`)
);

--
-- Contenu de la table `T_Equipe`
--

INSERT INTO `T_Equipe` (`nom`, `abreviation`, `dateCreation`, `photo`, `trophe`, `fkCanton`) VALUES
('HC Ajoie', 'HCA', '1973-01-01', 'https://ramela.emf-informatique.ch/151/img/HCA.png', '', 11),
('HC Ambrì-Piotta', 'HCAP', '1937-01-01', 'https://ramela.emf-informatique.ch/151/img/HCAP.png', '', 20),
('SC Bern', 'SCB', '1931-01-01', 'https://ramela.emf-informatique.ch/151/img/SCB.png', '', 6),
('EHC Biel-Bienne', 'EHCB', '1939-01-01', 'https://ramela.emf-informatique.ch/151/img/EHCB.png', '', 6),
('HC Davos', 'HCD', '1921-01-01', 'https://ramela.emf-informatique.ch/151/img/HCD.png', '', 10),
('HC Fribourg-Gottéron', 'HCFG', '1937-01-01', 'https://ramela.emf-informatique.ch/151/img/HCFG.png', '', 8),
('Genève-Servette HC', 'GSHC', '1905-01-01', 'https://ramela.emf-informatique.ch/151/img/GSHC.png', '', 7),
('EHC Kloten', 'EHCK', '1934-01-01', 'https://ramela.emf-informatique.ch/151/img/EHCK.png', '', 26),
('Lausanne HC', 'LHC', '1922-01-01', 'https://ramela.emf-informatique.ch/151/img/LHC.png', '', 24),
('HC Lugano', 'HCL', '1941-01-01', 'https://ramela.emf-informatique.ch/151/img/HCL.png', '', 20),
('SCL Tigers', 'SCL', '1946-01-01', 'https://ramela.emf-informatique.ch/151/img/SCL.png', '', 6),
('SC Rapperswil-Jona Lakers', 'SCRJ', '1945-01-01', 'https://ramela.emf-informatique.ch/151/img/SCRJ.png', '', 19),
('ZSC Lions', 'ZSC', '1930-01-01', 'https://ramela.emf-informatique.ch/151/img/ZSC.png', '', 26),
('EV Zug', 'EVZ', '1967-01-01', 'https://ramela.emf-informatique.ch/151/img/EVZ.png', '', 25);

-- Table T_Position
CREATE TABLE IF NOT EXISTS `T_Position` (
    `PK_Position` INT PRIMARY KEY AUTO_INCREMENT,
    `position` VARCHAR(2) NOT NULL,
    PRIMARY KEY (`PK_Position`)
);

--
-- Contenu de la table `T_Position`
--

INSERT INTO `T_Position` (`position`) VALUES
('F'),
('D'),
('G'),


-- Table T_Nationalite
CREATE TABLE IF NOT EXISTS `T_Nationalite` (
    `PK_Nationalite` INT PRIMARY KEY AUTO_INCREMENT,
    `nationalite` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`PK_Nationalite`)
);

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
    `PK_Joueur` INT PRIMARY KEY AUTO_INCREMENT,
    `prenom` VARCHAR(45) NOT NULL,
    `nom` VARCHAR(45) NOT NULL,
    `dateNaissance` DATE,
    `photo` VARCHAR(60),
    `description` VARCHAR(200),
    `fkPosition` INT NOT NULL,
    `fkEquipe` INT NOT NULL,
    `fkNationalite` INT NOT NULL,
    PRIMARY KEY (`PK_Joueur`),
    FOREIGN KEY (`fkPosition`) REFERENCES `T_Position`(`PK_Position`),
    FOREIGN KEY (`fkEquipe`) REFERENCES `T_Equipe`(`PK_Equipe`),
    FOREIGN KEY (`fkNationalite`) REFERENCES `T_Nationalite`(`PK_Nationalite`)
);

--
-- Contenu de la table `T_Joueur`
--

INSERT INTO T_Joueur (`prenom`, `nom`, `dateNaissance`, `photo`, `description`, `fkPosition`, `fkEquipe`, `fkNationalite`)
VALUES
('Julius', 'Nättinen', '1997-01-14', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 1, 59),
('Anttoni', 'Honka', '2000-10-05', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 1, 59),
('Benjamin', 'Conz', '1991-09-13', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 1, 156),
('Dominik', 'Kubalik', '1995-08-21', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 2, 162),
('Jesse', 'Virtanen', '1991-08-07', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 2, 59),
('Gilles', 'Senn', '1996-03-01', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 2, 156),
('Austin', 'Czarnik', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 3, 5),
('Romain', 'Loeffel', '1991-03-10', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 3, 156),
('Adam', 'Reideborn', '1992-01-18', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 3, 155),
('Toni', 'Rajala', '1991-03-29', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 4, 59),
('Alexander', 'Yakovenko', '1998-02-22', 'https://ramela.emf-informatique.ch/151/img/.png', , 2, 4, 138),
('Harri', 'Säteri', '1989-12-29', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 4, 59),
('Adam', 'Tambellini', '1994-11-01', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 5, 35),
('Julius', 'Honka', '1995-12-03', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 5, 59),
('Sandro', 'Aeschlimann', '1994-12-26', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 5, 156),
('Lucas', 'Wallmark', '1995-09-05', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 6, 155),
('Ryan', 'Gunderson', '1985-08-16', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 6, 5),
('Reto', 'Berra', '1987-01-03', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 6, 156),
('Sakari', 'Manninen', '1992-02-10', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 7, 59),
('Sami', 'Vatanen', '1991-06-03', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 7, 59),
('Antti', 'Raanta', '1989-05-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 7, 59),
('Miro', 'Aaltonen', '1993-06-07', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 8, 59),
('Sami', 'Niku', '1996-10-10', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 8, 59),
('Sandro', 'Zurkirchen', '1990-02-25', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 8, 156),
('Antti', 'Suomela', '1994-03-17', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 9, 59),
('David', 'Sklenicka', '1996-09-08', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 9, 162),
('Kevin', 'Pasche', '2003-02-14', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 9, 156),
('Luca', 'Fazzini', '1995-03-17', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 10, 156),
('Santeri', 'Alatalo', '1990-05-09', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 10, 156),
('Niklas', 'Schlegel', '1994-08-03', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 10, 156),
('Harri', 'Pesonen', '1988-08-06', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 11, 59),
('Vili', 'Saarijärvi', '1997-05-15', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 11, 59),
('Stéphane', 'Charlin', '2000-08-30', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 11, 156),
('Malte', 'Strömwall', '1994-08-24', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 12, 155),
('Philip', 'Holm ', '1991-12-08', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 12, 59),
('Melvin', 'Nyffeler', '1994-12-16', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 12, 156),
('Derek', 'Grant', '1990-04-20', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 13, 35),
('Dean', 'Kukan', '1993-06-08', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 13, 156),
('Simon', 'Hrubec ', '1991-06-30', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 13, 162),
('Lino', 'Martschini', '1993-01-21', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 14, 156),
('Lukas', 'Bengtsson', '1994-04-14', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 14, 155),
('Tim', 'Wolf', '1992-01-25', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 14, 156);

-- Table T_Utilisateur
CREATE TABLE IF NOT EXISTS `T_Utilisateur` (
    `PK_Utilisateur` INT PRIMARY KEY AUTO_INCREMENT,
    `login` VARCHAR(20) NOT NULL,
    `password` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`PK_Utilisateur`)
);

--
-- Contenu de la table `T_Utilisateur`
--

INSERT INTO `T_Utilisateur` (`login`, `password`) VALUES
('Admin', 'Pa$$w0rd'),
('adm-RAM', 'Pa$$w0rd'),
('adm-local', 'emf123');

-- Table T_Match
CREATE TABLE IF NOT EXISTS `T_Match` (
    `PK_Match` INT PRIMARY KEY AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `heure` VARCHAR(5),
    PRIMARY KEY (`PK_Match`)
);

--
-- Contenu de la table `T_Match`
--

INSERT INTO `T_Match` (`date`, `heure`) VALUES
('2024-09-20', '19:45'),
('2024-09-21', '19:45'),
('2024-10-11', '19:45'),
('2024-10-19', '19:45'),
('2024-11-14', '20:00'),
('2024-12-23', '19:45'),
('2025-01-10', '19:45'),
('2025-01-30', '19:45'),
('2025-02-14', '19:45'),
('2025-02-21', '19:45'),
('2025-02-21', '19:45'),
('2025-02-27', '19:45'),
('2025-02-27', '19:45'),
('2025-03-01', '19:45'),
('2025-03-01', '19:45');

-- Table TR_Match_Equipe (Table de relation)
CREATE TABLE IF NOT EXISTS `TR_Match_Equipe` (
    `RfMatch` int NOT NULL,
    `RfEquipeDOM` int NOT NULL,
    `RfEquipeVIS` int NOT NULL,
    `goalDom` INT,
    `goalVisit` INT,
    PRIMARY KEY (`RfMatch`, `RfEquipeDOM`, `RfEquipeVIS`),
    FOREIGN KEY (`RfMatch`) REFERENCES `T_Match`(`PK_Match`),
    FOREIGN KEY (`RfEquipeDOM`) REFERENCES `T_Equipe`(`PK_Equipe`)
    FOREIGN KEY (`RfEquipeVIS`) REFERENCES `T_Equipe`(`PK_Equipe`)
);

--
-- Contenu de la table `TR_Match_Equipe`
--

INSERT INTO `TR_Match_Equipe` (`RfMatch`, `RfEquipeDOM`, `RfEquipeVIS`, `goalDom`, `goalVisit`) VALUES
(1, 13, 2, 5, 4),
(2, 6, 10, 4, 0),
(3, 9, 6, 6, 0),
(4, 6, 10, 4, 0),
(5, 9, 13, 2, 0),
(6, 4, 3, 0, 3),
(7, 12, 8, 5, 2),
(8, 5, 7, 3, 2),
(9, 14, 12, 6, 1),

INSERT INTO `TR_Match_Equipe` (`RfMatch`, `RfEquipeDOM`, `RfEquipeVIS`) VALUES
(10, 1, 3);
(11, 5, 6);
(12, 8, 14);
(13, 7, 10);
(14, 11, 1);
(15, 14, 9);