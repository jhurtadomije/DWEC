 


    function muestraPosicion(pos);{
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
    }



    navigator.geolocation.watchPosition(muestraPosicion);