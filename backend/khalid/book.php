<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");

$host="localhost:3306";
$user="root";
$pass="Abdi2002";
$db="Hotels";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die(json_encode(["error" => "Database connection failed: " . mysqli_connect_error()]));
}


$data = json_decode(file_get_contents("php://input"), true);