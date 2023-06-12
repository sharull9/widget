// first slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// second slider
var myslider = new Swiper(".myslider", {         
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

