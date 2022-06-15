// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
// altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// // START

// SELEZIONO IL LIVELLO DALLA SCELTA USER
const userLevel = prompt('Scegli un livello (1-2-3)');
const numbofBombs = 16;
gameMaxRange = 0;

// se liv 1 - num da 1 a 100
if(userLevel === '1') {
    gameMaxRange = 100;
    // se liv 2 - num da 1 a 81
} else if(userLevel === '2') {
    gameMaxRange = 81;
    // se liv 3 - num da 1 a 49
} else if(userLevel === '3') {
    gameMaxRange = 49;
}
    
console.log(gameMaxRange);