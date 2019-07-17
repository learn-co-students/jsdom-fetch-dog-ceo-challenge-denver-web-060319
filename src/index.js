console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => addImg(json))

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => addBreed(json))
})

function addImg(json) {
  const dogImage = document.getElementById('dog-image-container')
  for (const picture of json.message) {
    let img = document.createElement('img')
    img.src = picture
    dogImage.appendChild(img)
  }
}

function addBreed(json) {
  const dogBreed = document.getElementById('dog-breeds')
    for(const breed of Object.keys(json.message)) {
      let listItem = document.createElement('li')
      listItem.innerText = breed
      listItem.addEventListener('click', function() {
        listItem.style.color = "red"
      })
      dogBreed.appendChild(listItem)
    }
}