function calculatewindchill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
}
let windchill = document.getElementById("windchill")
let windspeed = document.getElementById("windspeed")
let tempurate = document.getElementById("Tempurate")

let temp_=60
let windspeed_=3
let windchill_=calculatewindchill(temp_, windspeed_)

windspeed.textContent=windspeed_
tempurate.textContent=temp_


if (temp_<=50 & windspeed_>=3) {
    windchill.textContent=windchill_
} else {
    windchill.textContent = "n/a"
}