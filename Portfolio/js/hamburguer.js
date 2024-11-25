document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.querySelector('.menu-list');
    const lines = document.querySelectorAll('.menuHamburguesa .line');
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');

    function toggleMenu() {
        menuList.classList.toggle('mostrar-menu');
        lines.forEach(line => line.classList.toggle('cambiar'));
    }

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuList.classList.remove('mostrar-menu');
            menuList.style.display = 'none'; // Ocultar el menú completo
            lines.forEach(line => line.classList.remove('cambiar'));
            header.style.display = 'flex';
            header.style.flexDirection = 'column';
            header.style.alignItems = 'center';
        } else {
            menuList.style.display = 'flex'; // Mostrar el menú completo en pantallas grandes
            header.style.display = 'flex';
            header.style.flexDirection = 'row';
            header.style.alignItems = 'center';
        }
    }

    // Inicializar visibilidad según el tamaño de la pantalla
    checkScreenSize();

    // Añadir un event listener para cambiar la visibilidad cuando la ventana se redimensiona
    window.addEventListener('resize', checkScreenSize);

    // Añadir un event listener para el botón hamburguesa
    menuToggle.addEventListener('click', function() {
        if (menuList.style.display === 'none' || menuList.style.display === '') {
            menuList.style.display = 'flex';
        } else {
            menuList.style.display = 'none';
        }
        toggleMenu();
    });
});
