// Palabras y categorías
const categorias = {
    Animals: ['DOG', 'CAT', 'ELEPHANT', 'TIGER', 'HORSE'],
    Colors: ['RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE'],
    Fruits: ['APPLE', 'BANANA', 'ESTERNOCLEIDOMASTOIDEO', 'STRAWBERRY', 'ORANGE']
};

// Variables globales
let categoriaSeleccionada = 'Animals'; // Categoría predeterminada
let palabra = '';
let palabraOculta = [];
let intentos = 10;
let letrasUsadas = [];

// Referencias al DOM
const categoriaElement = document.getElementById('categoria');
const palabraElement = document.getElementById('palabra');
const intentosElement = document.getElementById('vidas');
const letrasElement = document.getElementById('letras');
const reiniciarButton = document.getElementById('reiniciar');

// Función para actualizar el DOM
function actualizarPantalla() {
    // Mostrar categoría actual
    categoriaElement.textContent = `Categoría: ${categoriaSeleccionada}`;

    // Mostrar palabra oculta
    palabraElement.textContent = palabraOculta.join(' ');

    // Mostrar intentos restantes
    intentosElement.textContent = `You have ${intentos} lives`;

    // Crear botones de letras
    letrasElement.innerHTML = ''; // Limpiar las letras existentes
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const boton = document.createElement('button');
        boton.textContent = letra;
        boton.className = 'boton-letra';

        // Desactivar botón si ya fue usado
        if (letrasUsadas.includes(letra)) {
            boton.disabled = true;
        } else {
            boton.addEventListener('click', () => manejarLetra(letra));
        }

        letrasElement.appendChild(boton);
    }

    // Verificar estado del juego
    if (intentos <= 0) {
        intentosElement.textContent = `¡Ohhh no! The correct word was: ${palabra}`;
        bloquearBotones();
    } else if (!palabraOculta.includes('_')) {
        intentosElement.textContent = '¡Congratulations! You WON the game';
        bloquearBotones();
    }
}

// Manejar letra seleccionada
function manejarLetra(letra) {
    letrasUsadas.push(letra);
    let acierto = false;

    // Verificar si la letra está en la palabra
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            palabraOculta[i] = letra;
            acierto = true;
        }
    }

    // Reducir intentos si no acierta
    if (!acierto) {
        intentos--;
    }

    actualizarPantalla();
}

// Bloquear todos los botones
function bloquearBotones() {
    const botones = letrasElement.querySelectorAll('button');
    botones.forEach(boton => (boton.disabled = true));
}

// Iniciar un nuevo juego
function iniciarJuego() {
    palabra = categorias[categoriaSeleccionada][Math.floor(Math.random() * categorias[categoriaSeleccionada].length)];
    palabraOculta = Array(palabra.length).fill('_');
    intentos = 10;
    letrasUsadas = [];
    actualizarPantalla();
}

// Cambiar de categoría al hacer clic en el texto de categoría
categoriaElement.addEventListener('click', () => {
    const categoriasDisponibles = Object.keys(categorias);
    let indiceActual = categoriasDisponibles.indexOf(categoriaSeleccionada);
    categoriaSeleccionada = categoriasDisponibles[(indiceActual + 1) % categoriasDisponibles.length];
    iniciarJuego();
});

// Reiniciar el juego
reiniciarButton.addEventListener('click', iniciarJuego);

// Inicializar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    iniciarJuego(); // Iniciar con la categoría predeterminada
    actualizarPantalla(); // Mostrar botones de letras
});
