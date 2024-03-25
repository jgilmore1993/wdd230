let button = document.getElementById("darkmode")
let main = document.querySelector("main")
let body = document.querySelector("body")
button.addEventListener("click", ()=>{
    main.classList.toggle("darkmode")
    body.classList.toggle("darkmode")
})
