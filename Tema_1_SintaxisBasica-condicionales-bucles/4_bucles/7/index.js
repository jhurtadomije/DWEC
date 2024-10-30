

/*Programa que pide un número a un usuario y el otro lo adivina*/


let numeroMagico = parseInt(prompt("Usuario 1: Introduce un número para que el Usuario 2 lo adivine:"));

let intento = parseInt(prompt("Usuario 2: Intenta adivinar el número:"));

while (intento !== numeroMagico) {
    if (intento < numeroMagico) {
        alert("Debe ser mayor que el introducido");
    } else if (intento > numeroMagico) {
        alert("Debe ser menor que el introducido");
    }
    intento = parseInt(prompt("Usuario 2: Intenta adivinar el número de nuevo:"));
}

alert("¡Congratulations! Número adivinado");
