// Esta función carga cuando carga el sitio
function PaginaLista() {
    console.log('Ya cargó el sitio.');
    console.log(Saludo("Alan"));
    /*
        Esta función imprime una suma
        Ejemplo: sumar(4)
        Ejemplo: sumar(4,10)
    */
    console.log('Resultado de la suma', sumar(4));
}

function sumar(valor1 = 0, valor2 = 0) {
    console.log('valor1', valor1);
    console.log('valor2', valor2);
    return valor1 + valor2
}

/**
 * Imprime un saludo con o sin nombre
 * @param {string} nombre El nombre de alguien
 * @returns Va a devolver un saludo con el nombre que le indiques
 */
let variable = "MUNDO de afuera"

function Saludo(nombre) {
    const semana = {
        lunes: 1,
        martes: 2,
        miercoles: 3
    }
    console.log(semana);
    return `Hola ${nombre} desde Javascript.`
}

