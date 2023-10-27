export default class Dato {

    constructor(descripcion, valor) {
        this._descripcion = descripcion
        this._valor = valor
    }

    getDescripcion = () => this._descripcion
    setDescripcion = (nuevo) => this._descripcion = nuevo

    getValor = () => this._valor
    setValor = (nuevo) => this._valor = nuevo
}