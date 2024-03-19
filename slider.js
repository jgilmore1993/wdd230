const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

let pwd = document.getElementById("pwd")
let pwd2 = document.getElementById("pwd2")

pwd2.addEventListener("blur", ()=>{
    if(pwd.value!=pwd2.value){
        alert("passwords must match")
    }
})