<?php 
session_start();

if (isset($_COOKIE['remember']) && !isset($_SESSION['nome_utente'])){
  header("Location: biscotto.php");
  exit();
}



if (!isset($_SESSION['nome_utente'])) {

 ?>



<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giochi di carte</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>"></script>
  </head>
<body>
  <header>
    <a href="home.php">
      <img src="immagini/logo2.jpg" class="logo" margine-top="0px">
    </a>
    <div class="button-container">
      <button class="bheader gioca" id="gioca">Gioca</button>
      <button data-modal-target=#loginmodal class="bheader login">Login</button>
      <button data-modal-target=#gearmodal class="btn-gear" >
        <i class="bi bi-gear-fill"></i>
      </button>
    </div>
  </header>

  <div class="overlayaltri" id="overlays"></div>

  <!--parte di codice dedicata al modal-->
  <div id="overlay"></div>
  <!--login-->
  <form action="login.php" method="post" id="loginmodal" class="modal login">
    <div class="modal-header">
      <h1 id="titleLogin">Login</h1>
      <button data-close-button class="close-button" id="close-button-login">&times;</button>
    </div>
    <div class="modal-input">
      <input type="text" placeholder="Nome Utente" name="username" required>
      <i class="bi bi-person-fill"></i>
    </div>
    <div class="modal-input">
      <input type="password" placeholder="Password" name="password" required>
      <i class="bi bi-lock-fill"></i>
    </div>
    <div class="modal-remember">
      <label>
        <input type="checkbox" name="remember" id="remember">Ricordami</input>
      </label>
      <button data-modal-target=#forgotmodal class="button login">Hai dimenticato la password?</button>
    </div>

    <button type="submit" class="modal-btn">Login</button>

    <div class="modal-register">
      <p>Non hai un account?
        <button data-modal-target=#registratimodal class="button login" id="buttonregistrati">Registrati</button>
      </p>
    </div>
  </form>

  <!--login forgot-->
  <form method="post" action="password-temp.php" id="forgotmodal" class="modal login forgot">
    <div class="modal-header">
      <h1 id="titlePassword">Password</br>dimenticata?</h1>
      <button data-close-button class="close-button" id="close-button-login">&times;</button>
    </div>
    <p style="text-align: center;">Inserisci la tua email, dopo</br> averla inviata controlla <br> la tua casella postale</p>
    <div class="modal-input" id="myForm">
      <input type="text" name="email_pswdimenticata" id="email" placeholder="Email" required>
      <i class="bi bi-envelope-fill"></i>
      <span id="emailError" style="color: red; display: none;">Perfavore inserisci una email valida</span>
    </div>
    <button type="submit" class="modal-btn inviaemail" id="inviaemail">Invia</button>
</form>


  <!--login registrati-->
  <form action="signup-check.php" method="post" id="registratimodal" class="modal login registrati">
    <div class="modal-header">
      <h1 id="titleLogin">Registrati</h1>
      <button data-close-button class="close-button" id="close-button-login">&times;</button>
    </div>
    <div class="modal-input">
      <input type="text" placeholder="Nome Utente" name="nuovo_username" required>
      <i class="bi bi-person-fill"></i>
    </div>
    <div class="modal-input">
      <input type="text" placeholder="Email" name="nuovo_email" required>
      <i class="bi bi-envelope-fill"></i>
    </div>
    <div class="modal-input">
      <input type="password" placeholder="Password" name="nuovo_password" required>
      <i class="bi bi-lock-fill"></i>
    </div>
    <button type="submit" class="modal-btn registrati" id="buttonregistrati invia">Registrati</button>
  </form>
  
  

  <!--gear-->
  <div id="gearmodal" class="modal gear">
    <div class="modal-header" id="modal-header-gear">
      <div class="title">Impostazioni</div>
      <button data-close-button class="close-button" id="close-button-gear">&times;</button>
    </div>
    <div class="modal-imp1">
      Impostazione 1
      <input type="checkbox" class="checkboximpost" id="impost1">
      <label class="buttonimpost" for="impost1">
        <span class="slider"></span>
      </label>
    </div>
  </div>

  <div class="overlayaltri" id="overlayg"></div>


  <!--Messaggio di errore-->
  <div id="errormodal" class="modal error">
    <div class="title errore">Errore: <span id="messaggioerrore"></span></div>
  </div>


  <div class="container">
    <div class="left-side">
      <div class="cur">
        <h1 id="titolocur">Curiosità</h1>
        <h2><span id="frasi">Una teoria storica è che le carte da gioco odierne derivino da quelle utilizzate dai Mamelucchi, che avevano i semi che conosciamo ancora oggi</span></h2>
      </div>
    </div>

    <div class="right-side">
      <div class="space top"></div>
      <div class="space"></div>
      <div class="conteinercard" id="card1">
        <div class="card" >
          <div class="front">
            <div class="cerchio" id="cerchio1"></div>
          </div>
          <div class="back">
            <h2>Briscola</h2>
            <p style="padding: 5px;">Il gioco perfetto per chi vuole sentirsi un fallito</p>
            <a href="briscola.php" class="linkgioca">Gioca</a>
          </div>
        </div>
      </div>

      <div class="space"></div>

      <div class="conteinercard" id="card2">
        <div class="card">
          <div class="front">
            <div class="cerchio" id="cerchio2"></div>
          </div>
          <div class="back">
            <h2>Traversone</h2>
            <p>DESCRIZIONE</p>
            <a href="traversone.php" class="linkgioca">Gioca</a>
          </div>
        </div>
      </div>

      <div class="space"></div>

      <div class="space top"></div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>

<?php 
}else{
     header("Location: home.php");
     exit();
}
 ?>