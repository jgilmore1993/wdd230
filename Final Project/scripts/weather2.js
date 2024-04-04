// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
let lat = 20.4230
let lon = -86.9223
const apiKey = 'ad62857b9636992224b8ca8bd61b0725';
// const cityId = 'YOUR_CITY_ID'; // Replace 'YOUR_CITY_ID' with the ID of your city
// const apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
// const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;


document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

// fetch(apiUrlCurrent).then((response) => response.json()).then((jsObject) => {displayCurrentWeather(jsObject);});

// fetch(apiUrlForecast).then((response) => response.json()).then((jsObject) => {displayForecastWeather(jsObject);});

function fetchWeatherData() {
    // Fetch current weather data
    fetch(api)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data);
            // Fetch forecast data
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
        })
        .then(response => response.json())
        .then(forecastData => {
            displayForecastWeather(forecastData);
        })
        .catch(error => console.error(error));
}

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

function displayForecastWeather(forecastData) {
    const forecastContainer  = document.getElementById('weather-card');
    const tomorrowForecast = forecastData.list.find(forecast => {
        const forecastDate = new Date(forecast.dt * 1000);
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return forecastDate.getHours() === 15 && forecastDate.getDate() === tomorrow.getDate();
    });

    if (tomorrowForecast) {
    const forecastHTML = `
        <h3>Tomorrow's Forecast at 15:00 (3:00 PM)</h3>
        <p><strong>Temperature:</strong> ${tomorrowForecast.main.temp}&deg;F</p>
        <p><strong>Conditions:</strong> ${tomorrowForecast.weather[0].main} - ${tomorrowForecast.weather[0].description}</p>
        <img src="http://openweathermap.org/img/w/${tomorrowForecast.weather[0].icon}.png" alt="Weather Icon" />
    `;
    forecastContainer.innerHTML += forecastHTML;
} else {
    console.error('Failed to find forecast for the next day at 3:00 PM');
}
}

// console.log("Hello")
// fetch(api).then(
//     (Response)=>Response.json())
//     .then((Response)=>{
//         displayCurrentWeather(Response)
//         console.log("Hello")
//     })
