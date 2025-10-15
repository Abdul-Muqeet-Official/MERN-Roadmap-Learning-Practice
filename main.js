
// let heading = document.getElementById("main-heading")
// // console.log(heading)

// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// const { createElement } = require("react");

// let para = document.querySelectorAll(".text")
// // console.log(para.innerHTML)

// heading.innerHTML='DOM is live !'
// // heading.innerHTML='hi'
// // para[1].innerHTML= "fuck u"
// // para.style.backgroundColor = "lightBlue"
// // para.style.color = "grey"

// let div = document.getElementById("daddy").firstChild.innerHTML;

// console.log(div)


// let main = document.getElementById('mainHeading')
// main.setAttribute ("style","color:red")
// main.setAttribute ("className","h1")

// main.id = 'me'
// main.className= 'you'


// console.log(main.classList)


// console.log(main)

// let img = document.getElementById('hi')
// img.setAttribute("src", "./hi.png")
// img.setAttribute("height", "250px")
// // img.setAttribute('width','300px')

// img.classList.add('yes')
// console.log(img)

// console.log(img.classList.contains('yes'))

// Q1
// let msg = document.getElementById("msg")
// console.log(msg.innerHTML)
// msg.innerHTML = 'Hello DOM Master!'
// console.log(msg.innerHTML)

// // Q2
// let img = document.getElementById("photo")
// img.setAttribute("height",'200px')

// console.log(img.src)
// img.src = "./new.jpg"
// console.log(img.src)

// // Q3


// let red = document.getElementById('para')
// console.log(red.className)
// red.classList.remove("red") 
// console.log(red.className)
// red.classList.add("blue")
// console.log(red.className)

// // Q4


// let button = document.getElementById("dark-mode")
// let dark = ()=>{
//     console.log(document.body.classList.toggle("dark"))

//     let heading = document.getElementById("mainHeading")
//     heading.body.classList.toggle("h1_color")

// }
// button.addEventListener('click' , dark)
// let darkMode = ()=>{

//     let btn = document.getElementById('btn')
//     console.log(btn)
//     console.log(btn.innerHTML)
//     document.body.classList.toggle('dark')
// }

// let btn = document.getElementById('btn')
// btn.addEventListener('click',darkMode)





// // pracrtice 2

// let lightBtn = document.getElementById('btn1')
// let darkBtn = document.getElementById('btn2')
// let blueBtn = document.getElementById('btn3')
// let purpleBtn = document.getElementById('btn5')
// let redBtn = document.getElementById('btn4')

// let enableAll = () => {
//     lightBtn.disabled = false
//     darkBtn.disabled = false
//     blueBtn.disabled = false
//     purpleBtn.disabled = false
//     redBtn.disabled = false
// }


// let light = () => {

//     enableAll()

//     document.body.className = 'light'
//     console.log(lightBtn.innerHTML)
//     lightBtn.disabled = true

// }
// lightBtn.addEventListener('mouseover', light)


// let dark = () => {
//     enableAll()
//     document.body.className = 'dark'
//     console.log(darkBtn.innerHTML)
//     darkBtn.disabled = true
// }
// darkBtn.addEventListener('mouseover', dark)

// let blue = (e) => {
//     enableAll()
//     document.body.className = 'blue'
//     console.log(blueBtn.innerHTML , e.clientX)
//     blueBtn.disabled = true
// }
// blueBtn.addEventListener('mouseover', blue)


// let purple = () => {
//     enableAll()
//     document.body.className = 'purple'
//     console.log(purpleBtn.innerHTML)
//     purpleBtn.disabled = true
// }
// purpleBtn.addEventListener('mouseover', purple)

// let red = () => {
//     enableAll()
//     document.body.className = 'red'
//     console.log(redBtn.innerHTML)
//     redBtn.disabled = true
// }
// redBtn.addEventListener('mouseover', red)






// // new parctice 


// let heading = document.getElementById('heading')
// let input = document.getElementById('name')
// let btn = document.getElementById('btn')


// let inputbtn = () =>{

//     heading.innerHTML = input.value

//     console.log(input.value)

//     input.value = "";


// }
// btn.addEventListener('click',inputbtn)

// let input_field = () => {
//     console.log(input.value)
// }
// input.addEventListener('input',input_field)

// let form = document.getElementById("form")

// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     let input = event.target.elements;
//     let username = input.Username.value
//     let email = input.Email.value
//     let password = input.Password.value
//     console.log(username)
//     console.log(email)
//     console.log(password)
//     let data = {
//         username : username,
//         email : email,
//         password : password
//     }
//     console.log(data)
//     alert(`Username : ${data.username} \nEmail : ${data.email} \nPassword : ${data.password}` )
// })



// let box = document.getElementById("box")
// console.log(box.parentElement.children)
// console.log(box.children)
// console.log(box.lastElementChild.previousElementSibling.innerHTML)

