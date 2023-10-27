// unction interseccion(a,b){ var resultado = [];
//     for (var i = 0; i < a.length; ++) {
//  for (var j = 0; j < b.length; j++) {
//     if (a [ i ] === b[ j ]) { resultado.push(a [ i ]);
//     break; }
//     }
//     }
//     return resultado.sort ( ); }

function interseccion(a, b) {
    let resultado = [];

    // Recorrer el array A
    for (let i = 0; i < a.length; i++) {
        // Recorrer el array B
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                resultado.push(a[i])
                break;
            }
        }
    }
    return resultado.sort()
}

const ARRAY_A = ['a1', 5, 'j6', 'a2', 'a3', 3, 'a', 'david', 'dado',]
// 0     1     2     3
const ARRAY_B = ['b4', 'a1', 'b6', 'a', 5, 3, 'dado', 'david']

interseccion(ARRAY_A, ARRAY_B)

ARRAY_A.indexOf('j60') //?

// const intersection = (a, b) => a. filter (value => b. index0f (value) > -1) .sort ( );
const interseccionConFilter = (a, b) => {
    return a.filter((valor) => {
        // Si encuentra algo con ese valor, da un número
        if (b.indexOf(valor) > -1) {
            return b.sort()
        }
    })
}

interseccionConFilter(ARRAY_A, ARRAY_B) // ?
