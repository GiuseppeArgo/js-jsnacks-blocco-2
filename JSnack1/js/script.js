//Chiedo di generare un numero all'utente tramite prompt

const N = parseInt(prompt("Inserisci un numero:"));

console.log(N);

//Utilizzo una funzione per generare un numero random tra 1 e 100

const randomNumber = getRandomNumber(1, 100)

console.log(randomNumber);

//Utilizzo una funzione per generare un array

let array = getRandomArray()

console.log(array);

//Utlizzo una funzione per stampare l'array

printArray(array);
console.log("Stampo un array");