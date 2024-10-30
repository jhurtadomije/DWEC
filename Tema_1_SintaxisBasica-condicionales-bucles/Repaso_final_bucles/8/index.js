
//Repaso final bucles Ejercicio 8
//Realizar el factorial de los primeros N números.


let N = parseInt(prompt("Dame un número:"));
let factorial = 1;


  for (let i = 1; i <= N; i++) {
    if (!isNaN(N) && N > 0) {
    for (let j = 1; j <= i; j++) {
      factorial *= j;
    }
  }
    document.write("El factorial de " + i + " es: " + factorial+"<br>");
  
} 