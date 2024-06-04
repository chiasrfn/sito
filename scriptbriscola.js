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

let cartaGiocataCPU
let numeroCartaGiocataCPU

// Funzione per il turno della CPU
async function turnoCPUGioca(m,cB,cG) {
  if (!primoGioca) {
    if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isScartino(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isScartino(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isScartino(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isPunti(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isPunti(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isPunti(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isAsso(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isAsso(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isAsso(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isTre(m[0]) && !isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isTre(m[1]) && !isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isTre(m[2]) && !isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isTre(m[0]) && isBriscola(m[0],cB)) {
      giocaCartaCPU(contcpu1)
      numeroCartaGiocataCPU=0
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isTre(m[1]) && isBriscola(m[1],cB)) {
      giocaCartaCPU(contcpu2)
      numeroCartaGiocataCPU=1
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
    if (isTre(m[2]) && isBriscola(m[2],cB)) {
      giocaCartaCPU(contcpu3)
      numeroCartaGiocataCPU=2
      cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
      return
    }
  }
  else {
    if (isScartino(cG) && !isBriscola(cG,cB)) {
      if (isAsso(m[0]) && isStessoSeme(m[0],cG)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isStessoSeme(m[1],cG)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isStessoSeme(m[2],cG)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isStessoSeme(m[0],cG)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isStessoSeme(m[1],cG)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isStessoSeme(m[2],cG)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isStessoSeme(m[0],cG)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isStessoSeme(m[1],cG)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isStessoSeme(m[2],cG)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
    if (isPunti(cG) && !isBriscola(cG,cB)) {
      if (isAsso(m[0]) && isStessoSeme(m[0],cG)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isStessoSeme(m[1],cG)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isStessoSeme(m[2],cG)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isStessoSeme(m[0],cG)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isStessoSeme(m[1],cG)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isStessoSeme(m[2],cG)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
    if (isTre(cG) && !isBriscola(cG,cB)) {
      if (isAsso(m[0]) && isStessoSeme(m[0],cG)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isStessoSeme(m[1],cG)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isStessoSeme(m[2],cG)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
    if (isAsso(cG) && !isBriscola(cG,cB)) {
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
    if (isScartino(cG) && isBriscola(cG,cB)) {
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
    if (isPunti(cG) && isBriscola(cG,cB)) {
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
    if (isTre(cG) && isBriscola(cG,cB)) {
      if (isAsso(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
    if (isAsso(cG) && isBriscola(cG,cB)) {
      if (isScartino(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isScartino(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isPunti(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[0]) && !isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[1]) && !isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isAsso(m[2]) && !isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[0]) && isBriscola(m[0],cB)) {
        giocaCartaCPU(contcpu1)
        numeroCartaGiocataCPU=0
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[1]) && isBriscola(m[1],cB)) {
        giocaCartaCPU(contcpu2)
        numeroCartaGiocataCPU=1
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
      if (isTre(m[2]) && isBriscola(m[2],cB)) {
        giocaCartaCPU(contcpu3)
        numeroCartaGiocataCPU=2
        cartaGiocataCPU=manoCPU[numeroCartaGiocataCPU]
        return
      }
    }
  }
}

function isStessoSeme(c,cG){
  return c.seme === cG.seme
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
  return `url(./immagini/carte_napoletane/${numeroCarta}.jpg)`;
}


function caricaBriscola() {
  const briscola = cartaBriscola
  const cardFrontBriscola = document.getElementById('frontcardbriscola');
  const cardBackBriscola = document.getElementById('backcardbriscola');

  cardFrontBriscola.style.backgroundImage = `url(./immagini/retro_carta2.jpg)`;
  cardBackBriscola.style.backgroundImage = calcolaPercorsoImmagine(briscola.seme, briscola.valore);

  fronte(contbriscola)
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

let primoGioca




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
    turnoCPUGioca(manoCPU,cartaBriscola,cartaGiocataUtente)
  }
  else {
    await sleep(1000);
    turnoCPUGioca(manoCPU,cartaBriscola,cartaGiocataUtente)
    await sleep(1800)
    turnoUtenteGioca()
  }
  while (attesa) {
    await sleep(500)
  }
  presa(cartaGiocataUtente,cartaGiocataCPU,cartaBriscola,primoGioca)
}

async function turnoUltimaPescata(pG) {
  attesa2 = true
  attesa = true
  if (primoGioca) {
    turnoUtenteGioca()
    while (attesa) {
      await sleep(500)
    }
    await sleep(1000);
    turnoCPUGioca(manoCPU,cartaBriscola,cartaGiocataUtente)
  }
  else {
    await sleep(1000);
    turnoCPUGioca(manoCPU,cartaBriscola,cartaGiocataUtente)
    await sleep(1800)
    turnoUtenteGioca()
  }
  while (attesa) {
    await sleep(500)
  }
  presaUltimaPescata(cartaGiocataUtente,cartaGiocataCPU,cartaBriscola,primoGioca)
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
    turnoCPUGioca(manoCPU,cartaBriscola,cartaGiocataUtente)
  }
  else {
    await sleep(1000);
    turnoCPUGioca(manoCPU,cartaBriscola,cartaGiocataUtente)
    await sleep(1800)
    turnoUtenteGioca()
  }
  while (attesa) {
    await sleep(500)
  }
  preseFinali(cartaGiocataUtente,cartaGiocataCPU,cartaBriscola,primoGioca)
}

async function turnoPenultimo(primoGioca) {

}

async function turnoUltimo(primoGioca) {

}

function confrontaCarte(c1, c2) {
  const valori = {
      "Asso": 10,
      "Due": 1,
      "Tre": 9,
      "Quattro": 2,
      "Cinque": 3,
      "Sei": 4,
      "Sette": 5,
      "Fante": 6,
      "Cavallo": 7,
      "Re": 8
  };

  const valoreCarta1 = valori[c1];
  const valoreCarta2 = valori[c2];
  const differenza = valoreCarta1 - valoreCarta2;
  return differenza > 0;
}

function chiPrende(cGU,cGC,cB,pG){
  if (pG) {
    if (isBriscola(cGU,cB)) {
      if (!isBriscola(cGC,cB)){
        return 1
      }
      else {
        if (confrontaCarte(cGU.valore,cGC.valore)) {
          return 1
        }
        else {
          return 0
        }
      }
    }
    else {
      if (isBriscola(cGC,cB)) {
        return 0
      }
      if (!isBriscola(cGC,cB) && !isStessoSeme(cGC,cGU)) {
        return 1
      }
      else {
        if (confrontaCarte(cGU.valore,cGC.valore)) {
          return 1
        }
        else {
          return 0
        }
      }
    }
  }
  else {
    if (isBriscola(cGC,cB)) {
      if (!isBriscola(cGU,cB)){
        return 0
      }
      else {
        if (confrontaCarte(cGU.valore,cGC.valore)) {
          return 1
        }
        else {
          return 0
        }
      }
    }
    else {
      if (isBriscola(cGU,cB)) {
        return 1
      }
      if (!isBriscola(cGU,cB) && !isStessoSeme(cGU,cGC)) {
        return 0
      }
      else {
        if (confrontaCarte(cGU.valore,cGC.valore)) {
          return 1
        }
        else {
          return 0
        }
      }
    }
  }
}

function conversionePunti(cV) {
  const val = {
    'Asso': 11,
    'Due': 0,
    'Tre': 10,
    'Quattro': 0,
    'Cinque': 0,
    'Sei': 0,
    'Sette': 0,
    'Fante': 2,
    'Cavallo': 3,
    'Re': 4
  };
  return val[cV];
}

async function presa(cGU,cGC,cB,pG) {
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
    puntiUtente = puntiUtente + conversionePunti(cartaGiocataUtente.valore) + conversionePunti(cartaGiocataCPU.valore);
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
    puntiCPU = puntiCPU + conversionePunti(cartaGiocataCPU.valore) + conversionePunti(cartaGiocataUtente.valore);
    manoCPU[numeroCartaGiocataCPU]=pescaCarta();
    manoGiocatore[numeroCartaGiocataUtente]=pescaCarta();
    primoGioca = false
    await sleep(1200)
    caricaCarte()
    comparizioneCarte()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
}

function comparizioneCarteUltimaPescata() {
  // Aggiorna interfaccia utente
  //caricamento tutte carte dell'utente e cpu e scompare mazzo
  conteinercard.forEach(card=>{
    if(card==contgiocatac || card==contgiocatau || card==contmazzo || card == contbriscola){
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

function comparizioneCarteUltime() {
  // Aggiorna interfaccia utente
  //caricamento tutte carte dell'utente e cpu e scompare mazzo
  conteinercard.forEach(card=>{
    if(card==contgiocatac || card==contgiocatau){
      scompare(card);
    }
  })

  if(numeroCartaGiocataUtente==0) {
    contutente1.style.pointerEvents = "none";
    contutente1.style.cursor = "default";
  }
  if(numeroCartaGiocataUtente==1) {
    contutente2.style.pointerEvents = "none";
    contutente2.style.cursor = "default";
  }
  if(numeroCartaGiocataUtente==2) {
    contutente3.style.pointerEvents = "none";
    contutente3.style.cursor = "default";
  }

  //intero per capire quanto giocato utente
  ngiocateU=0;
}

async function presaUltimaPescata(cGU,cGC,cB,pG) {
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
    puntiUtente = puntiUtente + conversionePunti(cartaGiocataUtente.valore) + conversionePunti(cartaGiocataCPU.valore);
    manoGiocatore[numeroCartaGiocataUtente]=pescaCarta();
    manoCPU[numeroCartaGiocataCPU]=cartaBriscola;
    primoGioca = true
    await sleep(1200)
    caricaCarte()
    comparizioneCarteUltimaPescata()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
  else {
    puntiCPU = puntiCPU + conversionePunti(cartaGiocataCPU.valore) + conversionePunti(cartaGiocataUtente.valore);
    manoCPU[numeroCartaGiocataCPU]=pescaCarta();
    manoGiocatore[numeroCartaGiocataUtente]=cartaBriscola;
    primoGioca = false
    await sleep(1200)
    caricaCarte()
    comparizioneCarteUltimaPescata()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
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
    puntiUtente = puntiUtente + conversionePunti(cartaGiocataUtente.valore) + conversionePunti(cartaGiocataCPU.valore);
    manoCPU[numeroCartaGiocataCPU]=pescaVuoto();
    primoGioca = true
    await sleep(1200)
    comparizioneCarteUltime()
    aggiornaPunteggio()
    aggiornaCarte()
    attesa2 = false
  }
  else {
    puntiCPU = puntiCPU + conversionePunti(cartaGiocataCPU.valore) + conversionePunti(cartaGiocataUtente.valore);
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
  turnoUltimaPescata(primoGioca)
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

/*======= Graficheeeeeee =========*/

/*Header*/

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
  if(modal.classList.contains('forgot') || modal.classList.contains('registrati')){
    $('#loginmodal').removeClass('active')
  }
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  if(modal.classList.contains('forgot')){
    $('#inviaemail').removeClass('active')
    $('#inviaemail').text('Invia')
  }
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

/*Pulsante storico*/
const dropdownMenu=document.getElementById('dropdownMenu')
const overlays=document.getElementById('overlays')

$('#storico').click(() => {
  dropdownMenu.classList.add('active');
  overlays.classList.add('active');

});


overlays.addEventListener('click', ()=>{
  dropdownMenu.classList.remove('active');
  overlays.classList.remove('active');
})


/*banner email*/
$('#inviaemail').click(()=>{
  $('#inviaemail').text('Email Inviata !!!')
  $('#inviaemail').addClass('active')
})



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
const frontcardgiocatau= document.getElementById('frontcardutentegiocata')
const frontcardgiocatacpu= document.getElementById('frontcardcpugiocata')
const backgiocatau=document.getElementById("backcardutentegiocata")
const backgiocatac=document.getElementById("backcardcpugiocata")
const contvittoria=document.getElementById("contvittoria")
const overlayv=document.getElementById('overlayv')
const buttongioca=document.getElementById('gioca')
const buttongioca2=document.getElementById('gioca2');
const spacegiocata=document.getElementById('spacegiocata2')

// Preparazione delle carte al caricamento della pagina
window.onload = function() {
  scompare(contgiocatac);
  scompare(contgiocatau);
  preparazioneNuovoGioco();
}

function preparazioneNuovoGioco(){
  appare(buttongioca);
  appare(buttongioca2);
}

buttongioca2.addEventListener('click', ()=>{
  scompare(buttongioca2);
  scompare(buttongioca);
  puntiCPU=0
  puntiUtente=0
  aggiornaPunteggio()
  contutente1.style.pointerEvents = "auto";
  contutente1.style.cursor = "pointer";
  contutente2.style.pointerEvents = "auto";
  contutente2.style.cursor = "pointer";
  contutente3.style.pointerEvents = "auto";
  contutente3.style.cursor = "pointer";
  retro(contutente1)
  retro(contutente2)
  retro(contutente3)
  retro(contbriscola)
  fronte(contutente1)
  fronte(contutente2)
  fronte(contutente3)
  fronte(contbriscola)
  turnoUtente = Math.random() < 0.5;
  scompare(contgiocatac);
  scompare(contgiocatau);
  mazzoDiCarte = creaMazzo();
  mazzoDiCarte = mescolaMazzo(mazzoDiCarte);
  distribuisciCarte(); // Distribuisce le carte ai giocatori
  pescaBriscola(); // Pesca la carta di Briscola
  aggiornaCarte();
  console.log("Mano del giocatore:", manoGiocatore);
  console.log("Mano del CPU:", manoCPU);
  console.log("Carta di Briscola:", cartaBriscola);
  console.log(mazzoDiCarte);
  caricaBriscola();
  caricaCarte();
  turni(turnoUtente);
})


//inizializzazione del turno dopo aver premuto Gioca
buttongioca.addEventListener('click', ()=>{
  scompare(buttongioca);
  scompare(buttongioca2);
  puntiCPU=0
  puntiUtente=0
  aggiornaPunteggio()
  contutente1.style.pointerEvents = "auto";
  contutente1.style.cursor = "pointer";
  contutente2.style.pointerEvents = "auto";
  contutente2.style.cursor = "pointer";
  contutente3.style.pointerEvents = "auto";
  contutente3.style.cursor = "pointer";
  retro(contutente1)
  retro(contutente2)
  retro(contutente3)
  retro(contbriscola)
  fronte(contutente1)
  fronte(contutente2)
  fronte(contutente3)
  fronte(contbriscola)
  turnoUtente = Math.random() < 0.5;
  scompare(contgiocatac);
  scompare(contgiocatau);
  mazzoDiCarte = creaMazzo();
  mazzoDiCarte = mescolaMazzo(mazzoDiCarte);
  distribuisciCarte(); // Distribuisce le carte ai giocatori
  pescaBriscola(); // Pesca la carta di Briscola
  aggiornaCarte();
  console.log("Mano del giocatore:", manoGiocatore);
  console.log("Mano del CPU:", manoCPU);
  console.log("Carta di Briscola:", cartaBriscola);
  console.log(mazzoDiCarte);
  caricaBriscola();
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


/*gestisce la carta scelta dalla cpu*/
async function giocaCartaCPU(contC){
  if(contC==null) return
  const backcardcpu=contC.querySelector('.card').querySelector('.back');
  
  const stile = backcardcpu.style.backgroundImage;
  frontcardgiocatacpu.style.backgroundImage=stile;

  fronte(contC);
  await sleep(1300);
  appare(contgiocatac);
  scompare(contC);
  retro(contC);

}

let numeroCartaGiocataUtente
let cartaGiocataUtente

/*rendo le carte utente cliccabili e le metto sul tavolo*/

conteinercardu.forEach(card=>{
    card.addEventListener('click',()=>{
    if(card==null) return
    if(ngiocateU!=1) return
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
    backgiocatau.classList.add('oppostoactive');

    const stilecpu = frontcardgiocatacpu.style.backgroundImage;
    const stileu= frontcardgiocatau.style.backgroundImage;
    scompare(contgiocatac);
    frontcardgiocatau.style.backgroundImage=stileu;
    backgiocatau.style.backgroundImage=stilecpu;
    await sleep(4000);

    scompare(contgiocatau);
    backgiocatau.classList.remove('oppostoactive');

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
    if (typeof isLoggedIn !== 'undefined' && isLoggedIn) {
      $.ajax({
        url: 'aggiorna_storico_briscola.php',
        type: 'POST',
        data: {vincitore: 0},
        });}
  }else if(puntiCPU==60 && puntiUtente==puntiCPU){
    vittoriaAux('Pareggio');
    if (typeof isLoggedIn !== 'undefined' && isLoggedIn) {
      $.ajax({
        url: 'aggiorna_storico_briscola.php',
        type: 'POST',
        data: {vincitore: 1},
        });}
  }else if(puntiUtente>60){
    vittoriaAux('Vittoria');
    if (typeof isLoggedIn !== 'undefined' && isLoggedIn) {
      $.ajax({
        url: 'aggiorna_storico_briscola.php',
        type: 'POST',
        data: {vincitore: 2},
        });}
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

/*Controllo sui login
$('#email').input(()=> {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test($('#email').value)) {
    $('#emailError').style.display = 'inline';
  } else {
    $('#emailError').style.display = 'none';
  }
});

document.getElementById('myForm').addEventListener('submit', function (event) {
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput.value)) {
    emailError.style.display = 'inline';
    event.preventDefault(); // Prevent form submission
  }
});
*/