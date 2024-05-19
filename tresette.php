<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tresette</title>
    <link rel="stylesheet" href="styletresette.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  </head>
<body>
  <header>
    <a href="home.php">
      <img src="immagini/logo2.jpg" class="logo" margine-top="0px">
    </a>
    <div class="button-container">
      <button class="bheader gioca" id="gioca">Gioca</button>
      <button class="bheader storico" id="storico">Storico</button>
      <button data-modal-target=#loginmodal class="bheader login">Login</button>
      <button data-modal-target=#gearmodal class="btn-gear" >
        <i class="bi bi-gear-fill"></i>
      </button>
    </div>
  </header>

  <!--parte di codice dedicata al modal-->
  <div id="overlay"></div>
  <!--login-->
  <div id="loginmodal" class="modal login">
    <div class="modal-header">
      <h1 id="titleLogin">Login</h1>
      <button data-close-button class="close-button" id="close-button-login">&times;</button>
    </div>
    <div class="modal-input">
      <input type="text" placeholder="Nome Utente" required>
      <i class="bi bi-person-fill"></i>
    </div>
    <div class="modal-input">
      <input type="password" placeholder="Password" required>
      <i class="bi bi-lock-fill"></i>
    </div>
    <div class="modal-remember">
      <label>
        <input type="checkbox" id="remember">Salva
      </label>
      <a href="forgot.html">Hai dimenticato la password?</a>
    </div>

    <button type="submit" class="modal-btn">Login</button>

    <div class="modal-register">
      <p>Non hai un account?
        <a href="registrati.html">Registrati</a>
      </p>
    </div>
  </div>

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
      
      <div class="space"></div>

      <div class="conteinercard giocata" id="conteinercardcpugiocata">
        <div class="card giocata" id="cardcpugiocata">
          <div class="front giocata" id="frontcardcpugiocata"></div>
        </div>
      </div>

      <div class="conteinercard giocata" id="conteinercardutentegiocata"> 
        <div class="card giocata" id="cardutenetegiocata">
          <div class="front giocata" id="frontcardutentegiocata"></div>
        </div>
      </div>

      <div class="space"></div>

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

    </div>

    <div class="right-side">
      <div class="regole">
        <h1>Regole Tresette</h1>
        <p>Ogni giocatore riceve dieci carte, distribuite in due fasi da cinque. Il mazzo 
          restante viene posto sul tavolo. I giocatori pescano una carta a turno, la mostrano 
          e la aggiungono alle loro carte prima di iniziare a giocare. Bongiochi o Napoli non 
          possono essere dichiarati dopo la terza mano.
          La partita si svolge in turni chiamati "passate". La presa va al giocatore che gioca
          la carta più alta del seme in gioco. Se un giocatore non ha carte di quel seme, può
          giocare qualsiasi altra carta ma non può fare la presa.
          Alla fine di ogni mano, i punti vengono calcolati e sommati ai precedenti. Il mazziere 
          cambia in senso antiorario. La partita termina quando una squadra raggiunge il punteggio
          prestabilito (21, 31 o 41 punti), a seconda delle regole regionali. Se una squadra 
          raggiunge il punteggio richiesto, vince immediatamente, anche se la mano non è 
          conclusa.
          Le carte hanno il seguente ordine di valore: Tre, Due, Asso, Re, Cavallo, Fante, Sette, 
          Sei, Cinque, Quattro. La presa va al giocatore con la carta più alta del seme giocato. 
          Non ci possono essere parità nelle passate.
        </p>
        <h2>Punti</h2>
        <p>
          I punti totali nel mazzo sono 10 punti e 2/3, a questi vanno sommati i Punti per la Decima
          e Ultima presa che valgono ogniuno un punto aggiuntivo.
        </p>
        <div class="punti">
          <div class="item-punti corte" >Valore carta</div>
          <div class="item-punti corte" >Asso</div>
          <div class="item-punti corte" >2,3</div>
          <div class="item-punti" >Figure (8,9,10)</div>
          <div class="item-punti" >Scartini (4,5,6,7)</div>
          <div class="item-punti corte" >Punti</div>
          <div class="item-punti corte" >1</div>
          <div class="item-punti corte" >1/3</div>
          <div class="item-punti corte" >1/3</div>
          <div class="item-punti corte" >0</div>
        </div>
      </div>
    </div>
  </div>

  <script src="scripttresette.js"></script>
</body>
</html>

