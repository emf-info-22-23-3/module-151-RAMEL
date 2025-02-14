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

INSERT INTO `T_Canton` (`nom`, `abreviation`) VALUES
1('Argovie', 'AG'),
2('Appenzell Rhodes-Extérieures', 'AR'),
3('Appenzell Rhodes-Intérieures', 'AI'),
4('Bâle-Campagne', 'BL'),
5('Bâle-Ville', 'BS'),
6('Berne', 'BE'),
7('Fribourg', 'FR'),
8('Genève', 'GE'),
9('Glaris', 'GL'),
10('Grisons', 'GR'),
11('Jura', 'JU'),
12('Lucerne', 'LU'),
13('Neuchâtel', 'NE'),
14('Nidwald', 'NW'),
15('Obwald', 'OW'),
16('Schaffhouse', 'SH'),
17('Schwytz', 'SZ'),
18('Soleure', 'SO'),
19('Saint-Gall', 'SG'),
20('Tessin', 'TI'),
21('Thurgovie', 'TG'),
22('Uri', 'UR'),
23('Valais', 'VS'),
24('Vaud', 'VD'),
25('Zoug', 'ZG'),
26('Zurich', 'ZH');

-- Table T_Equipe
CREATE TABLE T_Equipe (
    PK_Equipe INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    abreviation VARCHAR(5) NOT NULL,
    dateCreation DATE NOT NULL,
    photo VARCHAR(60) NOT NULL,
    trophe VARCHAR(200),
    fkCanton INT NOT NULL,
    FOREIGN KEY (fkCanton) REFERENCES T_Canton(PK_Canton)
);

--
-- Contenu de la table `T_Equipe`
--

INSERT INTO T_Equipe (`nom`, `abreviation`, `dateCreation`, `photo`, `trophe`, `fkCanton`) VALUES
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
CREATE TABLE T_Position (
    PK_Position INT PRIMARY KEY AUTO_INCREMENT,
    position VARCHAR(2) NOT NULL
);

--
-- Contenu de la table `T_Equipe`
--

INSERT INTO T_Equipe (`position`) VALUES
('F'),
('D'),
('G'),


-- Table T_Nationalite
CREATE TABLE T_Nationalite (
    PK_Nationalite INT PRIMARY KEY AUTO_INCREMENT,
    nationalite VARCHAR(45) NOT NULL
);

--
-- Contenu de la table `T_Nationalite`
--

INSERT INTO T_Nationalite (nationalite) VALUES
('Afghane'),
('Albanaise'),
('Algérienne'),
('Allemande'),
('Américain'),
('Andorrane'),
('Angolaise'),
('Antiguaise-et-Barbudienne'),
('Argentine'),
('Arménienne'),
('Australienne'),
('Autrichienne'),
('Azerbaïdjanaise'),
('Bahaméenne'),
('Bahreinienne'),
('Bangladaise'),
('Barbadienne'),
('Belge'),
('Bélizienne'),
('Béninoise'),
('Bhoutanaise'),
('Biélorusse'),
('Birmane'),
('Bolivienne'),
('Bosnienne'),
('Botswanaise'),
('Brésilienne'),
('Britannique'),
('Brunéienne'),
('Bulgare'),
('Burkinabé'),
('Burundaise'),
('Cambodgienne'),
('Camerounaise'),
('Canadienne'),
('Capverdienne'),
('Centrafricaine'),
('Chilienne'),
('Chinoise'),
('Chypriote'),
('Colombienne'),
('Comorienne'),
('Congolaise (RDC)'),
('Congolaise (RC)'),
('Costaricaine'),
('Croate'),
('Cubaine'),
('Danoise'),
('Djiboutienne'),
('Dominicaine'),
('Dominiquaise'),
('Égyptienne'),
('Émiratie'),
('Équatorienne'),
('Érythréenne'),
('Espagnole'),
('Estonienne'),
('Éthiopienne'),
('Fidjienne'),
('Finlandaise'),
('Française'),
('Gabonaise'),
('Gambienne'),
('Géorgienne'),
('Ghanéenne'),
('Grenadienne'),
('Guatémaltèque'),
('Guinéenne'),
('Guinéenne-Bissau'),
('Guyanienne'),
('Haïtienne'),
('Hellénique (Grecque)'),
('Hondurienne'),
('Hongroise'),
('Indienne'),
('Indonésienne'),
('Irakienne'),
('Iranienne'),
('Irlandaise'),
('Islandaise'),
('Israélienne'),
('Italienne'),
('Ivoirienne'),
('Jamaïcaine'),
('Japonaise'),
('Jordanienne'),
('Kazakhstanaise'),
('Kényane'),
('Kirghize'),
('Kiribatienne'),
('Koweïtienne'),
('Laotienne'),
('Lesothienne'),
('Lettone'),
('Libanaise'),
('Libérienne'),
('Libyenne'),
('Liechtensteinoise'),
('Lituanienne'),
('Luxembourgeoise'),
('Macédonienne'),
('Malaisienne'),
('Malawienne'),
('Maldivienne'),
('Malienne'),
('Maltaise'),
('Marocaine'),
('Marshallaise'),
('Mauricienne'),
('Mauritanienne'),
('Mexicaine'),
('Micronésienne'),
('Moldave'),
('Monégasque'),
('Mongole'),
('Monténégrine'),
('Mozambicaine'),
('Namibienne'),
('Nauruane'),
('Népalaise'),
('Nigérienne'),
('Nigériane'),
('Norvégienne'),
('Néo-Zélandaise'),
('Omanaise'),
('Ougandaise'),
('Ouzbèke'),
('Pakistanaise'),
('Palaosienne'),
('Palestinienne'),
('Panaméenne'),
('Papouasienne-Néo-Guinéenne'),
('Paraguayenne'),
('Néerlandaise'),
('Péruvienne'),
('Philippine'),
('Polonaise'),
('Portugaise'),
('Qatari'),
('Roumaine'),
('Russe'),
('Rwandaise'),
('Saint-Lucienne'),
('Saint-Marinaise'),
('Salvadorienne'),
('Samoane'),
('Saoudienne'),
('Sénégalaise'),
('Serbe'),
('Singapourienne'),
('Slovaque'),
('Slovène'),
('Somalienne'),
('Soudanaise'),
('Sri-Lankaise'),
('Sud-Africaine'),
('Sud-Soudanaise'),
('Suédoise'),
('Suisse'),
('Surinamaise'),
('Syrienne'),
('Tadjike'),
('Tanzanienne'),
('Tchadienne'),
('Tchèque'),
('Thaïlandaise'),
('Timoraise'),
('Togolaise'),
('Tongienne'),
('Trinidadienne'),
('Tunisienne'),
('Turkmène'),
('Turque'),
('Tuvaluane'),
('Ukrainienne'),
('Uruguayenne'),
('Vanuataise'),
('Vaticane'),
('Vénézuélienne'),
('Vietnamienne'),
('Yéménite'),
('Zambienne'),
('Zimbabwéenne');


