import { cargarCabecero, cargarIngresos, cargarEgresos } from "./Aplicacion.mjs"
import { cargarEventos } from './Eventos.mjs'

// Cargar contenido de la app
cargarCabecero()
cargarIngresos()
cargarEgresos()

// Agregar evento a los botones
cargarEventos()
