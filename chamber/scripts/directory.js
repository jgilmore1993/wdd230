let url = "https://raw.githubusercontent.com/jgilmore1993/wdd230/main/data/members.json"

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.companies)
    displayMembers(data.companies)
}

function displayMembers(data){
    let cards = document.getElementById("cardholder")
    data.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let img = document.createElement('img');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let membership = document.createElement('p');
        let info = document.createElement('p');
        let website = document.createElement('a');
    
        fullName.textContent = `${member.name}`; // fill in the blank
        address.textContent = member.address
        phonenumber.textContent = member.phone_number
        
        // Build the image portrait by setting all the relevant attributes
        img.setAttribute('src', member.image_icon_file_name);
        img.setAttribute('alt', `Portrait of ${member.name}`); // fill in the blank
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');
    
        website.setAttribute("href", member.website_url)
        website.textContent = member.website_url
        membership.textContent = member.membership_level
        info.textContent = member.other_info
        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(img)
        card.appendChild(address)
        card.appendChild(phonenumber)
        card.appendChild(membership)
        card.appendChild(info)
        card.appendChild(website)
    
        cards.appendChild(card);
      }); // end of arrow function and forEach loop
}

getMemberData(url)

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cardholder");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}