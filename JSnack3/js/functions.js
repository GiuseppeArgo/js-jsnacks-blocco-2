/**
 * Description funzione per contare elementi di un array
 * @param {array} array
 * @returns {number}
 */
function contaElementi(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        count++ ;
    }
    return count;
};