/*Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.*/


// Función para generar un número aleatorio entre 1 y 6
const lanzarDado = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Función para simular 36,000 lanzamientos de dos dados y contar las combinaciones de sus sumas
const simularLanzamientos = () => {
    const combinaciones = new Array(11).fill(0); // Array para contar las combinaciones (sumas de 2 a 12)

    for (let i = 0; i < 36000; i++) {
        const dado1 = lanzarDado();
        const dado2 = lanzarDado();
        const suma = dado1 + dado2;
        combinaciones[suma - 2]++; // Incrementar el contador para la suma correspondiente
    }

    return combinaciones;
};

// Función para mostrar los resultados en el HTML
const mostrarResultados = (combinaciones) => {
    document.write("<h2>Resultados de la Simulación de Lanzamientos de Dados</h2>");
    document.write("<table border='1'><tr><th>Suma</th><th>Frecuencia</th></tr>");

    for (let i = 0; i < combinaciones.length; i++) {
        document.write("<tr><td>" + (i + 2) + "</td><td>" + combinaciones[i] + "</td></tr>");
    }

    document.write("</table>");
};

// Ejecutar la simulación y mostrar los resultados
const combinaciones = simularLanzamientos();
mostrarResultados(combinaciones);
