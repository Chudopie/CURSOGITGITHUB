const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

let descripcion = document.getElementById('descripcion')
let calorias = document.getElementById('calorias')
let carbohidratos = document.getElementById('carbohidratos')
let proteina = document.getElementById('proteina')

// Agregar función val
HTMLInputElement.prototype.isEmpty = function () {
    return this.value.length === 0 ? true : false
}

const validar = (input) => {
    let element = document.getElementById(input)
    // Opción 1 - más corta
    // element.isEmpty() ? element.classList.add('is-invalid') : element.classList.remove('is-invalid')

    // Opción 2 - más clara
    if (element.isEmpty()) {
        element.classList.add('is-invalid')
    } else {
        element.classList.remove('is-invalid')
    }
}

function validarInput() {
    validar('descripcion')
    validar('calorias')
    validar('carbohidratos')
    validar('proteina')
}


function agregar() {
    // let nuevoElemento = {
    //     descripcion: descripcion.value,
    //     calorias: calorias.value,
    //     carbohidratos: carbohidratos.value,
    //     proteina: proteina.value,
    // }

    let allInputs = document.querySelectorAll('input')
    allInputs.forEach((inputelement) => {
        if (inputelement.value == '') {
            validarInput()
            return;
        }
    })

    // Sacar HTML de la tabla
    let tbodyHTMl = document.querySelector('#table-body')
    let nuevoHtml = `${tbodyHTMl.innerHTML}<tr>
        <td>${descripcion.value}</td>
        <td>${calorias.value}</td>
        <td>${proteina.value}</td>
    </tr>`;

    tbodyHTMl.innerHTML = nuevoHtml
}
