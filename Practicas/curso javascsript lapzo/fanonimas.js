const saludo = function (){
    console.log("Hola Mundo")
}
saludo();
//saludo = texto;
setTimeout(function(){
    console.log("Hola Mundo")

},1000)

setTimeout(() => {
    console.log("Holamundo")
}, 5000);