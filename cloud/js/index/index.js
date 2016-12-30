/**
 * Created by hxsd on 2016/12/9.
 */
$(document).ready(function(){
    $(".indexNav").find("li:eq(4)").css("opacity",0);
    //var first=$(".indexContentNav").position();
    $(".indexNav").find("li").on('mouseover',function(){

        var num=-241+$(this).index()*225;

        var eng=$(this).find(".engTitle").text();

        var cn1=$(this).find("span").text();
        var cn2=$(this).find(".cnTitle").text();
        $(".indexContentNav").stop().animate({"left":num},500);
        $(".indexContentNav").find("p").text(cn1+cn2);
        $(".indexContentNav").find("span").text("CLOUD "+eng);
        $(this).stop().animate({"opacity":0},500);
        $(this).siblings().stop().animate({"opacity":1},500);
    })
});