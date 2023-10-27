const persona = {
    nombre: 'Francisco',
    fecha_nacimiento: ''
}

let frutas = ['uva', 'pera', 'manzana']

let verduras = ['chayote', 'rábano']

let frutas_y_verduras = [frutas, verduras]

frutas_y_verduras // ?
console.log(frutas_y_verduras);


// Array de números
const numeros = [11, 20, 33, 44, 35, 65, 67, 78, 39, 10]
const limite = numeros.length // ?
// 1 - Inicializamos posicion en 0
// Incremento de 0 a límite
for (var posicion = 0; posicion < limite; posicion++) {
    console.log(`Posición: ${posicion} . Valor actual: ${numeros[posicion]}`);
}

// Decremento de límite a 0
for (var posicion = limite - 1; posicion >= 0; posicion--) {
    const numero = numeros[posicion];
    console.log(`Posición: ${posicion} . Valor actual: ${numero}`);
}

const todos = ['Jorge', 'Eduardo', 'Francisco', 'H397364', 'Erik', 'Luis', 'Alejandro', 'Emmanuel', 'Cesar', 'Arturo']

todos.forEach((alguien, posicion) => {
    let indice = todos.length - 1 - posicion
    let item = todos[indice]
    console.log(`${item} tiene el número ${posicion} | Length:${todos.length - 1} - ${posicion} = ${indice}`);
})

let resultados = todos.filter((persona) => {
    return persona.startsWith('A')
})

delete todos[3]

console.log('Empieza con A', resultados);
