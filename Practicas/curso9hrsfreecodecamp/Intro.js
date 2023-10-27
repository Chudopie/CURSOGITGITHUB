/*https://www.youtube.com/watch?v=ivdTnPl1ND0&t=399s 

/*
/*
tipos de datos 
Undefined, null, boolean, string, symbol, object.*/
//este si quiero recordarlo
// var a =23;
// a +=5; //sumale 5 a la variable "a" y asignalo a la variable
// console.log(a);
// //NOICE
// let miCadena = "Soy una cadena de caracteres  \"con comillas\"   " //alt+92 \\ para las barras invertidas

// //ESO si no sabia como poner comillas adentro de los caracteres deseaooos
// console.log(miCadena);

// //o tambien
// let miCadena2 = 'Soy otra cadena pero" con comillas simples"'
// console.log(miCadena2);

// //Secuencias de escape
// /*Codigo ||         Resultado 
// \'                  comilla simple 
// \"                  comilla doble
// \\                  barra invertida se deben de usar dos barras invertidas para que se muestren
// \n                  linea nueva
// \r                  retorno de carro
// \t                  tabulacion
// \b                  retroceso
// \f                  salto de pagina
// .... //investigar mas en doc. de javascript

// console.log ( "Estoy aprendiendo \\\\ JAvascript ") //barra invertida
// console.log ( "Estoy aprendiendo: \n JAvascript ") // linea nueva \n
// */
// //CADENAS .length
// let miCadena3

// miCadena3 = "AB" ;

// console.log(miCadena3.length);
// //Notacion de corchetes JS
// let lenguajeDeProgramacion ="Javascript"
// /*
// Cadena : J a v a s c r i p t
// Indices: 0 1 2 3 4 5 6 7 8 9    
//  */
// console.log(lenguajeDeProgramacion [0]);

// //inmutabilidad de cadena de caracteres(no se pueden cambiar los elemntos)

//  let miCadena4 = "Jola, Mundo";

//  console.log(miCadena4);

// //miCadena4[0] = H; //ERROR //no se pueden cambiar los caracteres individuales
// miCadena4 = "0123456789";
// l = 0;
// l+= 1;
// console.log(miCadena4[miCadena4.length -l ]); //si no se usa el -1 sale undefined
// //notacion de corchetes enesimo caracter

 





// //ARREGLOS
// let miArreglo = ["Eduardo", 29];
// console.log(miArreglo);

// let estudiantes = ["joel", "carlos", "chino", "juan"];
// console.log(estudiantes[0]);

// let notas = [95, 30 ,40 ,50];
// console.log(notas);

// let listadeestudiantes = [["nora", 52], ["beto" , 51]];
// console.log(listadeestudiantes);

// let listaDePrecios = [["Camisa", 5.45, "S574"],["Celular", 120, "S874"], ["coño", 1000, "S879"]];
// console.log(listaDePrecios[0]);

// let mequitannombrede1arreglo = [10 , 50 , 40];
// mequitannombrede1arreglo[0] = "Hola";
// console.log(mequitannombrede1arreglo);

// anidandounarreglo=[1,4,5];
// mequitannombrede1arreglo[1]=anidandounarreglo;
// console.log(mequitannombrede1arreglo);

// //arreglosmultidemcionales

// let arreglosmultidemcionales = [[1,2,3],[4,5,6],[7,8,9]];

// console.log(arreglosmultidemcionales[0] [2]);










// //.push();

// let vacaciones = ["invierno", "Otoño", "Primavera"];
// //metodo push
// vacaciones.push("Verano"); //toma este arreglo y para ese arreglo empuja o añade al final
// console.log(vacaciones);
// //.pop()

// let estaciones = ["invierno", "Otoño", "Primavera","Verano"];
// let estacion = estaciones.pop();
// console.log(estaciones); //se removio Verano
// console.log(estacion); //fue removida y asignada a la variable estacion
// //.shift
// //remueve el primer dato del arreglo el metodo shift
// estaciones.shift();
// console.log(estacion);
// //.unshift agrega un elemento al principio de un arreglo.
// estaciones.unshift("Verano");
// console.log(estaciones);
// estaciones.unshift ("invierno");
// console.log(estaciones);
// //me quede en metodos push, unshift, shift




// let miListadecompras = [["cereal", 3],["leche",2], ["refresco", 7], ["galletas",4] ,["pollo", 7]];

// console.log("voy a comprar  "+ miListadecompras [0][1] +" unidades de " + miListadecompras [0][0] +".");
// //cereal
// console.log("voy a comprar  "+ miListadecompras [1][1] +" unidades de " + miListadecompras [1][0] +".");
// //leche
// console.log("voy a comprar  "+ miListadecompras [2][1] +" unidades de " + miListadecompras [2][0] +".");
// //Refresco
// console.log("voy a comprar  "+ miListadecompras [3][1] +" unidades de " + miListadecompras [3][0] +".");
// //galletas
// console.log("voy a comprar  "+ miListadecompras [4][1] +" unidades de " + miListadecompras [4][0] +".");
// //pollo

 





//FUNCIONES
//definicion de funcion
// function mostrarMensaje (){
// console.log("¡Hola, Mundo!")
// }
// mostrarMensaje();

