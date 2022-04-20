"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// swiperjs START
var swiper = new Swiper('.reviewSlider', (_ref = {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true
}, _defineProperty(_ref, "spaceBetween", 30), _defineProperty(_ref, "autoplay", {
  delay: 2500,
  disableOnInteraction: false
}), _defineProperty(_ref, "pagination", {
  el: '.swiper-pagination',
  clickable: true
}), _ref)); // $(document).ready(function () {
//     $(".modal").on('show.bs.modal', function () {
//         setTimeout(function () {
//             let swiper2 = new Swiper('.infoSlider', {
//                 loop: true,
//                 navigation: {
//                     nextEl: ".swiper-button-next",
//                     prevEl: ".swiper-button-prev",
//                 },
//                 pagination: {
//                     el: ".swiper-pagination",
//                     clickable: true,
//                 },
//             });
//         }, 500);
//     });
// });

var swiper2 = new Swiper('.infoSlider', {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); // swiperjs END