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


$(document).ready(function() {
    function cur() {
        var frasi = [ 
            "L’ipotesi più accreditata vede nascere le carte da gioco in Cina, circa tra il 600 e il 900",
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


/*Parametro d'errore*/

// Controlla se l'URL contiene il parametro di errore
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('error')) {
      const error = urlParams.get('error');
      $('#messaggioerrore').text(error);
      $('#errormodal').addClass('active')
      overlay.classList.add('active')
      console.log('ciao')
  }
};


$('#errormodal').click(()=>{
  $('#errormodal').removeClass('active')
  overlay.classList.remove('active')
})

/*password*/
document.getElementById('togglePassword').addEventListener('click', function() {
  const passwordInput = document.getElementById('password');
  const icon = this;

  // Toggle the type attribute
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Toggle the icon
  icon.classList.toggle('bi-lock-fill');
  icon.classList.toggle('bi-unlock-fill');
});

document.getElementById('togglePassword2').addEventListener('click', function() {
  const passwordInput = document.getElementById('password2');
  const icon = this;

  // Toggle the type attribute
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Toggle the icon
  icon.classList.toggle('bi-lock-fill');
  icon.classList.toggle('bi-unlock-fill');
});
