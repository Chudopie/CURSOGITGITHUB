// Cambiar título de "ventana"
// Obtener valores de los elementos
const boton_cambiar = document.getElementById('btnCambiar')
const input_titulo_ventana = document.getElementById('inputTituloVentana')

// Esperar a evento
boton_cambiar.addEventListener('click', () => {
    document.title = input_titulo_ventana.value
})


// Cambiar Título del documento HTML
const titulo_documento = document.getElementById('tituloDocumento')
const input_titulo_documento = document.getElementById('inputTituloDocumento')
const boton_guardar = document.getElementById('btnGuardar')

boton_guardar.addEventListener('click', () => {
    titulo_documento.innerText = input_titulo_documento.value
})

// Cambiar el título a la par que cambia el input
const todos_los_inputs = document.querySelectorAll('input')
todos_los_inputs.forEach((un_input) => {
    // Título documento
    if (un_input.getAttribute('id') == 'inputTituloDocumento') {
        // Agregar evento onchange
        un_input.addEventListener('keyup', () => {
            document.getElementById('tituloDocumento').innerText = un_input.value
        })
    }
    // Título pestaña
    if (un_input.getAttribute('id') == 'inputTituloVentana') {
        // Agregar evento onchange
        un_input.addEventListener('keyup', () => {
            document.title = un_input.value
        })
    }
})


