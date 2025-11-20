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

$name=isset($data["name"]) ? $data["name"]:"";
$email=isset($data["email"]) ? $data["email"]:"";
$number=isset($data["number"]) ? $data["number"]:"";
$message=isset($data["message"]) ? $data["message"]:"";

// echo json_encode([
//     "message" => "Received",
//     "data" => $data,
    
// ]);


$query="insert into content(user_name,user_email,user_number,user_message) values('$name','$email','$number','$message')";


if(empty($name)||empty($email)||empty($number)||empty($message)){
    echo json_encode([
        "message"=>"all input required",
    
    ]);

    exit;
}


if(mysqli_query($conn,$query)){
    echo json_encode([
        "message"=>"data go to database",
        "data"=>$data

    ]);
}else{
    echo json_encode([
        "message"=>"data not reseive",
        "data"=>$data
    ]);
};