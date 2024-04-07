/**
 * Description funzione per creare una nuova array da un array precente senza il primo indice della prima
 * @param {array} array
 * @returns {array}
 */
function rimuoviElemento(array) {
    let newArray = [];
    
    for (let i = 1; i < array.length; i++) {
        
        newArray.push(array[i]);
    }
    return newArray;
};