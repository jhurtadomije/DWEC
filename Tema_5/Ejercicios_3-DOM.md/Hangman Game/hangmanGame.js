const palabra = 'DESARROLLO';
let palabraOculta = Array(palabra.length).fill('_');
let intentos = 6;
let letrasUsadas = [];

const palabraElement = document.getElementById('palabra');
const intentosElement = document.getElementById('intentos');
const letrasElement = document.getElementById('letras');
const mensajeElement = document.getElementById('mensaje');
const reiniciarButton = document.getElementById('reiniciar');

function actualizarPantalla() {
    palabraElement.textContent = palabraOculta.join(' ');
    intentosElement.textContent = `Intentos restantes: ${intentos}`;
    mensajeElement.textContent = '';

    // Mostrar las letras disponibles
    letrasElement.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const letraButton = document.createElement('button');
        letraButton.textContent = letra;
        letraButton.classList.add('letra');
        
        // Desactivar las letras usadas
        if (letrasUsadas.includes(letra)) {
            letraButton.classList.add('letra-desactivada');
            letraButton.disabled = true;
        } else {
            letraButton.addEventListener('click', () => adivinarLetra(letra));
        }
        
        letrasElement.appendChild(letraButton);
    }

    // Comprobar si el juego ha terminado
    if (intentos <= 0) {
        mensajeElement.textContent = '¡Perdiste! La palabra era: ' + palabra;
    } else if (!palabraOculta.includes('_')) {
        mensajeElement.textContent = '¡Ganaste! Has adivinado la palabra.';
    }
}

function adivinarLetra(letra) {
    letrasUsadas.push(letra);

    // Verificar si la letra está en la palabra
    let letraEncontrada = false;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            palabraOculta[i] = letra;
            letraEncontrada = true;
        }
    }

    if (!letraEncontrada) {
        intentos--;
    }

    actualizarPantalla();
}

function reiniciarJuego() {
    palabraOculta = Array(palabra.length).fill('_');
    intentos = 6;
    letrasUsadas = [];
    mensajeElement.textContent = '';
    actualizarPantalla();
}

reiniciarButton.addEventListener('click', reiniciarJuego);

// Iniciar el juego
actualizarPantalla();
