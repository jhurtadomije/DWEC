function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulacion() {
    let ocurrencias = [0, 0, 0, 0, 0, 0];  // Para contar las ocurrencias

    // Realiza 6000 tiradas y cuenta los resultados
    for (let i = 0; i < 6000; i++) {
        ocurrencias[lanzamiento() - 1]++;
    }

    
    for (let i = 0; i < ocurrencias.length; i++) {
        document.write(ocurrencias[i])+ "ocurrencias<br>";
    }
}