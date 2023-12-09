import { getRecipe } from "./recipeController";
import { recipeMarkup } from "../../../avance-1/src/js/recipe-data";

export function mostrarReceta(hash) {
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
  