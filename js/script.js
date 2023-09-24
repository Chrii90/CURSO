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

    setInterval(nextImage, 3000);
    showImage(currentIndex);
    startProgress();
});



