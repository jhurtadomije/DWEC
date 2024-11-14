// Ejercicio 1: Puzzle
class Puzzle {
    constructor(dimension) {
        this.dimension = dimension;
        this.tablero = [];
        this.celdaVacia = { fila: dimension - 1, col: dimension - 1 };
        this.movimientos = 0;
        this.tiempoInicio = null;
        this.tiempoFin = null;
        this.inicializarTablero();
    }

    inicializarTablero() {
        let numeros = Array.from({length: this.dimension * this.dimension - 1}, (_, i) => i + 1);
        numeros = this.barajar(numeros);
        numeros.push(0);  // 0 representa el espacio vacío

        for (let i = 0; i < this.dimension; i++) {
            this.tablero[i] = numeros.slice(i * this.dimension, (i + 1) * this.dimension);
        }
    }

    barajar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    mover(direccion) {
        let nuevaFila = this.celdaVacia.fila;
        let nuevaColumna = this.celdaVacia.col;

        switch(direccion) {
            case 'arriba': nuevaFila--; break;
            case 'abajo': nuevaFila++; break;
            case 'izquierda': nuevaColumna--; break;
            case 'derecha': nuevaColumna++; break;
        }

        if (this.esMovimientoValido(nuevaFila, nuevaColumna)) {
            [this.tablero[this.celdaVacia.fila][this.celdaVacia.col], this.tablero[nuevaFila][nuevaColumna]] =
                [this.tablero[nuevaFila][nuevaColumna], this.tablero[this.celdaVacia.fila][this.celdaVacia.col]];

            this.celdaVacia = { fila: nuevaFila, col: nuevaColumna };
            this.movimientos++;

            if (!this.tiempoInicio) this.tiempoInicio = new Date();
            if (this.estaResuelto()) this.tiempoFin = new Date();
        }
    }

    esMovimientoValido(fila, col) {
        return fila >= 0 && fila < this.dimension && col >= 0 && col < this.dimension;
    }

    estaResuelto() {
        let tableroPlano = this.tablero.flat();
        return tableroPlano.slice(0, -1).every((num, index) => num === index + 1) && tableroPlano[tableroPlano.length - 1] === 0;
    }

    obtenerTiempoTranscurrido() {
        if (!this.tiempoInicio) return 0;
        let tiempoFin = this.tiempoFin || new Date();
        return (tiempoFin - this.tiempoInicio) / 1000;
    }

    dibujar() {
        return this.tablero.map(row => row.map(cell => cell === 0 ? ' ' : cell.toString().padStart(2)).join(' | ')).join('\n' + '-'.repeat(this.dimension * 4 - 1) + '\n');
    }
}

// Ejercicio 2: Tres en Raya
class TresEnRaya {
    constructor() {
        this.tablero = Array(3).fill().map(() => Array(3).fill(null));
        this.jugadorActual = 'X';
        this.contadorMovimientos = 0;
        this.juegoTerminado = false;
    }

    realizarMovimiento(fila, col) {
        if (this.tablero[fila][col] === null && !this.juegoTerminado) {
            this.tablero[fila][col] = this.jugadorActual;
            this.contadorMovimientos++;

            if (this.verificarVictoria(fila, col)) {
                this.juegoTerminado = true;
                return `${this.jugadorActual} gana!`;
            } else if (this.contadorMovimientos === 9) {
                this.juegoTerminado = true;
                return 'Empate!';
            }

            this.jugadorActual = this.jugadorActual === 'X' ? 'O' : 'X';
            return 'Siguiente turno';
        }
        return 'Movimiento inválido';
    }

    verificarVictoria(fila, col) {
        // Comprobar fila
        if (this.tablero[fila].every(celda => celda === this.jugadorActual)) return true;

        // Comprobar columna
        if (this.tablero.every(r => r[col] === this.jugadorActual)) return true;

        // Comprobar diagonales
        if (fila === col && this.tablero.every((r, i) => r[i] === this.jugadorActual)) return true;
        if (fila + col === 2 && this.tablero.every((r, i) => r[2-i] === this.jugadorActual)) return true;

        return false;
    }

    dibujar() {
        return this.tablero.map(row => row.map(celda => celda || ' ').join(' | ')).join('\n---------\n');
    }
}

// Ejercicio 3: Buscaminas
class Buscaminas {
    constructor() {
        this.tablero = Array(8).fill().map(() => Array(8).fill(0));
        this.revelado = Array(8).fill().map(() => Array(8).fill(false));
        this.numeroMinas = 10;
        this.juegoTerminado = false;
        this.tiempoInicio = null;
        this.tiempoFin = null;

        // Colocar minas y calcular números
        this.colocarMinas();
        this.calcularNumeros();
    }

