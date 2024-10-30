

let edad = parseInt(prompt("Introduzca su edad:"));


if (edad < 5) {
    document.write("Usted debería estar en el jardín de infancia.");
} else if (edad >= 6 && edad <= 11) {
    document.write("Usted debería estar en primaria.");
} else if (edad >= 12 && edad <= 16) {
    document.write("Usted debería estar en la ESO.");
} else if (edad >= 17 && edad <= 21) {
    document.write("Usted debería estar en Bachillerato o Ciclos.");
} else if (edad > 21) {
    document.write("Usted debería estar en la Universidad.");
} 