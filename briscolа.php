<?php 
session_start();
include "db_conn.php";

if (isset($_COOKIE['remember']) && !isset($_SESSION['nome_utente'])){
  header("Location: biscotto.php");
  exit();
}



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
    $is_logged_in = isset($_SESSION['nome_utente']);
    $nomeU = $_SESSION['nome_utente'];
 ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Briscola</title>
    <link rel="stylesheet" href="stylebriscola.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>"></script>
    <link rel="icon" href="./immagini/favicon.ico" type="image/x-icon">
  </head>
<body>
    <script>
        var isLoggedIn = <?php echo json_encode($is_logged_in); ?>;
        var nomeU = <?php echo json_encode($nomeU); ?>;
    </script>
  <header>
    <a href="home.php">
        <img src="./immagini/logo2.jpg" class="logo" margine-top="0px">
    </a>
    <div class="button-container">
        <button class="bheader gioca" id="gioca2">Gioca</button>
        <a href="logout.php" class="bheader logout">Logout</a>
        <button class="bheader storico" id="storico">Storico</button>
        <div class="dropdown-content" id="dropdownMenu">
            <a>Per aggiornare lo storico aggiorna la pagina</a>
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
  
  <!--messaggio di vittoria-->

  <div class="modal messaggio" id="contvittoria">
    <p class="messaggiovittoria" id="textmessvittoria">A</p>
  </div>

  <div id="overlayv"></div>

  <!--Messaggio di errore-->
  <div id="errormodal" class="modal error">
    <div class="modal-header" id="modal-header-error">
      <div class="title errore" style="padding-top:10px; font-size: 50px; color:darkred">Errore: <span id="messaggioerrore"></span></div>
    </div>
  </div>

  <div class="container"> 


    <div class="left-side" >
      <div class="space lato"></div>
      <div class="punteggio" id="punteggiocpu">
        <h2>Punteggio</h2>
        <p class="valorepunteggio" id="valorepunteggiocpu">0</p>
      </div>
      <div class="space inmezzo"></div>

      <div class="conteinercard cpu" id="conteinercardcpu1">
        <div class="card" id="cardcpu1">
          <div class="front" id="frontcardcpu1">
          </div>
          <div class="back" id="backcardcpu1">
            </div>
        </div>
      </div>

      <div class="space inmezzo"></div>

      <div class="conteinercard cpu" id="conteinercardcpu2"> 
        <div class="card" id="cardcpu2">
          <div class="front" id="frontcardcpu2">
          </div>
          <div class="back" id="backcardcpu2">
          </div>
        </div>
      </div>
    
      <div class="space inmezzo"></div>

      <div class="conteinercard cpu" id="conteinercardcpu3"> 
        <div class="card" id="cardcpu3">
          <div class="front" id="frontcardcpu3">
          </div>
          <div class="back" id="backcardcpu3">
          </div>
        </div>
      </div>

      

      <div class="conteinercard mazzo" id="conteinercardmazzo">
        <div class="card" id="cardmazzo">
          <div class="front" id="frontcardmazzo">
            <div class="ncarte" id="ncarte">
              <h2 style="color: white;">Carte</h2>
              <p class="ncarteval" id="ncarteval" style="color: white;"></p>
            </div>
          </div>
          <div class="back" id="backcardmazzo">
          </div>
        </div>
      </div>

      <div class="conteinercard briscola" id="conteinercardbriscola">
        <div class="card" id="cardbriscola">
          <div class="front" id="frontcardbriscola">
          </div>
          <div class="back" id="backcardbriscola">
          </div>
        </div>
      </div>
    
      <div class="space giocata" id="spacegiocata1"></div>



      <div class="conteinercard giocata" id="conteinercardcpugiocata">
        <div class="card giocata" id="cardcpugiocata">
          <div class="front giocata" id="frontcardcpugiocata"></div>
          <div class="back giocata"  id="backcardcpugiocata"></div>
          
        </div>
      </div>
    
      <div class="space inmezzo" id="spacegiocata2">
        <button class="button gioca" id="gioca">Gioca</button>
      </div>


      <div class="conteinercard giocata" id="conteinercardutentegiocata"> 
      
        <div class="card giocata" id="cardutenetegiocata">
          <div class="front giocata" id="frontcardutentegiocata"></div>
          <div class="back giocata"  id="backcardutentegiocata"></div>
        </div>
      </div>
    

      <div class="space lato" id="sapcel1"></div>  

      <div class="space lato" id="sapcel2"></div>
      <div class="punteggio" id="punteggiou">
        <h2>Punteggio</h2>
        <p class="valorepunteggio" id="valorepunteggioutente">0</p>
      </div>

      <div class="space inmezzo"></div>

      <div class="conteinercard utente" id="conteinercardutente1">
        <div class="card utente" id="cardutenete1">
          <div class="front" id="frontcardutente1">
          </div>
          <div class="back utente" id="backcardutente1">
            </div>
        </div>
      </div>
    
      <div class="space inmezzo"></div>

      <div class="conteinercard utente" id="conteinercardutente2"> 
        <div class="card utente" id="cardutente2">
          <div class="front" id="frontcardutente2">
          </div>
          <div class="back utente" id="backcardutente2">
            </div>
        </div>
      </div>
    
      <div class="space inmezzo"></div>

      <div class="conteinercard utente" id="conteinercardutente3"> 
        <div class="card utente" id="cardutente3">
          <div class="front" id="frontcardutente3">
          </div>
          <div class="back utente" id="backcardutente3">
          </div>
        </div>
      </div>
    
      <div class="space lato"></div>

    </div>


    <div class="right-side">
      <div class="regole">
        <h1>Regole Briscola</h1>
        <p>Il mazziere distribuisce 3 carte a ciascun giocatore e lascia una carta scoperta che determina
           il seme di briscola. Ogni giocatore gioca una carta a scelta. Vince la mano chi gioca la briscola 
           più alta o, se non ci sono briscole, la carta più alta del seme della prima carta giocata. 
           Il vincitore della mano raccoglie le carte, pesca per primo e inizia la nuova mano. Il gioco prosegue 
           fino all'esaurimento delle carte. La vittoria va a chi totalizza almeno 61 punti su 120 disponibili. 
           Un pareggio a 60 punti rende la partita nulla.
        </p>
        <h2>Punti</h2>
        <div class="punti">
          <div class="item-punti" >Valore carta</div>
          <div class="item-punti corte" >Asso</div>
          <div class="item-punti corte" >3</div>
          <div class="item-punti " >Re <br>(10)</div>
          <div class="item-punti" >Cavallo <br>(9)</div>
          <div class="item-punti" >Fante <br>(8)</div>
          <div class="item-punti" >Scartini (7,6,5,4,2)</div>
          <div class="item-punti corte" >Punti</div>
          <div class="item-punti corte" >11</div>
          <div class="item-punti corte" >10</div>
          <div class="item-punti corte" >4</div>
          <div class="item-punti corte" >3</div>
          <div class="item-punti corte" >2</div>
          <div class="item-punti corte" >0</div>
        </div>
      </div>
    </div>
  </div>


  <script src="scriptbriscola.js"></script>
</body>
</html>


<?php 
}else{
     header("Location: briscola.php");
     exit();
}
 ?>