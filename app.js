document.addEventListener('DOMContentLoaded', function () {
     setTimeout(function () {
          var sliderElement =
               document.querySelector('#my-vertical-slider .swiper') ||
               document.querySelector('#my-vertical-slider .swiper-container');

          if (sliderElement && sliderElement.swiper) {
               var swiperInstance = sliderElement.swiper;

               swiperInstance.changeDirection('vertical');
               swiperInstance.params.loop = true;

               swiperInstance.params.slidesPerGroup = window.innerWidth > 767 ? 2 : 1;

               swiperInstance.params.loopedSlides = 12;

               if (swiperInstance.loopDestroy) swiperInstance.loopDestroy();
               if (swiperInstance.loopCreate) swiperInstance.loopCreate();

               swiperInstance.update();
          }
     }, 800);
});
