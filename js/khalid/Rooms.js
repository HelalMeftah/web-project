let Room_type =document.querySelector("#Room-type")
let Standard_Room=document.querySelector("#Standard-Room")
let Royal_Suite =document.querySelector("#Royal-Suite")
let Deluxe_Room =document.querySelector("#Deluxe-Room")



Room_type.addEventListener("input",(e)=>{
console.log(e.target.value)
if(e.target.value==="Standard room"){
   Royal_Suite.style.cssText="display:none"
   Deluxe_Room.style.cssText="display:none"
   Standard_Room.style.cssText="display:block"
}else if(e.target.value==="Deluxe room"){
    Standard_Room.style.cssText="display:none"
   
    Royal_Suite.style.cssText="display:none"
    Deluxe_Room.style.cssText=" display: block;"

}else if(e.target.value==="Royal Suite"){
     Standard_Room.style.cssText="display:none"
    //   Standard_Room.classList.add("hidden")
    Royal_Suite.style.cssText="display:block"
    // Royal_Suite.classList.remove("hidden")
    // Royal_Suite.classList.add("block")

    Deluxe_Room.style.cssText=" display: none;"
    // Deluxe_Room.classList.add("hidden")

}else{
     Royal_Suite.style.cssText="display:block"
     Deluxe_Room.style.cssText=" display: block;"
        Standard_Room.style.cssText="display:block"


}
})



let price=document.querySelector("#price")
let all_room=document.querySelector("#all-room")
console.log(all_room)

price.addEventListener("input",(e)=>{
    
if(e.target.value==="High to Low"){
all_room.classList.add("flex-row-reverse")

all_room.classList.add("p-10")
Deluxe_Room.classList.add("ml-10")

   

}else if(e.target.value==="Low to High"){
    all_room.classList.remove("flex-row-reverse")


}else{
     all_room.classList.remove("flex-row")
     all_room.classList.remove("flex-row-reverse")
}
})