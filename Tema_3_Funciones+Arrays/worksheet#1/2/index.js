


function lanzamiento() {
    
    let resultado = Math.floor(Math.random() * 6) + 1;
    
    return resultado;
}

document.write('el resultado es: '+ lanzamiento());