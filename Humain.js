const Mamifere = require("./Mamifere");

// Heritage
class Humain extends Mamifere {
  parler() {
    console.log("Je suis entrain de parler");
  }
}

module.exports = Humain;
