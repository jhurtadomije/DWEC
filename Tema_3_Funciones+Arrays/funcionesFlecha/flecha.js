


// Hoja de trabajo 1b


//1 dos argumentos
function sum(num1,num2){
    return num1+num2;
}

let sum=(num1,num2)=>num1+num2;
// mejor usar const sum=(num1,num1)=>num1+num2; mejor porque así nuestra variable con let podria ser redefinida mas tarde, causandonos errores.



//2 Un argumento
function stringLength(str){
    console.log('the length of "${str}" is:',str.length);
}
let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

stringLength(longestCityNameInTheWorld);

//flecha
const stringLength=str=>console.log('the length of "${str}" in:',str.length);


//3 cambiamos un poco la funcion anterior para incluir una variable y una declaracion de retorno
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}
//flecha
stringLength("willynilly")

const stringLength = str=>{
    let length=str.length;
    console.log('The length of "${str}" is:',length);
    return str.length;
}
stringLength("asdkfjdfñlsdkjfasldkfj");

//4. Un argumento Transforme esta función que selecciona un elemento aleatorio de la matriz y lo concatena a su nombre:

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff")

//flecha
const showAlert = (name) =>  alert(alerts[(Math.floor(Math.random()*alerts.length))] + ', ${name}!')
const showAlert = (name) => {return alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)}


//Escriba una función de flecha que devuelva la cadena Hola, soy ${name} y tengo ${age} años.
const datos = (name,age) => 'Hola, soy "${name}" y tengo "${age}" años.';

console.log(datos("manolo,43"));




//7. Escribe una función de flecha que tome una matriz de números enteros y devuelva la suma de los elementos de la matriz. Busca en Google y utiliza el método de reducción de matriz integrado para esto.
const sumarNumeros = (numeros) => numeros.reduce((acumulado, actual) => acumulado + actual, 0);

const numeros = [1,2,3,4,5,6,7,8,9];
console.log(sumarNumeros(numeros));




//8. La sintaxis de esta función es incorrecta. ¿Puedes corregirla para utilizar la función de flecha más corta posible?
/*
let eye = "eye";

const fire =
(

) =
>
{
 return `bulls-`;
}


let eye = "eye";

const fire = () =>{return `bulls-`;}
*/
 
const fire=() =>'bulls-"${eye}'; 



/*9. Refactorice la siguiente función ES5 para utilizar una función de flecha:
const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
*/
    //flecha
    const fibonacci = n => n < 3 ? 1: fibonacci(n-1) + fibonacci(n-2);