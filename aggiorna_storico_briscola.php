<?php 
session_start(); 
include "db_conn.php";

$vincitore = $_POST['vincitore'];
$nomeUtente = $_POST['nomeUt'];

if ($vincitore == 0) {
    $sql = "SELECT briscola_perse FROM accesso WHERE nome_utente='$nomeUtente'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $briscola_perse = (int)$row['briscola_perse'];
    $briscola_perse += 1;
    $sql2 = "UPDATE `accesso` SET `briscola_perse` = '$briscola_perse' WHERE `accesso`.`nome_utente` = '$nomeUtente'";
    mysqli_query($conn, $sql2);
}
elseif ($vincitore == 1) {
    $sql = "SELECT briscola_pareggiate FROM accesso WHERE nome_utente='$nomeUtente'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $briscola_pareggiate = (int)$row['briscola_pareggiate'];
    $briscola_pareggiate += 1;
    $sql2 = "UPDATE `accesso` SET `briscola_pareggiate` = '$briscola_pareggiate' WHERE `accesso`.`nome_utente` = '$nomeUtente'";
    mysqli_query($conn, $sql2);
}
elseif ($vincitore == 2) {
    $sql = "SELECT briscola_vinte FROM accesso WHERE nome_utente='$nomeUtente'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $briscola_vinte = (int)$row['briscola_vinte'];
    $briscola_vinte += 1;
    $sql2 = "UPDATE `accesso` SET `briscola_vinte` = '$briscola_vinte' WHERE `accesso`.`nome_utente` = '$nomeUtente'";
    mysqli_query($conn, $sql2);
}

exit();
?>
