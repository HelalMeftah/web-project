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
$phone=isset($data["phone"]) ? $data["phone"]:"";
$Room=isset($data["Room"]) ? $data["Room"]:"";
$ArrivalDates=isset($data["ArrivalDates"]) ? $data["ArrivalDates"]:"";
$Departure_date=isset($data["Departure_date"]) ? $data["Departure_date"]:"";
$Adults=isset($data["Adults"]) ? $data["Adults"]:"";
$children=isset($data["children"]) ? $data["children"]:"";
$City=isset($data["City"]) ? $data["City"]:"";
$price=isset($data["price"]) ? $data["price"]:"";



if(empty($name)||empty($email)||empty($phone)||empty($Room)||empty($ArrivalDates)||empty($Departure_date)||empty($Adults)||empty($children)||empty($City)||!is_numeric($price)){
    echo json_encode([
        "message"=>"all input required",
        "data"=>$data
    
    ]);

    exit;
}else{
    // echo json_encode([
    //     "message"=>"data recevie"
    // ]);


    $query="insert into booking(user_name,user_email,user_phone,user_City,user_Room,user_ArrivalDates,user_Departure_date,user_Adults,user_children,price) values('$name','$email','$phone','$City','$Room','$ArrivalDates','$Departure_date','$Adults','$children','$price')";

if(mysqli_query($conn,$query)){
    echo json_encode([
        "massage"=>"data send to database"
    ]);
}else{
    echo json_encode([
        "massage"=>"data no go to database"
    ]);
}
  
}


