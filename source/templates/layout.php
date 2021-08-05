<?php
/** @var string $title Заголовок страницы */
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?= $title ?></title>
  <link rel="stylesheet" href="css/style-min.css">
</head>
<body>
  <?= $header ?>
  
  <div class="container">
    <?= $content ?>
  </div>

  <template id="stat-item">
    <li class="stat-list__item stat-item">
      <div class="stat-item__image-inner">
        <img class="stat-item__image" src="https://via.placeholder.com/50" alt="">
      </div>
      <a class="stat-item__name link" href="https://vk.com/club1"  target="_blank" >Название группы</a>
      <p class="stat-item__members-count">546874</p>
      <a class="stat-item__coverage link" href="#" target="_blank" >2678</a>
      <a class="stat-item__visitors link" href="#" target="_blank" >15487</a>
      <p class="stat-item__growth">
        <span class="stat-item__growth-abs">20568</span>
        <span class="stat-item__growth-percent">4.72%</span>
      </p>
    </li>
  </template>
  <script src="js/main.js"></script>
</body>
</html>


