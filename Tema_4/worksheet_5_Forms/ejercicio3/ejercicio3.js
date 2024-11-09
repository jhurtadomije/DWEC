

            // Seleccionamos los elementos del DOM que vamos a utilizar
            const usernameInput = document.getElementById('username');
            const submitButton = document.getElementById('submit');
            const lowercaseReq = document.getElementById('lowercase');
            const uppercaseReq = document.getElementById('uppercase');
            const minlengthReq = document.getElementById('minlength');

            // Función para validar el nombre de usuario en tiempo real
            function validateUsername() {

                const username = usernameInput.value; // Obtenemos el valor actual del campo de nombre de usuario

                const hasLowercase = /[a-z]/.test(username);// Verificamos si contiene al menos una letra minúscula
                const hasUppercase = /[A-Z]/.test(username);// Verificamos si contiene al menos una letra mayúscula
                const isLongEnough = username.length >= 6;// Verificamos si tiene al menos 6 caracteres

                // Añadimos o quitamos la clase 'valid' en función de si se cumple cada condición
                lowercaseReq.classList.toggle('valid', hasLowercase);
                uppercaseReq.classList.toggle('valid', hasUppercase);
                minlengthReq.classList.toggle('valid', isLongEnough);

                // Si se cumplen todas las condiciones, activamos el botón de envío
                if (hasLowercase && hasUppercase && isLongEnough) {
                    submitButton.classList.add('active');// Cambiamos el estilo del botón
                    submitButton.disabled = false; // Habilitamos el botón
                } else {
                    // Si alguna condición no se cumple, desactivamos el botón de envío
                    submitButton.classList.remove('active'); // Restablecemos el estilo del botón
                    submitButton.disabled = true; // Deshabilitamos el botón
                }
            }
            // Añadimos un event listener al campo de nombre de usuario
            // Cada vez que el usuario escriba algo, llamamos a la función validateUsernam
            usernameInput.addEventListener('input', validateUsername);
