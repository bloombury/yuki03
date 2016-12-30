/**
 * Created by hxsd on 2016/12/8.
 */
$(function(){
    $(".movie_top>.work").eq(0).show()
    $(".movie_bot li").on("click",function(){
        $(".movie_bot li").removeClass();
        $(this).addClass("current");
        $(".movie_top>.work").hide();
        var index=$(this).index();
        $(".movie_top>.work").eq(index).fadeIn()
    })
    var i=true;
    $(".qiehuan").on("click",function(){
        if(i){
            $(".box").css("background-image","url('../images/haibao_02.jpg')");
            i=false
        }else {
            $(".box").css("background-image","url('../images/haibao_01.jpg')");
            i=true
        }
    });
    var juzhao=$(".changeju>.juzhao");
    juzhao.eq(0).show();
    juzhao.eq(1).hide();
    $(".juzhaoqiehuan li").on("click",function(){
        $(".juzhaoqiehuan li").removeClass();
        $(this).addClass("show");
        juzhao.hide();
        var index=$(this).index();
        console.log(index);
        juzhao.eq(index).fadeIn()
    })

})