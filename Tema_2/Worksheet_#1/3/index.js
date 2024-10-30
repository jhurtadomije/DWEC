//Utilizando setTimeout() creo un contador hac a atr s de 60 segundos.

for (let i = 60; i >= 0; i--) {
    setTimeout(function() {
        document.write( i + "<br>");
        if (i === 0) {
            document.write("¡Fin!");
        }
    }, (60 - i) * 1000); // 1 segundo de retardo
}