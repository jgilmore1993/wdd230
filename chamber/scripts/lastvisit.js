// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

// initialize display elements
const lastvisit = document.querySelector("#lastvisit");

// processing
const today = Date.now();
let lastday = Number(window.localStorage.getItem("lastvisit")) || 0;
// find difference between epoch times in ms and convert to days
let days = (lastday - Date.now()) / msToDays;
// if If this is the user's first visit, display .
// If the amount of time between visits is less than a day, display .
// Otherwise, display the number of days in a message like this: , where n is the actual, whole number of days between visits. If the number of days is 1, then change the language to "day" not "days".
if(!window.localStorage.getItem("lastvisit")){
    lastvisit.innerHTML = "Welcome! Let us know if you have any questions."
}
else if (days < 1){
    lastvisit.innerHTML = "Back so soon! Awesome!"
}
else {
    lastday.innerHTML = `You last visited ${days} days ago.`
}
window.localStorage.setItem("lastvisit", today)