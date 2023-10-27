//Trer valores del formulario
const extraerDeFormulario = (nombreFormulario, nombreCampo) => {
  const formulario = document.getElementById(nombreFormulario);
  console.log("formulario", formulario);

  //validamos que exista el formulario
  if (formulario) {
    return formulario.elements[nombreCampo].value;
  }
};
//poner texto en la etiqueta estado del formulario perro

const cambiarEstado = (mensaje) => {
  const etiquetaestado = document.getElementById("estadoperro");
  if (etiquetaestado) {
    //comparamos que exista la etiqueta
    etiquetaestado.innerText = mensaje;
  }
};

class Perro {
  raza;
  altura;
  nombre;

  constructor() {
    this.raza = "callejero";
    this.altura = "38";
    this.nombre = "perro sin nombre";
    console.log("Se creo el objeto Perro"), this;
    this.ladrar();
  }

  //acciones de un perro (Metodos)
  ladrar() {
    let nombreperro = extraerDeFormulario("perro", "nombre");
    cambiarEstado(`${nombreperro} esta ladrando`);
  }

  comer() {
    let alimento = extraerDeFormulario("perro", "comida");
    let nombre = extraerDeFormulario("perro", "nombre");
    return `${nombre} come ${alimento}`;
  }
  dormir() {
    let nombre = extraerDeFormulario("perro", "nombre");
    cambiarEstado(`${nombre} esta duermiendo `);
  }
}

const primerPerro = new Perro();
// primerPerro.comer();
console.log("Nombre del primer perro: ", primerPerro.nombre);
