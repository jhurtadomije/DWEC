// Seleccionamos el formulario y los campos
const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');

// Función de validación
function validateField(field, regex, errorMessage) {
    const value = field.value.trim();
    if (!regex.test(value)) {
        field.classList.add('error');
        if (!field.nextElementSibling || field.nextElementSibling.className !== 'error-message') {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.innerText = errorMessage;
            field.insertAdjacentElement('afterend', error);
        }
        return false;
    } else {
        field.classList.remove('error');
        if (field.nextElementSibling && field.nextElementSibling.className === 'error-message') {
            field.nextElementSibling.remove();
        }
        return true;
    }
}

// Función para validar el formulario
function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    isValid &= validateField(firstName, /^[a-zA-Z]{2,}$/, 'First name must have at least 2 letters.');
    isValid &= validateField(lastName, /^[a-zA-Z]{2,}$/, 'Last name must have at least 2 letters.');
    isValid &= validateField(phone, /^[0-9]{10}$/, 'Phone number must have 10 digits.');
    isValid &= validateField(email, /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Enter a valid email.');
    isValid &= validateField(password, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one digit.');
    
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        if (!confirmPassword.nextElementSibling || confirmPassword.nextElementSibling.className !== 'error-message') {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.innerText = 'Passwords do not match.';
            confirmPassword.insertAdjacentElement('afterend', error);
        }
        isValid = false;
    } else {
        confirmPassword.classList.remove('error');
        if (confirmPassword.nextElementSibling && confirmPassword.nextElementSibling.className === 'error-message') {
            confirmPassword.nextElementSibling.remove();
        }
    }

    if (!terms.checked) {
        terms.classList.add('error');
        isValid = false;
    } else {
        terms.classList.remove('error');
    }

    // Si es válido, se envía el formulario
    if (isValid) {
        alert("Form submitted successfully!");
    }
}

// Escuchar el evento submit del formulario
form.addEventListener('submit', validateForm);