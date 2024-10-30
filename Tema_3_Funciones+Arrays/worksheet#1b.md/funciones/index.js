//Funciones

//Crear las siguientes funciones

/*
function sum(num1, num2){
  return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))
*/

sum = (num1, num2)=>num1+num2;
console.log(sum(4,3));



/*function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)
*/
stringLength = str => console.log(`The length of "${str}" is` , str.length);
