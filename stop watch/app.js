let counter = document.getElementById("counter")
let start = document.getElementById("start")
let stop = document.getElementById("stop")

let time;

start.addEventListener("click", () => {

    resumeValue=counter.innerHTML;

    time = setInterval(() => {

        // resumeValue = counter.innerHTML++
        counter.innerHTML = Number(counter.innerHTML)+1

    }, 0.1);
    
    console.log("start")
    start.disabled = true
    stop.disabled = false

})

stop.addEventListener("click", () => {
    clearInterval(time)
    stop.disabled = true
    start.disabled = false
    console.log("resume ", counter.innerHTML)
    // resumeValue = 
    console.log("stop")
})
