/**
 * Created by hxsd on 2016/12/15.
 */
$(function(){
    var mySwiper = new Swiper('.swiper-container-inner',{
        loop : true,
        loopedSlides :6,
        effect : 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        coverflow: {
            rotate: 0, //切斜角度
            stretch: -15,//距离
            depth: 10,
            modifier: 2,
            slideShadows : true
        }
    });
});
