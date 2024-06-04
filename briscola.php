<?php 
session_start();

if (isset($_COOKIE['remember']) && !isset($_SESSION['nome_utente'])){
  header("Location: biscotto.php");
  exit();
}



if (!isset($_SESSION['nome_utente'])) {

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
  <header>
      <a href="home.php">
          <img src="./immagini/logo2.jpg" class="logo" margine-top="0px">
      </a>
      <div class="button-container">
          <button class="bheader gioca" id="gioca2">Gioca</button>
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
      <input type="password"  id="password"  placeholder="Password" name="password" required>
      <i class="bi bi-lock-fill" id='togglePassword' style="cursor:pointer"></i>
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
      <input type="password" id="password2" placeholder="Password" name="nuovo_password" required>
      <i class="bi bi-lock-fill" id='togglePassword2' style="cursor:pointer"></i>
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
     header("Location: briscolа.php");
     exit();
}
 ?>