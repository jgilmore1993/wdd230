// getDates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer's first paragraph
const currentYearSpan = document.getElementById('currentYear');
currentYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);

// Set the last modified date in the second paragraph
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = 'Last modified: ' + lastModified.toLocaleString();

document.querySelector("p").textContent = document.lastModified;

const hamburger = document.querySelector(".navigation");
const navMenu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navMenu.classList.toggle("show");
})