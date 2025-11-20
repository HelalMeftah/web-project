let contact_name=document.querySelector("#contact-name")
let contact_email=document.querySelector("#contact-email")
let contact_number=document.querySelector("#contact-number")
let contact_message=document.querySelector("#contact-Message")
let contact_btn=document.querySelector("#contact-btn")
let contact_alert=document.querySelector("#contact-alert")

let reg=/[+][0-9]\d+$/



let Contact={
    name:"",
    email:"",
    number:"",
    message:"",
    
}

function sand() {
    //backend/khalid/content.php
    console.log(Contact)
 fetch("http://localhost/web-project/backend/khalid/content.php", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(Contact)
})
.then(res => res.json()) 
.then(txt => console.log(txt))

}


function change(){
 if(Contact.name!==""&&Contact.email!==""&&Contact.message!==""){
    if(reg.test(Contact.number)){
        console.log("is rigth")
        contact_btn.classList.remove("bg-[#E8E8E8]")
        contact_btn.classList.add("bg-[#0A2A66]")
    }else{
        console.log("not")
        contact_btn.classList.add("bg-[#E8E8E8]")
        contact_btn.classList.remove("bg-[#0A2A66]")
    }
 }else{
    console.log("is not allow")
     contact_btn.classList.add("bg-[#E8E8E8]")
        contact_btn.classList.remove("bg-[#0A2A66]")
 }
}






contact_name.addEventListener("input",(e)=>{
    Contact.name=e.target.value
    change()
})

contact_email.addEventListener("input",(e)=>{
    Contact.email=e.target.value
    change()
})


contact_number.addEventListener("input",(e)=>{
    Contact.number=e.target.value
    change()
     console.log(reg.test(Contact.number))
})


contact_message.addEventListener("input",(e)=>{
    Contact.message=e.target.value
    change()
    
})



contact_btn.addEventListener("click",()=>{
    
    if(Contact.name!==""&&Contact.message!==""&&Contact.email!==""&&reg.test(Contact.number)){


    contact_alert.classList.remove("hidden")

    setTimeout(()=>{
contact_alert.classList.add("hidden")
    },3000)


    sand()
    }
   
})