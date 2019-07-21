document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random"
   
    
    fetch(imgUrl)
    .then(parseJson)
    .then(getDogCEOImg)
    
    function parseJson(resp)
    {
        return resp.json()
    }

    function getDogCEOImg(dogs)
    {
        const dogImageContainer = document.getElementById("dog-image-container")
        const img = document.createElement("img")
        img.src = `${dogs.message}`
        dogImageContainer.appendChild(img)
    }

    
})