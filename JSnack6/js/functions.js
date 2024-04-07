/**
 * Description funzione per creare una nuova array da un array precente senza l'ultimo indice della prima
 * @param {array} array
 * @returns {array}
 */
function rimuoviElemento(array) {
    let newArray = [];
    
    for (let i = 0; i < array.length - 1; i++) {
        
        newArray.push(array[i]);
    }
    return newArray;
};