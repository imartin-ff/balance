
const swiper = new Swiper('.gallery-slider', {
    // Default parameters
    slidesPerView: 2,
    enteredSlides: true,
    spaceBetween: 40,
    loop: true,
    // loopedSlides: 3,
    wrapperClass: 'gallery-slider-wrapper',
    slideClass: 'gallery-slider-slide',
    allowTouchMove: false,
    nextButton: '.next-slide',
    prevButton: '.prev-slide',
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
      },


    // Responsive breakpoints
    breakpoints:{
      0:{
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768:{
        slidesPerView: 2,
        allowTouchMove: false,
      }
    }
  })