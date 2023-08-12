function a(){
    console.log("1: soy el primer log ")

setTimeout(() => {
console.log("2: soy el console log del timeout") 
}, 0);
promise().then(() => {

    console.log("3: Soy el console log de la promise")
})

}

function promise(){
    return Promise.resolve()
}

a();