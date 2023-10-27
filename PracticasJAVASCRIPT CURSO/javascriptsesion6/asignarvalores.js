//asiignacion de variables

const hola = () => 4;

function holafun() {
  return 4;
}

//Funcion como parametro
function funcionMap(valor) {
  console.log("Valor:", valor); // ?
  return valor;
}
//funcion asincrona

[1, 2, 3, 4].map(funcionMap); // ?

async function ejemplo() {
  setTimeout(() => {
    return "ok";
  }, 5000);
}

ejemplo()
  .then(() => {
    console.log("OK");
  })

  .catch(() => {
    console.log("error");
  });

console.log("algo extra");

//Funciones puras e impuras
let fecha = () => Date.now();
fecha(); // ?
fecha(); // ?

const f = new Date();
f.getMonth(); // ?
f.getDay(); // ?

//funcion impura
const tiempo = () => new Date();
tiempo(); // ?
tiempo(); // ?

//funcion pura
const suma = (a, b) => a + b;
suma(2, 5); // ?
suma(2, 5); // ?

//Cambio de valor en variable global
//window - alcance/scope global/padre
var variable_global = 5; //window.variable_global

//Hereda directamente el alcance/scope  de window
const funcion = (x) => {
  //window.funcion
  //this = Window
  variable_global;
};

//this funciona solo a funciones que se declaran con function
//Crea su propio alcance/scope como hijo de window
function ejemplo() {
  //this = ejemplo
  variable_global;
  return function a() {
    console.log("SCOPE", this);
    return "function dentro de ejemplo";
  };
}

//strings inmutables
//01234567890123456798
const cadena = "Este string es inmutable";
const cadena1 = cadena.slice(5, 11);
const cadena2 = cadena.toUpperCase();

cadena; // ?
cadena1; // ?
cadena2; // ?

// Arreglos inmutables
