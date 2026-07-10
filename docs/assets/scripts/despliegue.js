document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navContainer = document.getElementById('nav-container');

    if (hamburger && navContainer) {
        hamburger.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });
    }
});