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

    $sql = "SELECT * FROM accesso WHERE nome_utente='$uname' AND password='$pass'";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        if ($row['nome_utente'] === $uname && $row['password'] === $pass) {
            $_SESSION['nome_utente'] = $row['nome_utente'];
            header("Location: home.php");
            exit();
        }else{
            header("Location: index.php?error=Incorect User name or password");
            exit();
        }
    }else{
        header("Location: index.php?error=Incorect User name or password");
        exit();
    }
	
}else{
	header("Location: index.php");
	exit();
}