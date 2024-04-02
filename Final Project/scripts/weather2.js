// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
let lat = 20.4230
let lon = -86.9223
const apiKey = 'ad62857b9636992224b8ca8bd61b0725';
const cityId = 'YOUR_CITY_ID'; // Replace 'YOUR_CITY_ID' with the ID of your city
const apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;


document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

// function fetchWeatherData() {
//     // Fetch current weather
//     fetch(apiUrlCurrent)
//         .then(response => response.json())
//         .then(data => {
//             displayCurrentWeather(data);
//         })
//         .catch(error => console.error('Error fetching current weather:', error));

//     // Fetch weather forecast
//     fetch(apiUrlForecast)
//         .then(response => response.json())
//         .then(data => {
//             const today = new Date();
//             const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)); // Tomorrow's date
//             const forecastForTomorrow = data.list.filter(forecast => {
//                 const forecastDate = new Date(forecast.dt_txt);
//                 return (
//                     forecastDate.getDate() === tomorrow.getDate() &&
//                     forecastDate.getHours() === 15 // 3:00 PM
//                 );
//             });
//             if (forecastForTomorrow.length > 0) {
//                 displayForecastWeather(forecastForTomorrow[0]); // Display next day's 3:00 PM forecast
//             }
//         })
//         .catch(error => console.error('Error fetching weather forecast:', error));
// }

fetch(apiUrlCurrent).then((response) => response.json()).then((jsObject) => {displayCurrentWeather(jsObject);});

fetch(apiUrlForecast).then((response) => response.json()).then((jsObject) => {displayForecastWeather(jsObject);});

function displayCurrentWeather(data) {
    let logolink = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let description = document.createElement("h3")
    let humidity = document.createElement("h3")
    description.textContent = data.weather[0].description
    const weather = document.createElement("h2")
    const logo = document.createElement("img")
    weather.textContent = data.main.temp
    logo.setAttribute("src", logolink)
    logo.setAttribute("alt", "logo")
    humidity.textContent = "humidity is: " + data.main.humidity + "%"
    document.querySelector(".weather-card").appendChild(logo)
    document.querySelector(".weather-card").appendChild(weather)
    document.querySelector(".weather-card").appendChild(description)
    document.querySelector(".weather-card").appendChild(humidity)
    // console.log("Hello")
    // const weatherWidget = document.getElementById('weather-card');
    // const currentWeatherHTML = `
    //     <h3>Current Weather</h3>
    //     <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    //     <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    //     <p><strong>Conditions:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>
    //     <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon" />
    // `;
    // weatherWidget.innerHTML = currentWeatherHTML;
}

function displayForecastWeather(data) {
    const weatherWidget = document.getElementById('weather-card');
    const forecastHTML = `
        <h3>Tomorrow's Forecast at 15:00 (3:00 PM)</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Conditions:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon" />
    `;
    weatherWidget.innerHTML += forecastHTML;

}

console.log("Hello")
fetch(api).then(
    (Response)=>Response.json())
    .then((Response)=>{
        displayCurrentWeather(Response)
        console.log("Hello")
    })