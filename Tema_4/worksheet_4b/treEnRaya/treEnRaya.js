



let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let juegoActivo = true;

const elementoTablero = document.getElementById('tablero');
const elementoMensaje = document.getElementById('mensaje');
const botonReinicio = document.getElementById('reiniciar');

function iniciarJuego() {
    elementoTablero.addEventListener('click', manejarClickCelda);
    botonReinicio.addEventListener('click', reiniciarJuego);
    actualizarMensaje(`Turno del jugador ${jugadorActual}`);
}

function manejarClickCelda(evento) {
    const celdaClickeada = evento.target;
    const indiceCelda = parseInt(celdaClickeada.getAttribute('data-indice'));

    if (tablero[indiceCelda] !== '' || !juegoActivo) return;

    actualizarCelda(celdaClickeada, indiceCelda);
    verificarResultado();
}

function actualizarCelda(celda, indice) {
    tablero[indice] = jugadorActual;
    celda.textContent = jugadorActual;
}

function cambiarJugador() {
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    actualizarMensaje(`Turno del jugador ${jugadorActual}`);
}

function verificarResultado() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    for (const combinacion of combinacionesGanadoras) {
        if (tablero[combinacion[0]] &&
            tablero[combinacion[0]] === tablero[combinacion[1]] &&
            tablero[combinacion[0]] === tablero[combinacion[2]]) {
            finalizarJuego(`¡El jugador ${jugadorActual} ha ganado!`);
            return;
        }
    }

    if (!tablero.includes('')) {
        finalizarJuego('¡Es un empate!');
    } else {
        cambiarJugador();
    }
}

function finalizarJuego(mensaje) {
    juegoActivo = false;
    actualizarMensaje(mensaje);
}

function actualizarMensaje(mensaje) {
    elementoMensaje.textContent = mensaje;
}

function reiniciarJuego() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    jugadorActual = 'X';
    juegoActivo = true;
    actualizarMensaje(`Turno del jugador ${jugadorActual}`);
    document.querySelectorAll('.celda').forEach(celda => celda.textContent = '');
}

iniciarJuego();