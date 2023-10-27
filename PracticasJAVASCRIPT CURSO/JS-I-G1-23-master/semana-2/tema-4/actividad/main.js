const juego = {
    opciones: {
        0: '✂️',
        1: '✋🏻',
        2: '🤜🏻'
    },
    nombreJugadores: {
        jugador1: 'Jugador 1',
        jugador2: 'Computadora'
    },
    scores: {
        puntosJ1: 0,
        puntosJ2: 0
    }
}

const pedirNuevoNombre = () => prompt("Introduce el nombre.")

const cambiarNombre = () => {
    let nombre = pedirNuevoNombre()
    // Solo considera strings
    let REGEXP = new RegExp(/[a-zA-Z]/)

    // Si ingresa un string se asigna al jugador 1
    if (REGEXP.test(nombre)) {
        juego.nombreJugadores.jugador1 = nombre;
        document.getElementById('nombre_jugador').innerText = `¡Bienvenid@ ${nombre}!`
    } else {
        // Si no es un string se manda
        document.getElementById('nombre_jugador').innerText = `Mejor te llamaré ${juego.nombreJugadores.jugador1}!`;
    }
}

// Aleatorio entre 0 y 2
const aleatorio = () => Math.floor(Math.random() * 10) % 3

// Imprime la mano seleccionada por el usuario
const imprimirMano = (opcion) => juego.opciones[opcion]
// Devuelve un emoji según el número que salga en aleatorio()
const imprimirManoAleatoria = () => imprimirMano(aleatorio())

const imprimirResultado = () => {
    const { puntosJ1, puntosJ2 } = juego.scores

    if (puntosJ1 > puntosJ2) {
        return `Fin del juego, gana J1: ${juego.nombreJugadores.jugador1}`
    } else if (puntosJ1 < puntosJ2) {
        return `Fin del juego, gana J2: ${juego.nombreJugadores.jugador2}`
    } else {
        return `Fin del juego. Empate.`
    }
}

const ganador = (jugador1, jugador2) => {
    // console.log('opciones: ', jugador1, jugador2);
    if (jugador1 == jugador2) {
        console.log('Empate');
    } else if (jugador1 == 0 && jugador2 == 1) {
        console.log('Gana J1. Tijera vs Papel');
        juego.scores.puntosJ1 += 1;
    } else if (jugador2 == 0 && jugador1 == 1) {
        console.log('Gana J2. Tijera vs Papel');
        juego.scores.puntosJ2 += 1;
    } else if (jugador1 == 1 && jugador2 == 2) {
        console.log('Gana J1. Papel vs Piedra');
        juego.scores.puntosJ1 += 1;
    } else if (jugador2 == 1 && jugador1 == 2) {
        console.log('Gana J2. Papel vs Piedra');
        juego.scores.puntosJ2 += 1;
    } else if (jugador1 == 2 && jugador2 == 0) {
        console.log('Gana J1. Piedra vs Tijera');
        juego.scores.puntosJ1 += 1;
    } else if (jugador2 == 2 && jugador1 == 0) {
        console.log('Gana J2. Piedra vs Tijera');
        juego.scores.puntosJ2 += 1;
    }
}

const jugar = () => {
    let partidas = 3;

    cambiarNombre()
    console.log('Elige una opción', juego.opciones);
    while (partidas > 0) {
        let opcionJugador1 = prompt("Elige una opción 1-3")
        let opcionJugador2 = aleatorio()
        ganador(opcionJugador1, opcionJugador2)
        console.log('Jugador1: ' + imprimirMano(opcionJugador1), ' .Computadora: ', imprimirMano(opcionJugador2));
        // Vamos descontando partidas
        partidas--
    }
    imprimirResultado()
}

