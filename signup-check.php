<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['nuovo_username']) && isset($_POST['nuovo_email']) && isset($_POST['nuovo_password'])) {

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function generatePassword($length = 50) {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $charactersLength = strlen($characters);
        $randomPassword = '';

        for ($i = 0; $i < $length; $i++) {
            $randomPassword .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomPassword;
    }

    $uname = validate($_POST['nuovo_username']);
    $pass = validate($_POST['nuovo_password']);
    $email = validate($_POST['nuovo_email']);

    $user_data = 'username='. $uname. '&email='. $email;

    if (empty($uname)) {
        header("Location: index.php?error=User Name è richiesto&$user_data");
        exit();
    } else if (empty($pass)) {
        header("Location: index.php?error=Password è richiesta&$user_data");
        exit();
    } else if (empty($email)) {
        header("Location: index.php?error=Email è richiestad&$user_data");
        exit();
    } else {
        $pass = md5($pass);
        $biscotto = generatePassword();

        $sql = "SELECT * FROM accesso WHERE nome_utente='$uname'";
        $result = mysqli_query($conn, $sql);

        $sql2 = "SELECT * FROM accesso WHERE email='$email'";
        $result2 = mysqli_query($conn, $sql2);

        if (mysqli_num_rows($result) > 0) {
            header("Location: index.php?error=Lo username è già in uso, provane un altro&$user_data");
            exit();
        } else if (mysqli_num_rows($result2) > 0) {
            header("Location: index.php?error=L'email è già in uso, provane un altro&$user_data");
            exit();
        } else {

            $sql3 = "INSERT INTO accesso(nome_utente, password, email, biscotto) VALUES('$uname', '$pass', '$email', '$biscotto')";
            $result3 = mysqli_query($conn, $sql3);
            if ($result3) {
                header("Location: home.php");
                exit();
            } else {
                header("Location: index.php?Si è verificato un errore sconosciuto&$user_data");
                exit();
            }
        }
    }
} else {
    header("Location: index.php");
    exit();
}
?>
