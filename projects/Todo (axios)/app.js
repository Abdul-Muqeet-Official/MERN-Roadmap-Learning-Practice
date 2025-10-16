// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


let newdata;
async function mocApi() {

    let data = await axios.get("https://jsonplaceholder.typicode.com/users")
    // .then((response) => {
    //     // console.log(`1st then : ${response.methond})`)
    //     return response.json()
    // })
    try {
        console.log('hello')
        let info = data.data
        console.log(info)

        let userDataDiv = document.createElement("div")

        // newdata = data
        info.forEach(user => {



            let block = document.createElement("div")
            block.setAttribute("class", "block")
            userDataDiv.appendChild(block)

            let idTag = document.createElement('p')
            idTag.textContent = user.id
            block.appendChild(idTag)

            let nameTag = document.createElement('input')
            nameTag.value = user.name
            block.appendChild(nameTag)

            let emailTag = document.createElement('input')
            emailTag.value = user.email
            block.appendChild(emailTag)

            let deleteBtnTag = document.createElement('button')
            deleteBtnTag.textContent = "Delete"
            block.appendChild(deleteBtnTag)

            let editBtnTag = document.createElement('button')
            editBtnTag.textContent = "Edit"
            block.appendChild(editBtnTag)




            nameTag.disabled = true
            emailTag.disabled = true
            //////////////////////////////////////////////////////////////////////////////////
            deleteBtnTag.addEventListener("click", () => {

                let delID = user.id
                deleteBtnTag.parentElement.remove()
                console.log('giet it', user.id)

                async function deleteuser() {
                    try {
                        let response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${delID}`)
                        // if (!response.ok) {
                        //     console.log("Not Ok")
                        // }
                        console.log("Sucessfully Deleted")
                        return console.log(response.data)
                    }
                    catch (error) {
                        console.error(`Error : ${error}`)

                    }
                    finally {
                        console.log(`Delete atemp complete`)
                    }
                }
                deleteuser()

            })
            ///////////////////////////////////////////////////////////////////////////////////////
            editBtnTag.addEventListener("click", () => {
                console.log(nameTag.value)
                nameTag.disabled = false
                emailTag.disabled = false

                let saveBtn = document.createElement("button")
                saveBtn.textContent = 'Save'
                block.appendChild(saveBtn)


                saveBtn.addEventListener("click", (event) => {
                    event.preventDefault()

                    nameTag.disabled = true
                    emailTag.disabled = true
                    saveBtn.remove()
                    console.log(nameTag.value)
                    console.log(emailTag.value)
                })
            })
        });

        document.body.appendChild(userDataDiv)
        console.log(newdata)
     }
    catch (error) {
        console.error('error', error.message)
    }
    finally {
        console.log("one Attempt complete")
    }
}

mocApi()