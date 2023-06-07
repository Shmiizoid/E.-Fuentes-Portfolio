console.log('working')
//Click_________________________________________
// const aboutEl = document.getElementById('About-Me')
// console.log(aboutEl)

// aboutEl addEventListener('click',function(evt)) {

// }

//Modal_________________________________________
console.log('working');

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("resume-modal");
  var trigger = document.getElementById("resume-link");
  var closeButton = document.getElementById("close-modal");
  var resumeImage = document.getElementById("resume-img");

  trigger.addEventListener("click", function(event) {
    event.preventDefault();
    var imageLink = "efr copy.png";
    resumeImage.src = imageLink;
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function(event) {
    modal.style.display = "none";
  });
});


//Carousel_________________________________________
const next = document.querySelector('.next')

const prev = document.querySelector('.prev')

const images = document.getElementsByClassName('images');

let currentImgIndex = 0;


next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex++

    if(currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }

  images[previousImgIndex].getElementsByClassName.display = 'none'
  images[currentImgIndex].getElementsByClassName.display = 'block'
})

prev.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex--

    if(currentImgIndex < 0) {
        currentImgIndex = images.length -1;
    }

  images[previousImgIndex].getElementsByClassName.display = 'none'
  images[currentImgIndex].getElementsByClassName.display = 'block'
})
