const Mamifere = require("./Mamifere");

// Heritage
class Rongeur extends Mamifere {
  constructor(nom) {
    super(nom);
    this.nbDents = 42;
    this.lifetime = 30;
  }

  ronger() {
    console.log("Je suis entrain de ronger");
  }

  attaquer(rongeur) {
    rongeur.points -= 20;
    console.log(`${this.nom} attaque`);
  }

  /**
   * Overriding: Reecriture de méthode
   */
  manger() {
    super.manger();
    console.log("Je mange en grignotant");
  }
}

module.exports = Rongeur;
