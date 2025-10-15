
let form = document.getElementById("form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let submit = document.getElementById("submit")

console.log('before :', form.children)
submit.addEventListener("click", (event) => {
    event.preventDefault()
    let uName = username.value.trim()
    if (username.value.trim() === "" || uName.length <= 2 || email.value.trim() === "" || !email.value.includes("@")) {
        alert(`Please input the valid username or email.`)
        console.log(`error   \n${username.value} \n   ${email.value} `)
    }
    else {

        alert("sucessfully submitted")
        console.log(`error free ${username.value} `)
        console.log(`error free ${email.value} `)


        if (!document.getElementById("passDiv")) {

            let passDiv = document.createElement("div")
            passDiv.setAttribute("id", "passDiv")

            let passInput = document.createElement("input")
            passInput.setAttribute("placeholder", "password")
            passDiv.appendChild(passInput)


            let repassInput = document.createElement("input")
            repassInput.setAttribute("placeholder", "Re-password")
            passDiv.appendChild(repassInput)





            let saveBtn = document.createElement("button")
            saveBtn.textContent = "Save"
            passDiv.appendChild(saveBtn)
            // passValidation = "/^(?=.*[A-Za-z])(?=.*\d).{8,}$/";
            saveBtn.addEventListener("click", (event) => {
                event.preventDefault()
                // console.log(passInput.value.includes(passValidation))



                let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;
                if (!regex.test(passInput.value)) {
                    alert('passward doesnot meets the standards.')
                }
                else {
                    if (passInput.value === repassInput.value) {
                        alert('Sucessfully Saved')
                    } else {
                        alert('Password not matched')
                    }
                }

            })

            form.appendChild(passDiv)
            console.log('after :', form.lastElementChild)
        }

    }
})
