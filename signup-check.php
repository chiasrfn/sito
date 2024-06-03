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

    $uname = validate($_POST['nuovo_username']);
    $pass = validate($_POST['nuovo_password']);
    $email = validate($_POST['nuovo_email']);

    $user_data = 'username='. $uname. '&email='. $email;

    if (empty($uname)) {
        header("Location: signup.php?error=User Name is required&$user_data");
        exit();
    } else if (empty($pass)) {
        header("Location: signup.php?error=Password is required&$user_data");
        exit();
    } else if (empty($email)) {
        header("Location: signup.php?error=Email is required&$user_data");
        exit();
    } else {
        $pass = md5($pass);

        $sql = "SELECT * FROM accesso WHERE nome_utente='$uname'";
        $result = mysqli_query($conn, $sql);

        $sql2 = "SELECT * FROM accesso WHERE email='$email'";
        $result2 = mysqli_query($conn, $sql2);

        if (mysqli_num_rows($result) > 0) {
            header("Location: signup.php?error=The username is taken try another&$user_data");
            exit();
        } else if (mysqli_num_rows($result2) > 0) {
            header("Location: signup.php?error=The email is taken try another&$user_data");
            exit();
        } else {
            $sql3 = "INSERT INTO accesso(nome_utente, password, email) VALUES('$uname', '$pass', '$email')";
            $result3 = mysqli_query($conn, $sql3);
            if ($result3) {
                header("Location: home.php");
                exit();
            } else {
                header("Location: index.php?error=unknown error occurred&$user_data");
                exit();
            }
        }
    }
} else {
    header("Location: index.php");
    exit();
}
?>
