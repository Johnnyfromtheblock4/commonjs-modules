// Importa la tua funzione da names.js Importa la tua funzione da hobbies.js Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

// importo le funzioni
const names = require("./assets/names");
const hobbies = require("./assets/hobbies");

const getSubjectInfo = () => {
  return {
    names: names("Simone", "Visconti"),
    hobbies: hobbies("Scacchi", "Leggere", "Hiking"),
  };
};

console.log(getSubjectInfo());
