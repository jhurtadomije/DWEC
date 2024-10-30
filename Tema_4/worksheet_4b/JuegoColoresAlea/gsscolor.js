/**
 * Juego "Adivina el Color"
 * implementamos la lógica del juego donde el jugador debe adivinar un color RGB.
 */


let colorCorrecto; //color que el jugador debe adivina
let vidas = 3; //Número inicial de vidas del jugador
let juegoTerminado = false; // el juego ha terminado??

/**
 * Genera un color RGB aleatorio.
 * @returns {string} Una cadena en formato "rgb(r, g, b)" con valores aleatorios.
 */
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Actualizamos el contador de vidas en el HTML.
 */
function setVidas() {
    document.getElementById("vidas").innerHTML = `Vidas: ${vidas}`;
}

/**
 * Sacamos un mensaje en el HTML.
 * @param {string} mensaje - El mensaje a mostrar.
 */
function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerHTML = mensaje;
}


/**
 * Maneja el evento de clic en una caja de color.
 * @param {HTMLElement} cajaColor - El elemento HTML de la caja de color en la que hacemos click.
 */
function cambiarColor(cajaColor) {
    if(juegoTerminado)return;
    let colorSeleccionado = cajaColor.style.backgroundColor;
    if (colorSeleccionado === colorCorrecto) {
        juegoTerminado = true;
        mostrarMensaje("Estupendo!!! Has Ganado!!");
    } else {
        vidas -= 1;
        setVidas();
        mostrarMensaje("Lo siento, ¡Otra vez será!");
        if (vidas === 0) {
            juegoTerminado = true;
            mostrarMensaje("Ohhh, vidas terminadas!!! El color correcto era: " + colorCorrecto + "<br" +
                "THE END...");
        }
    }
}


/**
 * Inicia un nuevo juego con el número especificado de colores y vidas.
 * @param {number} numColores - Número de colores a generar.
 * @param {number} numVidas - Número de vidas para el jugador.
 */
function iniciarModo(numColores, numVidas) {
    juegoTerminado = false;
    vidas = numVidas;
    setVidas();
    mostrarMensaje("");

    const colorContenedor = document.querySelector(".colors-container");
    colorContenedor.innerHTML = "";
    const colores = Array.from({ length: numColores }, generateRandomColor);
    colorCorrecto = colores[Math.floor(Math.random() * numColores)];
    document.getElementById("colorValue").innerHTML = colorCorrecto;
    colores.forEach(color => {
        let cajaColor = document.createElement("div");
        cajaColor.setAttribute('aria-label', `color ${color}`);
        cajaColor.classList.add("colorBox");
        cajaColor.style.backgroundColor = color;
        cajaColor.addEventListener("click", () => cambiarColor(cajaColor));
        colorContenedor.appendChild(cajaColor);
    });
}



const MODO_NORMAL = { colores: 6, vidas: 5 };
const MODO_FACIL = { colores: 3, vidas: 6 };
const MODO_DIFICIL = { colores: 9, vidas: 3 };


const empezarJuego = () => iniciarModo(MODO_NORMAL.colores, MODO_NORMAL.vidas);


const iniciarModoFacil = () => iniciarModo(MODO_FACIL.colores, MODO_FACIL.vidas);


const iniciarModoDificil = () => iniciarModo(MODO_DIFICIL.colores, MODO_DIFICIL.vidas);


window.onload = empezarJuego;