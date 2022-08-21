const btn = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#container")
const spinner = document.querySelector("#spinner")
btn.addEventListener("click", () => {
    spinner.style.display = "block"
    const options = {
        method: 'GET',
        headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Key': 'API-KEY',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
    };

    fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${input.value}&num=50`, options)
        .then(response => response.json())
        .then(response => {
            let html = "";
            response.results.forEach((element) => {
                let resultDiv = `
                <div class="result">
            <p id="domain">${element.link}</p>
            <a href="${element.link}">
                <h2 id="title">${element.title}</h2>
            </a>
            <p id="description">${element.description}
            </p>
        </div>
            `
                html += resultDiv
            })
            spinner.style.display = "none"
            container.innerHTML = html
        })
        .catch(err => console.error(err));

})

