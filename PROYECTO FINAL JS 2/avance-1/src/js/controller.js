import { recipeMarkup } from "./recipe-data";
import { resultList, resultMarkup } from "./resultList";
import { spinnerMarkup } from "./spiner-markup";
// import icons from "../img/icons.svg"


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// const RECIPE_ID = "5ed6604591c37cdc054bc886"
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

async function getRecipe(id) {
  showSpinner()
  return await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    .then((response) => response.json())
    .then((response) => response.data)
    .then((data) => data.recipe || data.recipes)
    .then((recipe) => recipe)
    .catch((razon) => { throw new Error(razon.message) })
    .finally(()=>{
      recipeContainer.innerHTML = ""
    })
}

function showSpinner(){
  document.querySelector('.recipe').innerHTML = spinnerMarkup()
}

function mostrarReceta(hash) {
  getRecipe(hash)
    .then((recipe) => {
      // Cambiar contenido de recipe
      let parentElement = document.querySelector('.recipe')
      parentElement.insertAdjacentHTML('afterbegin', recipeMarkup(recipe))
    })
    .catch((error) => {
      console.error(error.message);
    })
}

function showResults(results) {
  let resultContainer = document.querySelector('.results')
  if (resultContainer && Array.isArray(results)) {
    resultContainer.innerHTML = resultMarkup(results)
  }
}

function searchRecipes(searchString) {
  getRecipe(`?search=${searchString}&key=75c2ecea-5192-4b2d-856f-7fe6f4e864d5`)
    .then((recetas) => {
      console.log('resultado', recetas);
      showResults(recetas)
    })
    .catch((er) => {
      console.error(er);
    })
}

// Obtener el ID de la receta mediante la URL de la ventana
window.addEventListener('hashchange', function (event) {
  let hash = this.location.hash.substring(1)
  mostrarReceta(hash)
})

document.getElementById("btnSearch").addEventListener('click', function () {
  let searchInput = document.querySelector('.search__field')
  searchRecipes(searchInput.value)
})
