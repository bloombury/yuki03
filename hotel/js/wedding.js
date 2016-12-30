/**
 * Created by hxsd on 2016/12/15.
 */
$(function(){
    //内容滑动
    var mySwiper = new Swiper('.swiper-container-inner',{
        loop : true,
        loopedSlides :6,
        effect : 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        coverflow: {
            rotate: 30,
            stretch: 0,
            depth: 60,
            modifier: 2,
            slideShadows : true
        }
    });
});