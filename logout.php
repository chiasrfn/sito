<?php 
session_start();

session_unset();
session_destroy();
setcookie("remember", "", time() - 3600, "/");
unset($_COOKIE['remember']);
header("Location: index.php");