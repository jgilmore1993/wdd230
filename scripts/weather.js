lat = 43.4666
lon = -112.0341
const apiKey = 'ad62857b9636992224b8ca8bd61b0725'; // Replace YOUR_API_KEY with your actual API key
const city = 'Rochester, NY';
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

async function getweatherData(url) {

     const response = await fetch(url);
     const data = await response.json();

     displayweather(data)
  }

getweatherData(url)

function displayweather(data){
  
  let weather = document.getElementById("weather")
        for (let i=0; i<3; i++){
          console.log("start")
        let card = document.createElement("div")
        let temperature = document.createElement("p")
        let icon = document.createElement("img")
        let condition = document.createElement("p")

        let forecast = document.createElement("p")

        temperature.innerHTML = `The temperature is: ${data.list[i].main.temp}`
        forecast.innerText = ""
        console.log("the data is")
        console.log(data.list[i])
        icon.setAttribute('src', `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`);
        icon.setAttribute('alt', `icon of ${data.list[i].weather[0].description} `); // fill in the blank
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '40');
        icon.setAttribute('height', '40');

        condition.innerHTML = `The condition is: ${data.list[i].weather[0].description}`
        card.append(temperature)
        card.append(icon)
        card.append(condition)
        card.append(forecast)
        console.log("finished")
        weather.append(card)
      }
};

let banner = document.getElementById("banner")
let button = document.getElementById("bannerbutton")
button.addEventListener("click", ()=>{
  banner.classList.add("gone")
})
// Create a new Date object for the current date and time
var today = new Date();

// Call the getDay() method on the Date object
var dayOfWeek = today.getDay();
if(!dayOfWeek==1||!dayOfWeek==2||!dayOfWeek==3){
  banner.classList.add("gone")
}
// const apiURL = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
// fetch(apiURL)
//     .then(response => response.json())
//     .then(jsObject => {
//         const threedayforecast = jsObject.list.filter(x => x.dt_txt.includes('15:00:00'));
//         console.log(threedayforecast);
        let day = 0;
        const weekdays = ['Mon', 'Tue', 'Wed'];
        //threedayforecast.forEach(forecast => {
//            const d = new Date(forecast.dt_txt);
  //          document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    //        document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp_max;
      //      day++;
       // });