<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Password</title>
        <link rel="stylesheet" href="stylereset-password.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script></script>
      </head>
<body>
  <div id="overlay"></div>

  <!--Messaggio di errore-->
  <div id="errormodal" class="modal error">
    <div class="modal-header" id="modal-header-error">
      <div class="title errore" style="padding-top:10px; font-size: 50px; color:darkred">Errore: <span id="messaggioerrore"></span></div>
    </div>
  </div>

  <div class="container">
    <div class="containerform">
      <form action="cambiomail.php" method="post" id="registratimodal" class="modal login registrati">
          <div class="modal-header">
            <h1 id="titleLogin">Reset Password</h1>
          </div>
          <div class="modal-input">
            <input type="text" placeholder="Email" name="nuovo_email" required>
            <i class="bi bi-envelope-fill"></i>
          </div>
          <div class="modal-input">
            <input type="password" id="password" placeholder="Password" name="nuovo_password" required>
            <i class="bi bi-lock-fill" id='togglePassword' style="cursor:pointer"></i>
          </div>
          <div class="modal-input">
            <input type="password" id="password2" placeholder="Password" name="nuovo_password" required>
            <i class="bi bi-lock-fill" id='togglePassword2' style="cursor:pointer"></i>
            </div>
          <button type="submit" class="modal-btn registrati" id="buttonregistrati invia">Modifica</button>
      </form>
    </div>
  </div>
</body>
</html>