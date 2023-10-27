import Ingreso from "./Ingreso.mjs";
import Egreso from "./Egreso.mjs";

// egresos e ingresos
let ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta de coche', 50000)
]

let egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
]

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos() / totalIngresos();
    console.log('totalIngresos', totalIngresos());
    console.log('totalEgresos', totalEgresos());

    console.log('presupuesto', presupuesto);
    console.log('porcentajeEgresos', porcentajeEgresos);
}

const totalIngresos = () => {
    let total_ingresos = 0;
    for (const ingreso of ingresos) {
        total_ingresos = total_ingresos + ingreso.getValor()
    }
    return total_ingresos
}

const totalEgresos = () => {
    let total_egresos = 0;

    for (const egreso of egresos) {
        total_egresos = total_egresos + egreso.getValor()
    }
    return total_egresos
}

const formatoMoneda = (valor, moneda = 'MXN') => {
    return `$${valor.toLocaleString()} ${moneda}`
}

const formatoPorcentaje = (valor) => {
    return `${valor.toLocaleString()}%`
}

// Cargar contenido de la app
cargarCabecero()
// console.log(formatoPorcentaje(10))