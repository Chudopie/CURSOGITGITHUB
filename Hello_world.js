console.log("Hola, Javascript!");


function sumatoria(suma1, suma2) {

    let resultado;
    resultado = suma1 + suma2;
    return resultado;
}
console.log(sumatoria(5, 5));
/*
// aqui esta escrito en funcion flecha
const sumar = (parametro1, parametro2) => parametro1 + parametro2;

var par1 = prompt("primer parametro");
var par2 = prompt("segundo parametro");

console.log(par1, par2);*/



function pairnumber(pair) {

    if (pair % 2 == 0) {
        console.log(`El numero ${pair} es par`);
    } else {
        console.log(`El numero ${pair} es impar`);
    } return pair
}

console.log(pairnumber(5));



//antes de estas lineas van los ejercicios

function suma(a,b,callback){
    const result = a +b ;
    callback(result);
}

suma(2,3,function (result){

    console.log('El resultado de la suma es: ', result);

});
//QUE ES EL CALLBACK? asincronia
function cuadradocallback(value,callback){
console.log("HOLA");

setTimeout(() => {
    callback(value, value *value);
}, 1000);
}


// cuadradocallback(2,(valor, resultado)=>{
//     console.log("CALLBACK: "+ valor + "-"+ resultado);

// });


// console.log("inicio de captura");
// console.log("fin de captura");

// //QUE ES LA PROMESA 
// let promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//        let result =Math.random();
//        if(result > 0.5){
//         resolve (result);

//        }else {
//         reject (result);

//        } 
//     }, 2000);
// });

// promise  
// .then ((result) => {
//     console.log(`Resultado: ${result}`);
// })
// .catch((result) => {
//     console.error(`Error: ${result}`);

// });


// //QUE ES FETCH evolucion de html http request
// fetch("https://api.example.com/data")
// .then((response) => response.json() )
// .then((data) => {
//     //el resultado de la consulta a la API es tratado aqui
//     console.log(data);

// })
// .catch((error) => {
//     //se maneja el error por aqui
//     console.error("Error en la consulta a la API", error);
// });



//QUE ES ASYNC AWAIT
// async function getDataFromAPI(){
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     return data;
// }

//Cntrl + K + C para todo, y para quitar cntrl+k+u

//HACER ALGO EN MEDIA SESION?