<?php

$con = mysqli_connect("84.38.183.43", "root", "yfrfpetvf1313", "users");

if ($con === false) {
    exit("Ошибка подключения: " . mysqli_connect_error());
}

mysqli_set_charset($con, "utf8");
