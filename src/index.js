document.addEventListener('DOMContentLoaded', (event) => {
    console.log('%c DOM IS LOADED', 'color: firebrick')
    fecthImgs()
    fetchBreeds()
    
    const ulObject = document.querySelectorAll("ul")

    Array.from(ulObject).forEach((li) =>{
        li.addEventListener('click', function(event){
            const colors = {
                1: 'black',
                2: 'red',
                3: 'blue',
                4: 'purple',
                5: 'yellow',
                6: 'orange',
                7: 'green',
                8: 'brown',
                9: 'gold',
                10: 'silver',
            }

            return event.target.style.color = colors[getRandomInt(10 +1)]

        })})
    
        const dogSelector = document.querySelector('select')
        const breeds = document.querySelector('ul')
        const allbreeds = document.querySelector('ul').children
        
        dogSelector.addEventListener('change', () => {
                console.log(allbreeds)
                const array = getSelectedDogs(dogSelector.value)
                clearLis()
                array.forEach(dog => {
                    breeds.appendChild(dog)
                // breeds.appendChild(dog)
              })
            })
        function clearLis() {
             Array.from(breeds.children).forEach(li => li.remove())
        }
        function getSelectedDogs(letter) {
            const dogsArray = Array.from(allbreeds).filter(breed => breed.innerText.charAt(0).includes(letter))
            return dogsArray
        }

});
const imgsUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fecthImgs() {
    fetch(imgsUrl)
        .then(response => response.json())
        .then(displayDogImgs)
}

function displayDogImgs(object) {
    const body = document.querySelector('body')
    
    object['message'].forEach(pictureURL => {
        const div = document.querySelector("#dog-image-container")
        const img = document.createElement('img')
        img.src = pictureURL
        div.appendChild(img)
        body.appendChild(div)
    });
}

function fetchBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(listBreeds)
}

function listBreeds(object) {
    const ul = document.querySelector('ul')
    const arrayOfBreeds = Object.keys(object['message'])
    arrayOfBreeds.forEach(breed => {
        if (object['message'][breed][0] === undefined){
            const li = document.createElement("li")    
            li.innerText = breed
            ul.appendChild(li)
        }else{
            const li = document.createElement("li")       
            li.innerText = breed
            object['message'][breed].forEach(type =>{
                const subUL = document.createElement("ul")
                subUL.id = "subUL"
                const subLI = document.createElement("li")
                subLI.id = "subLI"
                subLI.innerText= type
                subUL.appendChild(subLI)
                li.appendChild(subUL)
                ul.appendChild(li)
                })
            }
    })



}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function appendSelectedDogs() { 
    
    console.log(selectedDogsArray)
    breeds.remove()
    const body = document.body
    const selectedBreedsUl = document.createElement('ul')
    body.appendChild(selectedBreedsUl)
        
    // selectedDogsArray.forEach(dogLi=> {
    //             const li = document.createElement("li")       
    //             li.innerText = dogLi.innerText
    //                 ul.appendChild(li)
    //     })
}
