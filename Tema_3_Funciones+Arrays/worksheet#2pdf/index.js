// 1. Diseña una web que cree un Array llamado clase que contenga información de una clase.
// Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer
// trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas). Por
// ejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10”
let clase = [
    "Angel Garcia, 20, 6, 7, 10",
    "Maria Lopez, 19, 8, 8, 9",
    "Carlos Ruiz, 21, 7, 6, 8",
    "Laura Gomez, 22, 9, 9, 10",
    "Pedro Martinez, 20, 7, 8, 8"
];

// 2. Escribe una función que dado un número de estudiante y un trimestre, devuelva su nota.
// Sobreescribe esa función de tal modo que si no se indica el trimestre se devuelva la nota
// media de los exámenes
function obtenerNota(numeroEstudiante, trimestre = null) {
    if (numeroEstudiante < 0 || numeroEstudiante >= clase.length) {
        return "Estudiante no encontrado";
    }

    let datos = clase[numeroEstudiante].split(", ");

    if (trimestre !== null) {
        if (trimestre < 1 || trimestre > 3) {
            return "Trimestre inválido";
        }
        return parseFloat(datos[trimestre + 1]);
    } else {
        let notas = datos.slice(2).map(Number);
        return notas.reduce((a, b) => a + b) / notas.length;
    }
}

// 3. Escribe una función que devuelva la edad media de los alumnos de la clase.
function edadMediaClase() {
    let sumaEdades = clase.reduce((sum, estudiante) => {
        return sum + parseInt(estudiante.split(", ")[1]);
    }, 0);
    return sumaEdades / clase.length;
}

// 4. A veces para elegir un estudiante al que preguntar en clase necesitamos hacerlo al azar.
// Escribe una función que aleatoriamente vaya devolviendo el nombre de un estudiante cada
// vez.
function estudianteAleatorio() {
    let indice = Math.floor(Math.random() * clase.length);
    return clase[indice].split(", ")[0];
}

// Mostrar resultados iniciales
document.write("<h2>Resultados Iniciales:</h2>");
document.write("<p>Nota del estudiante 0 en el trimestre 1: " + obtenerNota(0, 1) + "</p>");
document.write("<p>Nota media del estudiante 1: " + obtenerNota(1) + "</p>");
document.write("<p>Edad media de la clase: " + edadMediaClase().toFixed(2) + "</p>");
document.write("<p>Estudiante aleatorio: " + estudianteAleatorio() + "</p>");

// 5. Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
// al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
// juntos los elementos pares y los impares. Después, volver a mostrar el array
function paresImpares() {
    let numeros = Array.from({length: 100}, () => Math.floor(Math.random() * 1000) + 1);
    let resultado = "<h2>Pares e Impares:</h2>";

    resultado += "<p>Array original: " + numeros.join(', ') + "</p>";

    let pares = numeros.filter(n => n % 2 === 0);
    let impares = numeros.filter(n => n % 2 !== 0);
    let organizado = [...pares, ...impares];

    resultado += "<p>Array organizado: " + organizado.join(', ') + "</p>";

    return resultado;
}

// Mostrar pares e impares
document.write(paresImpares());

// 7. Utiliza Arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en
// base a comisiones. Los vendedores reciben $ 200 por semana, más el 9% de sus ventas
// brutas de esa semana. Por ejemplo, un vendedor que gana en total $ 5000 en ventas en una
// semana recibe $ 200 más el 9 por ciento de $ 5000, o sea un total de $ 650.
// Diseña una web que permita dar de alta a vendedores, introducir sus ventas e indique cual
// sería su sueldo final.
function operacionesArray() {
    let arr = new Array(10).fill(0);
    let resultado = "<h2>Operaciones con Array:</h2>";

    resultado += "<p>Array inicial: " + arr.join(' ') + "</p>";

    arr = arr.map(x => x + 1);
    resultado += "<p>Array después de añadir 1: " + arr.join(' ') + "</p>";

    return resultado;
}

// Mostrar operaciones con array
document.write(operacionesArray());

// 8. Simulación de lanzamiento de dados
// 9. +mejora del 8
function simularDados() {
    let resultados = new Array(13).fill(0);
    let combinaciones = Array(6).fill().map(() => Array(6).fill(0));

    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let suma = dado1 + dado2;
        resultados[suma]++;
        combinaciones[dado1-1][dado2-1]++;
    }

    let resultado = "<h2>Resultados de lanzamientos de dados:</h2>";

    for (let i = 2; i <= 12; i++) {
        resultado += `<p>Suma ${i}: ${resultados[i]} veces</p>`;
    }

    resultado += "<h3>Tabla de combinaciones:</h3><pre>";

    for (let i = 0; i < combinaciones.length; i++) {
        for (let j = 0; j < combinaciones[i].length; j++) {
            resultado += `${combinaciones[i][j]} `;
        }
        resultado += "\n";
    }

    resultado += "</pre>";

    return resultado;
}

