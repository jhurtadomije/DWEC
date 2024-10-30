
// Programa que pide al usuario 10 numeros y al finalizar muestra la suma de todos ellos.
let suma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Inserte el numero "+ i + ":"));
    suma += numero;
}

document.write("La suma de los 10 números es: " + suma);
