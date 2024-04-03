async function getCat(){

    let image = document.querySelector('#cat')

    let response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0`);
    let data = await response.json();
    let url = data[0].url

    image.setAttribute('src', url)

}


async function getMultipleCats(){

    let image = document.querySelector('#cat')

    let response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0`);
    let data = await response.json();
    let url = data[0].url

    image.setAttribute('src', url)

}


