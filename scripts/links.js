const baseURL = "https://github.com/jgilmore1993/wdd230";

const linksURL = "https://raw.githubusercontent.com/jgilmore1993/wdd230/main/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();

  async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  function displayLinks(weeks) {
    // Code to display links based on the weeks array will go here
  }
  