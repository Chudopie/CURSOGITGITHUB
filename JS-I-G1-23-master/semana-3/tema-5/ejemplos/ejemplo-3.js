class Moneda {
    _valor
    _codigo

    constructor(valor, codigo) {
        this._valor = valor
        this._codigo = codigo
    }

    getTipoCambio(cantidad) {
        return this._valor * cantidad
    }
}

class Euro extends Moneda {
    constructor() {
        super(.053, 'EUR')
    }
}

class PesoMexicano extends Moneda {
    constructor() {
        // Llama al constructor de la clase de la que heredamos
        // new Moneda()
        super(1, 'MXN')
    }

    convertirAEuro(cantidad) {
        const EURO = new Euro()
        return (EURO._valor * this._valor * cantidad) + " " + EURO._codigo
    }
}

// Creamos los objetos a partir de las clases
const pesoMXN = new PesoMexicano()
pesoMXN._codigo // ?
pesoMXN.convertirAEuro(100) // ?

const euro = new Euro()
euro._codigo // ?