// let newDiv = document.createElement("div")
// newDiv.textContent = "hey baby"
// document.body.append(newDiv)
// let count = 1;
// let ul = document.createElement("ul");
// box.lastElementChild.addEventListener("click", () => {

//     let newbtn = document.createElement('button')
//     newbtn.textContent = "fuck"
//     box.appendChild(newbtn)
//     ////////////////////////////////////////////////


//     let li = document.createElement("li");
//     li.textContent = `list no : ${count}`
//     ul.appendChild(li)
//     count = count +1;

// })

// document.body.appendChild(ul)



// for (let i = 1; i <= 3; i++) {

//     let li = document.createElement("li");
//     li.textContent = `Item no : ${i}`
//     ul.appendChild(li)
// }







// let div_2 = document.createElement('div')
// div_2.setAttribute("id" , "naya_div")


// let p = document.createElement('p')
// p.textContent= "bachodi"
// div_2.appendChild(p)
// let btn2 = document.createElement('button')
// btn2.textContent= "bachodi button"
// div_2.appendChild(btn2)

// document.body.appendChild(div_2)


// TODO 

// let addBtn = document.getElementById("addBtn")
// let input = document.getElementById("input")

// addBtn.addEventListener("click", () => {
//     if (input.value.length > 2) {
//         let data = input.value
//         console.log(data)

//         let newDiv = document.createElement("div")

//         let newInput = document.createElement("input")
//         newInput.disabled = true
//         newInput.value = data
//         newDiv.appendChild(newInput)
//         input.value = ""

//         let delBtn = document.createElement("button")
//         delBtn.textContent = "Delete"
//         delBtn.addEventListener('click', () => {
//             newDiv.remove()
//         })
//         newDiv.appendChild(delBtn)

//         let editBtn = document.createElement("button")
//         editBtn.textContent = "Edit"
//         editBtn.addEventListener("click", () => {
//             newDiv.firstElementChild.disabled = false
//             if (newDiv.lastElementChild.innerHTML !== "Save") {
//                 // console.log()

//                 let saveBtn = document.createElement("button")
//                 saveBtn.textContent = "Save"
//                 saveBtn.addEventListener("click", () => {
//                     newDiv.firstElementChild.disabled = true
//                     newDiv.lastElementChild.remove()
//                 })

//                 newDiv.appendChild(saveBtn)
//             }


//         })

//         newDiv.appendChild(editBtn)

//         document.body.appendChild(newDiv)
//     }
//     else {
//         alert("please input the valid thing")
//     }

// })

// forms

// let form = document.getElementById("form")
// let username = document.getElementById("username")
// let email = document.getElementById("email")
// let submit = document.getElementById("submit")

// console.log('before :', form.children)
// submit.addEventListener("click", (event) => {
//     event.preventDefault()
//     let uName = username.value.trim()
//     if (username.value.trim() === "" || uName.length <= 2 || email.value.trim() === "" || !email.value.includes("@")) {
//         alert(`Please input the valid username or email.`)
//         console.log(`error   \n${username.value} \n   ${email.value} `)
//     }
//     else {

//         alert("sucessfully submitted")
//         console.log(`error free ${username.value} `)
//         console.log(`error free ${email.value} `)


//         if (!document.getElementById("passDiv")) {

//             let passDiv = document.createElement("div")
//             passDiv.setAttribute("id", "passDiv")

//             let passInput = document.createElement("input")
//             passInput.setAttribute("placeholder", "password")
//             passDiv.appendChild(passInput)


//             let repassInput = document.createElement("input")
//             repassInput.setAttribute("placeholder", "Re-password")
//             passDiv.appendChild(repassInput)





//             let saveBtn = document.createElement("button")
//             saveBtn.textContent = "Save"
//             passDiv.appendChild(saveBtn)
//             // passValidation = "/^(?=.*[A-Za-z])(?=.*\d).{8,}$/";
//             saveBtn.addEventListener("click", (event) => {
//                 event.preventDefault()
//                 // console.log(passInput.value.includes(passValidation))



//                 let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;
//                 if (!regex.test(passInput.value)) {
//                     alert('passward doesnot meets the standards.')
//                 }
//                 else {
//                     if (passInput.value === repassInput.value) {
//                         alert('Sucessfully Saved')
//                     } else {
//                         alert('Password not matched')
//                     }
//                 }

//             })

//             form.appendChild(passDiv)
//             console.log('after :', form.lastElementChild)
//         }

//     }
// })

// let user1 = {
//     name : 'Abdul Muqeet',
//     age : 22,
//     city : 'Karachi'
// }

// localStorage.setItem('user 1' , JSON.stringify(user1) )

// let output = JSON.parse(localStorage.getItem("user 1"))
// console.log(output.name)

// localStorage.removeItem("user 1")

// // localStorage.getItem('user 1')
// console.log('final',JSON.parse(localStorage.getItem('user 1')))
// 

