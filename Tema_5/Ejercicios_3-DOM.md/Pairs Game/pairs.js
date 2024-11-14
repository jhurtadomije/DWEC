const tableroJuego = document.getElementById('tablero-juego');

// Lista de valores o símbolos para las parejas
const valoresCartas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cartas = [...valoresCartas, ...valoresCartas]; // Duplicamos el array para las parejas
let cartasGiradas = [];
let cartasEmparejadas = [];

function barajar(cartas) {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]]; // Intercambiamos los elementos
    }
}

function crearCarta(valor, indice) {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.valor = valor;
    carta.dataset.indice = indice;
    carta.addEventListener('click', girarCarta);
    tableroJuego.appendChild(carta);
}

function girarCarta(evento) {
    const carta = evento.target;

    // Si la carta ya está girada o emparejada, no hacer nada
    if (carta.classList.contains('girada') || carta.classList.contains('emparejada')) {
        return;
    }

    // Girar la carta
    carta.classList.add('girada');
    carta.textContent = carta.dataset.valor;

    cartasGiradas.push(carta);

    // Comprobar si hay dos cartas giradas
    if (cartasGiradas.length === 2) {
        const [primeraCarta, segundaCarta] = cartasGiradas;

        if (primeraCarta.dataset.valor === segundaCarta.dataset.valor) {
            // Las cartas coinciden
            primeraCarta.classList.add('emparejada');
            segundaCarta.classList.add('emparejada');
            cartasEmparejadas.push(primeraCarta, segundaCarta);
        } else {
            // Las cartas no coinciden, las giramos de nuevo después de un pequeño retraso
            setTimeout(() => {
                primeraCarta.classList.remove('girada');
                segundaCarta.classList.remove('girada');
                primeraCarta.textContent = '';
                segundaCarta.textContent = '';
            }, 1000);
        }

        cartasGiradas = [];

        // Comprobar si el juego ha terminado
        if (cartasEmparejadas.length === cartas.length) {
            alert('¡Ganaste!');
        }
    }
}

// Inicializar el juego
barajar(cartas);
cartas.forEach((valor, indice) => crearCarta(valor, indice));
