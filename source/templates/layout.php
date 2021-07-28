<?php
/** @var string $title Заголовок страницы */
?>
<!DOCTYPE html>
<html lang="ru">

<head>


    <meta charset="UTF-8">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/flatpickr.min.css">
</head>

<body>
<h1 >Приветос</h1>

<div class="page-wrapper">
  <div class="container">
    <div class="content">
      <?= $content ?>
    </div>
  </div>

</div>

</body>
</html>
