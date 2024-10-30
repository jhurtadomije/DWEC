//Repaso final bucles Ejercicio 5
//Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.



let numeros = prompt("dame un número:");
let sum = 0;

if (!isNaN(numeros)&& numeros !== "") { //verificamos que sea un numero y  que no sea igual a una cadena de caracteres
  
  for (let i = 0; i < numeros.length; i++) {
    sum += parseInt(numeros[i]);
    }
    document.write("La suma de los numeros es: " + sum);
    } else {
    document.write("deben ser numeros.");
    }