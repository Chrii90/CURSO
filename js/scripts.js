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
            if (i === 5) {

				container.style.backgroundColor = "#fff";

			}

		});

	});

}

/*carrousell marcas*/
$(document).ready(function(){
    $('.marca-carousel').slick({
        slidesToShow: 4, // Mostrar 4 imágenes a la vez
        slidesToScroll: 1, // Desplazarse 1 imagen a la vez
        autoplay: true, // Habilita la reproducción automática
        autoplaySpeed: 3000, // Establece la velocidad de reproducción automática en milisegundos (3 segundos en este caso)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3 // Cambiar a 3 imágenes en dispositivos más pequeños
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2 // Cambiar a 2 imágenes en dispositivos aún más pequeños
                }
            }
        ]
    });
});