const swiper_location = new Swiper('.services__localization-slider', {
  direction: "horizontal",
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  breakpoints: {
    0: {
      centeredSlides: false,
    },
    580: {
      centeredSlides: true,
      // slidesPerView: 2,
      spaceBetween: 20,
    },
    650: {
      // slidesPerView: 3,
      spaceBetween: 25
    },
    820: {
      // slidesPerView: 4,
      spaceBetween: 25
    },
    962: {
      // slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      // slidesPerView: 4,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper_development = new Swiper('.services__development-slider', {
  direction: "horizontal",
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesOffsetAfter: 20,
      slidesOffsetBefore: 20,
    },
    580: {
      // centeredSlides: true,
      // slidesPerView: 2,
      spaceBetween: 20,
    },
    650: {
      // slidesPerView: 3,
      spaceBetween: 25
    },
    768: {
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 40,
      // slidesPerView: 4,
      spaceBetween: 25,
    },
    962: {
      // slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      // slidesPerView: 4,
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 68,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper_registration = new Swiper('.services__registration-slider', {
  direction: "horizontal",
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesOffsetAfter: 20,
      slidesOffsetBefore: 20,
    },
    580: {
      slidesOffsetAfter: 20,
      slidesOffsetBefore: 20,
      // centeredSlides: true,
      // slidesPerView: 2,
      spaceBetween: 20,
    },
    650: {
      slidesOffsetAfter: 20,
      slidesOffsetBefore: 20,
      // slidesPerView: 3,
      spaceBetween: 25
    },
    768: {
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 40,
      // slidesPerView: 4,
      spaceBetween: 25,
    },
    962: {
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 40,
      // slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      // slidesPerView: 4,
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 0,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const swiper_in_motion = new Swiper(".inMotion__slider", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    1280: {
      slidesPerView: 3
    }
  }
});

const swiper_in_motion_portfolio = new Swiper(".inMotion__portfolio-slider", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    1280: {
      slidesPerView: 3
    }
  }
});