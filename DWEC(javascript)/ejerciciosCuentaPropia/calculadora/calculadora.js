
//funcion suma

function sumar(num1,num2){

    alert("La suma es: " + (num1+num2));

}

function restar(num1,num2){
    alert("La resta es; " + (num1-num2));

}

function multiplicar(num1,num2){
    alert("La resta es; " + (num1*num2));

}

function dividir(num1,num2){
    alert("La resta es; " + (num1/num2));

}

    let repetir = "si";

    do{
    let operacion = prompt("Qué operacion quieres realizar? ");
    let numero1 = parseInt(prompt("Introduce el primer numero: "));
    let numero2 = parseInt(prompt("Introduce el segundo numero: "));

    if(operacion == "sumar"){

        sumar(numero1,numero2);

    }
    else if(operacion == "restar"){
        restar(numero1,numero2);
    }
    else if(operacion == "multiplicar"){
        multiplicar(numero1,numero2);
    }
    else if(operacion == "dividir"){
        dividir(numero1,numero2);

    }
    else
    alert("lo siento, los numeros no son correctos o la operacion no está disponible"); 
    
    repetir = prompt("¿Deseas Repetir una operacion? ");


    }while(repetir == "si");