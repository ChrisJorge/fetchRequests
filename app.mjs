import { getCatBreeds, getDogBreeds } from "./getData.mjs";
import { generateImages } from "./modifyData.mjs";
let choice = ''
let catKey = 'live_EVIFKqr3kKyNyRunYe4OKiDD8BrFaHdU1KgTRuPBJNIYyr0ktGjz69IQ8dHARLr0'
let catAPI = 'api.thecatapi.com'
let  dogAPI = 'api.thedogapi.com'
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
