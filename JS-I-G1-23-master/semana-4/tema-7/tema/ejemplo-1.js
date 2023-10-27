let htmlMain = document.getElementById('main')

const sectionComponente1 = document.createElement('section')
sectionComponente1.textContent = "Componente 1"
console.log('section', sectionComponente1);
htmlMain.appendChild(sectionComponente1)

sectionComponente1.setAttribute('data-lang', 'español')
sectionComponente1.setAttribute('src', 'archivo1.jpg')

// Resultado
/*
<div id="main">
    <section data-lang="español">Componente 1</section>
</div>
*/