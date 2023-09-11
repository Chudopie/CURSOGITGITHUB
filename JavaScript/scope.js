// Declaración de una variable global
let globalVariable = "Soy global";

// Función que retorna una promesa después de un tiempo de espera
function promiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("La promesa se resolvió exitosamente");
    }, 5000);
  });
}

// Función asíncrona que utiliza la promesa y la variable global
async function asyncFunction() {
  try {
    // Esperar la resolución de la promesa
    const result = await promiseFunction();
    console.log(result);

    // Acceder a la variable global desde dentro de la función
    console.log(globalVariable);

    // Declaración de una variable local dentro de la función
    let localVariable = "Soy local";

    // Acceder a la variable local desde dentro de la función
    console.log(localVariable);
  } catch (error) {
    console.log(error);
  }
}

// Llamada a la función asíncrona
asyncFunction();
console.log("continuo....");
