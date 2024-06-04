
<?php 
session_start();
include "db_conn.php";
if (isset($_SESSION['nome_utente'])) {
  $nome_u = $_SESSION['nome_utente'];

$briscole_perse = "SELECT briscola_perse FROM accesso WHERE nome_utente='$nome_u'";
$briscole_pareggiate = "SELECT briscola_pareggiate FROM accesso WHERE nome_utente='$nome_u'";
$briscole_vinte = "SELECT briscola_vinte FROM accesso WHERE nome_utente='$nome_u'";
$traversone_perse = "SELECT traversone_perse FROM accesso WHERE nome_utente='$nome_u'";
$traversone_pareggiate = "SELECT traversone_pareggiate FROM accesso WHERE nome_utente='$nome_u'";
$traversone_vinte = "SELECT traversone_vinte FROM accesso WHERE nome_utente='$nome_u'";


$r1 = mysqli_query($conn, $briscole_perse);
$r1 = mysqli_fetch_assoc($r1);
$r1 = $r1['briscola_perse'];

$r2 = mysqli_query($conn, $briscole_pareggiate);
$r2 = mysqli_fetch_assoc($r2);
$r2 = $r2['briscola_pareggiate'];

$r3 = mysqli_query($conn, $briscole_vinte);
$r3 = mysqli_fetch_assoc($r3);
$r3 = $r3['briscola_vinte'];

$r4 = mysqli_query($conn, $traversone_perse);
$r4 = mysqli_fetch_assoc($r4);
$r4 = $r4['traversone_perse'];

$r5 = mysqli_query($conn, $traversone_pareggiate);
$r5 = mysqli_fetch_assoc($r5);
$r5 = $r5['traversone_pareggiate'];

$r6 = mysqli_query($conn, $traversone_vinte);
$r6 = mysqli_fetch_assoc($r6);
$r6 = $r6['traversone_vinte'];

 ?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giochi di carte</title>
    <link rel="stylesheet" href="stylehome.css">
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
        <a>Briscola: <?php echo "V" . $r3 . " - " . "P" . $r2 . " - " . "S" . $r1; ?><span id="ptbriscola"></span></a>
        <a>Traversone: <?php echo "V" . $r6 . " - " . "P" . $r5 . " - " . "S" . $r4; ?><span id="pttraversone"></span></a>
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

  <!--Messaggio di errore-->
  <div id="errormodal" class="modal error">
    <div class="modal-header" id="modal-header-error">
      <div class="title errore" style="padding-top:10px; font-size: 50px; color:darkred">Errore: <span id="messaggioerrore"></span></div>
    </div>
  </div>

  <div class="container">
    <div class="top-side">
      <div class="benvenuto">
        <h1 id="textbenvenuto">Benvenuto <?php echo $_SESSION['nome_utente'];?></h1>
      </div>
    </div>


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
            <p class="testocarte" >Il gioco perfetto per chi vuole sentirsi un fallito</p>
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
            <p class="testocarte">DESCRIZIONE</p>
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
