var variable = function(argumentos){
    // cÃ³digo a ser ejecutado
  };
  
  
  const sumar1 = (a, b) => {
    return a + b;
  }
  
  
  const sumar2 = (a, b) => a + b;
  
  
  const nombreFuncion = (parametros) => {
    // cuerpo de la funciÃ³n
  }
  
  
  var obj = {
     name: 'John Doe',
     printName: function() {
        console. log(this.name + ', ' + arguments[0]);
     }
  };
  
  
  obj.printName('Hello'); // Output: John Doe, Hello
  
  
  var obj = {
     name: 'John Doe',
     printName: (...args) => console.log(this.name + ', ' + args[0])
  };
  
  obj.printName('Hello'); // Output: undefined, Hello
  
  
  let sumar = (a, b) => a + b;
  console.log(sumar(1, 2));  // Imprime 3 en la consola
  
  
  let multiplicar = (a, b) => {
    return a * b;
  };
  console.log(multiplicar(3, 4));  // Imprime 12 en la consola
  
  
  var suma = function(a, b) {
    return a + b;
  };
  
  var resultado = suma(3, 5);
  console.log(resultado); // 8
  
  
  //FunciÃ³n que recibe una funciÃ³n anÃ³nima como argumento
  var operacion = function(a, b, func) {
    return func(a, b);
  };
  
  //Invocando la funciÃ³n 'operacion' y pasÃ¡ndole la funciÃ³n
  //anÃ³nima 'suma' como argumento
  console.log(operacion(3, 5, suma)); //imprime 8

  function higherOrder(fn){
    return function (a,b){
        return fn (a,b);
    };
  }

  let sum5  = (a,b) => a+b;
  let higherOrderSum = higherOrder(sum5);

  let result2  = higherOrderSum(2,3);
  console.log(result2); //5
