const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}




// inizio briscola
const SEMI = {
  COPPE: 'Coppe',
  SPADE: 'Spade',
  DENARI: 'Denari',
  BASTONI: 'Bastoni'
};

const VALORI = {
  ASSO: 'Asso',
  DUE: 'Due',
  TRE: 'Tre',
  QUATTRO: 'Quattro',
  CINQUE: 'Cinque',
  SEI: 'Sei',
  SETTE: 'Sette',
  FANTE: 'Fante',
  CAVALLO: 'Cavallo',
  RE: 'Re'
};

function creaMazzo() {
  let mazzo = [];
  for (let seme in SEMI) {
    for (let valore in VALORI) {
      mazzo.push({ seme: SEMI[seme], valore: VALORI[valore] });
    }
  }
  return mazzo;
}

function mescolaMazzo(mazzo) {
  for (let i = mazzo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazzo[i], mazzo[j]] = [mazzo[j], mazzo[i]];
  }
  return mazzo;
}

let mazzoDiCarte = [];
let ngiocateU = 1;


function distribuisciCarte() {
  // Rimuove carte precedenti
  manoGiocatore = [];
  manoCPU = [];

  // Distribuisce 3 carte
  for (let i = 0; i < 3; i++) {
    manoGiocatore.push(pescaCarta());
    manoCPU.push(pescaCarta());
  }

  // Aggiorna interfaccia utente
  fronte(contutente1)
  fronte(contutente2)
  fronte(contutente3)

  //intero per capire quanto giocato utente
  ngiocateU=1;
}

// Pesca carta dal mazzo
function pescaCarta() {
  return mazzoDiCarte.pop();
}

let manoGiocatore = [];
let manoCPU = [];

let cartaBriscola;

// Carta di Briscola
function pescaBriscola() {
  cartaBriscola = pescaCarta();
}

let turnoUtente = Math.random() < 0.5; // true se l'utente inizia, false altrimenti

if (turnoUtente) {
  console.log("L'utente inizia a giocare.");
} else {
  console.log("La CPU inizia a giocare.");
}

// Funzione per il turno dell'utente
function turnoUtenteGioca() {
  // Implementa logica per turno dell'utente
}

// Funzione per il turno della CPU
function turnoCPUGioca() {
  // Implementa logica per turno della CPU
}



function calcolaPercorsoImmagine(seme, valore) {
  const numeriCarte = {
    'Denari': {
      'Asso': 1, 'Due': 2, 'Tre': 3, 'Quattro': 4, 'Cinque': 5,
      'Sei': 6, 'Sette': 7, 'Fante': 8, 'Cavallo': 9, 'Re': 10
    },
    'Bastoni': {
      'Asso': 11, 'Due': 12, 'Tre': 13, 'Quattro': 14, 'Cinque': 15,
      'Sei': 16, 'Sette': 17, 'Fante': 18, 'Cavallo': 19, 'Re': 20
    },
    'Coppe': {
      'Asso': 21, 'Due': 22, 'Tre': 23, 'Quattro': 24, 'Cinque': 25,
      'Sei': 26, 'Sette': 27, 'Fante': 28, 'Cavallo': 29, 'Re': 30
    },
    'Spade': {
      'Asso': 31, 'Due': 32, 'Tre': 33, 'Quattro': 34, 'Cinque': 35,
      'Sei': 36, 'Sette': 37, 'Fante': 38, 'Cavallo': 39, 'Re': 40
    }
  };

  // Ottiene il numero della carta in base al seme e al valore
  const numeroCarta = numeriCarte[seme][valore];

  // Ritorna il percorso completo
  return `url(../sito-main/immagini/carte_napoletane/${numeroCarta}.jpg)`;
}


function caricaBriscola() {
  const briscola = cartaBriscola
  const cardFrontBriscola = document.getElementById('frontcardbriscola');
  const cardBackBriscola = document.getElementById('backcardbriscola');

  cardFrontBriscola.style.backgroundImage = `url(../sito-main/immagini/retro_carta2.jpg)`;
  cardBackBriscola.style.backgroundImage = calcolaPercorsoImmagine(briscola.seme, briscola.valore);

  fronte(contbriscola)
}