// function sumar (a,b){
//     let suma = a + b;    
//     console.log(`El resultado de ${ a } + ${ b } es: ${suma}`);
// }
// sumar(8,6);
// sumar(8516,6165)
// let x = 5 ;
// let y = 3 ; 

// sumar (x,y);
// sumar(7,3);


// function concatenarTresCadenas(cadena1, cadena2, cadena3){
//     console.log(`${ cadena1 } , ${ cadena2 }, ${ cadena3}. `)
// }
// concatenarTresCadenas("Estoy", "aprendiendo", "a programar");


//varibles Globales y variables Locales
//VARIABLE GLOBAL

// let variableGlobal = 5;

// console.log(variableGlobal);

// function miFuncion(){
//     console.log(variableGlobal);
// }
// miFuncion();
// console.log(variableGlobal);

//VARIABLE LOCAL

// function miFuncion(){
//     var miVariableLocal = 4;
//     console.log(miVariableLocal);
// }
// miFuncion();

// console.log(miVariableLocal);

//AMBITO LOCAL VS AMBITO GLOBAL con el mismo nombre

// let miNombre = "Nora"; //variable global en cualquier parte del programa

// function mostrarMinombre(){
//     let miNombre = "Gino"; //variable local dentro del programa
//     console.log(miNombre);
// }
// console.log(miNombre);
// mostrarMinombre();


//RETURN EN FUNCION

// function sumar(a,b){
//     return a + b ;

// }
// console.log (sumar (5,3));

//UNDEFINED RETORNO

// function sumar (a,b){
  
//    console.log(a + b ); 

// }
// console.log(sumar(4,5)); //undefined sin el retorno.

// function sumar (a,b){
  
//     return a + b ;
 
//  }

// let resultado = sumar(5,3); //  let resultado = 8
// console.log(resultado);


// function crearCadenaConMeta(lenguajeDeProgramacion){
//     return `Mi meta es aprender ${lenguajeDeProgramacion} `;
// }

// let miMeta = crearCadenaConMeta("Javascript");
// // let miMeta = "Mi meta es aprender Javascript";
// console.log(miMeta);

//Permanece en fila miniproyecto

// function proximoEnLAFila (arr, elem){

//     arr.push(elem); //agregar al final del arreglo.
//     return arr.shift(); //remover el primer elemento.
    
// }
// let miArreglo = [1,2,3,4,5];

// console.log( ` Antes: ${JSON.stringify(miArreglo) }`);

// console.log(proximoEnLAFila(miArreglo,6))

// console.log( ` Despues: ${JSON.stringify(miArreglo) }`);

//Valores booleanos
// != valor de desigualdad
//>= mayor igual que
//miniproyecto golf

// function puntuajeDeGolf(golpes, par){
//     if(golpes == 1){
//         return "Hole-in-one!";
//     }else if (golpes <= par - 2 ){
//         return "Eagle";
//     }else if (golpes == par - 1 ){
//         return "Birdie";
//         }
//         else if (golpes == par){
//         return "par";
//         }
//         else if (golpes == par + 1  ){
//         return "Bogey";
//         }
//         else if (golpes == par + 2){
//         return "double bogey";
//         }
//         else if (golpes >= par + 3){
//         return "Go Home";
//         }
// }
// console.log(puntuajeDeGolf(2,3))

//switch

// function clasificarValor (valor){

//     let respuesta;
//     switch (valor){
//         case 1 :
//             respuesta = "alpha";
//             break;
//         case 2 :
//             respuesta = "beta";
//             break;
//         case 3 :
//             respuesta = "gamma";
//             break;
//         case 4 : 
//             respuesta = "delta";
//             break;
//         }
//         return respuesta;
// }
// console.log(clasificarValor(1));
 
// let producto ="hamburguesa";

// switch(producto){
//     case "pizza":
//         console.log("la pizza basica cuesta $10.55");
//         break;
//     case "hamburguesa":
//         console.log("las hamburguesas cuestan $6.78");
//         break;
//     case "helado":
//         console.log("El helado cuesta $2.8");
//         break;
// }

//sentencia switch opcion predeterminada

// function seleccionarIdioma(valor){
//     let idioma;
//     switch(valor){
//         case 1: 
//             idioma = "Español";
//             break;
//         case 2: 
//             idioma = "Frances";
//             break;
//         case 3: 
//             idioma = "Italiano";
//             break;
//             default:   //parecido a else
//             idioma = "Ingles";
//             break;
//     }
//     return idioma;

// }
// console.log(seleccionarIdioma());//se imprime el default cuando no se escribe algo que ya esta descrito( 1 o 2 o 3)

//Sentencias switch multiples casos

// function clasificarVolumen(valor){
//     let volumen;
//     switch(valor){
//         case 1 : 
//         volumen ="bajo";
//         break;
//         case 2 : //se puede colocar
//         case 3 : //en dos casos para una sola respuesta
//         volumen ="intermedio"; //Case 2 y 3
//         break;
//         case 4:
//         case 5:
//         case 6:
//             volumen ="Alto";
//             break;

//     }
//     return volumen;
// }
//console.log (clasificarVolumen(6));