// let users = [
//   { id: 1, name: "Ali", city: "Karachi" },
//   { id: 2, name: "Sara", city: "Lahore" },
//   { id: 3, name: "Ahmed", city: "Islamabad" }
// ]

// // users.forEach( user =>{
// // console.log(`user : ${user.name}`)
// // })


// let newAry = users.map(x => {
//     return `username : ${x.name}  city : ${x.city} `
// } )
// // console.log(newAry)



// let mypromise = new Promise((resolve , reject)=>{
// let sucess = false;
// if (sucess){
//     resolve("Kaam ho gya ")
// }else{
// reject("kaam var gya")
// }
// })

// mypromise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
// console.log(error)
// })
////////////////////////////////////////////////////////
// let newdata;

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         // console.log(`1st then : ${response.methond})`)
//         return response.json()
//     })
//     .then((data) => {
//         console.log('hello')
//         console.log(data)

//         let userDataDiv = document.createElement("div")

//         // newdata = data
//         data.forEach(user => {
//             let block = document.createElement("div")
//             block.setAttribute("class", "block")
//             userDataDiv.appendChild(block)

//             let idTag = document.createElement('p')
//             idTag.textContent = user.id
//             block.appendChild(idTag)

//             let nameTag = document.createElement('p')
//             nameTag.textContent = user.name
//             block.appendChild(nameTag)

//             let emailTag = document.createElement('p')
//             emailTag.textContent = user.email
//             block.appendChild(emailTag)

//             let deleteBtnTag = document.createElement('button')
//             deleteBtnTag.textContent = "Delete"
//             block.appendChild(deleteBtnTag)


//             deleteBtnTag.addEventListener("click", () => {

//                 let delID = user.id
//                 deleteBtnTag.parentElement.remove()
//                 console.log('giet it', user.id)

//                 fetch(`https://jsonplaceholder.typicode.com/users/${delID}`, {
//                     method: "DELETE"
//                 })
//                     .then((response) => {
//                         return response.json()
//                     })
//                     .then((data) => {
//                         console.log("success fully delete", delID)

//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     })
//             })

//         });

//         document.body.appendChild(userDataDiv)
//         console.log(newdata)

//     })
//     .catch((error) => console.log('error', error))


// let username = document.getElementById("username")
// let email = document.getElementById("email")
// let submit = document.getElementById("submit")

// submit.addEventListener("click" , (event)=>{
//     event.preventDefault()
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         username : username.value,
//         email : email.value
//         // userID : 1
//     })
// })
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log("successfully recieved :" , data)
//     })
//     .catch((error) => {
//         console.log('error', error)
//     })
// })

// console.log('hello')

// setTimeout(() => {
//     console.log("no need")
// }, 2000)

// console.log('buddy')


// let i = 0;
// let timer = setInterval(() => {
//     i++;
//     console.log("t : ", i)
//     if (i === 5) {
//         clearInterval(timer)
//         console.log("stoped")
//     }
// }, 1000)


// let counter = document.getElementById("counter")
// let start = document.getElementById("start")
// let stop = document.getElementById("stop")

// let time;

// start.addEventListener("click", () => {

//     resumeValue=counter.innerHTML;

//     time = setInterval(() => {

//         // resumeValue = counter.innerHTML++
//         counter.innerHTML = Number(counter.innerHTML)+1

//     }, 0.1);

//     console.log("start")
//     start.disabled = true
//     stop.disabled = false

// })

// stop.addEventListener("click", () => {
//     clearInterval(time)
//     stop.disabled = true
//     start.disabled = false
//     console.log("resume ", counter.innerHTML)
//     // resumeValue = 
//     console.log("stop")
// })

// async function data() {
//     console.log('data rendering.....')
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users")
//         if (!response.ok) {
//             throw new Error("Failed...!", response.status)
//         }
//         let fineData = await response.json()

//         // console.log(fineData)
//         if (fineData.length === 0){
//             console.log('data is empty')
//         }
//         console.log(`Data resieved sucessfully`)

//         return fineData
//     }
//     catch (error) {

//         console.error("Error : ", error.message)
//     }
//     finally {
//         console.log(`Data fetch attemp completed .`)

//     }


// }


// async function getdata() {
//     console.log("data requesting >>>>>>")
//     let info = await data()
//     console.log(info)
// }

// getdata();


// import axios from "axios";


// async function data() {
//     try {
//         let info = await axios.get("https://jsonplaceholder.typicode.comd/users")

//         if (!info.ok){
//             console.log("Not Ok")
//         }
//         console.log(`sucessfully fetched.`)
//         console.log(info.data)

//     }
//     catch (error) {
//         console.error("Error :", error.message)

//     }
//     finally {
//         console.log("attempt completed")
//     }
// }

// data()


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

                if (!document.getElementById("save")) {

                    let saveBtn = document.createElement("button")
                    saveBtn.setAttribute("id", "save")
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
                }
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