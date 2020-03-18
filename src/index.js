document.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    fetchBreeds()
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const fetchImages = () => {
    return fetch(imgUrl)
    .then(response => response.json())
    .then(response => {
        images = response.message
        addImages(images)
    })
}

const addImages = (images) => {
    const imgContainer = document.getElementById('dog-image-container')
    images.forEach(image => {
        const img = document.createElement('img')
        img.setAttribute('src', image)
        imgContainer.appendChild(img)
    })
}

const fetchBreeds = () => {
    return fetch(breedUrl)
    .then(response => response.json())
    .then(response => {
        const breeds = response.message
        addBreeds(breeds)
        filterBreeds(breeds)
    })
}


const addBreeds = (breeds) => {
    const breedUl = document.getElementById('dog-breeds')
    for ( const breed in breeds) {
        const li = document.createElement('li')
        li.innerText = breed
        
        if (breeds[breed]) {
            for (const element of breeds[breed]) {
                const innerUl = document.createElement('ul')
                const innerLi = document.createElement('li')
                innerLi.innerText = element
                innerUl.appendChild(innerLi)
                li.appendChild(innerUl)
                breedUl.appendChild(li)
            }
        }
        breedUl.appendChild(li)
    }
    colorOnClick()
}

const colorOnClick = () => { 
    document.getElementById('dog-breeds').addEventListener('click', (event) => {
        if (event.target.style.color === 'black' || !event.target.style.color) {
            event.target.style.color = 'red'
        } else {
            event.target.style.color = 'black'
        }
    })
}

const filterBreeds = (breeds) => {
    document.getElementById('breed-dropdown').addEventListener('change', (event) => {
        const breedUl = document.getElementById('dog-breeds')
        breedUl.innerHTML = ''
        for (const breed in breeds) {
            if (breed.startsWith(event.target.value)) {
                const li = document.createElement('li')
                li.innerText = breed
        
                if (breeds[breed]) {
                    for (const element of breeds[breed]) {
                        const innerUl = document.createElement('ul')
                        const innerLi = document.createElement('li')
                        innerLi.innerText = element
                        innerUl.appendChild(innerLi)
                        li.appendChild(innerUl)
                        breedUl.appendChild(li)
                    }
                }
            breedUl.appendChild(li)
            }
        }
    })
}
