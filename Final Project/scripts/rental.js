let url = "https://raw.githubusercontent.com/jgilmore1993/wdd230/main/Final%20Project/data/rental-prices.json"

fetch('data/rental-prices.json')
    .then(response => response.json())
    .then(data => {
        const rentalsContainer = document.getElementById('rentals-container');

        data.forEach(rental => {
            const rentalElement = document.createElement('div');
            rentalElement.innerHTML =`
            <h1>Available Rental Options</h1>
            <h2>Honda Metro Scooter</h2>
            <img src="./images/honda-metro-scooter.jpg" height="200" width="200" alt="Honda Metro Scooter" loading="lazy">
            <h2>Max. Persons: 1</h2>
            <h2>Reservation</h2>
            <h3>Half Day (3 hrs): $20</h3>
            <h3>Full Day: $30</h3>
            <h2>Walk-In</h2>
            <h3>Half Day (3 hrs): $25</h3>
            <h3>Full Day: $35</h3><br><br>
            
            <h2>Honda Dio Scooter</h2>
            <img src="./images/honda-dio-scooter.jpg" height="200" width="200" alt="Honda Dio Scooter" loading="lazy">
            <h2>Max. Persons: 2</h2>
            <h2>Reservation</h2>
            <h3>Half Day (3 hrs): $30</h3>
            <h3>Full Day: $40</h3>
            <h2>Walk-In</h2>
            <h3>Half Day (3 hrs): $35</h3>
            <h3>Full Day: $45</h3><br><br>

            <h2>Honda PCX150 Scooter</h2>
            <img src="./images/honda-pcx150-scooter.jpg" height="200" width="200" alt="Honda PCX150 Scooter" loading="lazy">
            <h2>Max. Persons: 2</h2>
            <h2>Reservation</h2>
            <h3>Half Day (3 hrs): $40</h3>
            <h3>Full Day: $50</h3>
            <h2>Walk-In</h2>
            <h3>Half Day (3 hrs): $45</h3>
            <h3>Full Day: $55</h3><br><br>

            <h2>Honda Pioneer ATV</h2>
            <img src="./images/honda-pioneer-atv.jpg" height="200" width="200" alt="Honda Pioneer ATV" loading="lazy">
            <h2>Max. Persons: 4</h2>
            <h2>Reservation</h2>
            <h3>Half Day (3 hrs): $50</h3>
            <h3>Full Day: $70</h3>
            <h2>Walk-In</h2>
            <h3>Half Day (3 hrs): $60</h3>
            <h3>Full Day: $80</h3><br><br>

            <h2>Jeep Wrangler - 4 door with a/c</h2>
            <img src="./images/jeep-wrangler-4-door-with-ac.jpg" height="200" width="200" alt="Jeep Wrangler - 4 door with a/c" loading="lazy">
            <h2>Max. Persons: 5</h2>
            <h2>Reservation</h2>
            <h3>Half Day (3 hrs): $70</h3>
            <h3>Full Day: $100</h3>
            <h2>Walk-In</h2>
            <h3>Half Day (3 hrs): $85</h3>
            <h3>Full Day: $125</h3><br><br>

            <h2>Jeep Wrangler - 2 door</h2>
            <img src="./images/jeep-wrangler-2-door.jpg" height="200" width="200" alt="Jeep Wrangler - 2 door" loading="lazy">
            <h2>Max. Persons: 4</h2>
            <h2>Reservation</h2>
            <h3>Half Day (3 hrs): $60</h3>
            <h3>Full Day: $85</h3>
            <h2>Walk-In</h2>
            <h3>Half Day (3 hrs): $70</h3>
            <h3>Full Day: $125</h3>
            `;
            // const nameCell = document.createElement('td');
            // nameCell.textContent = rental.name;
            // row.appendChild(nameCell);

            // const maxPersonsCell = document.createElement('td');
            // maxPersonsCell.textContent = rental.maxPersons;
            // row.appendChild(maxPersonsCell);

            // const reservationHalfDayCell = document.createElement('td');
            // reservationHalfDayCell.textContent = rental.reservationHalfDay;
            // row.appendChild(reservationHalfDayCell);

            // const reservationFullDayCell = document.createElement('td');
            // reservationFullDayCell.textContent = rental.reservationFullDay;
            // row.appendChild(reservationFullDayCell);

            // const walkInHalfDayCell = document.createElement('td');
            // walkInHalfDayCell.textContent = rental.walkInHalfDay;
            // row.appendChild(walkInHalfDayCell);

            // const walkInFullDayCell = document.createElement('td');
            // walkInFullDayCell.textContent = rental.walkInFullDay;
            // row.appendChild(walkInFullDayCell);

            // tableBody.appendChild(row);
            rentalsContainer.appendChild(rentalElement);
        });
    })
    .catch(error => {
        console.error('Error loading rental prices:', error);
      });