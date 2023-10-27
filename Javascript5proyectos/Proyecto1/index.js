async function obtenerData (){
    const response=await fetch("https://api.github.com/repos/hadley/ggplot2/commits")
    await response.json();
    .then
}

obtenerData();