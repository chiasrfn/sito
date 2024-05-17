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

/*tasto gioca*/
const overlayg = document.getElementById('overlayg')
const buttongioca=document.getElementById('gioca')
const cerchi=document.querySelectorAll('.cerchio')

buttongioca.addEventListener('click', ()=>{
  overlayg.classList.add('active')
  cerchi.forEach(cerchio=>
    cerchio.classList.add('active')
  )
})

overlayg.addEventListener('click', () => {
  overlayg.classList.remove('active')
  cerchi.forEach(cerchio => {
    cerchio.classList.remove('active')
  })
})

cerchi.forEach(cerchio=>{
  cerchio.addEventListener('click', () => {
    overlayg.classList.remove('active')
    cerchi.forEach(cerchio => {
      cerchio.classList.remove('active')
    })
  })
})


/*
var loginlock=document.getElementById(login-lock-btn);
login-lock-btn.addEventListener('click', function(){
  login-lock-btn.i.class = 'bi bi-lock-fill-open';
})*/

$(document).ready(function() {
    function cur() {
        var frasi = [ 
            "L’ipotesi più accreditata vede nascere le carte da gioco in Cina, circa tra il 600 al 900",
            "Furono portate in Europa dalle truppe moresche o dai mercanti veneziani, per il commercio di spezie e seta",
            "Si pensa che i semi abbiano le seguenti associazioni: Coppe-clero, Denari-mercanti, Spade-nobili e Bastoni-contadini",
            "Le carte napoletane, usate in questo sito, sono carte con seme latino e sono tra le carte regionali più diffuse in Italia", 
            "Nelle carte napoletane, il mascherone grottesco centrale del tre di bastoni è detto Gatto Mammone per via dei suoi prominenti baffi",
            "Nelle carte napoletane, il cavallo di spade rappresenta un personaggio simile a un moro col turbante in testa e la scimitarra in mano",
            "Una teoria storica è che le carte da gioco odierne derivino da quelle utilizzate dai Mamelucchi, che avevano i semi che conosciamo ancora oggi"
        ],
        i = 0;
        setInterval(function(){
            $('#frasi').fadeOut(function(){
                $(this).html(frasi[(i = (i + 1) % frasi.length)]).fadeIn();
            });
        }, 8000);  // Aumentato il tempo a 8000 millisecondi (8 secondi) per migliore leggibilità
    }

    cur();  // Chiama la funzione nome quando il documento è pronto
});
