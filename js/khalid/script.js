let dilog = document.querySelector("#dilog")
        let state = "x"
        let icon = document.querySelector("#hum-icon");
        let x_element = document.querySelector(".remove-one")
        let space_elemnt = document.querySelector(".remove-two")


        icon.addEventListener("click", () => {
            if (state === "x") {
                state = "space"
                x_element.classList.add("hidden")
                space_elemnt.classList.remove("hidden")
                dilog.classList.remove("hidden")


                console.log(state)
            } else {
                state = "x"
                console.log(state)

                space_elemnt.classList.add("hidden")

                x_element.classList.remove("hidden")
                dilog.classList.add("hidden")



            }
        })

        console.log(icon)