

/*Ejercicio 1


// Función para crear una cookie con un tiempo de expiración
function setCookie(name, value, minutes) {
    let date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // Convertir minutos a milisegundos
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1, c.length);
        if(c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

// Función para borrar una cookie
function deleteCookie(name) {
    setCookie(name, "", -1);
}

// Función para manejar la lógica de la página
window.onload = function() {
    let userName = getCookie("userName");

    if (userName) {
        document.getElementById("mensajeBienvenida").innerHTML = "¡Hola, " + userName + "!";
        document.getElementById("logoutLink").style.display = "block"; // Mostrar el enlace de "Cerrar sesión"
    } else {
        // Si no hay cookie, pedir el nombre
        let nameInput = prompt("¿Cuál es tu nombre?");
        if (nameInput) {
            setCookie("userName", nameInput, 5); // Guardar el nombre en la cookie por 5 minutos
            document.getElementById("mensajeBienvenida").innerHTML = "¡Hola, " + nameInput + "!";
            document.getElementById("logoutLink").style.display = "block"; // Mostrar el enlace de "Cerrar sesión"
        }
    }
}

// Función para cerrar sesión (borrar la cookie)
function logout() {
    deleteCookie("userName");
    location.reload(); // Recargar la página después de borrar la cookie
}


/*Ejercicio 2

function actualizaConfig() {
    // Obtener valores de los controles de configuración
    let bgColor = document.getElementById("bgColor").value;
    let pColor = document.getElementById("pColor").value;
    let fontSize = document.getElementById("fontSize").value;

    // Actualizar la apariencia de la página
    document.body.style.backgroundColor = bgColor;
    document.getElementById("mensajeBienvenida").style.color = pColor;
    document.body.style.fontSize = fontSize + "px";

    // Guardar la configuración en cookies
    setCookie("bgColor", bgColor, 5);
    setCookie("pColor", pColor, 5);
    setCookie("fontSize", fontSize, 5);
}



/* Ejercicio 3

  function setCookie(Name, Value, expirationMinutes) {
    let cookieString = `${Name}=${encodeURIComponent(Value)};path=/`;

    if (expirationMinutes) { // Configura la expiración si se proporciona el tiempo en minutos
        const expirationDate = new Date();
        // Convertir minutos a milisegundos
        expirationDate.setTime(expirationDate.getTime() + (expirationMinutes * 60 * 1000));
        cookieString += `;expires=${expirationDate.toUTCString()}`;
    }

    document.cookie = cookieString;
}

 */

function actualizaConfig() {
    // Obtenemos valores de los controles de la configuración
    const backgroundColor = document.getElementById("bgColor").value;
    const textColor = document.getElementById("pColor").value;
    const fontSize = document.getElementById("fontSize").value;

    // Actualizar la apariencia de la página
    document.body.style.backgroundColor = backgroundColor;
    document.getElementById("mensajeBienvenida").style.color = textColor;
    document.body.style.fontSize = `${fontSize}px`;

    // Guardar la configuración en cookies
    // Cookie con expiración de 3 minutos
    createCookie("backgroundColor", backgroundColor, 3);
    // Cookie de sesión que se borrará al cerrar el navegador
    createCookie("textColor", textColor);

    createCookie("fontSize", fontSize, 3);
}


/* Ejercicio 4*/
// a) Crear cookie
function crearCookie(identificador, valor, minutosExpiracion) {
    let cookieString = `${identificador}=${encodeURIComponent(valor)};path=/`;

    if (minutosExpiracion) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + minutosExpiracion * 60 * 1000);
        cookieString += `;expires=${expirationDate.toUTCString()}`;
    }

    document.cookie = cookieString;
}

// b) Leer cookie
function leerCookie(identificador) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === identificador) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

// c) Borrar cookie
function borrarCookie(identificador) {
    document.cookie = `${identificador}=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

// Función para cerrar sesión y eliminar todas las cookies
function logout() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const cookieName = cookie.split("=")[0];
        borrarCookie(cookieName);
    }
    document.getElementById("mensajeBienvenida").innerHTML = "Has cerrado sesión.";
    document.getElementById("logoutLink").style.display = "none";
}

// Función para verificar o pedir el nombre del usuario al cargar la página
window.onload = function() {
    const userName = leerCookie("userName");

    if (userName) {
        document.getElementById("mensajeBienvenida").innerHTML = `¡Hola, ${userName}!`;
        document.getElementById("logoutLink").style.display = "block";
    } else {
        const nameInput = prompt("¿Cuál es tu nombre?");
        if (nameInput) {
            // Guardamos el nombre en la cookie por 5 minutos
            crearCookie("userName", nameInput, 5);
            document.getElementById("mensajeBienvenida").innerHTML = `¡Hola, ${nameInput}!`;
            document.getElementById("logoutLink").style.display = "block";
        }
    }
}


