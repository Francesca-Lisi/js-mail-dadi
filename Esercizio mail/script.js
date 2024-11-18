/*Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email*/

const mailList = [
  'mail@prova.it',
  'mario.rossi@mail.it',
  'marco.1@ciao.com',
  'abc@mail.it',
  'francesca@lisi.it',
  'sam@cane.com'];

const mailUtente = prompt('Inserisci la tua mail');
// let isMailUtenteRegistered = false;
let message;

for (let i = 0; i < mailList.length; i++) {
  if (mailList[i] === mailUtente) {
    message = 'Your mail is in the list'
  } else {
    message = 'Your mail is NOT in the list'
  }
}
 console.log(message)