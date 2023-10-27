function comrpobarFormulario(){
    let num1 = numero1.value;
    let num2 = numero2.value;
    
    let numero_mayor, numero_menor, son_iguales;
    numero_mayor = numero_menor =son_iguales=false;
    

    if(num1 >num2){
        numero_mayor=num1;
        numero_menor=num2;
    }else if (num1<num2){

       numero_mayor=num2;
       numero_menor=num1;
    } else{
        son_iguales =true;
    }

    // numero1
    // numero2
    // resultado

    resultado.innerHTML= `
    <p>son iguales: ${son_iguales}<p>
    <p>Numero mayor: ${numero_mayor}<p>
    <p>Numero menor: ${numero_menor}<p>
    
    `
}

function validarNumero(numero){
    console.log("Numero ingresado", numero,isNaN(numero), ".Numero convertido:", parseInt(numero));
return isNaN(numero) ? 0 : parseInt(numero)
}

//extraer numeros
function extraerNumeros(valor){
    let valorString=""+valor;
    return valorString.replace(/[a-z]/ig, '')
}

//bucle while
//pedir numeros por prompt y mostrar en consola
function validarNumeroMayoresA0(){
    let numA=0;
    let contador = 0;

    do{
     numA=prompt("Ingresa el primero numero mayor a cero.")
     if(numA <= 0){
        break;
     }
     numB=prompt("Ingresa el segundo numero mayor a cero.")
     suma = numA+ suma;
     total_numeros++;

console.log('Num A' , numA, 'Num B',numB);
}
while(numA>=0 &&numB >=0){
console.log('Numeros ingresados:', contador, 'Media:', suma);
    
}
 }

 let total = 0, cuenta = 1;
while (cuenta <= 10) {
total += cuenta;
cuenta += 1;
}
console.log(total); //?