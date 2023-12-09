import { getRecipe } from "./recipeController";
import { resultMarkup } from "./resultList";

export function searchRecipes(searchString) {
    getRecipe(`?search=${searchString}&key=75c2ecea-5192-4b2d-856f-7fe6f4e864d5`)
      .then((recetas) => {
        showResults(recetas)
      })
      .catch((er) => {
        console.error(er);
      })
  }


export function showResults(results) {
    let resultContainer = document.querySelector('.results')
    if (resultContainer && Array.isArray(results)) {
      resultContainer.innerHTML = resultMarkup(results)
    }
  }
  