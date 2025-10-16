import { db } from "./firebase.js";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

let username = document.getElementById("username")
let email = document.getElementById("email")
let addBtn = document.getElementById("addBtn")
let getDataBtn = document.getElementById("getData")

let papaDiv = document.getElementById("papaDiv")
let realdata;


getDataBtn.addEventListener("click", () => {
    console.log("data is getting...")
    getData()

})

addBtn.addEventListener("click", () => {
    addData()
    displayData()
    username.value = ""
    email.value = ""
})




async function addData() {
    if (!(username.value && email.value)) {
        alert("please add the data.")
    }
    else {
        console.log("Adding Data... ")
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: username.value,
                email: email.value

            });
            console.log("Document written with ID: ", docRef.id);
            console.log("Sucessfully Added");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

}

async function displayData() {

    papaDiv.innerHTML = ""

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {

        realdata = doc.data()
        let id = doc.id

        let innerDiv = document.createElement("div")

        let usernameTag = document.createElement("input")
        usernameTag.value = realdata.name
        innerDiv.appendChild(usernameTag)
        usernameTag.disabled = true

        let emailTag = document.createElement("input")
        emailTag.value = realdata.email
        innerDiv.appendChild(emailTag)
        emailTag.disabled = true

        let updateBtn = document.createElement("button")
        updateBtn.innerText = "Update"
        innerDiv.appendChild(updateBtn)

        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        innerDiv.appendChild(deleteBtn)

        papaDiv.appendChild(innerDiv)

        updateBtn.addEventListener("click", () => {

            console.log(usernameTag.value)
            usernameTag.disabled = false
            emailTag.disabled = false

            let saveBtn = document.createElement("button")
            saveBtn.textContent = 'Save'
            innerDiv.appendChild(saveBtn)


            saveBtn.addEventListener("click", (event) => {
                event.preventDefault()

                usernameTag.disabled = true
                emailTag.disabled = true
                saveBtn.remove()
                console.log(usernameTag.value)
                console.log(emailTag.value)


                updateData(id, usernameTag.value, emailTag.value)

            })

        })

        console.log("username :", realdata.name);

        deleteBtn.addEventListener("click", () => {


            innerDiv.remove()
            deleteData(id)

        })

    });
}


async function updateData(id, updateName, updateEmail) {
    try {
        const docRef = await updateDoc(doc(db, "users", id), {
            username: updateName,
            email: updateEmail
        });
        console.log("Document written with ID: ", docRef.id);
        console.log("Sucessfully Updated");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}



async function deleteData(id) {
    await deleteDoc(doc(db, "users", id));
    console.log("❌ Document deleted:", id);
}