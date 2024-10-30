
  //Ejercicio 1 Objeto String

  /*1. Crea las siguientes funciones y llamalas desde una pagina XHTML para mostrar su funcionamiento:
    a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
    
    b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
      cadena.
    c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
      devuelve la longitud de la palabra m s larga en ella contenida

    d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un 
        valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i.

    e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada, 
      de tal modo que s lo aparece en may scula la primera letra y el resto en minuscula
      */

     
    //a
      
      function invierteCadena(cadena) {
        return cadena.split('').reverse().join('');
        }
    
    
      let cadenaA = prompt("dime una palabra:");
      let cadenaInvertida = invierteCadena(cadenaA);
      document.write(cadenaInvertida+"<br"); 
      
      
      
      //b
      function inviertePalabras(palabra) {
        
        let palabras = palabra.split(' ');
       
        let palabrasInvertidas = palabras.map(palabra.split('').reverse().join(''));
        
        return palabrasInvertidas.join(' ');
    }
    
    
        let cadenaB = prompt("dime una frase");
        let resultado = inviertePalabras(cadenaB);
        document.write(resultado);


        //C

        function encuentraPalabraMasLarga(cad_arg) {
          const palabras = cad_arg.split(' '); // Divide la cadena en palabras
          let maximLongitud = 0; // Inicializa la longitud máxima a 0
      
          for (const palabra of palabras) { // Recorre cada palabra
              if (palabra.length > maximLongitud) { // Si la longitud de la palabra es mayor que maxLen
                  maximLongitud = palabra.length; // Actualiza maxLen
              }
          }
          return maximLongitud; // Devuelve la longitud de la palabra más larga
      }

      let cadenaC = "El perro corre rápidamente";
      let longitudPalabraMasLarga = encuentraPalabraMasLarga(cadena);
      console.log(longitudPalabraMasLarga); // Salida: 12 (longitud de "rápidamente")


         //D

      function filtraPalabrasMasLargas(cad_arg, i) {
        const palabras = cad_arg.split(' '); // Divide la cadena en palabras
        return palabras.filter(palabra => palabra.length > i).length; // Filtra y cuenta
    }

    let cadenaD = "La programación es divertida y educativa";
    let longitudMinima = 5; // Cambia este valor a tu necesidad
    let numPalabrasLargas = filtraPalabrasMasLargas(cadena, longitudMinima);
    console.log(numPalabrasLargas); // Salida: 3 (palabras "programación", "divertida" y "educativa")

        //E

        function cadenaBienFormada(cad_arg) {
          if (cad_arg.length === 0) return ''; // Retorna una cadena vacía si la entrada es vacía
          return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
      }

      let cadena = "hOLA MUNDO";
      let cadenaFormateada = cadenaBienFormada(cadena);
      console.log(cadenaFormateada); // Salida: "Hola mundo"