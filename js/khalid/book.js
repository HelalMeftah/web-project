let Name=document.querySelector("#Name")
let name_input=document.querySelector("#name-input")
let Email=document.querySelector("#Email")
let email_input=document.querySelector("#email-input")
let Phone=document.querySelector("#Phone")
let phone_input=document.querySelector("#phone-input")


let Arrival_date=document.querySelector("#Arrival-date");
let City =document.querySelector("#City")
let City_input=document.querySelector("#City-input")
let room_type=document.querySelector("#room-type")
let room_input=document.querySelector("#room-input")
let Arrival_input=document.querySelector("#Arrival-input")
let adults=document.querySelector("#adults")
let children=document.querySelector("#children")
let guests_input=document.querySelector("#guests-input")



let Departure_date=document.querySelector("#Departure-date")
console.log(City_input)

let time= new Date();

let time_zone=time.toISOString().split("T")[0]
console.log(time_zone)


//to change value for input
Arrival_date.value=time_zone;
Departure_date.value=time_zone
Arrival_date.setAttribute("min",time_zone)
Departure_date.setAttribute("min",time_zone)


// for database
let user ={
    name:"",
    email:"",
    phone:"",
    City:"",
    Room:"",
    ArrivalDates:"",
    Departure_date:"",
    guests:{
        Adults:"",
        children:""
    }
}


Name.addEventListener("input",(e)=>{
    if(e.target.value===""){
name_input.textContent="Not specified"
    }else{
    name_input.textContent=e.target.value
    user.name=e.target.value


    }

    console.log(user)
})


Email.addEventListener("input",(e)=>{
    if(e.target.value===""){
email_input.textContent="Not specified"
    }else{
    email_input.textContent=e.target.value
    user.email=e.target.value


    }

    
})



Phone.addEventListener("input",(e)=>{
    if(e.target.value===""){
phone_input.textContent="Not specified"
    }else{
    phone_input.textContent=e.target.value
    user.phone=e.target.value


    }

    
})

City.addEventListener("input",(e)=>{
if(e.target.value==="Choose a city"){
    City_input.textContent="Not specified"
}else{
    City_input.textContent=e.target.value
    user.City=e.target.value
    
}
})

room_type.addEventListener("input",(e)=>{
    if(e.target.value==="Choose room type"){
   room_input.textContent="Not specified";
    }else{
        room_input.textContent=e.target.value;
        user.Room=e.target.value

    }
 
})

Arrival_date.addEventListener("input",(e)=>{
    if(user.Departure_date===""){
            Arrival_input.textContent=e.target.value ;
    user.ArrivalDates=e.target.value

    }else{
  Arrival_input.textContent=e.target.value +` to ${user.ArrivalDates}`;
    user.ArrivalDates=e.target.value
    }
  

})


Departure_date.addEventListener("input",(e)=>{
   
    Arrival_input.textContent=`${user.ArrivalDates} to `+ e.target.value 
    user.Departure_date=e.target.value
})


adults.addEventListener("input",(e)=>{
    if(user.guests.Adults===""){
        guests_input.textContent="1 Adults"
    }
 if(e.target.value >= 1){
        guests_input.textContent=e.target.value + ` Adults `;
        user.guests.Adults=e.target.value
        console.log(user)
    }
    if(e.target.value===0){
        guests_input.textContent="Not specified"
    }
})


children.addEventListener("input",(e)=>{

    if(e.target.value >0){
        guests_input.textContent=`${user.guests.Adults} Adults ` +`, ${e.target.value} children`
    }else{
               guests_input.textContent=`${user.guests.Adults} Adults ` 
 
    }
     
})





