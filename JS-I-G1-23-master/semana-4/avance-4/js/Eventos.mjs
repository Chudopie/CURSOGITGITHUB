import { cargarCabecero, cargarEgresos, cargarIngresos } from "./Aplicacion.mjs"
import Egreso from "./Egreso.mjs"
import Ingreso from "./Ingreso.mjs"

export const cargarEventos = () => {
    // Botón agregar
    document.querySelector('.agregar_btn').addEventListener('click', () => {
        // let { descripcion, tipo, valor } = document.forms.forma.elements

        const descripcion = document.getElementById('descripcion').value
        const tipo = document.getElementById('tipo').value
        const valor = document.getElementById('valor').value

        if (tipo == 'ingreso') {
            window.ingresos.push(new Ingreso(descripcion, valor))
            console.log('ingreso', window.ingresos);
        }

        if (tipo == 'egreso') {
            window.egresos.push(new Egreso(descripcion, valor))
            console.log('egreso')
        }

        // actualizar los valores
        cargarIngresos()
        cargarEgresos()
        cargarCabecero()
    })
}
