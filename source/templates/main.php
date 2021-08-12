<div class="add-form-container add-form-container--close">
  <button class="add-form-container__button button" type="button" name="add-from-rollup" onclick="blur()">Парсить</button>
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
    <a class="table-head__link table-head__name">Название</a>
    <a class="table-head__link table-head__members-count">Подписчики</a>
    <a class="table-head__link table-head__coverage">Охват</a>
    <a class="table-head__link table-head__visitors">Посетители</a>
    <a class="table-head__link table-head__growth">Прирост</a>
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
    <p class="filter__total">
      Всего сообществ:
      <span class="filter__total-value"></span>
    </p>
    <form class="filter__form" action="" >
      <fieldset class="filter__range-fieldset filter__fieldset">
        <button class="filter__reset-button" type="button" onclick="blur()"></button>
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
      <fieldset class="filter__fieldset">
        <label class="label" for="type-all">Тип:</label>
        <label class="label filter__label">
          <input type="radio" name="group_type" id="type-all" value="all" checked>
          Все
        </label>
        <label class="label filter__label">
          <input type="radio" name="group_type" id="type-page" value="page">
          Паблики
        </label>
        <label class="label filter__label">
          <input type="radio" name="group_type" id="type-group" value="group">
          Группы
        </label>
      </fieldset>
      <fieldset class="filter__fieldset">
        <label class="label" for="period-week">Период:</label>
        <label class="label filter__label" for="period-week">
          <input type="radio" name="period" id="period-week" value="week" checked>
          Неделя
        </label>
        <label class="label filter__label" for="period-month">
          <input type="radio" name="period" id="period-month" value="month">
          Месяц
        </label>
      </fieldset>
      <fieldset  class="filter__fieldset">
        <p class="label">Категория:</p>
        <ul class="filter__categories-list">
          <li>
            <a class="filter__categories-link filter__categories-link--active" data-value="all">Все категории</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="1">18+</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="5">Авто/Мото</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="4">Астрология/Психология</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="7">Бизнес/Финансы</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="34">Видео/Кино</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="24">Другое</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="14">Еда</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="3">Животные</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="19">ИТ</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="16">Игры</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="6">Красота/Здорвье</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="11">Культура/Искусство</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="20">Литература</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="33">Магазины/Товары</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="22">Музыка</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="29">Наука</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="13">Оборудование/Производство</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="12">Образование</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="9">Общение</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="31">Общество</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="2">Объявления</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="8">Одежда</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="23">Организации</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="28">Отдых</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="26">Отношения</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="25">Политика</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="34">Путешествия</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="15">Развлечения</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="27">Религия</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="21">СМИ</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="32">Спорт</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="10">Творчество</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="30">Услуги</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="17">Хобби</a>
          </li>
          <li>
            <a class="filter__categories-link" data-value="18">Юмор</a>
          </li>
        </ul>
      </fieldset>
    </form>
    <button class="filter__toggle-button" type="button" name="filter-toggle-button">></button>
  </div>
</div>
