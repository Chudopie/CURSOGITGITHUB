import { mostrarReceta } from './recipeView';
import { searchRecipes } from './searchView';
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

// /////////////////////////////////////
// const RECIPE_ID = "5ed6604591c37cdc054bc886"
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

//Obtener el ID de la receta mediante la URL de la ventana
window.addEventListener('hashchange', function (event) {
  let hash = this.location.hash.substring(1);
  mostrarReceta(hash);
});

document.getElementById('btnSearch').addEventListener('click', function () {
  let searchInput = document.querySelector('.search__field');
  searchRecipes(searchInput.value);
});
