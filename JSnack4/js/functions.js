/**
 * Description funzione per trovare l'indice di un elemento
 * @param {array} array
 * @param {string} elem
 * @returns {number}
 */
function trovaIndice(array, elem) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elem) {
            return i;
        };
    };

    return -1;
};