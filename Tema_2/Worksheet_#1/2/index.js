/*
    Crea una pagina web en la que se muestre el resultado de cada uno de á
    los siguientes apartados:
        a. Crear variable "fechaHoy" con fecha de hoy
        b. Crear variable "fecha85" que sume 85 dias a la variable "fechaHoy" í
        c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
        d. Sumar 2 años a la variable "fecha85" ñ
        e. Restar 24 horas a la variable "fecha187"
        f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
        observa lo que obtienes
    */


        let fechaHoy = new Date();
        let fecha85 = new Date();
        let fecha187 = new Date();
        let sumAnios= new Date();
        let restHoras= new Date();
        let fechaResto=0;


        fechaHoy.getDay();
        fecha85.setDate(fechaHoy.getDate()+85);
        fecha187.setDate(fechaHoy.getDate()-187);
        sumAnios.setFullYear(fecha85.getFullYear()+2);
        restHoras.setDate(fecha187.getHours()-24);
        fechaResto = fecha85-fecha187;


        document.write(fechaHoy+"<br>");
        document.write(fecha85+"<br>");
        document.write(fecha187+"<br>");
        document.write(sumAnios+"<br>");
        document.write(restHoras+"<br>");
        document.write(fechaResto+"<br>");