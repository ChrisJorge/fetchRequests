import { removeBreeds, populateBreeds } from "./app.mjs";
export const getCatBreeds = async () => {
    let response = await fetch(`https://api.thecatapi.com/v1/breeds`)
    let data = await response.json();
    removeBreeds()
    populateBreeds(data)
}

export const getDogBreeds = async () => {
    let response = await fetch('https://api.thedogapi.com/v1/breeds')
    let data = await response.json();
    removeBreeds()
    populateBreeds(data)
    
}


