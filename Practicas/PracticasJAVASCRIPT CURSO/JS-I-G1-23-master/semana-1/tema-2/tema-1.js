3 == 3 // ?
3 != 0 // ?

4 > 3 //?
3 < 4 // ?

let dia = 28
dia <= 28 //?

const MESES = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
]


let fecha = new Date('09-28-2023');
fecha.getDate() //?
fecha.getMonth() //?
MESES[fecha.getMonth()] // ?

fecha.getDay() // ?

if (fecha.getDate() == 28 && fecha.getMonth() == 8) {
    // jueves 28 - hoy
    console.log('Hoy es jueves 28');
} else {
    // Otra fecha
    console.log('No es hoy.');
}

console.log('Aqui continua');

console.log('Aqui termina');

// Operando AND
let esNavidad = fecha.getMonth() == 11 && fecha.getDate() == 25
esNavidad //?

// Operando OR
let mascota = false || false || false || null;
mascota // ?

// Operando NOT
!esNavidad // ?

!false //? 

!true //?

// Operando NULLISH ( considera undefined null)
mascota ?? 'Sin mascota' // ?