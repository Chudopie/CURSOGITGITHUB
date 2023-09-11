// Declaración de una función básica con parámetros
function sum(a, b) {
  return a + b;
}

// Declaración de una función asignada a una variable
const multiply = function (a, b) {
  return a * b;
};

// Declaración de una función anónima
const divide = function (a, b) {
  return a / b;
};

// Declaración de una función flecha (arrow function)
const subtract = (a, b) => {
  return a - b;
};

// Declaración de una función flecha simplificada
const square = (a) => a * a;

// Llamado a las funciones con distintos parámetros
setTimeout(() => {
  console.log(sum(2, 3)); // Salida esperada: 5
}, 5000);

console.log(multiply(2, 3)); // Salida esperada: 6
console.log(divide(6, 3)); // Salida esperada: 2
console.log(subtract(6, 3)); // Salida esperada: 3
console.log(square(4)); // Salida esperada: 16
