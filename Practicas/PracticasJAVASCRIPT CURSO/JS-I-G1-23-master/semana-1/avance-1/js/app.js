// const cargarCabecero = () => {
// let presupuesto = totalIngresos()-totalEgresos();
// }
// let porcentajeEgreso = totalEgresos()/totalIngresos();




const totalIngresos = () => {
    let ingresosArray = [1,2,3,4,5]
    let totalIngresoSuma = 0;


for(let i=0; i <= ingresosArray.length -1; i++ )
     totalIngresoSuma += ingresosArray[i];

return totalIngresoSuma;
}




const totalEgresos=()=>{
    let EgresosArray = [1,2,3,4,5];
    let totalEgresoSuma =0;
    for(let i=0;i<=EgresosArray.length -1;i++)
     totalEgresoSuma += EgresosArray[i];
    return totalEgresoSuma;
}