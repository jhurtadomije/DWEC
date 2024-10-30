


let edad = parseInt(prompt("Introduce ´tu edad: "));
let localidad = prompt("Introduce tu localidad");

if(edad > 25 && localidad === "Madrid" || localidad === "madrid"){

    document.write("Enhorabuena a los usuarios de más de 25 años de Madrid");
}else{
    document.write("Usted tiene "+edad+" años y vive en "+localidad);
}