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
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const progressBar = document.querySelector(".progress");
    const items = document.querySelectorAll(".carousel-item");
    const itemCount = items.length;
    let currentIndex = 0;
    let progressInterval;
    const intervalDuration = 5000; // Cambia cada 5 segundos (ajusta según lo que desees)

    function updateProgress() {
        let currentTime = 0;
        progressBar.style.transition = "none"; // Detiene la transición
        progressBar.style.width = "0%"; // Reinicia la barra de progreso

        const interval = setInterval(() => {
            currentTime += 100;
            progressBar.style.width = `${(currentTime / intervalDuration) * 100}%`;

            if (currentTime >= intervalDuration) {
                clearInterval(interval);
                progressBar.style.transition = "width 0.5s"; // Vuelve a habilitar la transición
                if (currentIndex < itemCount - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                showItem(currentIndex);
                startAutoPlay();
            }
        }, 100);
    }

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function startAutoPlay() {
        progressInterval = setTimeout(() => {
            updateProgress();
        }, intervalDuration);
    }

    function stopAutoPlay() {
        clearTimeout(progressInterval);
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = itemCount - 1;
        }
        showItem(currentIndex);
        stopAutoPlay();
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < itemCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showItem(currentIndex);
        stopAutoPlay();
    });

    // Iniciar la animación automática al cargar la página
    startAutoPlay();
});


