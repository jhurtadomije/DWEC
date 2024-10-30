/*Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

const generarAlea = (minimo, maximo) => {  // Función para generar un número aleatorio entre un rango min y naximo
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
};

const paresImpares = () => {  // Función que crea un array de 100 números aleatorios del 1 al 1000, los muestra, los ordena y los vuelve a mostrar
    const numeros = [];
    for (let i = 0; i < 100; i++) {
        numeros.push(generarAlea(1, 1000));
    }
    
    document.write("Array Original: <br>"+numeros.join(", ")+"<br>"); // Mostramos contenido del array original

    // Ordenamos el array con pares primero y luego impares
    const pares = numeros.filter(num => num % 2 == 0);
    const impares = numeros.filter(num => num % 2 !== 0);
    const arrayOrdenado = [...pares, ...impares];

    // Mostramos contenido del array ordenado
 
    document.write("Array Ordenado, los pares primero: <br>"+ arrayOrdenado.join(", ")+"<br>");
};

/*7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.

*/

    const inicializaArray=()=>{
        const array = new array(10).fill(0);
        return array;
    }

    const sumaUno=(array)=>{
        for(let i=0;i<array.length;i++){
            array[i] += 1;
        }
        return array;
    }

    const mostrarArray=(array)=>{
        return array.join(" ");
    }


    const ejecutaOperaciones =()=>{
    let miArray = inicializaArray(); 
    document.write("Array Inicial: ",mostrarArray(miArray));
    miArray = sumaUno(miArray);
    document.write("Array después de añadir 1 a cada elemento:", mostrarArray(miArray));
}
   

   