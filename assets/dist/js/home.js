$(document).ready(function () {
   $('.about-us__list').slick({
      arrows: false,
      dots: true,
      dotsClass: 'dots about-us__dots',
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 767,
            settings: 'unslick'
         }
      ]
   });

   $('.advantages__list').slick({
      dots: true,
      prevArrow: '<button type="button" class="advantages__arrow advantages__arrow--prev"><i class="icon-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="advantages__arrow advantages__arrow--next"><i class="icon-arrow-right"></i></button>',
      dotsClass: 'dots advantages__dots',
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 767,
            settings: 'unslick'
         }
      ]
   });
});



