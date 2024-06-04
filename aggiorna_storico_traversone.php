<?php 
session_start(); 
include "db_conn.php";

$vincitore = $_POST['vincitore'];
$nomeUtente = $_POST['nomeUt'];

if ($vincitore == 0) {
    $sql = "SELECT traversone_perse FROM accesso WHERE nome_utente='$nomeUtente'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $traversone_perse = (int)$row['traversone_perse'];
    $traversone_perse += 1;
    $sql2 = "UPDATE `accesso` SET `traversone_perse` = '$traversone_perse' WHERE `accesso`.`nome_utente` = '$nomeUtente'";
    mysqli_query($conn, $sql2);
}
elseif ($vincitore == 1) {
    $sql = "SELECT traversone_pareggiate FROM accesso WHERE nome_utente='$nomeUtente'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $traversone_pareggiate = (int)$row['traversone_pareggiate'];
    $traversone_pareggiate += 1;
    $sql2 = "UPDATE `accesso` SET `traversone_pareggiate` = '$traversone_pareggiate' WHERE `accesso`.`nome_utente` = '$nomeUtente'";
    mysqli_query($conn, $sql2);
}
elseif ($vincitore == 2) {
    $sql = "SELECT traversone_vinte FROM accesso WHERE nome_utente='$nomeUtente'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $traversone_vinte = (int)$row['traversone_vinte'];
    $traversone_vinte += 1;
    $sql2 = "UPDATE `accesso` SET `traversone_vinte` = '$traversone_vinte' WHERE `accesso`.`nome_utente` = '$nomeUtente'";
    mysqli_query($conn, $sql2);
}

exit();
?>
