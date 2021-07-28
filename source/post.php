<?php

require_once 'helpers.php';
require_once 'functions.php';
require_once 'sql-connect.php';

$ids = isset($_POST['id']) ? $_POST['id'] : '';


$page_content = include_template('main.php', [
  'items' => getStats($con, $ids)
]);

// $layout_content = include_template('layout.php', [
//   'content' => $page_content
// ]);

// var_dump(getIds($con, $ids));

// var_dump(getIds($con, $ids));

echo $page_content;

// $sorting = isset($_POST['sorting']) ? trim(strip_tags($_POST['sorting'])) : '';
// $rangeMax = isset($_POST['rangeMax']) ? trim(strip_tags($_POST['rangeMax'])) : '';


// $data = ['ids' => $ids, 'rangeMax' => $rangeMax, 'data' => $_POST ];

// header('Content-type: application/json');

// echo json_encode( $data );
