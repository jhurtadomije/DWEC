

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(dibujarGraficas);

let graficoBarras, graficoSectores, datosBarras, datosSectores, opcionesBarras, opcionesSectores;

function dibujarGraficas() {
    // Datos iniciales para el gráfico de barras
    datosBarras = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños', { role: 'style' }],
        ['PP', 137, 'color: #1f77b4'],
        ['PSOE', 121, 'color: #d62728'],
        ['VOX', 33, 'color: #2ca02c'],
        ['SUMAR', 31, 'color: #ff7f0e'],
        ['ERC', 7, 'color: #9467bd']
    ]);

    // Configuración inicial del gráfico de barras
    opcionesBarras = {
        title: 'Representación en el Congreso (Barras)',
        hAxis: { title: 'Número de escaños' },
        vAxis: { title: 'Partidos' },
        legend: { position: 'none' },
        animation: {
            duration: 1000,
            easing: 'out'
        }
    };

    // Crear gráfico de barras
    graficoBarras = new google.visualization.BarChart(document.getElementById('contenedor_barras'));
    graficoBarras.draw(datosBarras, opcionesBarras);

    // Datos iniciales para el gráfico de sectores
    datosSectores = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PP', 137],
        ['PSOE', 121],
        ['SUMAR', 31],
        ['VOX', 33],
        ['ERC', 7]
    ]);

    // Configuración inicial del gráfico de sectores
    opcionesSectores = {
        title: 'Representación en el Congreso (Sectores)',
        pieHole: 0.4, // Gráfico de anillo
        animation: {
            duration: 1000,
            easing: 'out'
        }
    };

    // Crear gráfico de sectores
    graficoSectores = new google.visualization.PieChart(document.getElementById('contenedor_sectores'));
    graficoSectores.draw(datosSectores, opcionesSectores);


}

function actualizarDatos() {
    // Nuevos datos para los gráficos
    datosBarras = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños', { role: 'style' }],
        ['PP', 100, 'color: #1f77b4'],
        ['PSOE', 90, 'color: #d62728'],
        ['VOX', 145, 'color: #2ca02c'],
        ['SUMAR', 0, 'color: #ff7f0e'],
        ['ERC', 0, 'color: #9467bd']
    ]);

    datosSectores = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PP', 100],
        ['PSOE', 90],
        ['SUMAR', 1],
        ['VOX', 145],
        ['ERC', 0]
    ]);

    // Redibujar gráficos con los nuevos datos
    graficoBarras.draw(datosBarras, opcionesBarras);
    graficoSectores.draw(datosSectores, opcionesSectores);
}
window.onload = function () {
    // Actualizar gráficos después de 10 segundos
    setTimeout(actualizarDatos, 10000);
}