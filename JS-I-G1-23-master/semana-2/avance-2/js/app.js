const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
}

const totalIngresos = () => {
    let total_ingresos = 0;
    let ingresos = [
        { descripcion: 'Salario', monto: 2100 },
        { descripcion: 'Venta de coche', monto: 1500 }
    ]
    for (const ingreso of ingresos) {
        total_ingresos = total_ingresos + ingreso.monto
    }
    return total_ingresos
}

const totalEgresos = () => {
    let total_egresos = 0;
    let egresos = [
        { descripcion: 'Renta departamento', monto: 900 },
        { descripcion: 'Ropa', monto: 400 }
    ]

    for (const egreso of egresos) {
        total_egresos = total_egresos + egreso.monto
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
// cargarCabecero()
console.log(formatoPorcentaje(10))