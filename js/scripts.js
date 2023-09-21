// JavaScript para el carrusel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide, i) => {
        if (i === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Iniciar el carrusel y configurar el cambio automático cada 3 segundos
showSlide(slideIndex);
setInterval(nextSlide, 3000);


