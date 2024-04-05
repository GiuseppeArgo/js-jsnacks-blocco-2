//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


//Chiedo all'utente due parole

const userFirstword = prompt("dimmi una parola:");
console.log(userFirstword);


const userSecondword = prompt("dimmi un'altra parola");
console.log(userSecondword);

//Utilizzo una funzione per confrontare le due parole e stampare il risultato

confrontaparole(userFirstword, userSecondword);