document.addEventListener('DOMContentLoaded', () =>{
// console.log('%c HI', 'color: firebrick')

const ImgArea = document.querySelector('#dog-image-container')
const DogBreedArea = document.querySelector("#dog-breeds")


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

    fetch(imgUrl)
    .then(parseJSON)
    .then(addImages)

    fetch(breedUrl)
    .then(parseJSON)
    .then(addBreeds)



function parseJSON(URL){
   return URL.json()
}

function addImages(parsedJSON){
    parsedJSON.message.forEach(element => { Element.message
        createImageTag(element)
    });
}
function createImageTag(element){
let img = document.createElement("img")
img.src = element
ImgArea.appendChild(img)
}

function addBreeds(resp){
    console.log(resp.message)
   for (const breed in resp.message){
       console.log((Object.keys(breed)))
    //    if(Object.values(message).length > 1){
    //        console.log(iterable)
    //    }
    //console.log("breed[i", breed[)
    //    if breed[i]
// if(breed){
//     console.log("bf", breed)
// }
    // console.log("breed console log", breed)
    // breed.filter(sb => console.log("sb", sb))

       
    }
      // console.log(breed.value)
    function addBreadTag(name){
      let li = document.createElement("li")
     li.innerText = name
    DogBreedArea.appendChild(li)
  }
    

    }


})