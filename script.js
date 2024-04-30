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


/*
var loginlock=document.getElementById(login-lock-btn);
login-lock-btn.addEventListener('click', function(){
  login-lock-btn.i.class = 'bi bi-lock-fill-open';
})*/

$(document).ready(function() {
    function cur() {
        var frasi = [ 
            "L’ipotesi più accreditata vede nascere le carte da gioco in Cina, circa tra il 600 al 900",
            "Furono portate in Europa dalle truppe moresche o dai mercanti veneziani, per il commercio di spezie e seta"

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
