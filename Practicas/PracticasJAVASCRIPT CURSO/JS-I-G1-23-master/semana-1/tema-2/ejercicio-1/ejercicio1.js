function comprobarFormulario() {
    let num1 = validarNumero(extraerNumeros(numero1.value));
    let num2 = validarNumero(extraerNumeros(numero2.value));

    // Declaramos junto sin asignar valor inicial
    let numero_mayor, numero_menor, son_iguales
    numero_mayor = numero_menor = son_iguales = false

    if (num1 > num2) {
        numero_mayor = num1
        numero_menor = num2
    } else if (num2 > num1) {
        numero_mayor = num2
        numero_menor = num1
    } else {
        numero_mayor = num1
        numero_menor = num1
        son_iguales = true
    }

    // Mostrar el resultado en el label
    resultado.innerHTML = `
    <p>Son iguales: ${son_iguales}<p>
    <p>Número mayor: ${numero_mayor}<p>
    <p>Número menor: ${numero_menor}<p>
`
}

// Devuelve un número que podemos usar para hacer operaciones
// isNaN : is Not a Number
const validarNumero = (numero) => isNaN(numero) ? 0 : parseInt(numero)

// Extraer números
function extraerNumeros(valor) {
    let valorString = "" + (valor || "");
    return valorString.replace(/[a-z]/ig, '')
}

// Pedir números por prompt y mostrar en consola cuando sea mayor a cero
function validarNumeroMayoresA0() {
    let numero_ingresado = 0
    let suma = 0
    let total_numeros = 0

    do {
        numero_ingresado = parseInt(prompt("Ingresa un número mayor a cero."))
        console.log('Número ingresado:', numero_ingresado);
        if (numero_ingresado < 0) {
            break
        }
        total_numeros++ // Aumenta la cuenta de los ingresados
        suma += numero_ingresado
    } while (numero_ingresado >= 0);

    console.group("Ejemplo con while")
    console.log('suma', suma);
    console.log('total numeros', total_numeros);

    // Imprimir el resultado en el documento
    document.write('Números ingresados:', total_numeros, 'Media:', (suma / total_numeros))

    console.log('Números ingresados:', total_numeros, 'Media:', (suma / total_numeros));
    console.groupEnd()

}
