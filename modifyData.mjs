
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


export const generateImages = (num,breed,API,Key) => {
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