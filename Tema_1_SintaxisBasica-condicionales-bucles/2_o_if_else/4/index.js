


let hermanos = parseInt(prompt("Introduce un numero de hermanos: "));
let cantidad = parseFloat(prompt("Introduce una cantidad"));


if(hermanos > 3){
     
    document.write("La cantidad con su descuento es: "+(cantidad-(cantidad * 0.15)));

} else if(hermanos > 0 ){
    document.write("La cantidad con su descuento es: "+(cantidad-(cantidad * 0.05)));

} else
    document.write("Lo sentimos!! Usted no tiene descuento");

