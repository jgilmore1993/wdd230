const baseURL = "https://github.com/jgilmore1993/wdd230";

const linksURL = "https://raw.githubusercontent.com/jgilmore1993/wdd230/main/data/links.json";

async function getLinks() {
    
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data)

  }
  
  getLinks();


  function displayLinks(weeks) {
    let ul = document.getElementById("lessons")

    weeks.lessons.forEach(lesson => {
        let li = document.createElement("li")
        let a = document.createElement("a")
        li.innerHTML = lesson.lesson + ": "
        a.setAttribute("href", lesson.links[0].url)
        a.innerHTML = lesson.links[0].title
        li.appendChild(a)
        ul.appendChild(li)
    });
    
  }
  