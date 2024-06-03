<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['email_pswdimenticata'])) {

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function generatePassword($length = 10) {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?&';
        $charactersLength = strlen($characters);
        $randomPassword = '';

        for ($i = 0; $i < $length; $i++) {
            $randomPassword .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomPassword;
    }

    $pass = generatePassword();
    $email = validate($_POST['email_pswdimenticata']);

    $user_data = 'psw='. $pass. '&email='. $email;

    if (empty($email)) {
        header("Location: index.php?error=Email is required&$user_data");
        exit();
    } else {
        $passmodificata = md5($pass);

        $sql = "SELECT * FROM accesso WHERE email='$email'";
        $result = mysqli_query($conn, $sql);

        $sql3 = "SELECT nome_utente FROM `accesso` WHERE email='$email'";
        $result3 = mysqli_query($conn, $sql3);
        $row = mysqli_fetch_assoc($result3);
        $nome_utente = $row['nome_utente'];

        if (mysqli_num_rows($result) === 0) {
            header("Location: index.php?error=The email isn't registered&$email");
            exit();
        } else {
            $sql2 = "UPDATE `accesso` SET `password` = '$passmodificata' WHERE `accesso`.`email` = '$email';";
            $result2 = mysqli_query($conn, $sql2);
            if ($result2) {
                $to = $email;
                $subject = "Password Temporanea";
                $message = "La tua password temporanea è: $pass
                Ti ricordo che il tuo nome utente è $nome_utente";
                $headers = "From: giochidicarteitaliani@gmail.com";

                if (mail($to, $subject, $message, $headers)) {
                    header("Location: reset-password.php");
                    exit();
                } else {
                    echo "Email sending failed.";
                }
            } else {
                header("Location: index.php?error=unknown error occurred");
                exit();
            }
        }
    }
} else {
    header("Location: index.php");
    exit();
}
?>
