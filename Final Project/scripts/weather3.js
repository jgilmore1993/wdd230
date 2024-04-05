// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
let lat = 20.4230
let lon = -86.9223
const apiKey = 'ad62857b9636992224b8ca8bd61b0725';
const cityId = '3530103'; // Replace 'YOUR_CITY_ID' with the ID of your city
const apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;


document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

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

}

function displayForecastWeather(forecastData) {
    const forecastContainer = document.querySelector('.weather-card');
    if (!forecastContainer) {
        console.error('Forecast container not found');
        return;
    }

    // Find tomorrow's date
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    // Find the forecast closest to 3:00 PM local time for the location
    let closestForecast = forecastData.list.reduce((closest, forecast) => {
        const forecastTime = new Date(forecast.dt_txt);
        const hourDiff = Math.abs(forecastTime - tomorrow.setHours(15, 0, 0, 0));
        if (closest === null || hourDiff < closest.hourDiff) {
            return { hourDiff, forecast };
        }
        return closest;
    }, null);
    console.log(closestForecast);

    if (closestForecast && closestForecast.forecast) {
        const forecast = closestForecast.forecast;
    const forecastHTML = `
        <h3>Tomorrow's Forecast at 15:00 (3:00 PM)</h3>
        <p><strong>Temperature:</strong> ${closestForecast.forecast.main.temp}&deg;F</p>
        <p><strong>Conditions:</strong> ${closestForecast.forecast.weather[0].main} - ${closestForecast.forecast.weather[0].description}</p>
        <img src="http://openweathermap.org/img/w/${closestForecast.forecast.weather[0].icon}.png" alt="Weather Icon" />
    `;
    forecastContainer.innerHTML += forecastHTML;
} else {
    console.error('Failed to find forecast for the next day at 3:00 PM');
}
}