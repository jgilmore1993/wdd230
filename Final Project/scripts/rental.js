fetch('data/rental-prices.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('tbody');

        data.forEach(rental => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = rental.name;
            row.appendChild(nameCell);

            const maxPersonsCell = document.createElement('td');
            maxPersonsCell.textContent = rental.maxPersons;
            row.appendChild(maxPersonsCell);

            const reservationHalfDayCell = document.createElement('td');
            reservationHalfDayCell.textContent = rental.reservationHalfDay;
            row.appendChild(reservationHalfDayCell);

            const reservationFullDayCell = document.createElement('td');
            reservationFullDayCell.textContent = rental.reservationFullDay;
            row.appendChild(reservationFullDayCell);

            const walkInHalfDayCell = document.createElement('td');
            walkInHalfDayCell.textContent = rental.walkInHalfDay;
            row.appendChild(walkInHalfDayCell);

            const walkInFullDayCell = document.createElement('td');
            walkInFullDayCell.textContent = rental.walkInFullDay;
            row.appendChild(walkInFullDayCell);

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error loading rental prices:', error));