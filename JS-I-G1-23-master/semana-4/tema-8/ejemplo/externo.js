function eventoExterno() {
    console.log('Este evento se encuentra en otro archivo.');
}

function eventoExternoAsignandoFuncion() {
    console.warn('Llamando al evento externo desde JS')
}
// Usando Javascript para asignar valores a los eventos
// Obtenemos usando class, id o tag
// const divBorde = document.getElementsByClassName('borde-div-js')[0]
const divBorde = document.querySelector('.borde-div-js')

divBorde.addEventListener('click', eventoExternoAsignandoFuncion)


// Agregar y quitar atributos
function cambiarClase(nombre, elemento) {
    elemento.classList.toggle(nombre)
}

// mostrarContenido
const mostrarContenido = () => {
    const contenedor = document.getElementById('contenedor')
    contenedor.classList.remove('contenedor')
}
