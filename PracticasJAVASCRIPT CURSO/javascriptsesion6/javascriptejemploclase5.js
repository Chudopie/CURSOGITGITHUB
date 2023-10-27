class Moneda {
  _valor;
  _codigo;

  constructor(valor, codigo) {
    this._valor = valor;
    this._codigo = codigo;
  }

  getTipoCambio(cantidad) {
    return this._valor * cantidad;
  }
}

class Euro extends Moneda {
  constructor() {
    super(0.53, "EUR");
  }
}

class PesoMexicano extends Moneda {
  constructor() {
    //Llama al constructor de la clase de la que heredamos
    //new Moneda()
    super(1, "MXN");
  }

  covertirAEuro(cantidad) {
    const EURO = new Euro();
    return EURO._valor * this._valor * cantidad + "" + EURO._codigo;
  }
}

const pesoMXN = new PesoMexicano();
pesoMXN._codigo; // ?
pesoMXN.convertirAEuro(100); // ?

const euro = new Euro();
euro._codigo; // ?
