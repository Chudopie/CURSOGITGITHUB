    //Number: una variable de tipo number, en JavaScript, es una variable que almacena un valor numérico. Los números pueden ser enteros o decimales. Ejemplo:
var edad = 29;
var altura = 1.74;
//String: una variable de tipo string, en JavaScript, es una variable que contiene una cadena de caracteres, es decir, una secuencia de letras, números, símbolos y/o espacios. Por ejemplo, podemos asignar una variable de tipo string de la siguiente manera:
var nombre = "Juan";
//Boolean: una variable booleana en JavaScript es un tipo de variable que sólo puede tener dos valores: verdadero (true) o falso (false). Estas variables se utilizan a menudo en expresiones lógicas para controlar el flujo de un programa. Ejemplo:
let esMayorDeEdad = true;
if(esMayorDeEdad){
    console.log("Eres mayor de edad y puedes entrar al bar");
} else { console.log("Lo siento tienes que ser mayor de edad para entrar al bar");
}
//Undefined: una variable de tipo Undefined, en JavaScript, se refiere a una variable que ha sido declarada, pero no se le ha asignado un valor. En otras palabras, la variable existe, pero no tiene un valor definido. Ejemplo:
let name;
console.log(name); //OUTPUT: UNDEFINED

//BigInt: es un nuevo tipo de datos en JavaScript que permite representar números enteros de tamaño arbitrario, es decir, números más grandes que los representados por el tipo Number. Para crear un BigInt se agrega “n” al final del número:
const BigInt = 1234567891234567891324567890n;

//Symbol: un símbolo es un tipo de dato en JavaScript que es único e inmutable. Se puede usar como una clave en un objeto y a menudo se utiliza como un identificador único para una propiedad o un valor. Ejemplo:

const miSimbolo = Symbol ('Mi simbolo ');
console.log(typeof miSimbolo)//output: symbol

//Diferencia entre "null" y "undefined":
//En el ejemplo anterior, la variable "a" no tiene un valor asignado, por lo que su valor es "undefined". La variable "b" se inicializa con el valor "null", lo que indica un valor vacío intencional.
let a;
console.log(a); //imprime undefined

let b = null;
console.log(b);//imprime null


//Uso de typeof con diferentes tipos de variables:
let num = 42;
console.log(typeof num);//Output: "number";

let str = "Hello World";
console.log(typeof str); //Output: "string";

let flag = true;
console.log(typeof flag); //Output: "boolean";

let nothing = null;
console.log(typeof nothing)//Output: "Object";
//(este es un error conocido en javascript)

let sym = Symbol("My symbol");
console.log(typeof sym); //Output: "symbol";

let undef;
console.log(typeof undef);//Output: "Undefined";

//Object: una variable de tipo Object en JavaScript es un tipo de datos que permite almacenar múltiples valores asociados a una clave. Es una estructura de datos compleja y versátil que se puede utilizar para representar cualquier cosa, desde objetos literales hasta objetos de programación orientada a objetos. Un ejemplo de una variable de tipo Object es el siguiente:
let persona = {
    nombre: "Eduardo",
    edad: 29,
    ciudad: "Tampico",

};

//Function: una variable de tipo Function, en JavaScript, es una variable que almacena una función, que es un bloque de código que se puede llamar repetidamente para realizar una tarea específica. Un ejemplo de una variable de tipo Function en JavaScript es:

const sum = function (a,b){
    return a + b; 
};
//suma dos numeros
console.log(sum(5,45)); //devuelve 50
