// Ejercicio 5
console.clear();

// Podemos declarar varias variables en la misma instrucción let.
let numero1 = 7, numero2 = 15;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let division = numero1 / numero2;
let multiplicacion = numero1 * numero2;

// Reutilizar la leyenda de resultado
const RESULTADO = "El resultado de la"

console.group(RESULTADO)
console.log("suma es:", suma)
console.log("resta es:", resta)
console.log("división es:", division)
console.log("multiplicación es:", multiplicacion)
console.groupEnd()

// alert(
//     `${RESULTADO} suma es: ${suma} \r
//  ${RESULTADO} resta es: ${resta} \r
//  ${RESULTADO} división es: ${division} \r
//  ${RESULTADO} multiplicación es: ${multiplicacion}`
// )

let numero_entero = 24;
let cadena_texto = "Hola 'que' tal";
let verdadero_o_falso = true;
let numero_falso = "33";

// Sumar
console.log(numero_entero + numero_falso);

console.log(parseInt(numero_falso));

// Imprimir los tipos de datos que declaramos
console.group("Tipos de datos")
console.log(typeof numero_entero, numero_entero);
console.log(typeof cadena_texto, cadena_texto);
console.log(typeof verdadero_o_falso, verdadero_o_falso);
console.log(typeof numero_falso, numero_falso);
console.groupEnd()