-- Table T_Joueur
CREATE TABLE T_Joueur (
    PK_Joueur INT PRIMARY KEY AUTO_INCREMENT,
    prenom VARCHAR(45) NOT NULL,
    nom VARCHAR(45) NOT NULL,
    dateNaissance DATE,
    photo VARCHAR(60),
    description VARCHAR(200),
    fkPosition INT NOT NULL,
    fkEquipe INT NOT NULL,
    fkNationalite INT NOT NULL,
    FOREIGN KEY (fkPosition) REFERENCES T_Position(PK_Position),
    FOREIGN KEY (fkEquipe) REFERENCES T_Equipe(PK_Equipe),
    FOREIGN KEY (fkNationalite) REFERENCES T_Nationalite(PK_Nationalite)
);

--
-- Contenu de la table `T_Joueur`
--

INSERT INTO T_Joueur (prenom, nom, dateNaissance, photo, description, fkPosition, fkEquipe, fkNationalite)
VALUES
('Julius', 'Nättinen', '1997-01-14', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 1, 61),
('Anttoni', 'Honka', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 1, ),
('Benjamin', 'Conz', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 1, ),
('Dominik', 'Kubalik', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 2, ),
('Jesse', 'Virtanen', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 2, ),
('Gilles', 'Senn', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 2, ),
('Austin', 'Czarnik', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 3, ),
('Loeffel', 'Loeffel', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 3, ),
('Adam', 'Reideborn', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 3, ),
('Toni', 'Rajala', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 4, ),
('Alexander', 'Yakovenko', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', , 2, 4, ),
('Harri', 'Säteri', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 4, ),
('Adam', 'Tambellini', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 5, ),
('Julius', 'Honka', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 5, ),
('Sandro', 'Aeschlimann', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 5, ),
('Lucas', 'Wallmark', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 6, ),
('Ryan', 'Gunderson', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 6, ),
('Reto', 'Berra', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 6, ),
('Sakari', 'Manninen', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 7, ),
('Sami', 'Vatanen', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 7, ),
('Antti', 'Raanta', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 7, ),
('Miro', 'Aaltonen', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 8, ),
('Sami', 'Niku', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 8, ),
('Sandro', 'Zurkirchen', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 8, ),
('Antti', 'Suomela', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 9, ),
('David', 'Sklenicka', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 9, ),
('Kevin', 'Pasche', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 9, ),
('Luca', 'Fazzini', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 10, ),
('Santeri', 'Alatalo', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 10, ),
('Niklas', 'Schlegel', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 10, ),
('Harri', 'Pesonen', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 11, ),
('Vili', 'Saarijärvi', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 11, ),
('Stéphane', 'Charlin', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 11, ),
('Malte', 'Strömwall', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 12, ),
('Philip', 'Holm ', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 12, ),
('Melvin', 'Nyffeler', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 12, ),
('Derek', 'Grant', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 13, ),
('Dean', 'Kukan', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 13, ),
('Simon', 'Melvin ', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 13, ),
('Lino', 'Martschini', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 1, 14, ),
('Lukas', 'Bengtsson', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 2, 14, ),
('Tim', 'Wolf', '1992-12-12', 'https://ramela.emf-informatique.ch/151/img/.png', '', 3, 14, );

-- Table T_Utilisateur
CREATE TABLE T_Utilisateur (
    PK_Utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(20) NOT NULL,
    password VARCHAR(64) NOT NULL
);

-- Table T_Match
CREATE TABLE T_Match (
    PK_Match INT PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL,
    heure VARCHAR(5),
    goalDom INT,
    goalVisit INT
);

-- Table TR_Match_Equipe (Table de relation)
CREATE TABLE TR_Match_Equipe (
    RfMatch INT NOT NULL,
    RfEquipeDOM INT NOT NULL,
    RfEquipeVIS INT NOT NULL,
    PRIMARY KEY (RfMatch, RfEquipe),
    FOREIGN KEY (RfMatch) REFERENCES T_Match(PK_Match),
    FOREIGN KEY (RfEquipe) REFERENCES T_Equipe(PK_Equipe)
);