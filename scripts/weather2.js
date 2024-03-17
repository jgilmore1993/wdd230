function getThreeDayForecast(lat, lon, apiKey) {
    // Base URL for the One Call API endpoint
    console.log("forecast")
    const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    
    // Parameters for the request
    const params = new URLSearchParams({
      lat: lat, // Latitude
      lon: lon, // Longitude
      exclude: 'current,minutely,hourly,alerts', // Exclude data not needed for the 3-day forecast
      appid: apiKey, // Your OpenWeather API key
      units: 'metric' // Units of measurement. 'metric' or 'imperial'
    });
  
    // Make the request to the OpenWeather API
    fetch(`${baseUrl}?${params}`, {
      method: 'GET', // The HTTP method
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // The forecast for the next 3 days is in data.daily[0], data.daily[1], and data.daily[2]
        for (let i = 1; i <= 3; i++) {
          console.log(`Day ${i}:`, data.daily[i]);
          let forecast = document.getElementById("forecast")
          forecast.innerHTML = `Day ${i}:`, data.daily[i]
          
          // Here you could process each day's forecast data as needed
        }
      })
      .catch(error => console.error('Error fetching weather forecast:', error)); // Handle any errors
    }
    
    // Example usage of the function
    const Keys = 'ad62857b9636992224b8ca8bd61b0725'; // Replace with your actual API key
    const latitude = 43.4666; // Example latitude (e.g., New York City)
    const longitude = -112.0341; // Example longitude (e.g., New York City)
    
    getThreeDayForecast(latitude, longitude, Keys);