<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['nuovo_email']) && isset($_POST['password_temporanea']) && isset($_POST['nuovo_psw'])) {

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $pass_temporanea = validate($_POST['password_temporanea']);
    $pass_nuova = validate($_POST['nuovo_psw']);
    $email = validate($_POST['nuovo_email']);

    if (empty($email)) {
        header("Location: cambiomail.php?error=Richiesta Email");
        exit();
    } else if (empty($pass_nuova)) {
        header("Location: cambiomail.php?error=Richiesta Nuova Password");
        exit();
    } else if (empty($pass_temporanea)) {
        header("Location: cambiomail.php?error=Richiesta Vecchia Password");
        exit();
    } else {
        $pass_temporanea = md5($pass_temporanea);
        $pass_nuova = md5($pass_nuova);

        $sql = "SELECT * FROM accesso WHERE email='$email' AND password='$pass_temporanea'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) === 0) {
            header("Location: cambiomail.php?error=Errati Email o Vecchia Password");
            exit();
        } else {
            $sql2 = "UPDATE `accesso` SET `password` = '$pass_nuova' WHERE `email` = '$email'";
            $result2 = mysqli_query($conn, $sql2);
            if ($result2) {
                header("Location: index.php?success=Password updated successfully");
                exit();
            } else {
                header("Location: cambiomail.php?error=Qualcosa è andato storto, riprova un'altra volta");
                exit();
            }
        }
    }
} else {
    header("Location: index.php");
    exit();
}
?>
