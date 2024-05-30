//traversone

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

let mazzo = [];

function creaMazzo() {
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

function pescaVuoto() {
  return {seme: "vuoto", valore: "vuoto"}
}

let mazzoDiCarte = [];
let ngiocateU


function distribuisciCarte() {
  // Rimuove carte precedenti
  manoGiocatore = [];
  manoCPU = [];

  // Distribuisce 3 carte
  for (let i = 0; i < 10; i++) {
    manoGiocatore.push(pescaCarta());
    manoCPU.push(pescaCarta());
  }
  comparizioneCarte()
}


async function comparizioneCarte(){
    // Aggiorna interfaccia utente
  //caricamento tutte carte dell'utente e cpu e scompare mazzo
  conteinercard.forEach(card=>{
    if(card==contgiocatac || card==contgiocatau){
      scompare(card);
    }else if(card.classList.contains('utente')){
      fronte(card)
      appare(card);
    }else{
      appare(card)
    }
  })

  if(numeroCartaGiocataCPU>-1){
    await sleep(500)
    n=numeroCartaGiocataCPU+1;
    contC=document.getElementById('conteinercardcpu'+n)
    retro(contC)
  }

}


// Pesca carta dal mazzo
function pescaCarta() {
  return mazzoDiCarte.pop();
}

let manoGiocatore = [];
let manoCPU = [];



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

let cartaGiocataCPU
let numeroCartaGiocataCPU=-1


function assegnaContCpu(n){
  const c=n+1
  contc=document.getElementById('conteinercardcpu'+c);
  giocaCartaCPU(contc)
  numeroCartaGiocataCPU=n;
  cartaGiocataCPU=manoCPU[n];
}

function sceltaPuntiCPU(array,m){
  const n= m.length
  for(let elem of array){
    if(isPunti(m[elem])){
      assegnaContCpu(elem)
      return;
    }
  }
  for(let elem of array){
    if(isScartino(m[elem])){
      assegnaContCpu(elem)
      return;
    }
  }
  for(let elem of array){
    if(isAsso(m[elem])){
      assegnaContCpu(elem)
      return;
    }
  }
  for(let elem of array){
    if(isDueTre(m[elem])){
      assegnaContCpu(elem)
      return;
    }
  }
}

// Funzione per il turno della CPU
async function turnoCPUGioca(m,cG) {
  if(!primoGioca){ //primo a giocare
    //scegliamo il seme con meno carte
    const b=[] //bastoni
    const d=[] //denari
    const c=[] //coppe
    const s=[] //spade
    const n=m.length
    for(let i=0; i<n; i++){
      if(m[i].seme=='Bastoni'){
        b.push(i)
      }else if(m[i].seme=='Denari'){
        d.push(i)
      }else if(m[i].seme=='Coppe'){
        c.push(i)
      }else{
        s.push(i)
      }
    }
    if(s.length>0 && Math.min(s.length, d.length, c.length)== s.length){
      //scegliamo spade
      sceltaPuntiCPU(s,m)
    }else if(d.length>0 && Math.min(s.length, d.length, c.length)== d.length){
      //scegliamo denari
      sceltaPuntiCPU(d,m)
    }else if(c.length>0 && Math.min(s.length, d.length, c.length)== c.length){
      //scegliamo coppe
      sceltaPuntiCPU(c,m)
    }else{
      //come ultima scelta scegliamo i bastoni
      sceltaPuntiCPU(b,m)
    }

  }else{ //gioca in risposta all'utente
    if(esistecartastessoseme){
      //gioca carta con punti se
      if(isScartino(cG) || isPunti(cG)){
        for(let elem of mazzocarteseme){
          if(isDueTre(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isPunti(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isScartino(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isAsso(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
      }if(isAsso(cG)){
        for(let elem of mazzocarteseme){
          if(isPunti(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isScartino(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isDueTre(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
      }if(isDueTre(cG)){
        for(let elem of mazzocarteseme){
          if(isAsso(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isDueTre(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isPunti(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
        for(let elem of mazzocarteseme){
          if(isScartino(m[elem])){
            assegnaContCpu(elem)
            return;
          }
        }
      }
    }else{
      const n= m.length
      for(let i=0; i<n; i++){
        if(isAssoBastone(m[i])){
          assegnaContCpu(i)
          return;
        }
      }
      for(let i=0; i<n; i++){
        if(isAsso(m[i])){
          assegnaContCpu(i)
          return;
        }
      }
      for(let i=0; i<n; i++){
        if(isDueTre(m[i])){
          assegnaContCpu(i)
          return;
        }
      }
      for(let i=0; i<n; i++){
        if(isPunti(m[i])){
          assegnaContCpu(i)
          return;
        }
      }
      for(let i=0; i<n; i++){
        if(isScartino(m[i])){
          assegnaContCpu(i)
          return;
        }
      }
    }
  }
}

/*Funzioni ausiliare per controlli seme e tipo*/

function isStessoSeme(c,cG){
  return c.seme === cG.seme
}


function isScartino(c){
  const valoriScartini = ['Quattro', 'Cinque', 'Sei', 'Sette'];
  return valoriScartini.includes(c.valore);
}

function isPunti(c){
  const valoriPunti = ['Fante', 'Cavallo', 'Re'];
  return valoriPunti.includes(c.valore);
}

function isDueTre(c){
  const valoriPunti = ['Due', 'Tre'];
  return valoriPunti.includes(c.valore);
}

function isAsso(c){
  const valoreAsso = ['Asso'];
  return valoreAsso.includes(c.valore);
}

function isAssoBastone(c){
  return c.valore=='Asso' && c.seme=='Bastoni';
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
  return `url(./immagini/carte_napoletane/${numeroCarta}.jpg)`;
}


function caricaCarte() {
  const carte = manoGiocatore
  const carteCPU = manoCPU

  carte.forEach((carta, index) => {
    const cardFront = document.getElementById(`frontcardutente${index + 1}`);
    const cardBack = document.getElementById(`backcardutente${index + 1}`);

    cardFront.style.backgroundImage = `url(./immagini/retro_carta2.jpg)`;
    cardBack.style.backgroundImage = calcolaPercorsoImmagine(carta.seme, carta.valore);
  });

  carteCPU.forEach((carta, index) => {
    const cardFront = document.getElementById(`frontcardcpu${index + 1}`);
    const cardBack = document.getElementById(`backcardcpu${index + 1}`);

    cardFront.style.backgroundImage = `url(./immagini/retro_carta2.jpg)`;
    cardBack.style.backgroundImage = calcolaPercorsoImmagine(carta.seme, carta.valore);
  });

}

let primoGioca //true utente




let puntiCPU = 0
let puntiUtente = 0
let attesa

async function turno(pG) {
  attesa2 = true
  attesa = true
  if (primoGioca) {
    turnoUtenteGioca()
    while (attesa) {
      await sleep(500)
    }
    await sleep(1000);
    controlloSeme(manoCPU,cartaGiocataUtente)
    turnoCPUGioca(manoCPU,cartaGiocataUtente)
  }
  else {
    await sleep(1000);
    turnoCPUGioca(manoCPU,cartaGiocataUtente)
    await sleep(1800)
    controlloSeme(manoGiocatore,cartaGiocataCPU)
    turnoUtenteGioca()
  }
  while (attesa) {
    await sleep(500)
  }
  presa(cartaGiocataUtente,cartaGiocataCPU,primoGioca)
}



async function turniFinali(primoGioca) {
  attesa2 = true
  attesa = true
  if (primoGioca) {
    turnoUtenteGioca()
    while (attesa) {
      await sleep(500)
    }
    await sleep(1000);
    controlloSeme(manoCPU,cartaGiocataUtente)
    turnoCPUGioca(manoCPU,cartaGiocataUtente)
  }
  else {
    await sleep(1000);
    turnoCPUGioca(manoCPU,cartaGiocataUtente)
    await sleep(1800)
    controlloSeme(manoGiocatore,cartaGiocataCPU)
    turnoUtenteGioca()
  }
  while (attesa) {
    await sleep(500)
  }
  preseFinali(cartaGiocataUtente,cartaGiocataCPU,primoGioca)
}


function confrontaCarte(c1, c2) {
  const valori = {
      "Asso": 8,
      "Due": 9,
      "Tre": 10,
      "Quattro": 1,
      "Cinque": 2,
      "Sei": 3,
      "Sette": 4,
      "Fante": 5,
      "Cavallo": 6,
      "Re": 7
  };

  const valoreCarta1 = valori[c1];
  const valoreCarta2 = valori[c2];
  const differenza = valoreCarta1 - valoreCarta2;
  return differenza > 0;
}

function chiPrende(cGU,cGC,pG){
  if (pG) { //gioca per primo l'utente
    if(isStessoSeme(cGU,cGC)){
      if (confrontaCarte(cGU.valore,cGC.valore)) {
        return 1 //prende utente
      }
      else {
        return 0 //prende cpu
      }
    }else{
      return 1
    }
  }else {
    if(isStessoSeme(cGU,cGC)){
      if (confrontaCarte(cGC.valore,cGU.valore)) {
        return 0
      }
      else {
        return 1 
      }
    }else{
      return 0
    }
  }
}

function conversionePunti_aux(cV) {
  const val = {
    'Asso': 1,
    'Due': 1/3,
    'Tre': 1/3,
    'Quattro': 0,
    'Cinque': 0,
    'Sei': 0,
    'Sette': 0,
    'Fante': 1/3,
    'Cavallo': 1/3,
    'Re': 1/3
  };
  return val[cV];
}

function conversionePunti(c){
  if(isAssoBastone(c)){
    return 11;
  }
  return conversionePunti_aux(c.valore)
}

async function presa(cGU,cGC,pG) {
  while (attesa) {
    await sleep(400)
  }
  if (primoGioca) {
    await sleep(2300)
  }
  else {
    await sleep(700)
  }
  animazionepresa(chiPrende(cGU,cGC,pG))
  if (chiPrende(cGU,cGC,pG) == 1) {
    puntiUtente = puntiUtente + conversionePunti(cartaGiocataUtente) + conversionePunti(cartaGiocataCPU);
    manoGiocatore[numeroCartaGiocataUtente]=pescaCarta();
    manoCPU[numeroCartaGiocataCPU]=pescaCarta();
    primoGioca = true
    await sleep(1200)
    caricaCarte()
    comparizioneCarte()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
  else {
    puntiCPU = puntiCPU + conversionePunti(cartaGiocataCPU) + conversionePunti(cartaGiocataUtente);
    manoCPU[numeroCartaGiocataCPU]=pescaCarta();
    manoGiocatore[numeroCartaGiocataUtente]=pescaCarta();
    primoGioca = false
    console.log(manoCPU[numeroCartaGiocataCPU])
    await sleep(1200)
    caricaCarte()
    comparizioneCarte()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
}

function comparizioneCarteUltime() {
  // Aggiorna interfaccia utente
  //caricamento tutte carte dell'utente e cpu e scompare mazzo
  conteinercard.forEach(card=>{
    if(card==contgiocatac || card==contgiocatau){
      scompare(card);
    }
  })

  contc=document.getElementById('conteinercardcpu'+numeroCartaGiocataUtente);
  contc.style.pointerEvents = "none";
  contc.style.cursor = "default";
}


async function preseFinali(cGU,cGC,cB,pG) {
  while (attesa) {
    await sleep(400)
  }
  if (primoGioca) {
    await sleep(2300)
  }
  else {
    await sleep(700)
  }
  animazionepresa(chiPrende(cGU,cGC,cB,pG))
  if (chiPrende(cGU,cGC,cB,pG) == 1) {
    puntiUtente = puntiUtente + conversionePunti(cartaGiocataUtente) + conversionePunti(cartaGiocataCPU);
    manoCPU[numeroCartaGiocataCPU]=pescaVuoto();
    primoGioca = true
    await sleep(1200)
    comparizioneCarteUltime()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
  else {
    puntiCPU = puntiCPU + conversionePunti(cartaGiocataCPU) + conversionePunti(cartaGiocataUtente);
    manoCPU[numeroCartaGiocataCPU]=pescaVuoto();
    primoGioca = false
    await sleep(1200)
    comparizioneCarteUltime()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
}

let attesa2


async function turni(tU) {
  if (tU) {
    primoGioca=true
  } else {
    primoGioca=false
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turno(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  turniFinali(primoGioca)
  while (attesa2) {
    await sleep(500)
  }
  vittoria()
}



/*===== Grafica =====*/


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const modalg= document.getElementById('giocamodal')

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

/*Costanti*/
const conteinercard= document.querySelectorAll('.conteinercard')
const contgiocatac= document.getElementById('conteinercardcpugiocata')
const contgiocatau= document.getElementById('conteinercardutentegiocata')
const buttongioca=document.getElementById('gioca')
const conteinercardu=document.querySelectorAll('.conteinercard.utente')
const contvittoria=document.getElementById("contvittoria")
const frontcardgiocatau= document.getElementById('frontcardutentegiocata')
const frontcardgiocatacpu= document.getElementById('frontcardcpugiocata')
const backgiocatau=document.getElementById("backcardutentegiocata")
const backgiocatac=document.getElementById("backcardcpugiocata")

// Preparazione delle carte al caricamento della pagina
window.onload = function() {
  scompare(contgiocatac);
  scompare(contgiocatau);
  preparazioneNuovoGioco();
}

function preparazioneNuovoGioco(){
  appare(buttongioca);
}

buttongioca.addEventListener('click', ()=>{
  scompare(buttongioca);
  puntiCPU=0
  puntiUtente=0
  aggiornaPunteggio()
  conteinercard.forEach(card=>{
    if(card.classList.contains('utente')){
      card.style.pointerEvents = "auto";
      card.style.cursor = "pointer";
      retro(card);
      fronte(card);
    }
  })
  turnoUtente = Math.random() < 0.5;
  scompare(contgiocatac);
  scompare(contgiocatau);
  mazzoDiCarte = creaMazzo();
  mazzoDiCarte = mescolaMazzo(mazzoDiCarte);
  distribuisciCarte(); // Distribuisce le carte ai giocatori
  aggiornaCarte();
  console.log("Mano del giocatore:", manoGiocatore);
  console.log("Mano del CPU:", manoCPU);
  caricaCarte();
  turni(turnoUtente);
})

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

async function giocaCartaCPU(contC){
  if(contC==null) return
  const backcardcpu=contC.querySelector('.card').querySelector('.back');
  
  const stile = backcardcpu.style.backgroundImage;
  frontcardgiocatacpu.style.backgroundImage=stile;

  fronte(contC);
  await sleep(1300);
  appare(contgiocatac);
  scompare(contC);
  fronte(contC);
}

let numeroCartaGiocataUtente
let cartaGiocataUtente
let esistecartastessoseme
let mazzocarteseme=[];

/*controlliamo che esista il semegiocato in un mazzo*/
function controlloSeme(mazzo, cartagiocata){
  esistecartastessoseme=false;
  while(cartagiocata==undefined){}
  for(let i=0; i<10; i++){
    if(isStessoSeme(mazzo[i], cartagiocata)){
      esistecartastessoseme=true;
      if(primoGioca){
        mazzocarteseme.push(i); //mi segno le carte che hanno lo stesso seme per il CPU
      }
      
    }
  }
}

/*rendo le carte utente cliccabili e le metto sul tavolo*/

function cliccabili(mg, cgc, n){
  if(!isStessoSeme(mg[n], cgc) && esistecartastessoseme){
    return false;
  }else{
    return true;
  }
}

conteinercardu.forEach(card=>{
    card.addEventListener('click',()=>{
    if(card==null) return
    if(ngiocateU!=1) return
    if(!primoGioca){
      const n= card.id.slice(-1)-1
      if(!cliccabili(manoGiocatore, cartaGiocataCPU, n)){
        
        return;
      }
    }
    const backcardutente=card.querySelector('.back');
    
    const stile = backcardutente.style.backgroundImage;
    frontcardgiocatau.style.backgroundImage=stile;
    appare(contgiocatau);
    retro(card);
    scompare(card);
    ngiocateU=ngiocateU-1;
    numeroCartaGiocataUtente=parseInt(card.id.charAt(card.id.length-1))-1;
    cartaGiocataUtente=manoGiocatore[numeroCartaGiocataUtente]
    attesa = false

    //imposto il back cosa che ci servirà se la presa sarà effettuata dalla cpu
    backgiocatau.style.backgroundImage=stile;
  })
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*funzione da chiamare quando si sa chi ha vinto*/
async function animazionepresa(i){
  if(i==0){ //cpu vinto
    //facciamo vedere la carta sotto
    backgiocatau.classList.add('active');

    const stile = frontcardgiocatacpu.style.backgroundImage;
    scompare(contgiocatac);
    frontcardgiocatau.style.backgroundImage=stile;
    await sleep(4000);

    scompare(contgiocatau);
    backgiocatau.classList.remove('active');

  }else{//utente vinto   

    const stile = frontcardgiocatau.style.backgroundImage;
    scompare(contgiocatau);
    backgiocatac.style.backgroundImage=stile;
    //facciamo vedere la carta sotto
    backgiocatac.classList.add('active');
    await sleep(4000);

    scompare(contgiocatac);
    backgiocatac.classList.remove('active');
  }
}

function aggiornaPunteggio() {

  $('#valorepunteggiocpu').text(puntiCPU);
  $('#valorepunteggioutente').text(puntiUtente);
}

function aggiornaCarte(){
  $('#ncarteval').text(mazzo.length);
}

/*vittoria*/

function vittoria(){
  preparazioneNuovoGioco();
  if(puntiCPU>60){
    vittoriaAux('Sconfitta');
  }else if(puntiCPU==60 && puntiUtente==puntiCPU){
    vittoriaAux('Pareggio');
  }else if(puntiUtente>60){
    vittoriaAux('Vittoria');
  }else{
    return;
  }
}

function vittoriaAux(frase){
  overlayv.classList.add('active');
  $('#textmessvittoria').text(frase);
  contvittoria.classList.add('active');
}


contvittoria.addEventListener('click', () => {
  overlayv.classList.remove('active')
  contvittoria.classList.remove('active')
})

overlayv.addEventListener('click', () => {
  overlayv.classList.remove('active')
  contvittoria.classList.remove('active')
})