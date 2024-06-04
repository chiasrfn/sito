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


const overlay = document.getElementById('overlay')

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
  