<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");

$host="localhost:3306";
$user="root";
$pass="Abdi2002";
$db="Hotels";

$conn=mysqli_connect($host,$user,$pass,$db);
if(!$conn){
echo json_encode([
    "massage"=>"database not work"
]);
exit;
};

// $data_js = json_decode(file_get_contents("php://input"), true);

$q0 = "select price from booking;";
$res0 = mysqli_query($conn, $q0);
$dashboard= [];

while($row=mysqli_fetch_assoc($res0)){
    // i need to change to int
    $dashboard[]=intval($row["price"]) ;
}


$q1 = "select count(user_name) as total_customer from booking;";
$res1 = mysqli_query($conn, $q1);
$total_customer = mysqli_fetch_assoc($res1);

$q2 = "select sum(price) as profits from booking;";
$res2 = mysqli_query($conn, $q2);
$total_profit = mysqli_fetch_assoc($res2);

$q3 = "select sum(user_Adults) + sum(user_children) as Total_booking from booking;";
$res3 = mysqli_query($conn, $q3);
$total_booking = mysqli_fetch_assoc($res3);

$q4 = 'select count(user_name) as Madinah_customer  from booking where user_City="Madinah" ';
$res4 = mysqli_query($conn, $q4);
$Madinah_customer = mysqli_fetch_assoc($res4);

$q5 = 'select price as Madinah_profit from booking  where user_City="Madinah";';
$res5 = mysqli_query($conn, $q5);
$Madinah_profit =[];

while($row=mysqli_fetch_assoc($res5)){
    // i need to change to int
    $Madinah_profit[]=intval($row["Madinah_profit"]) ;
}


$q6 = 'select count(user_name) as Makkah_customer from booking where user_City="Makkah";';
$res6 = mysqli_query($conn, $q6);
$Makkah_customer = mysqli_fetch_assoc($res6);


$q7 = 'select price as Makkah_profit from booking where user_City="Makkah";';
$res7 = mysqli_query($conn, $q7);
$Makkah_profit = mysqli_fetch_assoc($res7);

while($row=mysqli_fetch_assoc($res7)){
    // i need to change to int
    $Makkah_profit[]=intval($row["Makkah_profit"]) ;
};


$q8 = 'select count(user_name) as Jeddah_customer from booking where user_City="Jeddah";';
$res8 = mysqli_query($conn, $q8);
$Jeddah_customer = mysqli_fetch_assoc($res8);


$q9 = 'select price as Jeddah_profit from booking where user_City="Jeddah";';
$res9 = mysqli_query($conn, $q9);
$Jeddah_profit  = [];

while($row=mysqli_fetch_assoc($res9)){
    // i need to change to int
    $Jeddah_profit[]=intval($row["Jeddah_profit"]) ;
};


$q10 = 'select count(user_name) as Riyadh_customer from booking where user_City="Riyadh";';
$res10 = mysqli_query($conn, $q10);
$Riyadh_customer = mysqli_fetch_assoc($res10);



$q11 = 'select price as Jeddah_profit from booking where user_City="Jeddah";';
$res11 = mysqli_query($conn, $q11);
$Riyadh_profit  = [];

while($row=mysqli_fetch_assoc($res11)){
    // i need to change to int
    $Riyadh_profit[]=intval($row["Jeddah_profit"]) ;
};


$q12 = 'select user_name  ,user_email , user_ArrivalDates , user_Departure_date  ,user_Room room from booking order by user_id desc ;';
$res12 = mysqli_query($conn, $q12);
$booking_details = [];

while($row=mysqli_fetch_assoc($res12)){
    // i need to change to int
    $booking_details[]=[
        "name"=>$row["user_name"],
        "email"=>$row["user_email"],
        "ArrivalDates"=>$row["user_ArrivalDates"],
        "Departure_date"=>$row["user_Departure_date"],
        "Room"=>$row["room"],
    ] ;
};



$q13 = 'select * from content order by user_id desc;';
$res13 = mysqli_query($conn, $q13);
$content_detail = [];

while($row=mysqli_fetch_assoc($res13)){
    // i need to change to int
    $content_detail []=[
        "name"=>$row["user_name"],
        "email"=>$row["user_email"],
        "Message"=>$row["user_message"],
       
    ] ;
};


$q14 = 'select count(user_Room) as Standard_Room  from booking where user_Room ="Standard Room - 200 SAR / night";';
$res14= mysqli_query($conn, $q14);
$Standard_Room = mysqli_fetch_assoc($res14);



$q15 = 'select price as Standard_profit  from booking where user_Room ="Standard Room - 200 SAR / night";';
$res15 = mysqli_query($conn, $q15);
$Standard_profit= [];

while($row=mysqli_fetch_assoc($res15)){
    // i need to change to int
        $Standard_profit []=intval($row["Standard_profit"]) ;
};

$q16= 'select count(user_Room) as Royal_Suite  from booking where user_Room ="Royal Suite - 1200 SAR / night";';
$res16= mysqli_query($conn, $q16);
$Royal_Suite = mysqli_fetch_assoc($res16);




$q17 = 'select price as Royal_profit  from booking where user_Room ="Royal Suite - 1200 SAR / night";';
$res17 = mysqli_query($conn, $q17);
$Royal_profit= [];

while($row=mysqli_fetch_assoc($res17)){
    // i need to change to int
        $Royal_profit []=intval($row["Royal_profit"]) ;
};



$q18= 'select count(user_Room) as Deluxe_Room   from booking where user_Room ="Deluxe Room - 400 SAR / night";';
$res18= mysqli_query($conn, $q18);
$Deluxe_Room = mysqli_fetch_assoc($res18);


$q19 = 'select price as Deluxe_profit  from booking where user_Room ="Deluxe Room - 400 SAR / night";';
$res19 = mysqli_query($conn, $q19);
$Deluxe_profit= [];

while($row=mysqli_fetch_assoc($res19)){
    // i need to change to int
        $Deluxe_profit []=intval($row["Deluxe_profit"]) ;
};







// $data=[];

// while($row=mysqli_fetch_assoc($resoult)){
// $data[]=$row;
// };

echo json_encode([
    "message"=>"resive data",
    $total_customer,
    $total_profit,
    $total_booking,
    $Madinah_customer,
    $Madinah_profit,
    $Makkah_customer,
    $Makkah_profit,
    $dashboard,
    $Jeddah_customer,
    $Jeddah_profit ,
    $Riyadh_customer,
    $Riyadh_profit,
    $booking_details,
    $content_detail ,
    $Standard_Room,
    $Standard_profit,
    $Royal_Suite,
    $Royal_profit,
    $Deluxe_Room ,
    $Deluxe_profit 
]);