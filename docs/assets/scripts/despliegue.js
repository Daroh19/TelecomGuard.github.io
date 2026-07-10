document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navContainer = document.getElementById('nav-container');

    // Comprobamos si JavaScript encuentra los elementos
    console.log("Botón hamburguesa:", hamburger);
    console.log("Contenedor del menú:", navContainer);

    if (hamburger && navContainer) {
        hamburger.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            console.log("Se hizo clic, clase 'active' modificada.");
        });
    } else {
        console.error("¡Error! No se encontró el botón o el menú en el HTML.");
    }
});