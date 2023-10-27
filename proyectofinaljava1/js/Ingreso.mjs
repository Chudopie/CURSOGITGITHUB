import Dato from './Dato.mjs'

export default class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor)
        this._id = this.contadorIngresos + 1
    }

    getId = () => this._id
}