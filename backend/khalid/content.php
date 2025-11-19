<?php

header("Content-Type: application/json");

// Read incoming JSON
$data = json_decode(file_get_contents("php://input"), true);

$response = [
    "massage" => "Data received",
    "data" => $data
];

echo json_encode($response);

?>
