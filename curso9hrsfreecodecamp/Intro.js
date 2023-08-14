/*https://www.youtube.com/watch?v=ivdTnPl1ND0&t=399s 
tipos de datos 
Undefined, null, boolean, string, symbol, object.*/
//este si quiero recordarlo
var a =23;
a +=5; //sumale 5 a la variable "a" y asignalo a la variable
console.log(a);
//NOICE
let miCadena = "Soy una cadena de caracteres  \"con comillas\"   " //alt+92 \\ para las barras invertidas

//ESO si no sabia como poner comillas adentro de los caracteres deseaooos
console.log(miCadena);

//o tambien
let miCadena2 = 'Soy otra cadena pero" con comillas simples"'
console.log(miCadena2);

//Secuencias de escape
/*Codigo ||         Resultado 
\'                  comilla simple 
\"                  comilla doble
\\                  barra invertida se deben de usar dos barras invertidas para que se muestren
\n                  linea nueva
\r                  retorno de carro
\t                  tabulacion
\b                  retroceso
\f                  salto de pagina
.... //investigar mas en doc. de javascript

console.log ( "Estoy aprendiendo \\\\ JAvascript ") //barra invertida
console.log ( "Estoy aprendiendo: \n JAvascript ") // linea nueva \n
*/
//CADENAS .length
let miCadena3

miCadena3 = "AB" ;

console.log(miCadena3.length);
//Notacion de corchetes JS
let lenguajeDeProgramacion ="Javascript"
/*
Cadena : J a v a s c r i p t
Indices: 0 1 2 3 4 5 6 7 8 9    
 */
console.log(lenguajeDeProgramacion [0]);

//inmutabilidad de cadena de caracteres(no se pueden cambiar los elemntos)

 let miCadena4 = "Jola, Mundo";

 console.log(miCadena4);

//miCadena4[0] = H; //ERROR //no se pueden cambiar los caracteres individuales
miCadena4 = "0123456789";
l = 0;
l+= 1;
console.log(miCadena4[miCadena4.length -l ]); //si no se usa el -1 sale undefined
//notacion de corchetes enesimo caracter


//ARREGLOS
let miArreglo = ["Eduardo", 29];
console.log(miArreglo);

let estudiantes = ["joel", "carlos", "chino", "juan"];
console.log(estudiantes[0]);

let notas = [95, 30 ,40 ,50];
console.log(notas);

let listadeestudiantes = [["nora", 52], ["beto" , 51]];
console.log(listadeestudiantes);

let listaDePrecios = [["Camisa", 5.45, "S574"],["Celular", 120, "S874"], ["coño", 1000, "S879"]];
console.log(listaDePrecios[0]);

let mequitannombrede1arreglo = [10 , 50 , 40];
mequitannombrede1arreglo[0] = "Hola";
console.log(mequitannombrede1arreglo);

anidandounarreglo=[1,4,5];
mequitannombrede1arreglo[1]=anidandounarreglo;
console.log(mequitannombrede1arreglo);

//arreglosmultidemcionales

let arreglosmultidemcionales = [[1,2,3],[4,5,6],[7,8,9]];

console.log(arreglosmultidemcionales[0] [2]);

//.push();

let vacaciones = ["invierno", "Otoño", "Primavera"];
//metodo push
vacaciones.push("Verano"); //toma este arreglo y para ese arreglo empuja o añade al final
console.log(vacaciones);
//.pop()

let estaciones = ["invierno", "Otoño", "Primavera","Verano"];
let estacion = estaciones.pop();
console.log(estaciones); //se removio Verano
console.log(estacion); //fue removida y asignada a la variable estacion
//.shift
//remueve el primer dato del arreglo el metodo shift
estaciones.shift();
console.log(estacion);
//.unshift agrega un elemento al principio de un arreglo.
estaciones.unshift("Verano");
console.log(estaciones);
estaciones.unshift ("invierno");
console.log(estaciones);

