<?php

session_start();

if (!isset($_SESSION['user'])) {
  header("Location: /registration.php");
  exit();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, width=750">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>vk.pototype.ru</title>
  <link rel="stylesheet" href="css/style-min.css">
</head>
<body>
  <header class="header">
    <p class="header__user">Observer</p>
    <a class="header__out-link link" href="/exit.php">выйти</a>
  </header>

  <div class="container">
    <div class="add-form-container add-form-container--close">
      <button class="add-form-container__button button" type="button" name="add-from-rollup">Парсить</button>
      <div class="add-form-container__wrap">
        <form class="form add-form" action="#" method="POST">
          <legend class="form__legend">Введите данные для парсинга</legend>

          <label class="form__label label" for="ids_arr">ID`s</label>
          <textarea class="form__area" name="ids_arr" id="ids_arr" cols="30" rows="10" placeholder="Введите id групп через запятую"></textarea>

          <label class="form__label label" for="start_period">Начало периода</label>
          <input class="form__date" type="date" name="start_period" id="start_period">

          <label class="form__label label" for="stop_period">Окончание периода</label>
          <input class="form__date" type="date" name="stop_period" id="stop_period">

          <button class="form__submit add-form__submit button" type="submit">submit</button>
        </form>
      </div>
    </div>
    <div class="table-head">
      <div class="table-head__content">
        <p class="table-head__name">Название</p>
        <p class="table-head__members-count">Подписчики</p>
        <p class="table-head__coverage">Охват</p>
        <p class="table-head__visitors">Посетители</p>
        <p class="table-head__growth">Прирост</p>
      </div>
      <div class="search">
        <form class="search__form" action="">
          <label aria-label="поиск по названию группы" for="search">
            <input class="search__input" type="search" name="search" id="search" data-value='' placeholder="поиск">
          </label>
        </form>
      </div>
    </div>
    <div class="pagination">
      <ul class="pagination__list">
        <li class="pagination__item">
          <a class="pagination__link pagination__link--active" href="" data-count="1">1</a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="" data-count="2">2</a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="" data-count="3">3</a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link pagination__end-link" href="" data-count="end">>></a>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul class="stat-list" data-current-count="0">

      </ul>

      <!-- FILTER -->
      <div class="filter">
        <form class="filter__form" action="" >
          <fieldset class="filter__range-fieldset">
            <label class="label" for="range_min">Подписчики:</label>
            <div class="filter__output-wrap">
              <input class="filter__output" type="number" name="output_min" id="output_min" value="1"></input>
              <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
              <input class="filter__output" type="number" name="output_max" id="output_max" value="11597820"></input>
            </div>
            <div class="filter__range-wrap">
              <div class="filter__range-line"></div>
              <input class="filter__range" type="range" id="range_min" name="range_min" min="1" max="11597820" value="1">
              <input class="filter__range" type="range" id="range_max" name="range_max" min="1" max="11597820" value="11597820">
            </div>
          </fieldset>
        </form>
        <button class="filter__toggle-button" type="button" name="filter-toggle-button">></button>
      </div>
    </div>
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