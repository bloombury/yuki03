/**
 * Created by hxsd on 2016/12/20.
 */
    $(function(){
        var swiper = new Swiper('.swiper-container-inner', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
        //入住时间
        var mydate=new Date();
        $('.inroomDate').html('入住时间：'+mydate.getFullYear()+'年'+(mydate.getMonth()+1)+'月'+mydate.getDate()+'日');
        $('.outroomDate').html('退房时间：'+mydate.getFullYear()+'年'+(mydate.getMonth()+1)+'月'+(mydate.getDate()+1)+'日');

        //入住须知选项卡

        $('.tabTitle div').each(function(){
            $(this).on('touchstart',function(){
                var index=$(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $('.tabTxt p').eq(index).show().siblings().hide();
            })
        });
        var num=$('.num').val();

        $('.content .add').on('touchstart',function(){
            num++;
            $('.num').val(num);
            $('.footer span').html(899*num+'￥');
        });
        $('.content .remove').on('touchstart',function(){
            num--;
            if(num<1){
                num=1
            }
            $('.num').val(num);
            $('.footer span').html(899*num+'￥');
        });
    });

