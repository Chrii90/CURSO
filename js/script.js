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

				container.style.backgroundColor = "#95120e4d";

			}

			if (i === 1) {

				container.style.backgroundColor = "#1f9ec14d";

			}

			if (i === 2) {

				container.style.backgroundColor = "#d4d1ce4d";

			}

			if (i === 3) {

				container.style.backgroundColor = "#c76d484d";

			}

			if (i === 4) {

				container.style.backgroundColor = "#df91484d";

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
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // Agrega event listeners para los botones de navegación
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function () {
        prevImage();
    });

    nextBtn.addEventListener("click", function () {
        nextImage();
    });

    // Cambiar de imagen automáticamente cada 3 segundos
    setInterval(nextImage, 5000);

    // Muestra la primera imagen al cargar la página
    showImage(currentIndex);
});


