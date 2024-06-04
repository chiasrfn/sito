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
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Treversone</title>
    <link rel="stylesheet" href="styletraversone.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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

  <div class="container">

    <div class="left-side" >
      <div class="space top"></div>
      <div class="conteinercard cpu" id="conteinercardcpu1">
        <div class="card" id="cardcpu1">
          <div class="front" id="frontcardcpu1">
          </div>
          <div class="back" id="backcardcpu1">
            </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu2"> 
        <div class="card" id="cardcpu2">
          <div class="front" id="frontcardcpu2">
          </div>
          <div class="back" id="backcardcpu2">
            </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu3"> 
        <div class="card" id="cardcpu3">
          <div class="front" id="frontcardcpu3">
          </div>
          <div class="back" id="backcardcpu3">
          </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu4"> 
        <div class="card" id="cardcpu4">
          <div class="front" id="frontcardcpu4">
          </div>
          <div class="back" id="backcardcpu4">
          </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu5"> 
        <div class="card" id="cardcpu5">
          <div class="front" id="frontcardcpu5">
          </div>
          <div class="back" id="backcardcpu5">
          </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu6"> 
        <div class="card" id="cardcpu6">
          <div class="front" id="frontcardcpu6">
          </div>
          <div class="back" id="backcardcpu6">
          </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu7"> 
        <div class="card" id="cardcpu7">
          <div class="front" id="frontcardcpu7">
          </div>
          <div class="back" id="backcardcpu7">
          </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu8"> 
        <div class="card" id="cardcpu8">
          <div class="front" id="frontcardcpu8">
          </div>
          <div class="back" id="backcardcpu8">
          </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu9"> 
        <div class="card" id="cardcpu9">
          <div class="front" id="frontcardcpu9">
          </div>
          <div class="back" id="backcardcpu9">
          </div>
        </div>
      </div>

      <div class="conteinercard cpu" id="conteinercardcpu10"> 
        <div class="card" id="cardcpu10">
          <div class="front" id="frontcardcpu10">
          </div>
          <div class="back" id="backcardcpu10">
          </div>
        </div>
      </div>

      <div class="punteggi">

        <div class="punteggio" id="punteggiocpu">
          <h2 class="punteggiotitle">Punti</br>CPU</h2>
          <p class="valorepunteggio" id="valorepunteggiocpu">0</p>
        </div>

        <div class="punteggio" id="punteggiou">
          <h2 class="punteggiotitle">Punti</br>Utente</h2>
          <p class="valorepunteggio" id="valorepunteggioutente">0</p>
        </div>
      </div>

      <div class="spacepunteggio"></div>

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

      <div class="spacefine"></div>

      <div class="conteinercard utente" id="conteinercardutente1">
        <div class="card utente" id="cardutenete1">
          <div class="front" id="frontcardutente1">
          </div>
          <div class="back utente" id="backcardutente1">
            </div>
        </div>
      </div>

      <div class="conteinercard utente" id="conteinercardutente2"> 
        <div class="card utente" id="cardutente2">
          <div class="front" id="frontcardutente2">
          </div>
          <div class="back utente" id="backcardutente2">
            </div>
        </div>
      </div>

      <div class="conteinercard utente" id="conteinercardutente3"> 
        <div class="card utente" id="cardutente3">
          <div class="front" id="frontcardutente3">
          </div>
          <div class="back utente" id="backcardutente3">
            </div>
        </div>
      </div>

      <div class="conteinercard utente" id="conteinercardutente4"> 
        <div class="card utente" id="cardutente4">
          <div class="front" id="frontcardutente4">
          </div>
          <div class="back utente" id="backcardutente4">
            </div>
        </div>
      </div>


      <div class="conteinercard utente" id="conteinercardutente5"> 
        <div class="card utente" id="cardutente5">
          <div class="front" id="frontcardutente5">
          </div>
          <div class="back utente" id="backcardutente5">
            </div>
        </div>
      </div>

      <div class="conteinercard utente" id="conteinercardutente6"> 
        <div class="card utente" id="cardutente6">
          <div class="front" id="frontcardutente6">
          </div>
          <div class="back utente" id="backcardutente6">
            </div>
        </div>
      </div>


      <div class="conteinercard utente" id="conteinercardutente7"> 
        <div class="card utente" id="cardutente7">
          <div class="front" id="frontcardutente7">
          </div>
          <div class="back utente" id="backcardutente7">
            </div>
        </div>
      </div>


      <div class="conteinercard utente" id="conteinercardutente8"> 
        <div class="card utente" id="cardutente8">
          <div class="front" id="frontcardutente8">
          </div>
          <div class="back utente" id="backcardutente8">
            </div>
        </div>
      </div>

      <div class="conteinercard utente" id="conteinercardutente9"> 
        <div class="card utente" id="cardutente9">
          <div class="front" id="frontcardutente9">
          </div>
          <div class="back utente" id="backcardutente9">
            </div>
        </div>
      </div>

      <div class="conteinercard utente" id="conteinercardutente10"> 
        <div class="card utente" id="cardutente10">
          <div class="front" id="frontcardutente10">
          </div>
          <div class="back utente" id="backcardutente10">
            </div>
        </div>
      </div>

      <div class="space messaggio" id="spacemess"></div>
      <div class="messaggiomess" id="messaggiomess">
        <h1 id="textmessaggiomess">Seleziona carte con lo stesso seme di quella giocata</h1>
      </div>
  
    </div>

    <div class="right-side">
      <div class="spacetop"></div>
      <div class="regole">
        <h1>Regole Traversone</h1>
        <p>
          L'obiettivo del gioco è evitare di prendere prese. Si utilizza un mazzo di carte italiane da 40 carte, con quattro semi (coppe, denari, spade e bastoni). 
          In questo sito è presente la variante a due giocatori, ma è possibile giocare fino a 4 giocatori. Il giocatore che prende più prese contenenti carte di valore, perde. 
          Le carte vengono mescolate e distribuite tutte ai giocatori, in modo che ogni giocatore abbia 10 carte. Il primo gioca una carta e l'altro giocatore risponde con una carta 
          dello stesso se la possiede. Se no, si può giocare qualsiasi altra carta. La presa viene vinta dal giocatore che ha giocato la carta di valore più alto del seme iniziale. 
          Il vincitore della presa raccoglie le carte e inizia il turno successivo.
          L'ordine di presa è il seguente (3, Due, Asso, Re, Cavallo Fante, 7, 6, 5, 4). 
          Inoltre se si fa meno di un punto si subisce il Cappotto: verranno atribuiti 21 punti a chi non ha raggiunto neanche un punto durante la partita e si l'avversario avrà 0 punti.
          All'ultimo che prende verranno assegnati i punti non interi dell'altro giocatore.
        </p>
        <h2>Punti</h2>
        <div class="punti">
          <div class="item-punti" >Valore carta</div>
          <div class="item-punti corte" >Asso</div>
          <div class="item-punti corte" >3,2</div>
          <div class="item-punti corte" >Figurre (8,9,10)</div>
          <div class="item-punti corte" >7,6,5,4</div>
          <div class="item-punti corte" >Asso di bastoni</div>
          <div class="item-punti" >Punti</div>
          <div class="item-punti corte" >1</div>
          <div class="item-punti corte" >1/3</div>
          <div class="item-punti corte" >1/3</div>
          <div class="item-punti corte" >0</div>
          <div class="item-punti corte" >11</div>
        </div>
      </div>
    </div>
    
  </div>

  <script src="scripttraversone.js"></script>
</body>
</html>

<?php 
}else{
     header("Location: briscola.php");
     exit();
}
 ?>