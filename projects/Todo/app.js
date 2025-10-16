

let addBtn = document.getElementById("addBtn")
let input = document.getElementById("input")

addBtn.addEventListener("click", () => {
    if (input.value.length > 2) {
        let data = input.value
        console.log(data)

        let newDiv = document.createElement("div")

        let newInput = document.createElement("input")
        newInput.disabled = true
        newInput.value = data
        newDiv.appendChild(newInput)
        input.value = ""

        let delBtn = document.createElement("button")
        delBtn.textContent = "Delete"
        delBtn.addEventListener('click', () => {
            newDiv.remove()
        })
        newDiv.appendChild(delBtn)

        let editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.addEventListener("click", () => {
            newDiv.firstElementChild.disabled = false
            if (newDiv.lastElementChild.innerHTML !== "Save") {
                // console.log()

                let saveBtn = document.createElement("button")
                saveBtn.textContent = "Save"
                saveBtn.addEventListener("click", () => {
                    newDiv.firstElementChild.disabled = true
                    newDiv.lastElementChild.remove()
                })

                newDiv.appendChild(saveBtn)
            }


        })

        newDiv.appendChild(editBtn)

        document.body.appendChild(newDiv)
    }
    else {
        alert("please input the valid thing")
    }

})



