let btn = document.querySelectorAll(".numbtn")
let input = document.getElementById("input")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")

console.log(equal)

let every_btn = btn.forEach((btn)=>{
    
    btn.addEventListener("click",()=>{      
        input.value = input.value + btn.innerHTML
        console.log(input.value) 
    })
})

equal.addEventListener("click", ()=>{
    try{
        let expression = eval(input.value)
    input.value = expression
    console.log(expression) 
    }
    catch{
        input.value='Error'
    }
})

clear.addEventListener("click",()=>{
    input.value = ""
    // input.preventDefault()
})