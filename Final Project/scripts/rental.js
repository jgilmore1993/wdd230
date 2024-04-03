// let url = "https://raw.githubusercontent.com/jgilmore1993/wdd230/main/Final%20Project/data/rental-prices.json"
// function rentaldisplay(json){
//     const rentalElement = document.createElement('div');

//     const image = createElement('img');
//     image.setAttributte('src', json.data);
//     const rentalsContainer = document.getElementById('rental');
//     rentalsContainer.appendChild(rentalElement);
//     console.log("test the rentals")
// };

// fetch('data/rental-prices.json')
//     .then((response) => response.json())
//     .then((data) => {
//         const list = data['rentals']
//         list.forEach(rentaldisplay)
//     })
//     .catch(error => {
//         console.error('Error loading rental prices:', error);
//       });

function rentaldisplay(rental) {
    const rentalElement = document.createElement('div');
    rentalElement.classList.add('rental-item'); // Add a class for styling
  
    const heading = document.createElement('h2');
    heading.textContent = rental.rental_type;
    rentalElement.appendChild(heading);
    
    const image = document.createElement('img');
    image.setAttribute('src', rental.img_src);
    image.setAttribute('alt', rental.rental_type);
    image.setAttribute('height', 200); // Set image height to 200px
    image.setAttribute('width', 200); // Set image width to 200px
    image.setAttribute('loading', 'lazy');
    rentalElement.appendChild(image);
    
    const maxPersonsElement = document.createElement('p');
    maxPersonsElement.textContent = `Max. Persons: ${rental.maxPersons}`;
    rentalElement.appendChild(maxPersonsElement);
  
    const priceInfo = document.createElement('div');
    priceInfo.classList.add('price-info');
  
    const reservationPrices = document.createElement('div');
    reservationPrices.textContent = `Reservation: Half Day (3 hrs): ${rental.reservationHalfDay}, Full Day: ${rental.reservationFullDay}`;
    priceInfo.appendChild(reservationPrices);
  
    const walkinPrices = document.createElement('div');
    walkinPrices.textContent = `Walk-In: Half Day (3 hrs): ${rental.walkinHalfDay}, Full Day: ${rental.walkinFullDay}`;
    priceInfo.appendChild(walkinPrices);
  
    rentalElement.appendChild(priceInfo);
  
    const rentalsContainer = document.getElementById('rental');
    rentalsContainer.appendChild(rentalElement);
  }

  fetch('data/rental-prices.json')
  .then((response) => response.json())
  .then((data) => {
    const list = data['rentals'];
    list.forEach(rentaldisplay);
  })
  .catch(error => {
    console.error('Error loading rental prices:', error);
  });