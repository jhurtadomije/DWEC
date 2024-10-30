

//Pide un numero al usuario y muestra la tabla de multiplicar de ese numero

let numero = parseInt(prompt("Introduce un número:"));

document.write("Tabla de multiplicar del " + numero + ":<br>");
for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}
