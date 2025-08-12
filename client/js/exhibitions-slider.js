const swiperContainer = document.querySelector('.swiper-wrapper');
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  width: 707,

  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  setWrapperSize: 1278,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect: 'coverflow',
  coverflowEffect: {
    depth: 280,
    modifier: 1,
    rotate: 0,
    scale: 1,
    slideShadows: false,
    stretch: -250,
  },

  on: {
    init: function() {
      toggleCoverflowEffect(this, swiperContainer);
    },
    resize: function() {
      toggleCoverflowEffect(this, swiperContainer);
    }
  }
});



function toggleCoverflowEffect(swiper, container) {
  if (window.innerWidth < 1600) {
    swiper.params.effect = 'slide';
    swiper.params.slidesPerView = 1;
    container.classList.remove('swiper-container-coverflow');
    swiperContainer.classList.add('swiper-container-slide');
  } else {
    swiper.params.effect = 'coverflow';
    swiper.params.slidesPerView = 3;
    container.classList.remove('swiper-container-slide');
    container.classList.add('swiper-container-coverflow');
  }
}