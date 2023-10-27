// Condicionales
let esLunes = false

if (!esLunes) {
    console.log('Hoy es lunes.'); // ?
}

const esVerdad = (variable) => (variable === true)
let esMartes = false;
esVerdad(esMartes) // ?

if (esVerdad(esMartes)) {
    console.log('Hoy es martes');
} else {
    console.log('No es martes');
}

let esJueves = false

if (esLunes) {
    console.log('Lunes'); // ?
} else if (esMartes) {
    console.log('Aqui si funciona');
} else if (esJueves) {
    console.log('Ahora es jueves');
} else {
    console.log('otro día');
}

// Usando SWITCH
let hora = 15
const HORAS_TARDE = [
    12, 13, 14, 15, 16, 17, 18, 19
]

HORAS_TARDE.includes(13) // ?

if (hora >= 12 && hora < 20) {
    console.log('Es de tarde');
}

switch (hora) {
    case 9:
    case 10:
    case 11:
        console.log('Buenos días');
        console.log('Dentro de la hora de la mañana');
        let coffee = true
        if (coffee) {
            console.log('queda café');
        }
        break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        console.log('Buenas tardes');
        break;

    case 20:
    case 21:
    case 22:
        console.log('Buenas noches');
        break;

    default: console.log('Hola.');
}

console.log('Ya salimos del switch');
