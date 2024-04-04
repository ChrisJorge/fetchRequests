let choice = ''
let catKey = 'live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0'
let dogKey = 'live_miWXmUoqhhniToejnnhsfn36mc1V8l9ceiqWpOj74WOjJ8e9Bug0OI7JZIBFN5nU'
document.querySelector('#cat').addEventListener('click', (event) => {
    choice = (event.target.attributes[1].value);
    getBreeds(choice)
})
document.querySelector('#dog').addEventListener('click', (event) => {
    choice = (event.target.attributes[1].value)
    getBreeds(choice)
})


const getBreeds = (choice) => {
    switch (choice)
    {
        case 'cat':
            getCatBreeds();
            break;
        case 'dog':
            getDogBreeds();
            break;
    }
}

const getCatBreeds = async () => {
    let response = await fetch(`https://api.thecatapi.com/v1/breeds`)
    let data = await response.json();
    removeBreeds()
    populateBreeds(data)
}

const getDogBreeds = async () => {
    let response = await fetch('https://api.thedogapi.com/v1/breeds')
    let data = await response.json();
    removeBreeds()
    populateBreeds(data)
    
}

let populateBreeds = (data) => {
    let container = document.querySelector('select');
    for(let i = 0; i < data.length; i++)
        {
            let option = document.createElement('option');
            option.setAttribute('class', 'breed')
            option.value = data[i].id;
            option.text = data[i].name;
            container.appendChild(option)
        }
}
const removeBreeds = () => {
    let deleteArray = [];
    for(let i = 0; i < document.querySelectorAll('.breed').length; i++)
    {
        let option = document.querySelectorAll('.breed')[i]
        deleteArray.push(option)
    }

    for(let i = 0; i < deleteArray.length; i++)
    {
        deleteArray[i].remove()
    }
}


document.querySelector('.generate').addEventListener('click', () => {
    let input = document.querySelectorAll('input')[2]
    let num = input.value;
    input.value = ''
    let breed = document.querySelector('#breed').value


})

// async function getCat(){

//     let container = document.querySelector('.imgContainer')
//     let image = document.createElement('img')
//     image.setAttribute('class', 'cat')
    

//     let response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0`);
//     let data = await response.json();
//     let url = data[0].url

//     image.setAttribute('src', url)
//     container.append(image)

// }

// let num = 6

// async function getMultipleCats(){

//     let container = document.querySelector('.imgContainer')

//     let response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${num}&api_key=live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0`);
//     let data = await response.json();
//     let url = data
//     let urls = []
//     for(i = 0; i < data.length; i++)
//     {
//         let url = data[i].url;
//         urls.push(url);
//     }
   
//     for(i = 0; i < urls.length; i++)
//     {
//         let image = document.createElement('img')
//         image.setAttribute('class', 'cat')
//         let url = urls[i];
//         image.setAttribute('src', url)
//         container.append(image)
//     }


// }

// const removeImages = () => {
//     let container = document.querySelector('.imgContainer')
//     let images = []
//     for(i = 0; i < document.querySelectorAll('.cat').length; i++)
//     {
//         let image = document.querySelectorAll('.cat')[i];
//         images.push(image);
//         // console.log('removing' + image)
//         // image.remove()
//     }

//     for(i = 0; i < images.length; i++)
//     {
//         let image = images[i];
//         image.remove();
//     }
    
// }


