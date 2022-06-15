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

// HTML REF
const mainGrid = document.getElementById('main-grid');
const playButton = document.getElementById('play-btn');
const userMessageOut = document.querySelector('#user-output');
// ARRAY NUM CLICCATI
const clickedNumbers = [];


// azione parte da playbtn -> event listeners playbutton
playButton.addEventListener('click', 
function() {
    // reset grigla
    mainGrid.innerHTML = '';
    // SELEZIONO DIFFICOLTA DA USERLEVEL
    const userLevel = document.getElementById('user-level').value;
    // se liv 1 - num da 1 a 100
    if (userLevel === '1') {
        gameMaxRange = 100;
        bombs = bombsGenesis(16, 1, 100);
        gamesContinue = true;
        createGrid(gameMaxRange, 'easy');
    } else if (userLevel === '2') {
        gameMaxRange = 81;
        bombs = bombsGenesis(16, 1, gameMaxRange);
        gamesContinue = true;
        createGrid(gameMaxRange, 'medium');
    } else if (userLevel === '3') {
        gameMaxRange = 49;
        bombs = bombsGenesis(16, 1, gameMaxRange);
        gamesContinue = true;
        createGrid(gameMaxRange, 'crazy');
    }
}
)

let bombs=[];
// GENERO 16 BOMBE
    // genero un array di 16 bombe
    function bombsGenesis(numbofBombs, rangeMin, rangeMax) {
        
        const randomNumbersArray = [];
    
        while(randomNumbersArray.length < numbofBombs) {
            // CREARE NUM RANDOM DA RANGEMIN A RANGEMAX
            // rangeMin range minimo per i numeri random generati
            // rageMax range massimo dei numeri random generati
            const randomNum = getRndInteger(rangeMin, rangeMax);
            // PUSHIAMO SOLO SE NUM NON GIA PRESENTE
            if(!randomNumbersArray.includes(randomNum)) {
                randomNumbersArray.push(randomNum);
            }
    
        }
        // return : array di numeri random con lunghezza numbofBombs
        return randomNumbersArray;
    }
    
// FUNZIONE CHE GENERA RANDOM NUMBERS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
        
}

// FUNZIONE CHE GENERA LA GRIGLIA IN HTML
function createGrid(gameMaxRange, userLevel) {
    for(let i = 1; i <= gameMaxRange; i++) {
        // creo squares
        // <div class="square"><span>12</span></div>
        const newSquare = document.createElement('div');
        // popolare il numero
        newSquare.innerHTML = `<span>${i}</span>`;
        // add classe square
        newSquare.classList.add('square', userLevel);
        // li collego/appendo
        mainGrid.append(newSquare);
        }
    let newSquareF = document.querySelectorAll('.square')
    for(let i = 0; i < newSquareF.length; i++) {
        let squares = newSquareF[i];
        if (!bombs.includes(manageSquareClick)) {
            squares.addEventListener('click', manageSquareClick);
        } else if (bombs.includes(manageSquareClick)) {
            alert('hai perso');
        }
    }
        
}

function manageSquareClick() {
    // prendo il numero dentro lo span che è figlio dell'elemento cliccato
    const thisNumber = parseInt(this.querySelector('span').innerHTML);
        
    if(bombs.includes(thisNumber)) {
        endGame();
        this.classList.add('red');
        document.getElementById('main-grid').removeEventListener('click', manageSquareClick)
    } else {
        this.classList.add('blue');
    }
    
    // pusho il num in array num cliccati
    clickedNumbers.push(thisNumber);
    console.log(clickedNumbers);
    
    // se user le azzecca tutte:
    // scrivo messaggio di fine gioco
    if(clickedNumbers.length === gameMaxRange - 16) {
        endGame();
    }
    
        // se una cella è già stata cliccata, non può esserlo nuovamente
        this.style.pointerEvents = 'none';
    }

function endGame() {
    userMessageOut.innerHTML = `il tuo punteggio è: ${clickedNumbers.length}`;
    for(let i = 0; i < gameMaxRange; i++) {
        let allSelector = document.querySelectorAll('.square')
        allSelector[i].removeEventListener('click', manageSquareClick)
    }
}
