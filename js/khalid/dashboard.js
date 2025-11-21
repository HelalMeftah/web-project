let btn_nav = document.querySelectorAll(".btn-nav")
let data_btn = document.querySelectorAll(".data-btn")
let Total_customers=document.querySelector("#Total-customers")
let profits=document.querySelector("#profits")
let Total_bookings=document.querySelector("#Total-bookings")
let Madinah_Branch=document.querySelector("#Madinah-Branch")
let Makkah_Branch=document.querySelector("#Makkah-Branch")
let Jeddah_Branch=document.querySelector("#Jeddah-Branch")
let Riyadh_Branch=document.querySelector("#Riyadh-Branch")
console.log(data_btn)


let datas = {
    booking:"",
    data_type: ""

}



function getdata() {
    console.log("fun")
    // "http://localhost/web-project/backend/khalid/dashboard.php
    fetch("http://localhost/web-project/backend/khalid/dashboard.php").then(data=>data.json()).then(db=>{
        console.log(db)
        Total_customers.textContent=db[0].total_customer;
        profits.textContent=db[1].profits;
        Total_bookings.textContent=db[2].Total_booking
        Madinah_Branch.textContent=db[3].Madinah_customer
        card_one_branch(db[4],db[4].length)
        Makkah_Branch.textContent=db[5].Makkah_customer
        card_two_branch(db[6], db[6].length); 
        Customers(db[7],db[7].length)
        Jeddah_Branch.textContent=db[8].Jeddah_customer
        card_three_branch(db[9],db[9].length)
        Riyadh_Branch.textContent=db[10].Riyadh_customer
        card_four_branch(db[11],db[11].length)




    })
}

getdata()



//change nav color
btn_nav.forEach((e, i1) => {
    let element;
    e.addEventListener("click", () => {

        btn_nav.forEach((e2) => {
            e2.classList.remove("bg-[#F3F7FA]")
            e2.classList.add("text-black")
            e2.classList.remove("text-[#4857FC]", "border-white", "border")
        })



        e.classList.add("bg-[#F3F7FA]", "border-white", "border")
        e.classList.remove("text-black")
        e.classList.add("text-[#4857FC]")

        element = i1
        console.log(element)

    })
})


//change data btn 

data_btn.forEach((e) => {
    e.addEventListener("click", (v) => {
        data_btn.forEach((t) => {
            t.classList.remove("shadow-xl", "p-2", "rounded-full", "w-20", "text-[#CBD1D9]", "bg-[#FFFFFF]", "text-[#4857FC]")

        })

        e.classList.add("shadow-xl", "p-2", "rounded-full", "w-20", "text-[#4857FC]", "bg-[#FFFFFF]")
        //change value
        datas.data_type = e.textContent



    })


})



//first data 
function Customers(d,i) {

    let ElementID = "investChart"

    let colorStep1 = "rgba(60, 100, 255, 0.35)";
    let colorStep2 = "rgba(60, 100, 255, 0)";
    let borderColor = "#3B5BFF";
    //i will use database to change here
    let lenght = i;
    let data =d
    //end
    let y = false

    Charts(ElementID, colorStep1, colorStep2, borderColor, lenght, data, y = false)

}




// card one

function card_one_branch(d,i) {

    let ElementID = "card-one"

    let colorStep1 = "rgba(60, 100, 255, 0.35)";
    let colorStep2 = "rgba(60, 100, 255, 0)";
    let borderColor = "#3B5BFF";
    //i will use database to change here
    let lenght = i;
    let data = d;
    //end
    let y = false

    Charts(ElementID, colorStep1, colorStep2, borderColor, lenght, data, y = false)

}




//card two

function card_two_branch(d,i) {

    let ElementID = "card-two"

    let colorStep1 = "rgba(155, 89, 182, 0.45)";
    let colorStep2 = "rgba(155, 89, 182, 0)";
    let borderColor = "#9b59b6";
    //i will use database to change here
    let lenght = i;
    let data = d
    //end
    let y = false

    Charts(ElementID, colorStep1, colorStep2, borderColor, lenght, data, y = false)

}




//card three

function card_three_branch(d,i) {

    let ElementID = "card-three"

    let colorStep1 = "rgba(168, 85, 247, 0.4)";
    let colorStep2 = "rgba(88, 28, 135, 0)";
    let borderColor = "rgba(168, 85, 247, 1)";
    //i will use database to change here
    let lenght = i;
    let data = d
    //end
    let y = false

    Charts(ElementID, colorStep1, colorStep2, borderColor, lenght, data, y = false)

}



//card four

function card_four_branch(d,i) {

    let ElementID = "card-four"

    let colorStep1 = "rgba(16, 185, 129, 0.35)";
    let colorStep2 = "rgba(6, 95, 70, 0)";
    let borderColor = "rgba(16, 185, 129, 1)";
    //i will use database to change here
    let lenght =i;
    let data = d
    //end
    let y = false

    Charts(ElementID, colorStep1, colorStep2, borderColor, lenght, data, y = false)

}







function Charts(ElementID, colorStep1, colorStep2, borderColor, lenght, data, y = false) {


    const ctx = document.getElementById(ElementID).getContext("2d");


    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colorStep1);
    gradient.addColorStop(1, colorStep2);

    new Chart(ctx, {
        type: "line",
        data: {
            //          labels: Array.from({ length: lenght }, (_, i) => "profit" + (i + 1)),
            labels: Array.from({ length: lenght }, (_, i) => "profit" ),
            datasets: [
                {
                    label: "",
                    //here arr
                    data: data,
                    borderColor: borderColor,
                    pointRadius: 0,
                    fill: true,
                    backgroundColor: gradient,
                    tension: 0.4,
                    borderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: { display: false },


                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    backgroundColor: "#fff",
                    titleColor: "#000",
                    bodyColor: "#000",
                    borderColor: "#eee",
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                }
            },

            interaction: {
                mode: 'index',
                intersect: false
            },

            scales: {
                x: {
                    display: false
                },
                y: {
                    display: y,
                    ticks: { color: "#9aa0b4" },
                    grid: { color: "rgba(0,0,0,0.07)" },

                }
            }
        }
    });

}



