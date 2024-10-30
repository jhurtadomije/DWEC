
//Repaso final bucles Ejercicio 6
//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario


let N = parseInt(prompt("Dame el primer número:"));
let M = parseInt(prompt("Dame el segundo número:"));
let temp = N;
let sum = 0; 

if (!isNaN(N) && !isNaN(M)) {
  
  if (N > M) {
     N = M;
     M = temp;
   }
   for (let i = N; i <= M; i++) {
    if (i % 2 == 0) {    // tambien se puede negar el modulo, tambien es valido para la condicion if(!(i%2))
      sum += i;
     }
   }
  
  document.write("La suma de todos los números pares entre " + N + " y " + M + " es: " + sum);
} 