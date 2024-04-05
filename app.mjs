import { getCatBreeds, getDogBreeds } from "./getData.mjs";

let choice = ''
let catKey = 'live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0'
//  catAPI = 'api.thecatapi.com'
//  dogAPI = 'api.thedogapi.com'
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

// const getCatBreeds = async () => {
//     let response = await fetch(`https://api.thecatapi.com/v1/breeds`)
//     let data = await response.json();
//     removeBreeds()
//     populateBreeds(data)
// }

// const getDogBreeds = async () => {
//     let response = await fetch('https://api.thedogapi.com/v1/breeds')
//     let data = await response.json();
//     removeBreeds()
//     populateBreeds(data)
    
// }

export const populateBreeds = (data) => {
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

export const removeBreeds = () => {
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
    if(num === '' || isNaN(num))
    {
        console.log('No number entered')
        input.value = ''
    }
    let breed = document.querySelector('#breed').value
    option(num,breed)

})

const option = (num, breed) => {
    switch (choice)
    {
        case 'cat':
            generateImages(num,breed,catAPI,catKey)
            break;
        case 'dog':
            generateImages(num,breed,dogAPI,dogKey)
            break;
    }
}

// const generateImages = async (num,breed,API,Key) => {
//     removeImages()
//     let response =  await fetch(`https://${API}/v1/images/search?breed_ids=${breed}&limit=${num}&api_ley=${Key}`)
    
//     let data = await response.json()
//     console.log(data)
//     let container = document.querySelector('.imageContainer')
//     let urls = []
//     for(let i = 0; i < num && i < data.length; i++)
//     {
//         urls.push(data[i].url)
//     }
//     for(let i = 0; i < urls.length; i++)
//     {
//         let image = document.createElement('img')
//         image.setAttribute('class','animal')
//         image.setAttribute('src', urls[i])
//         container.appendChild(image)
//     }

// }

const generateImages = (num,breed,API,Key) => {
    removeImages()
    fetch(`https://${API}/v1/images/search?breed_ids=${breed}&limit=${num}&api_ley=${Key}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.length)
        if(data.length < num)
        {
            num = data.length;
        }
        let container = document.querySelector('.imageContainer')
        let i = 0;
        while(i < num)
        {
            console.log(data[i])
            let image = document.createElement('img')
            image.setAttribute('class','animal')
            image.setAttribute('src', data[i].url)
            container.appendChild(image)
            i++
        }
    })
}

const removeImages = () => {
    let deleteArray = []
    for(let i = 0; i < document.querySelectorAll('.animal').length; i++)
    {
        deleteArray.push(document.querySelectorAll('.animal')[i])
    }
    for(let i = 0; i < deleteArray.length; i ++)
    {
        deleteArray[i].remove()
    }
}