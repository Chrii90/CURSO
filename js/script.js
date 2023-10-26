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

				container.style.backgroundColor = "#0033004d";

			}

			if (i === 1) {

				container.style.backgroundColor = "#4c28824d";

			}

			if (i === 2) {

				container.style.backgroundColor = "#A5967E4d";

			}

			if (i === 3) {

				container.style.backgroundColor = "#77C06C4d";

			}

			if (i === 4) {

				container.style.backgroundColor = "#3599CB4d";

			}

		});

	});

}

//SLIDER TELEFONOS MOVILES//

$(document).ready(function () {
    function toggleSlider() {
      var windowWidth = $(window).width();
      var sliderMobile = $('.slider-mobile');
  
      if (windowWidth <= 767) {
        sliderMobile.show();
  
        if (!sliderMobile.hasClass('slick-initialized')) {
          // Configura el slider solo si no se ha inicializado
          sliderMobile.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1500,
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              }
            ]
          });
        }
      } else {
        sliderMobile.hide();
        // Si el slider se ha inicializado, destrúyelo para evitar conflictos con la verificación de pantalla
        if (sliderMobile.hasClass('slick-initialized')) {
          sliderMobile.slick('unslick');
        }
      }
    }
  
    // Llama a la función al cargar la página y al redimensionar la ventana
    toggleSlider();
    $(window).on('resize', toggleSlider);
  });
  


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




// validacion formulario //

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;

    // Expresión regular para validar el nombre (solo letras y espacios)
    var nombreValido = /^[A-Za-z\s]+$/;

    // Expresión regular para validar el número (solo dígitos)
    var numeroValido = /^\d+$/;

    // Expresión regular para validar el email
    var emailValido = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!nombre.match(nombreValido)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        return false;
    }

    if (!numero.match(numeroValido)) {
        alert("Por favor, ingrese un número válido (solo dígitos).");
        return false;
    }

    if (!email.match(emailValido)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // El formulario es válido
    return true;
}




// API REST

document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = 'https://fakestoreapi.com/products';

    const productList = document.getElementById('product-list');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de la API');
        }
        const products = await response.json();

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-price">Price: $${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
});

// logica mostrar mas//

document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.getElementById('showMoreButton');
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementById('closeModal');

    showMoreButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});





     


