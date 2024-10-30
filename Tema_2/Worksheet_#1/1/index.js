
//Worksheet1
  //OBjeto Date


  // crear un objero de tipo Date y muestre la siguiente informacion

  //año actual

let fechaActual = new Date();


let añoActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDay();
let horaActual = fechaActual.getHours();
let minActual = fechaActual.getMinutes();
let secActual = fechaActual.getSeconds();


document.write("El año actual es: " + añoActual+"<br>");
document.write("El mes actual es: " + mesActual+"<br>");
document.write("El dia actual es: " + diaActual+"<br>");
document.write("La Hora actual es: " + horaActual+"<br>");
document.write("Los Minutos actuales son: " + minActual+"<br>");
document.write("Los Segundos actuales son: " + secActual+"<br>");
