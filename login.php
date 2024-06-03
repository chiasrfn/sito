<?php 
session_start(); 
include "db_conn.php";

if (isset($_POST['username']) && isset($_POST['password'])) {

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$uname = validate($_POST['username']);
	$pass = validate($_POST['password']);
    $pass = md5($pass);

    $sql = "SELECT * FROM accesso WHERE nome_utente='$uname' AND password='$pass'";

    $result = mysqli_query($conn, $sql);
    $sql2 = "SELECT biscotto FROM accesso WHERE nome_utente='$uname' AND password='$pass'";
    $result2 = mysqli_query($conn, $sql2);
    $row = mysqli_fetch_assoc($result2);
    $biscotto = $row['biscotto'];

    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        if ($row['nome_utente'] === $uname && $row['password'] === $pass) {
            $_SESSION['nome_utente'] = $row['nome_utente'];
            if (isset($_POST['remember'])) {
                setcookie("remember", $biscotto, time() + (5 * 365 * 24 * 60 * 60), "/", "");
            };
            header("Location: home.php");
            exit();
        }else{
            header("Location: index.php?error=Incorrect User name or password");
            exit();
        }
    }else{
        header("Location: index.php?error=Incorrect User name or password");
        exit();
    }
	
}else{
	header("Location: index.php");
	exit();
}