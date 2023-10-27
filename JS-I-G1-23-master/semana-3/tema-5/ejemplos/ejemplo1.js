// Poner texto en la etiqueta estado del formulario perro
const cambiarEstado = (mensaje) => {
    const etiquetaestado = document.getElementById('estadoperro')
    if (etiquetaestado) { // Comprobamos que exista la etiqueta
        etiquetaestado.innerText = mensaje
    }
}

// Clase padre
class Animal {
    _tipo // Gato | Perro
    _raza
    _nombre
    _comida
    _altura
    _alimento

    constructor(tipodeanimal) {
        this._tipo = tipodeanimal
    }

    // getter con Notación flecha
    getTipo = () => this._tipo
    getRaza = () => this._raza
    getAltura = () => this._altura
    getNombre = () => this._nombre
    getAlimento = () => this._alimento
    // Métodos setter
    setRaza = (raza) => this._raza = raza
    setAltura = (altura) => this._altura(altura)
    setNombre = (nombre) => this._nombre = nombre
    setAlimento = (alimento) => this._alimento = alimento

    // Métodos comunes
    comer() {
        return (`${this.getNombre()} está comiendo ${this.getAlimento()}`)
    }

    dormir() {
        return (`${this.getNombre()} está durmiendo`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza, altura, alimento) {
        // Valores iniciales al crear el objeto
        super('Perro')
        this._nombre = nombre
        this._raza = raza
        this._altura = altura
        this._alimento = alimento
    }

    // acciones de un perro (Métodos)
    ladrar() {
        return (`${this.getNombre()} está ladrando`);
    }
}

class Gato extends Animal {
    // propiedades privadas (con guión bajo)
    _color

    constructor(nombre, raza, altura, alimento, color) {
        super('Gato')
        // Valores iniciales al crear el objeto
        this._nombre = nombre
        this._raza = raza
        this._altura = altura
        this._alimento = alimento
        this._color = color
    }

    // getter con Notación flecha
    getColor = () => this._color
    setColor = (color) => this._color = color

    // acciones de un gato (Métodos)
    ronronear() {
        this.aranar()
        return (`${this.getNombre()} está ladrando`);
    }
}

// Métodos que se pueden usar para cada clase
Animal.prototype.aranar = function () {
    console.log('Arañando', this._nombre);
}

// Crear o instanciar clase Perro
const primerPerro = new Perro('firulais', 'schnauzer', 40, 'croquetas')
const segundoPerro = new Perro('Filomeno', 'Malix', 30, 'pollo')

const primerGato = new Gato('fifi', 'egipcio', 30, 'croquetas', 'negro')
const segundoGato = new Gato('Mufa', 'tabi', 25, 'comida enlatada', 'naranja')

console.log(Gato.prototype.aranar())
