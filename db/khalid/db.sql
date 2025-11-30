-- by khalid ;



create database Hotels;

use Hotels;
create table content(
user_id int auto_increment PRIMARY KEY,
user_name varchar(250),
user_email varchar(250),
user_number varchar(250),
user_message longtext
) ;




select * from content;

set sql_safe_updates=0;

drop table content;
delete from content;


create table booking(
user_id int auto_increment PRIMARY KEY,
user_name varchar(250),
user_email varchar(250),
user_phone varchar(259),
user_City varchar(250),
user_Room varchar(250),
user_ArrivalDates varchar(250),
user_Departure_date varchar(250),
user_Adults int,
user_children int,
price int

);


select user_name  ,user_email , user_ArrivalDates , user_Departure_date  ,user_Room room from booking order by user_id desc;



drop table booking;


select * from booking left join content on booking.user_name =content.user_name;

select * from booking;
-- all profit
select price from booking;
-- sum for totla profit
select sum(price) as profits from booking;
-- total customer
select count(user_name) as total_customer from booking;
-- total booking
select sum(user_Adults) + sum(user_children) as Total_booking from booking;
-- Madinah branch how much customer
select count(user_name) as Madinah_customer  from booking where user_City="Madinah";
-- Madinah branch profit
select price as Madinah_profit from booking  where user_City="Madinah";
-- Makkah branch how much customer
select count(user_name) as Makkah_customer from booking where user_City="Makkah";
-- Makkah branch profit
select price as Makkah_profit from booking where user_City="Makkah";
-- Jeddah branch how much customer
select count(user_name) as Jeddah_customer from booking where user_City="Jeddah";
-- Jeddah branch profit
select price as Jeddah_profit from booking where user_City="Jeddah";
-- Riyadh branch how much customer
select count(user_name) as Riyadh_customer from booking where user_City="Riyadh";
-- Riyadh branch profit
select price as Riyadh_profit from booking where user_City="Riyadh";
-- booking details
select user_name  ,user_email , user_ArrivalDates , user_Departure_date  ,user_Room room from booking ;
select user_name  ,user_email , user_ArrivalDates , user_Departure_date  ,user_Room room from booking ;
-- content detail
select * from content order by user_id desc;
-- room details
select * from booking;
-- Royal Suite 
select count(user_Room) as Royal_Suite  from booking where user_Room ="Royal Suite - 1200 SAR / night";
select price as Royal_profit  from booking where user_Room ="Royal Suite - 1200 SAR / night";

-- Standard Room 
select count(user_Room) as Standard_Room  from booking where user_Room ="Standard Room - 200 SAR / night";
select price as Standard_profit  from booking where user_Room ="Standard Room - 200 SAR / night";

-- Deluxe Room 
select count(user_Room) as Deluxe_Room   from booking where user_Room ="Deluxe Room - 400 SAR / night";
select price as Deluxe_profit  from booking where user_Room ="Deluxe Room - 400 SAR / night";


