console.log('working')
//Click_________________________________________
// const aboutEl = document.getElementById('About-Me')
// console.log(aboutEl)

// aboutEl addEventListener('click',function(evt)) {

// }

//Modal_________________________________________
document.addEventListener("DOMContentLoaded", function(){
var modal = document.getElementById("resume-modal");
var trigger = document.getElementById("resume-link");
var closeButton = document.getElementById("close-modal");
var resumeImage = document.getElementById("resume-img");

trigger.addEventListener("click", function(event) {
  event.preventDefault();
  var imageLink = "efr.png";
  resumeImage.src = imageLink;
  modal.style.display = "block";
});

closeButton.addEventListener("click", function(event) {
  modal.style.display = "none";
});
})


//Carousel_________________________________________