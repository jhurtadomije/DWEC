let numero = parseInt(prompt("Introduce un número:"));

let mensaje = "";

switch (true) {
    case (numero % 2 === 0):
        document.write(numero + " es par.<br>");
        break;
    case (numero % 3 === 0):
        document.write(numero + " es múltiplo de 3.<br>");
        break;
    case (numero % 5 === 0):
        document.write(numero + " es múltiplo de 5.<br>");
        break;
    default:
        document.write(numero + " no es par, ni múltiplo de 3, ni múltiplo de 5.<br>");
}
