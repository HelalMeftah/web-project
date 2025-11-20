-- test for sql 
create database Hotels;

use Hotels;
create table content(
user_name varchar(250),
user_email varchar(250),
user_number varchar(250),
user_message longtext
) ;




select * from content;

set sql_safe_updates=0;


-- delete from content;


create table booking(
user_name varchar(250),
user_email varchar(250),
user_phone varchar(259),
user_City varchar(250),
user_Room varchar(250),
user_ArrivalDates varchar(250),
user_Departure_date varchar(250),
user_Adults varchar(250),
user_children varchar(250)

);




