
  //objeto mathRandom


  // programa que genera numeros aleatorios entre 0 y 1

  /* let aleatorio = Math.random();
   document.write((aleatorio));
  */


  // igual pero entre 0 y 100

  /* let aleatorio2 = Math.random()*(200-100)+100;
    document.write(aleatorio2);
  */


  // Pide dos valores al usuario y genera un n aleatorio entre esos dos valores
  let numero1 = parseInt(prompt("Introduce un número:"));
  let numero2 = parseInt(prompt("Introduce un número:"));

  if(numero1>numero2){
    let aleatorio = Math.random()*(numero1-numero2)+numero2;
    document.write(aleatorio);
   }
   else(numero2>numero1)
    let aleatorio= Math.random()*(numero2-numero1)+numero1;
    document.write(aleatorio);
   