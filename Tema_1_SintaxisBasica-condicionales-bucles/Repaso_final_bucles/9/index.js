
//Repaso final bucles Ejercicio 9
//Encontrar todos los divisores de un número.



let numero = parseInt(prompt("dame un número:"));
let divisor = "";

if (!isNaN(numero) && numero > 0) {

  
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisor += i + " ";
    }
  }
  document.write("Los divisores de " + numero + " son: " + divisor+"<br>");
} 