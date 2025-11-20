<?php
header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];
$path   = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

// فقط POST على هذا الملف
if ($path === "/content.php" && $method === "POST") {

    $data = json_decode(file_get_contents("php://input"), true);

    // لو لم يرسل بيانات
    if (!$data) {
        echo json_encode([
            "error" => "No data received"
        ]);
        exit;
    }

    echo json_encode([
        "message" => "Data received",
        "data"    => $data
    ]);
    exit;
}

// Default route
echo json_encode(["error" => "Route not found"]);
