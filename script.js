//Slader imagenes
//Este código crea un deslizador simple con cuatro imágenes
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

//Agrandar imagenes en galería
function showImage(image) {
  const fullscreenOverlay = document.getElementById('fullscreen-overlay');
  const fullscreenImage = document.getElementById('fullscreen-image');

  fullscreenImage.src = image.src;
  fullscreenOverlay.style.display = 'block';
}

function closeFullscreen() {
  const fullscreenOverlay = document.getElementById('fullscreen-overlay');
  fullscreenOverlay.style.display = 'none';
}























    