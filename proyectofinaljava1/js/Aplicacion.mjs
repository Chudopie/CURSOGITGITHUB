import Ingreso from "./Ingreso.mjs";
import Egreso from "./Egreso.mjs";

// egresos e ingresos
window.ingresos = [
  new Ingreso("Salario", 20000),
  new Ingreso("Venta de coche", 50000),
];

window.egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800)];

export const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgresos = (totalEgresos() / totalIngresos()) * 100;

  document.getElementById("ingresos").innerText = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerText = formatoMoneda(totalEgresos());
  document.getElementById("porcentaje").innerText =
    formatoPorcentaje(porcentajeEgresos);
  document.getElementById("presupuesto").innerText = formatoMoneda(presupuesto);
};

const totalIngresos = () => {
  let total_ingresos = 0;
  for (const ingreso of window.ingresos) {
    total_ingresos = parseInt(total_ingresos) + ingreso.getValor();
  }
  return total_ingresos;
};

const totalEgresos = () => {
  let total_egresos = 0;

  for (const egreso of window.egresos) {
    total_egresos = parseInt(total_egresos) + egreso.getValor();
  }
  return total_egresos;
};

const formatoMoneda = (valor, moneda = "MXN") => {
  return `$${valor.toLocaleString()} ${moneda}`;
};

const formatoPorcentaje = (valor) => {
  return `${valor.toLocaleString()}%`;
};

const getHtmlIngreso = ({ getDescripcion, getValor }) => `
    <article class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${getDescripcion()}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(getValor())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar_btn">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </article>
    `;

export const cargarIngresos = () => {
  let htmlIngresos = "";

  for (const ingreso of window.ingresos) {
    htmlIngresos += getHtmlIngreso(ingreso);
  }

  document.getElementById("lista-ingresos").innerHTML = htmlIngresos;
};

const getHtmlEgreso = ({ getDescripcion, getValor }, posicion) => {
  let porcentaje = (getValor() / totalIngresos()) * 100;

  return `<article class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${getDescripcion()}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">-${formatoMoneda(getValor())}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(
              porcentaje
            )}</div>
            <div class="elemento_eliminar" id=${posicion} >
                <button class="elemento_eliminar_btn" onclick="window.eliminarEgreso(${posicion})">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </article>`;
};

export const cargarEgresos = () => {
  let htmlEgresos = "";

  for (const [id, egreso] of window.egresos.entries()) {
    htmlEgresos += getHtmlEgreso(egreso, id);
  }

  document.getElementById("lista-egresos").innerHTML = htmlEgresos;
};

window.eliminarEgreso = (id) => {
  console.log(window.egresos);
  let newArray = window.egresos.filter((egreso, posicionIndex) => {
    if (id != posicionIndex) {
      return egreso;
    }
  });
  window.egresos = newArray;
  cargarEgresos();
  console.log(window.egresos);
};

//   const indiceEliminar = Egreso.findIndex((egreso) => egreso.id === id);

//   if (indiceEliminar !== -1) {
//     Egreso.splice(indiceEliminar, 1);
//     cargarCabecero();
//     cargarEgresos();
//   }
