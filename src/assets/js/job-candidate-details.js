(function () {
    'use strict';

    // swiper with navigation
    var swiper = new Swiper(".swiper-related-profiles", {
      slidesPerView: 1,
        spaceBetween: 10,
        mousewheel: true,
        loop: true,
        direction: "vertical",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            398: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1434: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
    });

})();