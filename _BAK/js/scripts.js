if($('.swiper-container').length){
    enquire.register("screen and (min-width: 1024px)", {
        match: function () {
            $('.contentWrapper section:first-child').addClass('grow');
            var mySwiper = new Swiper ('.swiper-container', {
                mousewheelControl: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                direction: 'vertical',
                //slidesPerView: 'auto',
                onSlideChangeEnd(mySwiper){
                    window.setTimeout(function(){
                        $('.swiper-wrapper section').removeClass('grow');
                        $('.swiper-wrapper section.swiper-slide-active').addClass('grow');
                    },200)    
                }
            });
        },
        unmatch: function () {
        }
    });
    enquire.register("screen and (max-width: 1023px)", {
        match: function () {
            var mySwiper = new Swiper ('.swiper-container', {
                pagination: '.swiper-pagination'
            });
        },
        unmatch: function () {
        }
    });
}