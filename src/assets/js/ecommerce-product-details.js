(function () {
    "use strict";

    var lightboxVideo = GLightbox({
        selector: '.glightbox'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);

        const { slideIndex, slideNode, slideConfig, player } = current;
    });

    // swiper with navigation
    var swiper = new Swiper(".swiper-related-products", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            enabled: false,
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1800: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    // swiper with navigation
    var swiper1 = new Swiper(".swiper-reviews", {
        loop: true,
        spaceBetween: 3,
        autoplay: false,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // }
    });
    // for nummber of products selected 
    var value = 1,
        minValue = 0,
        maxValue = 30;

    let productMinusBtn = document.querySelectorAll(".product-quantity-minus")
    let productPlusBtn = document.querySelectorAll(".product-quantity-plus")
    productMinusBtn.forEach((element) => {
        element.onclick = () => {
            value = Number(element.parentElement.childNodes[3].value)
            if (value > minValue) {
                value = Number(element.parentElement.childNodes[3].value) - 1;
                element.parentElement.childNodes[3].value = value;
            }
        }
    })
    productPlusBtn.forEach((element) => {
        element.onclick = () => {
            if (value < maxValue) {
                value = Number(element.parentElement.childNodes[3].value) + 1;
                element.parentElement.childNodes[3].value = value;
            }
        }
    })

    var colorLinks = document.querySelectorAll('.product-colors');

    colorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default action (going to another page)

            // Remove 'selected' class from all color links
            colorLinks.forEach(function(link) {
                link.classList.remove('selected');
            });

            // Add 'selected' class to the clicked color link
            this.classList.add('selected');
        });
    });
    
})();