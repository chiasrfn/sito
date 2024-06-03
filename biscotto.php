<?php 
session_start(); 
include "db_conn.php";
$biscotto = $_COOKIE['remember'];
$sql = "SELECT nome_utente FROM accesso WHERE biscotto='$biscotto'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$_SESSION['nome_utente'] = $row['nome_utente'];
header("Location: index.php");
exit();