import { spinnerMarkup } from "./spiner-markup";


export async function getRecipe(id) {
    showSpinner()
    return await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        .then((response) => response.json())
        .then((response) => response.data)
        .then((data) => data.recipe || data.recipes)
        .then((recipe) => recipe)
        .catch((razon) => { throw new Error(razon.message) })
        .finally(() => {
            document.querySelector('.recipe').innerHTML = ""
        })
}

export function showSpinner() {
    document.querySelector('.recipe').innerHTML = spinnerMarkup()
}
