/**
 * Description funzione per confrontare la lunghezza delle due parole e stampare il risultato
 * @param {string} firstword
 * @param {string} secondword
 */
function confrontaparole(firstword, secondword) {
    if (firstword.length === secondword.length) {
        console.log(firstword, secondword);
    } else if (firstword.length > secondword.length) {
        console.log(firstword);
    } else {
        console.log(secondword)
    };
};