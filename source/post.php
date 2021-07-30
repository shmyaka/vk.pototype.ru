<?php

session_start();

require_once 'helpers.php';
require_once 'functions.php';
require_once 'sql-connect.php';

$currentCount = isset($_POST['currentCount']) ? $_POST['currentCount'] : null;

if (!isset($currentCount)) {
  exit('currentCount - не получен!');
}


// $ids = isset($_POST['id']) ? $_POST['id'] : '';
$ids = getPortionIds($con, $currentCount);

$start_date = isset($_POST['start_date']) ? $_POST['start_date'] : '';
$stop_date = isset($_POST['stop_date']) ? $_POST['stop_date'] : '';
$ids_arr = getStats($con, $ids, $start_date, $stop_date);
$ids_arr = convertStats($ids_arr);


$page_content = include_template('main.php', [
  'items' => $ids_arr
]);

// $layout_content = include_template('layout.php', [
//   'content' => $page_content
// ]);


echo $page_content;

// $sorting = isset($_POST['sorting']) ? trim(strip_tags($_POST['sorting'])) : '';
// $rangeMax = isset($_POST['rangeMax']) ? trim(strip_tags($_POST['rangeMax'])) : '';


// $data = ['ids' => $ids, 'rangeMax' => $rangeMax, 'data' => $_POST ];

// header('Content-type: application/json');

// echo json_encode( $data );
