const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((value, func) => func(value), data);

let descripcion = document.getElementById("descripcion");
let calorias = document.getElementById("calorias");
let carbohidratos = document.getElementById("carbohidratos");
let proteina = document.getElementById("proteina");

//Agregar funcion val
HTMLInputElement.prototype.isEmpty = function () {
  return this.value.length === 0 ? true : false;
};

function validarInput() {
  validar("descripcion");
  validar("calorias");
  validar("carbohidratos");
  validar("proteina");
}
//   if (descripcion.isEmpty()) {
//     descripcion.classList.add("is-invalid");
//   } else {
//     descripcion.classList.remove("is-invalid");
//   }

//   if (calorias.isEmpty()) {
//     calorias.classList.add("is-invalid");
//   } else {
//     calorias.classList.remove("is-invalid");
//   }

//   if (carbohidratos.isEmpty()) {
//     carbohidratos.classList.add("is-invalid");
//   } else {
//     carbohidratos.classList.remove("is-invalid");
//   }

//   if (proteina.isEmpty()) {
//     proteina.classList.add("is-invalid");
//   } else {
//     proteina.classList.remove("is-invalid");
//   }

const validar = (input) => {
  let element = document.getElementById(input);
  //opcion mas corta
  // element.isEmpty()? element.classList.add('is-invalid'): element.classList.remove('is-invalid')

  //opcion 2 mas clara
  if (element.isEmpty()) {
    element.classList.add("is-invalid");
  } else {
    element.classList.remove("is-invalid");
  }
};

function agregar() {
  let allInputs = documents.querySelectorALL("input");
  allInputs.forEach((inputelement) => {
    if (inputelement.value == "") {
      validarInput();
      return;
    }
  });
  //   let nuevoElemento = {
  //     descripcion: descripcion.value,
  //     calorias: calorias.value,
  //     carbohidratos: carbohidratos.value,
  //     proteina: proteina.value,
  //   };

  //sacar HTML de la tabla
  let tbodyHTML = document.getElementById("table-body").innerHTML;
  let nuevoHtml = `${tbodyHTML.innerHTML} <tr>
        <td>${descripcion.value}</td>
        <td>${calorias.value}</td>
        <td>${carbohidratos.value}</td>
        <td>${proteina.value}</td>

        </tr>`;
  tbodyHTML.innerHTML = nuevoHtml;
}
