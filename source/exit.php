<?php
session_start();

$_SESSION = [];

header("Location: /pop/registration.php");
exit();
