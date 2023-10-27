window.addEventListener('DOMContentLoaded', () => {
    // Asignamos la clase .is-active al panel
    const panelBtn = document.querySelector('.panel-btn')
    const panel = document.querySelector('aside.menu')

    panelBtn.onclick = () => {
        // Mostrar el panel de menú
        panel.classList.toggle('visually-hidden')
    }

    panel.onclick = (event) => {
        // Cuando se haga clic en un elemento del menú, se cierra el panel de menú
        if (event.target.tagName === 'A') {
            panel.classList.add('visually-hidden')
        }
    }

    // Reloj
    document.addEventListener('click', (event) => {
        let origen = event.target
        let tipo = origen.tagName
        console.log('event', tipo);
        if (origen.classList.contains('btnPlay')) {
            console.log('btn play');
        }
        if (origen.classList.contains('btnStop')) {
            console.log('btn stop');
        }
    })
})
