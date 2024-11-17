window.onload = function(){

let intervalo;
let tiempo = 0; // En segundos
let corriendo = false;

const tiempoElemento = document.getElementById('tiempo');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function actualizarTiempo() {
    tiempo++;
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;

    // Formato de dos dígitos
    tiempoElemento.textContent = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
}

function formatoTiempo(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
}

startButton.addEventListener('click', () => {
    if (!corriendo) {
        intervalo = setInterval(actualizarTiempo, 1000);
        corriendo = true;
        startButton.textContent = 'Pausar';
        stopButton.disabled = false;
    } else {
        clearInterval(intervalo);
        corriendo = false;
        startButton.textContent = 'Reanudar';
        stopButton.disabled = true;
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalo);
    corriendo = false;
    startButton.textContent = 'Reanudar';
    stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalo);
    corriendo = false;
    tiempo = 0;
    tiempoElemento.textContent = '00:00:00';
    startButton.textContent = 'Iniciar';
    stopButton.disabled = true;
});

}