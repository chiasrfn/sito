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

$(document).ready(function() {
    function cur() {
        var frasi = [ 
            "le carte sono antiche",
            "bisogna impare a giocarci",
            "le carte sono il passatempo preferito di molte generazioni"
        ],
        i = 0;
        setInterval(function(){
            $('#frasi').fadeOut(function(){
                $(this).html(frasi[(i = (i + 1) % frasi.length)]).fadeIn();
            });
        }, 8000);  // Aumentato il tempo a 3000 millisecondi (3 secondi) per migliore leggibilità
    }

    cur();  // Chiama la funzione nome quando il documento è pronto
});

var tastoBriscola = document.getElementById(buttonBriscola);
buttonBriscola.addEventListener('click', function() {
    window.location.href = 'briscola.html';
})