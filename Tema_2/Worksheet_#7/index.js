 
/*
function muestraPosicion(pos){
    console.log("Latitud: " + pos.coords.latitude);
    console.log("Longitud: " + pos.coords.longitude);
}

*//* Verificar si la geolocalización está disponible
if(navigator.geolocation){
    document.write("Geolocalización disponible<br>");
    
    *//* Obtener la ubicación actual
    navigator.geolocation.getCurrentPosition(muestraPosicion);

    */
 

 
function funcionQueLlamaLaGeolocalizacion(posicion){
    console.log("Salta geolocalizacion");
    console.log("Estás en "+posicion.coords.latitude + posicion.coords.longitude);
    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map).bindPopup('IES Francisco Ayala.<br>!!')
    .openPopup();; 
    
    function calcularRuta(localicazionUsuario) {
        
        var destino = [posicion.coords.latitude, posicion.coords.longitude]; 
    
        // Crea el enrutador de Leaflet Routing Machine
        L.Routing.control({
            waypoints: [
                L.latLng(localicazionUsuario[0], localicazionUsuario[1]),  // Ubicación actual
                L.latLng(destino[0], destino[1])             
            ],
            routeWhileDragging: true
        }).addTo(map);
    }
}


if(navigator.geolocation){
    document.write("Geolocalizacion disponible");
    //navigator.geolocation.getCurrentPosition(funcionQueLlamaLaGeolocalizacion)
    navigator.geolocation.watchPosition(funcionQueLlamaLaGeolocalizacion);
   }

   // Registrar los cambios de posición
   let n = [];
   let j = [];
   navigator.geolocation.watchPosition(function(pos){
       let lat = pos.coords.latitude;
       let lon = pos.coords.longitude;

       // Almacenar coordenadas en los arrays
       n.push(lat);
       j.push(lon);

       console.log("Coordenadas almacenadas:");
       console.log("n: ", n);
       console.log("j: ", j);

       // Mostrar coordenadas en la página
       document.write("Latitud: " + lat + "<br>");
       document.write("Longitud: " + lon + "<br>");
   })
    
