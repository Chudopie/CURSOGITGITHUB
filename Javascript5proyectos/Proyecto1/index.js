const respuesta = document.getElementById("resp");
const btnejecutar = document.getElementById("ejecuta");
btnejecutar.addEventListener('click',iniciar);



let frutas = ["Manzana", "Mango","fresa","pera"];

function iniciar (){
    frutas.forEach(function(item,index,array){
        respuesta.innerText=array;
    });
}
