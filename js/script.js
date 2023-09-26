if (document.querySelector(".gallery__item")) {

	const container = document.querySelector(".container");

	const galleryItem = document.querySelectorAll(".gallery__item");

	const cleaner = () => {

		galleryItem.forEach((gallery) => {

			gallery.classList.remove("--active");

		});

	};

	galleryItem.forEach((gallery, i) => {

		gallery.addEventListener("click", () => {

			cleaner();

			gallery.classList.add("--active");

			if (i === 0) {

				container.style.backgroundColor = "#008f394d";

			}

			if (i === 1) {

				container.style.backgroundColor = "#4c28824d";

			}

			if (i === 2) {

				container.style.backgroundColor = "#0000001d";

			}

			if (i === 3) {

				container.style.backgroundColor = "#951E4D4d";

			}

			if (i === 4) {

				container.style.backgroundColor = "#FFFF004d";

			}

		});

	});

}

// CARROUSEL OFERTAS

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;
    let progressInterval;

    function showImage(index) {
        for (let i = 0; i < totalImages; i++) {
            images[i].style.display = "none";
        }
        images[index].style.display = "block";
        currentIndex = index;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
        resetProgress();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
        resetProgress();
    }

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const progressBar = document.getElementById("progress-bar");

    prevBtn.addEventListener("click", function () {
        prevImage();
    });

    nextBtn.addEventListener("click", function () {
        nextImage();
    });

    function startProgress() {
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";
        progressBar.offsetWidth; // Truco para reiniciar la animación
        progressBar.style.transition = "width 3s linear";
        progressBar.style.width = "100%";
    }

    function resetProgress() {
        clearInterval(progressInterval);
        progressBar.style.width = "0%";
        startProgress();
    }

    setInterval(nextImage, 5000);
    showImage(currentIndex);
    startProgress();
});

// SECCION HERO
// Esperar a que se carguen todas las imágenes antes de mostrarlas
window.addEventListener('load', () => {
    // Agregar la clase 'appear' al texto para que aparezca con animación
    const text = document.querySelector('.hero-text');
    text.classList.add('appear');
    
    // Agregar la clase 'appear' a las imágenes para que aparezcan con animación
    const images = document.querySelectorAll('.hero-image');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('appear');
        }, 500 * index); // Retrasar cada imagen en 500ms
    });
});





