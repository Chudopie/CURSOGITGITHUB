// function interseccion(a,b){
//     var resultado = [];
//     for (var i = 0; i < a.length; ++) {
//     for (var j = 0; j < b.length; j++) {
//     if (a [ i ] === b[ j ]) {
//     resultado.push(a [ i ]);
//     break;
//     }
//     }
//     }
//     return resultado.sort ( );
//    }

function interseccion(a, b) {
  let resultado = [];
  //Recorrer el array A
  for (let i = 0; i < a.length; i++) {
    //Recorrer el array B
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        resultado.push(a[i]);
        break;
      }
    }
  }
  return resultado.sort();
}

const ARRAY_A = ["a1", "a2", "a3", "b5", "b6"];
const ARRAY_B = ["a1", "b5", "b6", "a1", "a3"];

interseccion(ARRAY_A, ARRAY_B); //?

ARRAY_A.indexOf("b1"); //?

const interseccionConFilter = (a, b) => {
  return a.filter((valor) => {
    //si encuentra algo con ese valor, da un numero
    if (b.indexOf(valor) > -1) {
      return b.sort();
    } //?
  });
};

interseccionConFilter(ARRAY_A, ARRAY_B); //?
