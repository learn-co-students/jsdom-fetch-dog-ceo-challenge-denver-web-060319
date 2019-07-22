document.addEventListener('DOMContentLoaded', () => {
    fetchDogImg()
    fetchDogBreeds()

    function fetchDogImg()
    {
        const imgUrl = "https://dog.ceo/api/breeds/image/random"
   
        return fetch(imgUrl)
        .then(parseJson)
        .then(getDogCeoImg)
    }

    function fetchDogBreeds()
    {
        const breedUrl = "https://dog.ceo/api/breeds/list/all"

        return fetch(breedUrl)
        .then(parseJson)
        .then(getDogBreeds)
    }

       
    function parseJson(resp)
    {
        return resp.json()
    }

    function getDogCeoImg(dogs)
    {
        const dogImageContainer = document.getElementById("dog-image-container")
        const img = document.createElement("img")
        img.src = `${dogs.message}`
        dogImageContainer.appendChild(img)
    }

    function getDogBreeds(dogs)
    {
        const dogBreeds = document.getElementById("dog-breeds")
      
        for(breed in dogs["message"])
        {
            const li = document.createElement("li")
            li.innerText = breed
            changeBreedColor(li)
            dogBreeds.appendChild(li)
        }     
    }

    function changeBreedColor(li)
    {
        li.addEventListener("click", () => {
            li.style.color = "green"
        })  
    }
  
  
    
})