//Repaso final bucles Ejercicio 7
//Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario



let N = parseInt(prompt("Dame un número:"));
let sum = 0;

if (!isNaN(N) && N > 0) {
 
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  
  document.write("La sumatoria de los primeros " + N + " números es: " + sum);
}