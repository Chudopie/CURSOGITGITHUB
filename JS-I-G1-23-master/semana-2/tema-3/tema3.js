function saludo(nombre) {
    const saludo_template = "Buenas noches " + nombre
    console.log(this); // ?
    // return mensajeDeBuenasNoches() //?
    return saludo_template
}

const mensajeDeBuenasNoches = (mensaje) => {
    console.log('this de arrow function');
    const template = `Hola ${mensaje} Buenas noches`
    // return this
    console.log(this);
    return template
}

const mensajeDeSaludo = (mensaje) => mensajeDeBuenasNoches(mensaje)

let elnombredelparametro = "Grupo 1"

saludo(elnombredelparametro) //?

mensajeDeSaludo("Grupo de JS") // ?

mensajeDeBuenasNoches("Grupo Javascript") // ?
