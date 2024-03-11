lat = 43.4666
lon = -112.0341
const apiKey = 'ad62857b9636992224b8ca8bd61b0725'; // Replace YOUR_API_KEY with your actual API key
const city = 'Rochester, NY';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function getweatherData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    displayweather(data)
  }

getweatherData(url)

function displayweather(data){
        let temperature = document.getElementById("temperature")
        let icon = document.getElementById("icon")
        let condition = document.getElementById("condition")

        temperature.innerHTML = data.main.temp
    
        icon.setAttribute('src', weather.imageurl);
        icon.setAttribute('alt', `Portrait of ${weather.name} ${weather.lastname}`); // fill in the blank
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '340');
        icon.setAttribute('height', '440');
        console.log(data.weather)[0][0]
        condition.innerHTML = data.weather[0].desrciption
}