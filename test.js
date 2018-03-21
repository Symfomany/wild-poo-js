const Mamifere = require("./Mamifere");
const Humain = require("./Humain");
const Rongeur = require("./Rongeur");

const sylvain = new Mamifere("Sylvain");
console.log(typeof sylvain === "object");
console.log(sylvain.seDeplacer());

const yann = new Humain("Yann");
yann.parler();
yann.seDeplacer();

const hakim = new Rongeur("Hakim");
const benjamin = new Rongeur("Benjamin");

hakim.ronger();
console.clear();
yann.manger();
hakim.manger();
sylvain.manger();
console.clear();
console.log(hakim);
console.log(hakim.manger());
console.clear();
hakim.attaquer(benjamin);
hakim.attaquer(yann);
console.log(benjamin, hakim, yann);
