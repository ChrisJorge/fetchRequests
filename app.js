async function getCat(){

    let container = document.querySelector('.imgContainer')
    let image = document.createElement('img')
    image.setAttribute('class', 'cat')
    

    let response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0`);
    let data = await response.json();
    let url = data[0].url

    image.setAttribute('src', url)
    container.append(image)

}


async function getMultipleCats(){

    let container = document.querySelector('.imgContainer')

    let response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8&api_key=live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0`);
    let data = await response.json();
    let url = data[0].url

    image.setAttribute('src', url)

}

const removeImages = () => {
    let container = document.querySelector('.imgContainer')
    let images = []
    for(i = 0; i < document.querySelectorAll('.cat').length; i++)
    {
        let image = document.querySelectorAll('.cat')[i];
        images.push(image);
        // console.log('removing' + image)
        // image.remove()
    }

    for(i = 0; i < images.length; i++)
    {
        let image = images[i];
        image.remove();
    }
    
}


