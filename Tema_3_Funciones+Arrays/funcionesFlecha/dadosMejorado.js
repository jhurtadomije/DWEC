// Función para generar un número aleatorio entre 1 y 6
const lanzarDado = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Función para simular 36,000 lanzamientos de dos dados y contar las combinaciones de sus sumas y las combinaciones individuales
const simularLanzamientos = () => {
    const combinacionesSuma = new Array(11).fill(0); // Array para contar las combinaciones (sumas de 2 a 12)
    const combinacionesIndividuales = Array.from({ length: 6 }, () => new Array(6).fill(0)); // Array bidimensional para contar las combinaciones individuales de los dados

    for (let i = 0; i < 36000; i++) {
        const dado1 = lanzarDado();
        const dado2 = lanzarDado();
        const suma = dado1 + dado2;
        
        combinacionesSuma[suma - 2]++; // Incrementar el contador para la suma correspondiente
        combinacionesIndividuales[dado1 - 1][dado2 - 1]++; // Incrementar el contador para la combinación de los dados
    }

    return { combinacionesSuma, combinacionesIndividuales };
};

// Función para mostrar los resultados de las sumas en el HTML
const mostrarResultadosSuma = (combinaciones) => {
    document.write("<h2>Resultados de la Simulación de Lanzamientos de Dados (Suma)</h2>");
    document.write("<table border='1'><tr><th>Suma</th><th>Frecuencia</th></tr>");

    for (let i = 0; i < combinaciones.length; i++) {
        document.write("<tr><td>" + (i + 2) + "</td><td>" + combinaciones[i] + "</td></tr>");
    }

    document.write("</table>");
};

// Función para mostrar los resultados de las combinaciones individuales en el HTML
const mostrarResultadosCombinaciones = (combinaciones) => {
    document.write("<h2>Resultados de la Simulación de Lanzamientos de Dados (Combinaciones Individuales)</h2>");
    document.write("<table border='1'><tr><th>Dado 1 \\ Dado 2</th>");

    for (let i = 1; i <= 6; i++) {
        document.write("<th>" + i + "</th>");
    }

    document.write("</tr>");

    for (let i = 0; i < combinaciones.length; i++) {
        document.write("<tr><th>" + (i + 1) + "</th>");
        for (let j = 0; j < combinaciones[i].length; j++) {
            document.write("<td>" + combinaciones[i][j] + "</td>");
        }
        document.write("</tr>");
    }

    document.write("</table>");
};

// Ejecutar la simulación y mostrar los resultados
const { combinacionesSuma, combinacionesIndividuales } = simularLanzamientos();
mostrarResultadosSuma(combinacionesSuma);
mostrarResultadosCombinaciones(combinacionesIndividuales);
