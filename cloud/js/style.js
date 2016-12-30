/**
 * Created by hxsd on 2016/12/8.
 */
$(document).ready(function(){
    //得到$(".nav_bg")初始的left值，用于鼠标移出后返回原始位置
    //所以需要在每个页面对应的样式表里单独设置left值
    var first=$(".nav_bg").position();
    //设置每个li的鼠标移入移出事件
    $(".first_nav").find("li").hover(function(){
        var num=-62+$(this).index()*144;
        $(".nav_bg").stop().animate({"left":num},500);
    },function(){
        $(".nav_bg").stop().animate({"left":first.left},500);
    })
});