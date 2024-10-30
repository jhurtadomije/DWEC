//Ejercicio 1
const btn = document.getElementsByTagName("button");

function saltarAlert() {
 alert("acabas de pulsar este botón");
}

btn[0].addEventListener("click", saltarAlert);
  




//Ejercicio 2
function logKey(e) {screenLog.innerText = `Pantalla: ${e.screenX}, ${e.screenY} Cliente: ${e.clientX}, ${e.clientY}`;}

let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);



//Ejercicio 4
