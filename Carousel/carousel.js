const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const images = document.getElementsByClassName('images');
let currentImgIndex = 0;

next.addEventListener('click', () => {
  let previousImgIndex = currentImgIndex;
  currentImgIndex++;

  if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }

  images[previousImgIndex].style.display = 'none';
  images[currentImgIndex].style.display = 'block';
});

prev.addEventListener('click', () => {
  let previousImgIndex = currentImgIndex;
  currentImgIndex--;

  if (currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  }

  images[previousImgIndex].style.display = 'none';
  images[currentImgIndex].style.display = 'block';
});