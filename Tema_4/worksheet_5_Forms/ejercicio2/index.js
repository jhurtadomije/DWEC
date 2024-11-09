/**
 * Verifica si el nombre es válido (solo letras y espacios).
 * @param {string} nombre - El nombre a validar.
 * @returns {boolean} - Retorna true si el nombre es válido.
 */
const validarNombre = (nombre) => /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre);

/**
 * Verifica si los apellidos son válidos (solo letras y espacios).
 * @param {string} apellidos - Los apellidos a validar.
 * @returns {boolean} - Retorna true si los apellidos son válidos.
 */
const validarApellidos = (apellidos) => /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(apellidos);

/**
 * Verifica si el DNI es válido (formato: 8 dígitos y una letra mayúscula).
 * @param {string} dni - El DNI a validar.
 * @returns {boolean} - Retorna true si el DNI es válido.
 */
const validarDNI = (dni) => /^\d{8}[A-Z]$/.test(dni);

/**
 * Verifica si el teléfono es válido (formato: 9 dígitos).
 * @param {string} telefono - El teléfono a validar.
 * @returns {boolean} - Retorna true si el teléfono es válido.
 */
const validarTelefono = (telefono) => /^\d{9}$/.test(telefono);

/**
 * Verifica si el email es válido (formato de email estándar).
 * @param {string} email - El email a validar.
 * @returns {boolean} - Retorna true si el email es válido.
 */
const validarEmail = (email) => /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);

/**
 * Verifica si el nombre de usuario es válido (mínimo 8 caracteres, al menos un número y un signo de puntuación).
 * @param {string} username - El nombre de usuario a validar.
 * @returns {boolean} - Retorna true si el nombre de usuario es válido.
 */
const validarUsername = (username) => /^(?=.*\d)(?=.*[!@#$%^&*.,])[A-Za-z\d!@#$%^&*.,]{8,}$/.test(username);

/**
 * Muestra el mensaje de validación según el estado del campo.
 * @param {HTMLInputElement} campo - El campo de entrada a validar.
 * @param {boolean} esValido - Estado de la validación del campo.
 * @param {string} mensajeExito - Mensaje a mostrar si es válido.
 * @param {string} mensajeError - Mensaje a mostrar si es inválido.
 */
const mostrarMensaje = (campo, esValido, mensajeExito, mensajeError) => {
  const spanError = document.getElementById(campo.id + "Error");
  spanError.textContent = esValido ? mensajeExito : mensajeError;
  spanError.className = esValido ? "success" : "error";
  campo.classList.toggle("input-success", esValido);
  campo.classList.toggle("input-error", !esValido);
};

// Evento para manejar la validación individual de cada campo en el formulario.
document.getElementById("registroForm").addEventListener("focusout", (event) => {
  const campo = event.target;
  let esValido = false;
  let mensajeExito = '';
  let mensajeError = '';

  switch (campo.id) {
    case "nombre":
      esValido = validarNombre(campo.value);
      mensajeExito = "Nombre válido";
      mensajeError = "Nombre inválido";
      break;
    case "apellidos":
      esValido = validarApellidos(campo.value);
      mensajeExito = "Apellidos válidos";
      mensajeError = "Apellidos inválidos";
      break;
    case "dni":
      esValido = validarDNI(campo.value);
      mensajeExito = "DNI válido";
      mensajeError = "DNI inválido";
      break;
    case "telefono":
      esValido = validarTelefono(campo.value);
      mensajeExito = "Teléfono válido";
      mensajeError = "Teléfono inválido";
      break;
    case "email":
      esValido = validarEmail(campo.value);
      mensajeExito = "Email válido";
      mensajeError = "Email inválido";
      break;
    case "username":
      esValido = validarUsername(campo.value);
      mensajeExito = "Usuario válido";
      mensajeError = "Usuario inválido";
      break;
  }

  mostrarMensaje(campo, esValido, mensajeExito, mensajeError);
});

/**
 * Evento para manejar la validación de todos los campos al enviar el formulario.
 * Si algún campo es inválido, detiene el envío y muestra un mensaje de advertencia.
 */
document.getElementById("registroForm").addEventListener("submit", (event) => {
  const nombreValido = validarNombre(document.getElementById("nombre").value);
  const apellidosValido = validarApellidos(document.getElementById("apellidos").value);
  const dniValido = validarDNI(document.getElementById("dni").value);
  const telefonoValido = validarTelefono(document.getElementById("telefono").value);
  const emailValido = validarEmail(document.getElementById("email").value);
  const usernameValido = validarUsername(document.getElementById("username").value);

  if (!(nombreValido && apellidosValido && dniValido && telefonoValido && emailValido && usernameValido)) {
    event.preventDefault();
    alert("Por favor, corrige los errores antes de enviar el formulario.");
  }
});