    colocarMinas() {
        let minasColocadas = 0;

        while (minasColocadas < this.numeroMinas) {
            let fila = Math.floor(Math.random() * 8);
            let col = Math.floor(Math.random() * 8);

            if (this.tablero[fila][col] !== -1) {
                this.tablero[fila][col] = -1; // Colocar mina
                minasColocadas++;
            }
        }
    }

    calcularNumeros() {
        for (let fila = 0; fila < 8; fila++) {
            for (let col = 0; col < 8; col++) {
                if (this.tablero[fila][col] !== -1) {
                    // Contar minas adyacentes
                    this.tablero[fila][col] = this.contarMinasAdyacentes(fila, col);
                }
            }
        }
    }

    contarMinasAdyacentes(fila, col) {
        let contador = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (fila + i >= 0 && fila + i < 8 && col + j >= 0 && col + j < 8) {
                    if (this.tablero[fila + i][col + j] === -1) contador++;
                }
            }
        }

        return contador;
    }

    revelarCelda(fila, col) {
        if (this.juegoTerminado || this.revelado[fila][col]) return;

        if (!this.tiempoInicio) this.tiempoInicio = new Date();

        // Marcar como revelada
        this.revelado[fila][col] = true;

        // Si se revela una mina
        if (this.tablero[fila][col] === -1) {
            // Fin del juego
            this.juegoTerminado = true;
            this.tiempoFin = new Date();
            return 'Juego Terminado';
        }

        // Si se revela una celda vacía
        if (this.tablero[fila][col] === 0) {
            // Revelar celdas adyacentes automáticamente
            this.revelarCeldasAdyacentes(fila, col);
        }

        // Verificar si se ha ganado el juego
        if (this.verificarVictoria()) {
            // Fin del juego
            this.juegoTerminado = true;
            return '¡Has Ganado!';
        }

        return 'Continuar';
    }

    revelarCeldasAdyacentes(fila, col) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (fila + i >= 0 && fila + i < 8 && col + j >= 0 && col + j < 8) {
                    if (!this.revelado[fila + i][col + j]) {
                        // Revelar celda adyacente
                        this.revelarCelda(fila + i, col + j);
                    }
                }
            }
        }
    }

    verificarVictoria() {
        for (let fila = 0; fila < 8; fila++) {
            for (let col = 0; col < 8; col++) {
                if (this.tablero[fila][col] !== -1 && !this.revelado[fila][col]) {
                    return false;
                }
            }
        }
        return true;
    }

    obtenerTiempoTranscurrido() {
        if (!this.tiempoInicio) return 0;
        let tiempoFin = this.tiempoFin || new Date();
        return (tiempoFin - this.tiempoInicio) / 1000;
    }

    dibujar() {
        return this.tablero.map((row, i) => row.map((celda, j) =>
            this.revelado[i][j] ? (celda === -1 ? '*' : celda.toString()) : '#'
        ).join(' ')).join('\n');
    }
}

// Pruebas de los juegos
document.addEventListener('DOMContentLoaded', () => {

    // Prueba del Puzzle
    let puzzleJuego = new Puzzle(3);
    document.getElementById('salidaPuzzle').textContent =
        'Estado inicial:\n' + puzzleJuego.dibujar();
    puzzleJuego.mover('derecha');
    document.getElementById('salidaPuzzle').textContent +=
        '\n\nDespués de mover a la derecha:\n' + puzzleJuego.dibujar();

    // Prueba del Tres en Raya
    let tresEnRayaJuego = new TresEnRaya();
    document.getElementById('salidaTresEnRaya').textContent =
        'Estado inicial:\n' + tresEnRayaJuego.dibujar();
    tresEnRayaJuego.realizarMovimiento(0, 0);
    document.getElementById('salidaTresEnRaya').textContent +=
        '\n\nDespués de jugar en (0,0):\n' + tresEnRayaJuego.dibujar();

    // Prueba del Buscaminas
    let buscaminasJuego = new Buscaminas();
    document.getElementById('salidaBuscaminas').textContent =
        'Estado inicial:\n' + buscaminasJuego.dibujar();
    buscaminasJuego.revelarCelda(0, 0);
    document.getElementById('salidaBuscaminas').textContent +=
        '\n\nDespués de revelar la celda en (0,0):\n' + buscaminasJuego.dibujar();
});