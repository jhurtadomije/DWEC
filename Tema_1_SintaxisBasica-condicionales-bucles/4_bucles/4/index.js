
//pide al usuario que introduzca palabras hasta que introduzca salir. Una vez terminado, muestra todas las palabras en pantalla

let palabra;
let palabras = "";

    palabra = prompt("introduce una palabra (escribe 'SALIR' para terminar):");

    while (palabra.toUpperCase() !== "SALIR") {
        palabras += palabra + "<br>";
        palabra = prompt("inserta una palabra una palabra (escribe 'SALIR' para terminar):");
        
        }
        if(palabra.toUpperCase()==="SALIR")
            document.write("Programa Terminado<br>lista palabras:<br><br>");
            document.write(palabras+"<br><br>");
