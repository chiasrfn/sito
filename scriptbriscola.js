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

function mescolaMazzo(m) {
  for (let i = m.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [m[i], m[j]] = [m[j], m[i]];
  }
  return m;
}

let mazzoDiCarte = [];
let ngiocateU


function distribuisciCarte() {
  // Rimuove carte precedenti
  manoGiocatore = [];
  manoCPU = [];

  // Distribuisce 3 carte
  for (let i = 0; i < 3; i++) {
    manoGiocatore.push(pescaCarta());
    manoCPU.push(pescaCarta());
  }
  comparizioneCarte()
}


function comparizioneCarte(){
    // Aggiorna interfaccia utente
  //caricamento tutte carte dell'utente e cpu e scompare mazzo
  conteinercard.forEach(card=>{
    if(card==contgiocatac || card==contgiocatau){
      scompare(card);
    }else {
      appare(card);
    }
  })

  fronte(contutente1)
  fronte(contutente2)
  fronte(contutente3)

  //intero per capire quanto giocato utente
  ngiocateU=0;
}


// Pesca carta dal mazzo
function pescaCarta() {
  return mazzoDiCarte.pop();
}

let manoGiocatore = [];
let manoCPU = [];
let cartaBriscola

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
  ngiocateU=1;
}

var cartaGiocataCPU

// Funzione per il turno della CPU
async function turnoCPUGioca(m,cB) {
  await sleep(1000);
  if (!primoGioca) {
    if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=1
      return
    }
    if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
    if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=1
      return
    }
    if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
    if (isScartino(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isScartino(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=1
      return
    }
    if (isScartino(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
    if (isPunti(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isPunti(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=1
      return
    }
    if (isPunti(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
    if (isAsso(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isAsso(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=1
      return
    }
    if (isAsso(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
    if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=2
      return
    }
    if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
    if (isTre(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isTre(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=1
      return
    }
    if (isTre(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
    if (isTre(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      cartaGiocataCPU=0
      return
    }
    if (isTre(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      cartaGiocataCPU=1
      return
    }
    if (isTre(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      cartaGiocataCPU=2
      return
    }
  }
  else {
    giocaCartaCPU(contcpu1)
  }
}

function isBriscola(c,cB){
  return c.seme === cB.seme
}

function isScartino(c){
  const valoriScartini = ['Due', 'Quattro', 'Cinque', 'Sei', 'Sette'];
  return valoriScartini.includes(c.valore);
}

function isPunti(c){
  const valoriPunti = ['Fante', 'Cavallo', 'Re'];
  return valoriPunti.includes(c.valore);
}

function isTre(c){
  const valoreTre = ['Tre'];
  return valoreTre.includes(c.valore);
}

function isAsso(c){
  const valoreAsso = ['Asso'];
  return valoreAsso.includes(c.valore);
}

function calcolaPercorsoImmagine(s, v) {
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
  const numeroCarta = numeriCarte[s][v];

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

let primoGioca


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
  turni(turnoUtente)
}

let puntiCPU
let puntiUtente
let attesa

async function turno(pG) {
  if (primoGioca) {
    attesa = true
    turnoUtenteGioca()
    while (attesa) {
      await sleep(500)
    }
    turnoCPUGioca(manoCPU,cartaBriscola)
  }
  else {
    turnoCPUGioca(manoCPU,cartaBriscola)
    await sleep(3000)
    turnoUtenteGioca()
  }
  presa()
}

function presa() {

}

function turni(tU) {
  if (tU) {
    primoGioca=true
  } else {
    primoGioca=false
  }
  turno(primoGioca)
  turno()
  turno()
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
function retro(contC){
  if(contC==null) return
  contC.classList.remove('active')
}
/*gira la carta sul fronte*/
function fronte(contC){
  if(contC==null) return
  contC.classList.add('active')
}

function scompare(contC){
  if(contC==null) return
  contC.classList.add('scompare')
}

function appare(contC){
  if(contC==null) return
  contC.classList.remove('scompare')
}


/*gestisce la carta scelta dalla cpu*/
async function giocaCartaCPU(contC){
  if(contC==null) return
  const backcardcpu=contC.querySelector('.card').querySelector('.back');
  const frontcardgiocatacpu= document.getElementById('frontcardcpugiocata');
  
  const stile = backcardcpu.style.backgroundImage;
  frontcardgiocatacpu.style.backgroundImage=stile;
  console.log(stile);

  fronte(contC);
  await sleep(1500);
  appare(contgiocatac);
  scompare(contC);
  retro(contC);
}

let cartaGiocataUtente

/*rendo le carte utente cliccabili e le metto sul tavolo*/

conteinercardu.forEach(card=>{
    card.addEventListener('click',()=>{
    if(card==null) return
    if(ngiocateU!=1) return
    const backcardutente=card.querySelector('.back');
    const frontcardgiocatau= document.getElementById('frontcardutentegiocata');
    
    const stile = backcardutente.style.backgroundImage;
    frontcardgiocatau.style.backgroundImage=stile;
    console.log(stile);
    appare(contgiocatau);
    retro(card);
    scompare(card);
    ngiocateU=ngiocateU-1;
    cartaGiocataUtente=parseInt(card.id.charAt(card.id.length-1))-1;
    attesa = false
  })
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}