// Asignación de variables
const hola = () => 4

function holafun() {
    return 4;
}

// Función como parámetro
function funcionMap(valor) {
    console.log('Valor:', valor);
    return valor
}

[1, 2, 3, 4].map(funcionMap)


// Funciones puras e impuras
let fecha = () => Date.now
fecha() // ?
fecha() // ?

// Personalizamos el formato de la fecha
const f = new Date()
let formato = "dia/mes/año"
formato = formato.replace('dia', f.getDate())
formato = formato.replace('mes', 'septiembre')
formato = formato.replace('año', '2020')
formato = formato.replace("dia-mes-año".replace('dia', f.getDay()));
formato

// Función impura
const tiempo = () => Date.now()
tiempo();//?
tiempo();//?


// Función pura
const suma = (a, b) => (a + b)
suma(2, 5) // ?
suma(2, 5) // ?


// Cambio de valor en variable global
// window - alcance/scope global/padre
var variable_global = 5 // window.variable_global

// Hereda directamente el alcance/scope de window
const funcion = x => { // window.funcion
    // this = window
    variable_global = 0
}

// Crea su propio alcance/scope como hijo de window
function ejemplo() { // window.ejemplo
    // this = ejemplo
    variable_global
    // No se puede acceder a "a" desde afuera de este metodo
    return function a() {
        console.log('SCOPE', this);
        return 'funcion dentro de ejemplo'
    }
}


// Strings inmutables
//  012345678901234567890123
const cadena = "Este string es inmutable"
const cadena1 = cadena.slice(5, 11)
const cadena2 = cadena.toUpperCase()

cadena
cadena1
cadena2

// Arreglos mutables
const arreglo = {
    a: 1,
    b: 2,
    c: 3
}
const nuevoArreglo = { ...arreglo, c: 4, d: 5 }
nuevoArreglo
