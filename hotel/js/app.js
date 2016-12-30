/**
 * Created by hxsd on 2016/12/13.
 */
$(function(){
    //设置移动页面rem比率
    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
    //侧滑菜单栏
    var toggleMenu = function(){
        swiper.slideNext();
        swiper.activeIndex=1;
    };
    var menuButton = document.getElementsByClassName('menu-button')[0];
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto'
        , initialSlide: 0
        , resistanceRatio: .00000000000001
        , onInit: function() {
            menuButton.addEventListener('click', toggleMenu, false)
        }
        , onSlideChangeEnd: function(slider) {
            if (slider.activeIndex == 1)
                menuButton.removeEventListener('click', toggleMenu, false);
            else
                menuButton.addEventListener('click', toggleMenu, false)
        }
        , slideToClickedSlide: true
    });
    //返回
    $('.i-left').on('touchstart',function(){

        history.back()

    });

});
//数据请求方法
var gJson=function (Json){
    var url=window.location.search;
    var id=url.substr(url.indexOf("=")+1);
    var rDate=null;
    $.getJSON(Json,function(data){
        rDate=data[id];
        //请求数据插入轮播图
        $.each(rDate.imgsrc,function(i,item){
            var pic=
                '<div class="swiper-slide">'+
                    '<img src='+item+'>'+
                '</div>';
            $('.content .swiper-wrapper').append(pic);
        });
        //请求数据插入文本内容
        function wTxt(index){
            var wrapTxt='';
            $.each(index,function(i,item){
                wrapTxt+= item+'<br>'
            });
            return wrapTxt;
        };
        var txtCon=
            '<P>'+
                '<span class="span-title">'+rDate.title+'</span><br>'+
                    wTxt(rDate.txt)+
            '</P>'+
            '<p class="time">'+
                '<span class="span-map">'+rDate.place+'</span><br>'+
                    wTxt(rDate.time)+
            '</p>';
        $('.content .wrap').append(txtCon);
        //轮播图动画
        var swiper = new Swiper('.swiper-container-inner', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
    });
};