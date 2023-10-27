// Objeto de formulario
let formulario = {
    nombre: 'Ingrese un nombre',
    correo: 'Ingrese el correo',
    comentario: 'Ingrese comentario',
    estado_civil: '',
    conyuge: 'asasdas'
}

// viene de un input que introdujo el usuario
let nombre = 'Eduardo'
let correo = null
let estado_civil = 'S'
const comentario = 'Gracias por el servicio'

if (estado_civil == 'S') {
    formulario = { ...formulario, conyuge: '' }
}
if (nombre) {
    formulario = { ...formulario, nombre }
}
if (correo) {
    formulario = { ...formulario, correo }
}
if (comentario) {
    formulario = { ...formulario, comentario }
}

formulario // ?