function caricaCarte() {
  const carte = manoGiocatore
  const carteCPU = manoCPU

  carte.forEach((carta, index) => {
    const cardFront = document.getElementById(`frontcardutente${index + 1}`);
    const cardBack = document.getElementById(`backcardutente${index + 1}`);

    cardFront.style.backgroundImage = `url(../sito-main/immagini/retro_carta2.jpg)`;
    cardBack.style.backgroundImage = calcolaPercorsoImmagine(carta.seme, carta.valore);
  });

  carteCPU.forEach((carta, index) => {
    const cardFront = document.getElementById(`frontcardcpu${index + 1}`);
    const cardBack = document.getElementById(`backcardcpu${index + 1}`);

    cardFront.style.backgroundImage = `url(../sito-main/immagini/retro_carta2.jpg)`;
    cardBack.style.backgroundImage = calcolaPercorsoImmagine(carta.seme, carta.valore);
  });
}




// Inizializzazione delle carte e del turno al caricamento della pagina
window.onload = function() {
  scompare(contgiocatac);
  scompare(contgiocatau);
  mazzoDiCarte = creaMazzo();
  mazzoDiCarte = mescolaMazzo(mazzoDiCarte);
  distribuisciCarte(); // Distribuisce le carte ai giocatori
  pescaBriscola(); // Pesca la carta di Briscola
  console.log("Mano del giocatore:", manoGiocatore);
  console.log("Mano del CPU:", manoCPU);
  console.log("Carta di Briscola:", cartaBriscola);
  console.log(mazzoDiCarte);
  caricaBriscola();
  caricaCarte();
  // Turno iniziale
  if (turnoUtente) {
    turnoUtenteGioca();
  } else {
    turnoCPUGioca();
  }


}



const contcpu1= document.getElementById('conteinercardcpu1')
const contcpu2= document.getElementById('conteinercardcpu2')
const contcpu3= document.getElementById('conteinercardcpu3')
const contmazzo= document.getElementById('conteinercardmazzo')
const contbriscola= document.getElementById('conteinercardbriscola')
const contgiocatac= document.getElementById('conteinercardcpugiocata')
const contgiocatau= document.getElementById('conteinercardutentegiocata')
const contutente1= document.getElementById('conteinercardutente1')
const contutente2= document.getElementById('conteinercardutente2')
const contutente3= document.getElementById('conteinercardutente3')
const conteinercard= document.querySelectorAll('.conteinercard')
const conteinercardu=document.querySelectorAll('.conteinercard.utente')

/*gira la carta sul retro*/
function retro(conteinercard){
  if(conteinercard==null) return
  conteinercard.classList.remove('active')
}
/*gira la carta sul fronte*/
function fronte(conteinercard){
  if(conteinercard==null) return
  conteinercard.classList.add('active')
}

function scompare(conteinercard){
  if(conteinercard==null) return
  conteinercard.classList.add('scompare')
}

function appare(conteinercard){
  if(conteinercard==null) return
  conteinercard.classList.remove('scompare')
}

/*carta utente va sul tavolo*/
function tavoloutente(conteinercard){
  if(conteinercard==null) return
  else if(conteinercard.contains('cpu')){
    fronte(conteinercard);
    fronte(giocatac);
  }
  
}



/*rendo le carte utente cliccabili*/

conteinercardu.forEach(card=>{
    card.addEventListener('click', ()=>{
    if(card==null) return
    if(ngiocateU!=1) return
    const backcardutente=card.querySelector('.back');
    const backcardgiocatau= document.getElementById('backcardutentegiocata');
    
    const stile = backcardutente.style.backgroundImage;
    backcardgiocatau.style.backgroundImage=stile;
    console.log(stile);
    appare(contgiocatau);
    retro(card);
    scompare(card);
    ngiocateU=ngiocateU-1;
  })
})

