// Obtenemos una referencia al botón y al campo de texto del HTML
const btn = document.querySelector("#btn-click");
const inputText = document.querySelector("#input-text");

// Definimos la función que se ejecutará cuando se haga clic en el botón
function handleClick() {
  // Obtenemos el valor del campo de texto
  const texto = inputText.value;
  // Mostramos el valor en el párrafo del HTML
  const demo = document.querySelector("#demo");
  demo.innerHTML = texto;
}

// Agregamos el evento 'click' al botón y le asignamos la función handleClick como callback
btn.addEventListener("click", handleClick);

// Agregamos el evento 'keydown' al campo de texto y le asignamos una función anónima como callback
inputText.addEventListener("keydown", function (event) {
  // Verificamos si la tecla presionada es 'Enter'
  if (event.key === "Enter") {
    // Obtenemos el valor del campo de texto
    const texto = inputText.value;
    // Mostramos el valor en el párrafo del HTML
    const demo = document.querySelector("#demo");
    demo.innerHTML = texto;
  }
});

// Agregamos el evento 'blur' al campo de texto y le asignamos una función arrow anónima como callback
inputText.addEventListener("blur", () => {
  // Obtenemos el valor del campo de texto
  const texto = inputText.value;
  // Mostramos el valor en la consola del navegador
  console.log(`El texto ingresado es: ${texto}`);
});

console.log(!!"hello");
console.log(!!0);
console.log(!!19);

var a = 1,
  b = 2,
  c = a + b;
console.log(c % b);

console.log(parseInt("125"));

console.log(parseInt("0x11", 16));
console.log(parseInt("17", 8));
console.log(parseInt("15", 10));
console.log(parseInt(15.99, 10));
console.log(parseInt("FXX123", 16));
console.log(parseInt("1111", 2));
console.log(parseInt("15*3", 10));
console.log(parseInt("12", 13));

console.log(isNaN === isNaN);
