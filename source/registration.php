<?php
require_once 'helpers.php';
require_once 'functions.php';
require_once 'admin-sql-connect.php';

session_start();

if (isset($_SESSION['user'])) {
  header("Location: /");
  exit();
}

$page_content = include_template('login-form.php', []);

$layout_content = include_template('layout.php', [
  'content' => $page_content,
  'title' => 'Вход'
]);


$user_data = getPasswordFromDB($con, 'observer');
$hash = $user_data[0]["password"];


// var_dump(password_verify("gfyr1313", $hash));


print($layout_content);
