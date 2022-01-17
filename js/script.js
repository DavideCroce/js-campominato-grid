console.log('JS OK');

/*
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// 1 Collegare il select così da fare una funzione per tenere conto della selezione del giocatore.
// 2 tramite quella selezione cambiare la conformazione della griglia.
// 3 fare il conteggio
// 4 dopo la creazione delle celle, fare si che dopo il click su una cella essa cambia colore e compare il numero della cella.


// LOGICS

const celle = '';
const colonne = '';
const totale = celle * colonne;
const Numeri = [];

// FUNCTIONS

const rndNumb = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const onerndNumb = (min, max) => {
    let rNumb;
    do{
        rNumb = rndNumb(min, max);
    }
    while (NumbEs.includes(rNumb));
}

// TAKE THE GRID

const griglia = document.getElementsByClassName('grid');

// CREATION OF THE CELLS

function creaCells() {
    const cella = document.createElement('div');
    cella.className = 'cella';
    const rNumb = onerndNumb(min, max);
}

let difficoltà = document.getElementById('diff');

if(difficoltà === 'diff1'){
    creaCells(1, 100);
}
else if(difficoltà === 'diff2'){
    creaCells(1, 81);
}
else if(difficoltà === 'diff3'){
    creaCells(1, 49);
}