const url = new URL(location.href);
let q = url.searchParams.get("q");
const div = document.querySelector("#images")
const options = {
    method: 'GET',
    headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': 'API-KEY',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
};

fetch(`https://google-search3.p.rapidapi.com/api/v1/image/q=${q}`, options)
    .then(response => response.json())
    .then(response => {
        let html = "";
        response.image_results.forEach((element) => {
            console.log(element);
            let image = `
                 <div class="image">
            <a href="${element.link.href}">
                <img src="${element.image.src}" alt="">
            </a>
        </div>
            `
            html += image

        })
        div.innerHTML = html
    })
    .catch(err => console.error(err));