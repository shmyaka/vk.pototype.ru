<?php

session_start();

require_once 'helpers.php';
require_once 'functions.php';
require_once 'sql-connect.php';

$currentCount = isset($_POST['currentCount']) ? $_POST['currentCount'] : null;
$search = isset($_POST['search']) ? $_POST['search'] : null;
$rangeMin = isset($_POST['range_min']) ? $_POST['range_min'] : null;
$rangeMax = isset($_POST['range_max']) ? $_POST['range_max'] : null;
$groupType = isset($_POST['group_type']) ? $_POST['group_type'] : null;
$period = isset($_POST['period']) ? $_POST['period'] : null;
$start_date = isset($_POST['start_date']) ? $_POST['start_date'] : '';
$stop_date = isset($_POST['stop_date']) ? $_POST['stop_date'] : '';


// Если заходим впервый раз, сохраняем в сессии максимальное количество
// "порций" групп по 25 в пачке. Используем эти данные
// для понимания масимального числа в списке пагинации
if (!isset($_SESSION['max_count']) || $_SESSION['range_min'] != $rangeMin
  || $_SESSION['range_max'] != $rangeMax || $_SESSION['group_type'] != $groupType || $_SESSION['search'] != $search) {
  $_SESSION['range_min'] = $rangeMin;
  $_SESSION['range_max'] = $rangeMax;
  $_SESSION['group_type'] = $groupType;
  $_SESSION['search'] = $search;
  $_SESSION['total_groups'] = getCountOfIds($con, $search, $rangeMin, $rangeMax, $groupType);
  $_SESSION['max_count'] = ceil($_SESSION['total_groups'] / 25 );
}

// Если нажали кнопку на пагинации "в начало" или "в конец",
// тогда присваиваем актуальному идентефикатору "порции" групп минимальное или максимальное число
if (!isset($currentCount)) {
  exit('currentCount - не получен!');
} elseif ($currentCount == 'start') {
  $currentCount = 1;
} elseif ($currentCount == 'end') {
  $currentCount = $_SESSION['max_count'];
}

$ids = getPortionIds($con, $currentCount, $search, $rangeMin, $rangeMax, $groupType);
$ids_arr = $ids;

if (!empty($ids)) {
  $ids_arr = getStats($con, $ids, $start_date, $stop_date, $period);
  $ids_arr = convertStats($ids_arr);
}

$max_count = $_SESSION['max_count'];

$page_content = include_template('list.php', [
  'items' => $ids_arr
]);

$pagination_content = include_template('pagination.php', [
  'currentCount' => $currentCount,
  'maxCount' => $max_count
]);
// $layout_content = include_template('layout.php', [
//   'content' => $page_content
// ]);


// echo $page_content;
$data = [];
$data['list'] = $page_content;
$data['pagination'] = $pagination_content;
$data['max'] = $max_count;
$data['total'] = number_format($_SESSION['total_groups'], 0, '', ' ');


// $sorting = isset($_POST['sorting']) ? trim(strip_tags($_POST['sorting'])) : '';
// $rangeMax = isset($_POST['rangeMax']) ? trim(strip_tags($_POST['rangeMax'])) : '';


// $data = ['ids' => $ids, 'rangeMax' => $rangeMax, 'data' => $_POST ];

header('Content-type: application/json');

echo json_encode( $data );
