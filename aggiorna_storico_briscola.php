<?php 
session_start(); 
include "db_conn.php";
$vincitore = $_POST['vincitore'];
$nomeUtente = $_POST['nomeUt'];
if ($vincitore == 0) {
    $sql = "SELECT briscola_perse FROM accesso WHERE nome_utente='$nomeUtente'";
}
$sql = "SELECT nome_utente FROM accesso WHERE biscotto='$biscotto'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$_SESSION['nome_utente'] = $row['nome_utente'];
header("Location: index.php");
exit();