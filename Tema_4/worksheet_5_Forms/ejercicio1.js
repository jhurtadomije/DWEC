/**ejercicio 1
 * Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false según cumpla los requisitos de validación:
 * 
 * 1.validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
 * 
 * 2.validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
 * 
 * 3.validarCorreo: El parámetro debe tener el formato correcto de un email
 * 
 * 4.validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
 * 
 * 5.validarLongitud: El parámetro debe tener al menos 8 caracteres.
 * 
 * 6.validarNumero: El parámetro debe contener al menos un dígito.  
 * 
 * se mostrará una funcion clásica y a continuacion usaremos una funcion arrow bajo cada una de las mismas.
 */



// validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula.

/**
 * Valida si el string contiene al menos un carácter en mayúscula.
 * @param {string} str - El string a validar.
 * @returns {boolean} - Retorna true si contiene al menos una mayúscula, false en caso contrario.
 */
    function validarMayuscula(str) {
        const regex = /[A-Z]/;
        return regex.test(str);
    }

    
    //arrow
    const validarMayuscula = (str) => /[A-Z]/.test(str);

// validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&

/**
 * Valida si el string contiene al menos uno de los caracteres especiales: !@#$%^&
 * @param {string} str - El string a validar.
 * @returns {boolean} - Retorna true si contiene al menos un carácter especial, false en caso contrario.
 */
    function validarCaracteresEspeciales(str){
        const regex = /[!@#$%^&]/;
        return regex.test(str);
    }

    //arrow
    const validarCaracteresEspeciales = (str) => /[!@#$%^&]/.test(str);




// validarCorreo: El parámetro debe tener el formato correcto de un email.
/**
 * Valida si el string tiene el formato correcto de un correo electrónico.
 * @param {string} str - El string a validar.
 * @returns {boolean} - Retorna true si el string tiene formato de email, false en caso contrario.
 */
    function validarCorreo(str){
        const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(str);
    }

    //arrow
    const validarCorreo = (str) => /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(str);




// validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito 

/**
 * Valida si el string tiene el formato correcto de una tarjeta de crédito (16 dígitos, con o sin guiones).
 * @param {string} str - El string a validar.
 * @returns {boolean} - Retorna true si el string tiene formato de tarjeta de crédito, false en caso contrario.
 */
    function validarTarjetaCredito(str){
        const regex = /^(?:\d{4}-){3}\d{4}|\d{16}$/;
        return regex.test(str);
    }

    //arrow
    const validarTarjetaCredito = (str) => /^(?:\d{4}-){3}\d{4}|\d{16}$/.test(str);




// validarLongitud: El parámetro debe tener al menos 8 caracteres.

/**
 * Valida si el string tiene al menos 8 caracteres de longitud.
 * @param {string} str - El string a validar.
 * @returns {boolean} - Retorna true si el string tiene al menos 8 caracteres, false en caso contrario.
 */
    function validarLongitud(str){
        return str.length >= 8;
    }

    //arrow
    const validarLongitud = (str) => str.length >= 8;




// validarNumero: El parámetro debe contener al menos un dígito.

/**
 * Valida si el string contiene al menos un dígito numérico.
 * @param {string} str - El string a validar.
 * @returns {boolean} - Retorna true si contiene al menos un dígito, false en caso contrario.
 */
    function validarNumero(str){
        const regex = /\d/;
        return regex.test(str);
    }

    //arrow
    const validarNumero = (str) => /\d/.test(str);




    /** ejercicio 2
     *  Crea un formulario típico de registro para tu web. Debe contener al menos campos
     *  para introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario.
     *  Todos los campos son obligatorios, y debes validar el mayor número posible de
     *  ellos haciendo uso de expresiones regulares. El nombre de usuario debe estar
     *  formado por al menos 8 caracteres, entre los cuales debe aparecer
     *  obligatoriamente algún número y algún signo de puntuación.
     * 
     *  Conforme sale el foco de cada input, deberás validar el contenido de éste y
     *  mostrar información al usuario que le indique si está correcto o no
     */

