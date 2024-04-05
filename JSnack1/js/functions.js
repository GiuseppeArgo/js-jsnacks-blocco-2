/**
 * Description funzione per generare un numero random
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Description funzione per generare un array
 * @returns {array}
 */
function getRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push(getRandomNumber(1, 100));
    }
    return randomArray;
}

/**
 * Description funzione per stampare un array
 * @param {array} arraytoPrint
 */
function printArray(arraytoPrint) {
    const resultElem = document.getElementById("result")
    console.log(resultElem);
    resultElem.innerHTML += `<li>${arraytoPrint}</li>`;
}