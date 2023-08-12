//LINK https://www.youtube.com/watch?v=6cnFl9aHD5Y
//Hola Javascript
console.log("Hola javascript");

//Variables
let myString = "Esto es una cadena de texto";

function test(){
    console.log(typeof myString2);
}


let myString2 = "Esto es una cadena de texto";
myString2 = "Aqui cambio el valor de la cadena de texto "

test();

myString2 = 6 ;
console.log(typeof myString2);

let myNumber = 7;
myNumber = myNumber +4;
console.log(myNumber);
console.log (myNumber - 1);

console.log(myString2 + " , " + myNumber);


let myBool = false;
myBool = true;
console.log(myBool);
 console.log(typeof myBool);
myBool = null;
console.log(myBool + myNumber)

myBool = undefined;
console.log(myBool); //Undefined

let myUndefined;
console.log(myUndefined); //Undefined


 //CONSTANTES
const  MY_CONST = "mi constante"
 //MY_CONST = " otro valor ";//ERROR
console.log(MY_CONST);


//control de flujo

myString = "Hola";

if (myNumber == 10 && myString == "Hola") {
console.log("El valor es 11 si");

}else if(myNumber ==11 || myString == "Hello") {
console.log ( "El valor si es 11");
} else {console.log ("El valor es 11");
};

myBool = null;

if (myBool){
    console.log("Null");
}


//funciones
//  console.log(myFunction()); //´puede ser llamada la funcion antes de crearse

function myFunction ( ){
    return "Mi funcion";
    
}

console.log(myFunction());


//listas

let myList = ["Eduardo", "Gonzalez", "Lugo", 29]
console.log(myList);
console.log(myList[0]);

//Set
let mySet = new Set (["Eduardo", "Gonzalez", "Lugo", 29, "Eduardo"]) //set no admite repetido
mySet.add ("Gonzalez");
console.log( mySet);


//mapas
//el mapa no permite repetir claves
let myMap = new Map ([["Eduardo", 29] , [" juan", 24 ] , ["jhonny", 27]])
myMap.set ("nikola", 20);
console.log(myMap);
console.log(myMap.get ("Eduardo"));


//Bucles

for (const value of myList){
    console.log(value);
}

 //while
let myCounter = 0;
while (myCounter < myList.length  ){
console.log(myList[myCounter]);
myCounter++;
}

//Clases

class MyClass {
    constructor(name, age){
    this.name =name; 
    this.age= age;
    }
}

let myClass = new MyClass("Eduardo", 29)
console.log(myClass);
console.log(myClass.name);

//Enum
//UpperCamelCase  
const MyEnum =  {
    DART: "dart",
    PHYTON: "phyton",
    SWIFT: "swift",
    JAVA: "Java",
    KOTLIN: "Kotlin",
    JAVASCRIPT: "Javascript"
} 
const myEnum = MyEnum.JAVASCRIPT
console.log(myEnum);