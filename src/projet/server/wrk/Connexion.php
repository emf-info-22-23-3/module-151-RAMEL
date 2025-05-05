<?php

/**
 * Classe Connexion
 *
 * Cette classe gère la connexion à la base de données via PDO.
 * Elle utilise le pattern Singleton pour garantir une unique instance de connexion.
 * Elle fournit des méthodes pour exécuter des requêtes SQL et gérer des transactions.
 */
class Connexion
{
    /**
     * L'unique instance de la classe (Singleton).
     *
     * @var Connexion|null
     */
    private static $_instance = null;

    /**
     * L'instance PDO utilisée pour la connexion à la base de données.
     *
     * @var PDO
     */
    private $pdo;

    /**
     * Retourne l'instance unique de la classe Connexion.
     * Crée une nouvelle instance si elle n'existe pas encore.
     *
     * @return Connexion Instance unique de Connexion
     */
    public static function getInstance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new Connexion();
        }
        return self::$_instance;
    }

    /**
     * Constructeur privé. Initialise la connexion à la base de données.
     */
    private function __construct()
    {
        try {
            $this->pdo = new PDO(
                'mysql:host=emf-informatique.ch;dbname=ramela_bd_SwissHockey',
                'ramela_ramela',
                'xMl*V@LXF!HM',
                array(
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
                    PDO::ATTR_PERSISTENT => true
                )
            );

            // Autre configuration alternative (désactivée)
            /*
            $this->pdo = new PDO(
                'mysql:host=mysql;dbname=bd_SwissHockey',
                'root',
                'root',
                array(
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
                    PDO::ATTR_PERSISTENT => true
                )
            );
            */
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    /**
     * Destructeur. Ferme la connexion à la base de données.
     */
    public function __destruct()
    {
        $this->pdo = null;
    }

    /**
     * Exécute une requête SELECT et retourne tous les résultats.
     *
     * @param string $query Requête SQL à exécuter.
     * @param array $params Paramètres de la requête (facultatif).
     * @return array Résultats du SELECT sous forme de tableau associatif.
     */
    public function selectQuery($query, $params)
    {
        try {
            $queryPrepared = $this->pdo->prepare($query);
            $queryPrepared->execute($params);
            return $queryPrepared->fetchAll();
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    /**
     * Exécute une requête SELECT et retourne un seul résultat.
     *
     * @param string $query Requête SQL à exécuter.
     * @param array $params Paramètres de la requête (facultatif).
     * @return array|false La première ligne du résultat ou false si aucune donnée.
     */
    public function selectSingleQuery($query, $params)
    {
        try {
            $queryPrepared = $this->pdo->prepare($query);
            $queryPrepared->execute($params);
            return $queryPrepared->fetch();
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    /**
     * Exécute une requête d'écriture (INSERT, UPDATE, DELETE).
     *
     * @param string $query Requête SQL à exécuter.
     * @param array $params Paramètres de la requête (facultatif).
     * @return int Nombre de lignes affectées.
     */
    public function executeQuery($query, $params)
    {
        try {
            $queryPrepared = $this->pdo->prepare($query);
            $queryPrepared->execute($params);
            return $queryPrepared->rowCount();
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    /**
     * Retourne l'ID du dernier enregistrement inséré dans une table.
     *
     * @param string|null $table Nom de la table (facultatif, dépend du SGBD).
     * @return string ID du dernier élément inséré.
     */
    public function getLastId($table)
    {
        try {
            return $this->pdo->lastInsertId($table);
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    /**
     * Démarre une transaction.
     *
     * @return bool True si la transaction a été démarrée avec succès.
     */
    public function startTransaction()
    {
        return $this->pdo->beginTransaction();
    }

    /**
     * Ajoute une requête à la transaction en cours.
     *
     * @param string $query Requête SQL à exécuter.
     * @param array $params Paramètres de la requête.
     * @return bool True si la requête a été exécutée avec succès.
     */
    public function addQueryToTransaction($query, $params)
    {
        $res = false;
        if ($this->pdo->inTransaction()) {
            $maQuery = $this->pdo->prepare($query);
            $res = $maQuery->execute($params);
        }
        return $res;
    }

    /**
     * Valide la transaction en cours.
     *
     * @return bool True si la validation a réussi.
     */
    public function commitTransaction()
    {
        $res = false;
        if ($this->pdo->inTransaction()) {
            $res = $this->pdo->commit();
        }
        return $res;
    }

    /**
     * Annule la transaction en cours.
     *
     * @return bool True si l'annulation a réussi.
     */
    public function rollbackTransaction()
    {
        $res = false;
        if ($this->pdo->inTransaction()) {
            $res = $this->pdo->rollBack();
        }
        return $res;
    }
}
