const contarCaracteres = (cadenaDeTexto = "") => {
    const longitud = cadenaDeTexto.length
    if (cadenaDeTexto.length == 0) {
        console.warn("No ingresaste ninguna cadena.")
    } else {
        console.log(`La cadena "${cadenaDeTexto}" tiene ${longitud} caracteres.`)
    }
}

const pelicula = (nombre_pelicula) => `El nombre de la película es: ${nombre_pelicula}`

// Callback: Usar dos valores que vienen del resultado del método
const sumame = (a, b) => a + b

sumame(sumame(2, 4), sumame(4, 4))

// Expresión regular
const validarEmail = () => {
    // Obtener un valor desde el HTML 
    document.querySelector("#campoTexto")
    document.getElementById("campoTexto")
    campoTexto.val

    let inputEmail = document.getElementById("campoTexto").value
    console.log('email', inputEmail);

    const REGEXP = new RegExp(/[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*\.[a-z]{2,15}/i);
    return REGEXP.test(inputEmail) ? "Correcto" : "Incorrecto"
}
