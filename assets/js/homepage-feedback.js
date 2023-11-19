function initParadoxWay() {
    "use strict";
    // if ($(".testimonials-carousel").length > 0) {
        let j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 2,
            spaceBetween: 40,
            loop: true,
            autoplay: true,
            grabCursor: true,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                type: 'bullets',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    // }
}

$(document).ready(function () {
    initParadoxWay();
});
