
//funzione per generare un numero random

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione per generare un array

function getRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push(generateRandomNumber(1, 100));
    }
    return randomArray;
  }