// Mostrar simulación de dados
document.write(simularDados());

// 10. Una pequeña aerolínea acaba de comprar un programa para su nuevo sistema de reservas.
// Diseña la web encargada de asignar asientos en cada vuelo de avión de la aerolínea
// (capacidad: 10 plazas). Se debe pedir en primer lugar el tipo de asiento: "First” (asientos 1 al
// 5) oy "Turista" (resto). Una vez escogido un asiento libre, se debe poder imprimir una
// tarjeta de embarque que indique la persona, el número de asiento y clase de éste (en una
// nueva ventana). Deben utilizarse arrays para solucionar el problema.
let asientos = new Array(10).fill(null);

function reservarAsiento(tipo, nombre) {
    let inicio = tipo === "First" ? 0 : 5;
    let fin = tipo === "First" ? 5 : asientos.length;

    for (let i = inicio; i < fin; i++) {
        if (asientos[i] === null) {
            asientos[i] = nombre;
            return `Asiento ${i+1} reservado para ${nombre} en clase ${tipo}`;
        }
    }

    return "No hay asientos disponibles en esa clase";
}

// Reservar asientos y mostrar resultados
document.write("<h2>Reservas de Asientos:</h2>");
document.write(reservarAsiento("First", "Juan Pérez") + "<br>");
document.write(reservarAsiento("Turista", "Ana García") + "<br>");
document.write(reservarAsiento("First", "Luis Martínez") + "<br>");
document.write(reservarAsiento("Turista", "Sofía López") + "<br>");



// 11. Utiliza una matriz de dos dimensiones para resolver el siguiente problema: Una empresa
// tiene cuatro vendedores (1 a 4) que venden cinco productos diferentes (1 a 5). Una vez al
// día, cada vendedor pasa en un estadillo con las ventas realizadas por producto. Cada hoja
// contiene
// a) el número de vendedor,
// b) el número de producto, y
// c) el valor total de los productos vendidos ese día.
// Así, cada vendedor pasa entre cero y cinco hojas de ventas por día. Supón que disponemos
// dee la información de todos los estadillos del último mes. Escribir un script que lee toda esta
// información de las ventas del mes pasado y resumir el total de ventas por vendedor por
// producto. Todos los totales deben estar almacenan en las ventas de matriz de dos
// dimensiones. Después de procesar toda la información para el mes pasado, mostrar los
// resultados en un formato de tabla XHTML, con cada una de las columnas que representan
// un vendedor y cada una de las filas que representan un producto diferente. Además se
// mostrará una última fila con las ventas acumuladas por vendedor, y una última columna con
// las ventas acumuladas por producto
let ventas = Array(4).fill().map(() => Array(5).fill(0));

function registrarVenta(vendedor, producto, valor) {
    ventas[vendedor-1][producto-1] += valor;
}

function resumenVentas() {
    let resultado = "<h2>Resumen de Ventas:</h2>";

    resultado += "<table border='1'><tr><th>Producto/Vendedor</th><th>1</th><th>2</th><th>3</th><th>4</th><th>Total</th></tr>";

    for (let i = 0; i < ventas[0].length; i++) {
        resultado += `<tr><td>${i+1}</td>`;

        let totalProducto = ventas.reduce((sum, vendedor) => sum + vendedor[i], 0);

        for (let j = 0; j < ventas.length; j++) {
            resultado += `<td>${ventas[j][i]}</td>`;
        }

        resultado += `<td>${totalProducto}</td></tr>`;

        // Sumar total general por vendedor
        for (let j = 0; j < ventas.length; j++) {
            ventas[j][ventas[0].length] ||= [];
            ventas[j][ventas[0].length] += ventas[j][i];
        }

        // Sumar total por producto
        if (!ventas[ventas.length]) ventas[ventas.length] ||= [];
        ventas[ventas.length][i] ||= [];
        ventas[ventas.length][i] += totalProducto;

        // Total general
        if (!ventas[ventas.length]) ventas[ventas.length] ||= [];
        ventas[ventas.length][ventas[0].length] ||= [];
        ventas[ventas.length][ventas[0].length] += totalProducto;

    }

    // Total por vendedor
    resultado += `<tr><td>Total Vendedor</td>`;
    for (let j = 0; j < ventas.length; j++) {
        resultado += `<td>${ventas[j].reduce((sum,v)=>sum+v)}</td>`;
    }
    resultado += `<td>${ventas.reduce((sum,v)=>sum+v.reduce((s,vv)=>s+vv))}</td></tr></table>`;

    return resultado;
}

registrarVenta(1, 1,100);
registrarVenta(2,3 ,200);
registrarVenta(3 ,4 ,150);
registrarVenta(4 ,5 ,300);

// Mostrar resumen de ventas
document.write(resumenVentas());

