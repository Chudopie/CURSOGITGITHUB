// Limpiamos la consola
console.clear();

// Prueba con var
var numero = 30;
console.log(numero); // esperamos 30

if (true) {
    var numero = 40;
    console.log(numero); // esperamos 40
    let otrovalor = 'dentro del if'
}

console.log(numero);

// Prueba con let
let texto = "Curso de JS";
console.log(texto); // Esperamos: "Curso de JS"

if (true) {
    let texto = "Curso de PHP";
    console.log(texto); // Esperamos: "Curso de PHP"
}

console.log(texto);
