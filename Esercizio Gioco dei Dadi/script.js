// Generare un numero random da 1 a 6, 
//sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:

// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

const dadiGiocatore = Math.ceil(Math.random() * 6);
const dadiComputer = Math.ceil(Math.random() * 6);
let message;

if (dadiGiocatore > dadiComputer) {
  message = `La tua giocata è di ${dadiGiocatore}. Il tuo avversario ha ottenuto ${dadiComputer}. HAI VINTO!`
} else if (dadiGiocatore < dadiComputer) {
  message = `La tua giocata è di ${dadiGiocatore}. Il tuo avversario ha ottenuto ${dadiComputer}. HAI PERSO!`
} else {
  message = `La tua giocata è di ${dadiGiocatore}. Il tuo avversario ha ottenuto ${dadiComputer}. PAREGGIO!`
}

console.log( message)