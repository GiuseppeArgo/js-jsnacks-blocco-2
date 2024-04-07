
/**
 * Description funzione per stampare un stringa contenente gli elementi dell'array separati da una virgola
 * @param {array} array
 * @returns {string}
 */
function print(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i];

        if (i !== array.length - 1) {
            result += ",";
        }
    }
    return result;
};