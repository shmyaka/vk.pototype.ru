<?php
require_once 'helpers.php';
require_once 'functions.php';
require_once 'sql-connect.php';

session_start();

$login = isset($_POST['login']) ? $_POST['login'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (!$login || !$password) {
  header("Location: /pop/registration.php");
  exit();
}

$user_data = getPasswordFromDB($con, 'observer');
$hash = $user_data[0]["password"];
$user_id = $user_data[0]["id"];

if (password_verify($password, $hash)) {
  $_SESSION['user'] = $user_id;
  header("Location: /pop");
  exit();
} else {
  exit("Неверный пароль!");
}
