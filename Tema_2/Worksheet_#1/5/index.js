// Limpiar el documento al inicio
document.body.innerHTML = '';

// Usar un bucle for para crear el reloj
for (let i = 0; i < Infinity; i++) {
    setTimeout(() => {
        const ahora = new Date();
        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        
        const tiempoFormateado = `${horas}:${minutos}:${segundos}`;
        
        // Limpiar el documento y mostrar la hora
        document.body.innerHTML = tiempoFormateado;
    }, i * 1000); // Incrementa el tiempo de espera por cada iteración
}