

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let operacion = prompt("introduce una operación (+, -, * o /):");
let resultado;

switch (operacion) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "No se puede dividir entre cero";
        }
        break;
    default:
        resultado = "Operación no válida";
}

// Mostrar el resultado
document.write("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultado);