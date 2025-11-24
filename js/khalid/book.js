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
let btn=document.querySelector("#book-btn")



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

//to follow the user and change
Arrival_date.addEventListener("change",()=>{
   Departure_date.setAttribute("min",Arrival_date.value)
 
})




// for database
let user ={
    name:"",
    email:"",
    phone:"",
    City:"",
    Room:"",
    ArrivalDates:"",
    Departure_date:"",
    Adults:"",
    children:"",
    price:0
   
}


//find price

function price(){
    let dayone=new Date(user.ArrivalDates);
    let daytwo=new Date(user.Departure_date);

    let diffms=daytwo-dayone
    let diffDay=diffms / (1000 * 60 * 60 * 24)
    console.log(`dif is ${diffDay}`)

    if(room_type.value==="Standard Room - 200 SAR / night"){
      if(diffDay>0){
        user.price=diffDay *200
      }else{
        user.price=200
      }
    }else if(room_type.value==="Deluxe Room - 400 SAR / night"){
         if(diffDay===0){
            user.price=400
        }else{
          user.price= diffDay * 400

        }
    }else if(room_type.value==="Royal Suite - 1200 SAR / night"){
           if(diffDay===0){
            user.price=1200 
        }else{
          user.price= diffDay * 1200 

        }
    }
}


function sanddata(){
       console.log(user)
 fetch("http://localhost/web-project/backend/khalid/book.php", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
})
.then(res => res.json()) 
.then(txt => console.log(txt))
}



btn.addEventListener("click",()=>{
    console.log("Send")
    sanddata()
})


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
    if(user.Adults===""){
        guests_input.textContent="1 Adults"
    }
 if(e.target.value >= 1){
        guests_input.textContent=e.target.value + ` Adults `;
        user.Adults=e.target.value
        console.log(user)
    }
    if(e.target.value===0){
        guests_input.textContent="Not specified"
    }


    price()
})


children.addEventListener("input",(e)=>{
   

    if(e.target.value >0){
        guests_input.textContent=`${user.Adults} Adults ` +`, ${e.target.value} children`
        user.children=e.target.value
    }
    else{
               guests_input.textContent=`${user.Adults} Adults ` 
               console.log("is low")
                       user.children=e.target.value

 
    }
     
})





