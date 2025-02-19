(function () {
    'use strict';

    var swiper = new Swiper(".swiper-view-details", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".swiper-preview-details", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        }
    });
    var swiper3 = new Swiper(".swiper-basic", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        autoplay: {
          delay: 2300,
          disableOnInteraction: false,
        },
    });

})();