

<?php 
session_start();

if (isset($_SESSION['nome_utente'])) {

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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script></script>
  </head>
<body>
  <header>
    <a href="home.php">
      <img src="immagini/logo2.jpg" class="logo" margine-top="0px">
    </a>
    <div class="button-container">
      <button class="bheader gioca" id="gioca">Gioca</button>
      <a href="logout.php" class="bheader logout">Logout</a>
      <button class="bheader storico" id="storico">Storico</button>
      <div class="dropdown-content" id="dropdownMenu">
        <a>Titolo</a>
        <a>Briscola: <span id="ptbriscola"></span></a>
        <a>Traversone: <span id="pttraversone"></span></a>
      </div>
      <button data-modal-target=#gearmodal class="btn-gear" >
        <i class="bi bi-gear-fill"></i>
      </button>
    </div>
  </header>

  <div class="overlayaltri" id="overlays"></div>

  <!--parte di codice dedicata al modal-->
  <div id="overlay"></div>

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
  <div class="container">
    <!--Gioca-->
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
     header("Location: index.php");
     exit();
}
 ?>

