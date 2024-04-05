//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


//Chiedo all'utente due parole

const firstword = prompt("dimmi una parola:");
console.log(firstword);


const secondword = prompt("dimmi un'altra parola");
console.log(secondword);

//Utilizzo una funzione per confrontare le due parole

confrontaparole(firstword, secondword);