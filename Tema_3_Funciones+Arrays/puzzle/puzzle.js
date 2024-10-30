class Puzzle {
    constructor(tamano) {
        this.tamano = tamano;
        this.tablero = this.crearTableroMezclado();
        this.espacioVacio = this.encontrarEspacioVacio();
    }

    crearTablero() {
        let numeros = Array.from(Array(this.tamano * this.tamano).keys());
        let tablero = [];

        for (let i = 0; i < this.tamano; i++) {
            tablero[i] = numeros.slice(i * this.tamano, (i + 1) * this.tamano);
        }
        return tablero;
    }

    mezclarTablero(tablero) {
        let numeros = tablero.flat(); // Convierte el tablero en una lista
        for (let i = numeros.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numeros[i], numeros[j]] = [numeros[j], numeros[i]]; // Intercambia elementos
        }
        return numeros;
    }

    crearTableroMezclado() {
        let tablero = this.crearTablero();
        let numerosMezclados = this.mezclarTablero(tablero);

        // Rellenar el tablero con los números mezclados
        for (let i = 0; i < this.tamano; i++) {
            for (let j = 0; j < this.tamano; j++) {
                tablero[i][j] = numerosMezclados.shift();
            }
        }
        return tablero;
    }

    encontrarEspacioVacio() {
        for (let i = 0; i < this.tamano; i++) {
            for (let j = 0; j < this.tamano; j++) {
                if (this.tablero[i][j] === 0) {
                    return { fila: i, col: j };
                }
            }
        }
    }

    mover(filaNueva, colNueva) {
        if (!this.esMovimientoValido(filaNueva, colNueva)) {
            return false;
        }

        // Intercambia el valor de la celda nueva con el espacio vacío
        [this.tablero[this.espacioVacio.fila][this.espacioVacio.col], this.tablero[filaNueva][colNueva]] = 
            [this.tablero[filaNueva][colNueva], this.tablero[this.espacioVacio.fila][this.espacioVacio.col]];

        this.espacioVacio = { fila: filaNueva, col: colNueva };
        return true;
    }

    esMovimientoValido(filaNueva, colNueva) {
        // Validar que la posición esté dentro de los límites del tablero
        if (filaNueva < 0 || filaNueva >= this.tamano || colNueva < 0 || colNueva >= this.tamano) {
            return false;
        }

        const diferenciaFila = Math.abs(filaNueva - this.espacioVacio.fila);
        const diferenciaCol = Math.abs(colNueva - this.espacioVacio.col);

        // Solo se puede mover si la casilla es adyacente al espacio vacío
        return (diferenciaFila + diferenciaCol === 1);
    }

    dibujar() {
        let output = '';
        for (let i = 0; i < this.tamano; i++) {
            output += this.tablero[i].map(celda => (celda === 0 ? ' ' : String(celda).padStart(2, ' '))).join(' ') + '<br>';
        }
        document.getElementById('puzzle').innerHTML = output;
    }

    estaResuelto() {
        let contador = 1;
        for (let i = 0; i < this.tamano; i++) {
            for (let j = 0; j < this.tamano; j++) {
                if (i === this.tamano - 1 && j === this.tamano - 1) {
                    return true; // La última celda debe estar vacía
                }
                if (this.tablero[i][j] !== contador++) {
                    return false;
                }
            }
        }
    }
}

// Crear un puzzle de 4x4
let puzzle = new Puzzle(4);
puzzle.dibujar();
console.log('Moviendo el espacio vacío...');
puzzle.mover(2, 3);
puzzle.dibujar();
