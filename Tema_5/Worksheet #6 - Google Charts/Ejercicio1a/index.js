

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(dibujarGraficas);

function dibujarGraficas() {
    // Datos para las gráficas
    const datosPartidos = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños', { role: 'style' }],
        ['PP', 137, 'color: #1f77b4'],
        ['PSOE', 121, 'color: #ff7f0e'],
        ['VOX', 33, 'color: #2ca02c'],
        ['SUMAR', 31, 'color: #d62728'],
        ['ERC', 7, 'color: #9467bd']
    ]);

    // Configuración del gráfico de barras
    const opcionesBarras = {
        title: 'Representación en el Congreso (Barras)',
        hAxis: { title: 'Número de escaños' },
        vAxis: { title: 'Partidos' },
        legend: { position: 'none' },
    };
    const graficoBarras = new google.visualization.BarChart(document.getElementById('contenedor_barras'));
    graficoBarras.draw(datosPartidos, opcionesBarras);

    // Datos para el gráfico de sectores
    const datosSectores = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PP', 137],
        ['PSOE', 121],
        ['VOX', 33],
        ['SUMAR', 31],
        ['ERC', 7],
    ]);

    // Configuración del gráfico de sectores
    const opcionesSectores = {
        title: 'Representación en el Congreso (Sectores)',
        pieHole: 0.4, // Para un gráfico de anillo
    };
    const graficoSectores = new google.visualization.PieChart(document.getElementById('contenedor_sectores'));
    graficoSectores.draw(datosSectores, opcionesSectores);
}google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(dibujarGraficas);

function dibujarGraficas() {
    // Datos para las gráficas
    const datosPartidos = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños', { role: 'style' }],
        ['PP', 137, 'color: #1f77b4'],
        ['PSOE', 121, 'color: #ff7f0e'],
        ['VOX', 33, 'color: #2ca02c'],
        ['SUMAR', 31, 'color: #d62728'],
        ['ERC', 7, 'color: #9467bd']
    ]);

    // Configuración del gráfico de barras
    const opcionesBarras = {
        title: 'Representación en el Congreso (Barras)',
        hAxis: { title: 'Número de escaños' },
        vAxis: { title: 'Partidos' },
        legend: { position: 'none' },
    };
    const graficoBarras = new google.visualization.BarChart(document.getElementById('contenedor_barras'));
    graficoBarras.draw(datosPartidos, opcionesBarras);

    // Datos para el gráfico de sectores
    const datosSectores = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PP', 137],
        ['PSOE', 121],
        ['VOX', 33],
        ['SUMAR', 31],
        ['ERC', 7],
    ]);

    // Configuración del gráfico de sectores
    const opcionesSectores = {
        title: 'Representación en el Congreso (Sectores)',
        pieHole: 0.4, // Para un gráfico de anillo
    };
    const graficoSectores = new google.visualization.PieChart(document.getElementById('contenedor_sectores'));
    graficoSectores.draw(datosSectores, opcionesSectores);
}