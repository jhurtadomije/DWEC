

google.charts.load('current', { packages: ['geochart'] });
google.charts.setOnLoadCallback(dibujarMapa);

function dibujarMapa() {
    // Datos del gráfico
    const datosTurismo = google.visualization.arrayToDataTable([
        ['Country', 'Visitantes (millones)'], // El nombre del país debe estar en inglés
        ['France', 89.4],
        ['Spain', 83.7],
        ['United States', 79.3],
        ['China', 65.7],
        ['Italy', 64.5],
        ['Turkey', 51.2],
        ['Mexico', 45.0],
        ['Thailand', 39.8],
        ['Germany', 39.6],
        ['United Kingdom', 39.4]
    ]);

    // Configuración del gráfico
    const opcionesMapa = {
        colorAxis: { colors: ['#ff9999', '#ffff99', '#99ff99', '#9999ff'] },
        backgroundColor: '#ffffff', // Fondo blanco
        datalessRegionColor: '#dcdcdc', // Color gris claro para países sin datos
        legend: { textStyle: { color: '#333', fontSize: 14 } } // Texto de la leyenda más visible
    };

    // Dibujar el gráfico geográfico
    const mapaGeografico = new google.visualization.GeoChart(document.getElementById('contenedor_mapa'));
    mapaGeografico.draw(datosTurismo, opcionesMapa);
}