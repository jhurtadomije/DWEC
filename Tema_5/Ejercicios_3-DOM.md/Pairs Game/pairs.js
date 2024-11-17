document.addEventListener('DOMContentLoaded', function() {
    const tableroJuego = document.getElementById('tablero-juego');

    // Lista de valores o símbolos para las parejas
    const valoresCartas = ['A', 'B', 'C', 'D', 'E'];
    let cartas = [...valoresCartas, ...valoresCartas]; // Duplicamos el array para las parejas
    let cartasGiradas = [];
    let cartasEmparejadas = [];
    let temporizadorIniciado = false;
    let segundos = 0;
    let minutos = 0;
    let timerInterval;

    // Función para barajar las cartas
    function barajar(cartas) {
        for (let i = cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
        }
    }

    // Función para crear cada carta en el tablero
    function crearCarta(valor) {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.valor = valor;
        carta.addEventListener('click', girarCarta);
        tableroJuego.appendChild(carta);
    }

    // Función para manejar el giro de las cartas
    function girarCarta(evento) {
        const carta = evento.target;

        // Evita girar cartas ya giradas o emparejadas
        if (carta.classList.contains('girada') || carta.classList.contains('emparejada')) {
            return;
        }

        // Inicia el temporizador al girar la primera carta
        if (!temporizadorIniciado) {
            iniciarTemporizador();
            temporizadorIniciado = true;
        }

        // Girar la carta
        carta.classList.add('girada');
        carta.textContent = carta.dataset.valor;

        cartasGiradas.push(carta);

        // Comprueba si hay dos cartas giradas
        if (cartasGiradas.length === 2) {
            const [primeraCarta, segundaCarta] = cartasGiradas;

            if (primeraCarta.dataset.valor === segundaCarta.dataset.valor) {
                // Las cartas coinciden
                primeraCarta.classList.add('emparejada');
                segundaCarta.classList.add('emparejada');
                cartasEmparejadas.push(primeraCarta, segundaCarta);
            } else {
                // Las cartas no coinciden, las giramos de nuevo tras un pequeño retraso
                setTimeout(() => {
                    primeraCarta.classList.remove('girada');
                    segundaCarta.classList.remove('girada');
                    primeraCarta.textContent = '';
                    segundaCarta.textContent = '';
                }, 1000);
            }

            cartasGiradas = [];

            // Comprueba si el juego ha terminado
            if (cartasEmparejadas.length === cartas.length) {
                detenerTemporizador();
                alert(`¡Ganaste! Tiempo: ${formatearTiempo(minutos, segundos)}`);
            }
        }
    }

    // Función para iniciar el temporizador
    function iniciarTemporizador() {
        timerInterval = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            document.getElementById('timer').textContent = formatearTiempo(minutos, segundos);
        }, 1000);
    }

    // Función para detener el temporizador
    function detenerTemporizador() {
        clearInterval(timerInterval);
    }

    // Función para formatear el tiempo como MM:SS
    function formatearTiempo(minutos, segundos) {
        return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    // Inicializa el juego
    function inicializarJuego() {
        barajar(cartas);
        cartas.forEach(valor => crearCarta(valor));
        document.getElementById('timer').textContent = '00:00'; // Reinicia el temporizador
    }

    // Llamar a la función para iniciar el juego
    inicializarJuego();
});
