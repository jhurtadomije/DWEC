




const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p'),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year');
      ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// * Select del mes generado dinámicamente.
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinámicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// * Input número de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    // Eliminamos espacios en blanco y caracteres no numéricos
    valorInput = valorInput
        .replace(/\s/g, '')
        .replace(/\D/g, '') // Eliminar cualquier letra
        .replace(/([0-9]{4})/g, '$1 ') // Añadir espacio cada 4 dígitos
        .trim();

    // Validamos que el primer dígito sea 4 o 5
    if (valorInput && valorInput[0] !== '4' && valorInput[0] !== '5') {
        // Limpiamos el campo y mostramos un mensaje de error
        formulario.inputNumero.value = '';
        numeroTarjeta.textContent = '#### #### #### ####'; // Restablecer la vista de la tarjeta
        logoMarca.innerHTML = ''; // Limpiar el logo
        alert("El número de la tarjeta debe comenzar con un 4 (Visa) o un 5 (Mastercard).");
        return;
    }

    // Actualizamos el contenido de la tarjeta
    numeroTarjeta.textContent = valorInput;

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }

    // Agregar el logo de acuerdo al número
    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'imagenes/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'imagenes/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    // Damos la vuelta a la tarjeta para que el usuario vea el frente.
    mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Doe';
    }

    mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});
