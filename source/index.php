<?php

session_start();

require_once 'helpers.php';

if (!isset($_SESSION['user'])) {
  header("Location: /registration.php");
  exit();
}

$header_content = include_template('header.php', [
  'user' => $_SESSION['user']
]);

$page_content = include_template('main.php', [
  'user' => $_SESSION['user']
]);

$layout_content = include_template('layout.php', [
  'header' => $header_content,
  'content' => $page_content,
  'title' => 'vk.prototype'
]);


echo $layout_content;

?>
