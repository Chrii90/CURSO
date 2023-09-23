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

// JavaScript para controlar el carrusel
const radioButtons = document.querySelectorAll('.slide-open');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');

let currentIndex = 0;
let interval;

// Función para cambiar al siguiente slide
function nextSlide() {
	radioButtons[currentIndex].checked = false;
	currentIndex = (currentIndex + 1) % radioButtons.length;
	radioButtons[currentIndex].checked = true;
}

// Función para cambiar al slide anterior
function prevSlide() {
	radioButtons[currentIndex].checked = false;
	currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
	radioButtons[currentIndex].checked = true;
}

// Agregar event listeners a los botones "prev" y "next"
prevButtons.forEach((prevButton) => {
	prevButton.addEventListener('click', () => {
		prevSlide();
	});
});

nextButtons.forEach((nextButton) => {
	nextButton.addEventListener('click', () => {
		nextSlide();
	});
});

// Iniciar el intervalo para cambiar automáticamente cada 3 segundos
function startInterval() {
	interval = setInterval(() => {
		nextSlide();
	}, 3000); // Cambiar cada 3 segundos
}

// Detener el intervalo cuando el usuario interactúa con el carrusel
function stopInterval() {
	clearInterval(interval);
}

// Iniciar el intervalo al cargar la página
startInterval();

// Detener el intervalo al hacer clic en cualquier botón del carrusel
radioButtons.forEach((radioButton) => {
	radioButton.addEventListener('click', () => {
		stopInterval();
	});
});