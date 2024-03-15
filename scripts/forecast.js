// const apiURL = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
// fetch(apiURL)
//     .then(response => response.json())
//     .then(jsObject => {
//         const threedayforecast = jsObject.list.filter(x => x.dt_txt.includes('15:00:00'));
//         console.log(threedayforecast);
//         let day = 0;
//         const weekdays = ['Mon', 'Tue', 'Wed'];
//         threedayforecast.forEach(forecast => {
//             const d = new Date(forecast.dt_txt);
//             document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
//             document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp_max;
//             day++;
//         });
//     })