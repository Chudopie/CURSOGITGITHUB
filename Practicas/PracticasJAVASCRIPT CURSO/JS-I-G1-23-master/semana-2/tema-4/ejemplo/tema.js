// Objeto vacío
let ataques = {
    golpe: 1,
    patada: 2
}

let habilidades = {
    patadaVoladora: 5,
    especial: 8
}

// Concatenar objetos
const todo = { ...ataques, ...habilidades }
const separados = { ataques, habilidades }

todo.especial // ?
separados.ataques.golpe //?

const jugador = {
    nombre: 'Ryu', // Esta es una propiedad
    poder: 10,
    vida: 99,
    jugando: true,
    debilidad: null,
    // asignar un objeto o valor con el mismo nombre
    ataques,
    saludar: () => 'Hola soy ' + jugador.nombre
}

// Asignar valores
jugador.nombre = 'Ryu'
jugador['nombre'] = 'Ryu'

jugador.ataques = ataques
jugador['ataques'] = ataques

jugador // ?
jugador.saludar() //?
jugador // ?

