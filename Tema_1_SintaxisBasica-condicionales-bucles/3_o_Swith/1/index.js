

let mes = prompt("Introduce el nombre de un mes:");

let dias;

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        dias = 31;
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        dias = 30;
        break;
    case "febrero":
        dias = 28; 
        break;
    default:
        dias = "Mes no válido";
}

document.write("El mes de " + mes + " tiene " + dias + " días.");