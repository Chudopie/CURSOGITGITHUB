
class Moneda {
    tipodecambio
    constructor(valor) {
        this.tipodecambio = valor
    }
    setTipodecambio(nuevoValor) {
        this.tipodecambio = nuevoValor
    }

}

const USD = new Moneda(tipodecambio = 13)
// cada hora cambia
USD.setTipodecambio(15)
USD.setTipodecambio(20)
USD.setTipodecambio(30)
