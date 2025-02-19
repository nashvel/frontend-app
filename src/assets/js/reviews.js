(function () {
    "use strict";

    /* testimonialSwiper start */
    var swiper = new Swiper(".testimonialSwiper01", {
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        initialSlide: 2,
        pagination: {
            el: '.swiper-pagination-custom',
            clickable: true,
            renderBullet: function (index, className) {
              return '<div class="' + className + '"><img src="../assets/images/faces/' + (index + 1) + '.jpg" alt="Testimonial ' + (index + 1) + '"></div>';
            },
        },
        autoplay: {
            enabled: false,
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
            }
        },
    });
    /* testimonialSwiper end */

    /* testimonialSwiper1 start */
    var swiper = new Swiper(".testimonialSwiper1", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            enabled: false,
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
    });
    /* testimonialSwiper1 end */

    /* testimonialSwiper3 Start */
    var swiper4 = new Swiper(".testimonialSwiper2", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            enabled: false,
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1112: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });
    /* testimonialSwiper3 End */

    /* testimonial swiper service start */
    var swiper = new Swiper(".testimonialSwiperService", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            enabled: false,
            delay: 3000,  
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1112: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        },
    });
    /* testimonial swiper service start */
    
    /* testimonial swiper service1 start */
    var swiper = new Swiper(".testimonialSwiperService1", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        watchSlidesProgress: true,
        loopFillGroupWithBlank: true,
        freeMode: true,
        autoplay: {
            enabled: false,
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1112: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    });
    /* testimonial swiper service1 start */

})();