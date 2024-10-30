


    function agregarValor(value) {
        document.getElementById('resultado').value += value;
    }


    function borrarResultado() {
        document.getElementById('resultado').value = '';
    }



    function Operacion() {
        const displayCalculadora = document.getElementById('resultado');
    try {
        if (/^[0-9+\-*/.() ]+$/.test(displayCalculadora.value)) {
            displayCalculadora.value = eval(displayCalculadora.value);
        }
        else {
            displayCalculadora.value = 'Expresión inválida';
            }
        }
        catch (error) {
            displayCalculadora.value = 'Error';
            }
        }

