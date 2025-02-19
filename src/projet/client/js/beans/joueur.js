class joueur {
    setNom(nom) {
        this.nom = nom;
    }
  
    getNom() {
        return this.nom;
    }
  
    setPrenom(prenon) {
        this.prenon = prenon;
    }
  
    getPrenon() {
        return this.prenon;
    }

    setDateNaissance(dateNaissance) {
        this.dateNaissance = dateNaissance;
    }
    
    getDateNaissance() {
        return this.dateNaissance;
    }
  
    setPhoto(photo) {
        this.photo = photo;
    }
  
    getPhoto() {
        return this.photo;
    }
  
    setDescription(description) {
        this.description = description;
    }
  
    getDescription() {
        return this.description;
    }
  
    setFkPosition(fkPosition) {
        this.fkPosition = fkPosition;
    }
  
    getFkPosition() {
        return this.fkPosition;
    }

    setFkEquipe(fkEquipe) {
        this.fkEquipe = fkEquipe;
    }
    
    getFkEquipe() {
        return this.fkEquipe;
    }

    setFkNationalite(fkNationalite) {
        this.fkNationalite = fkNationalite;
    }
    
    getFkNationalite() {
        return this.fkNationalite;
    }
  
    /**
     * Retourne le nom de l'équipe sous forme de texte
     * @returns {string} Le nom de l'équipe
     */
    toString() {
      return this.nom;
    }
  }