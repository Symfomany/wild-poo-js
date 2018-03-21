class Mamifere {
  constructor(nom) {
    this.nom = nom;
    this.lifetime = 90;
    this.points = 100;
  }

  seDeplacer() {
    console.log("Je me deplacer");
  }

  manger() {
    console.log("Je mange de la viande");
  }
}

module.exports = Mamifere;
