// swiperjs START
var swiper = new Swiper('.reviewSlider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(document).ready(function () {
    $(".modal").on('show.bs.modal', function () {
        setTimeout(function () {
            var swiper2 = new Swiper('.infoSlider', {

                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

            });
        }, 500);
    });
});
// swiperjs END