/**
 * Created by hxsd on 2016/12/7.
 */
$(function(){
    //找对象,几个图片的显示
    var borde=$(".obk_M div");
    var wOmAn=$(".obk_M a");
    var name=$(".yiYu p");
    //右侧所有的内容父级元素盒子
    var CHI_box=$(".disPLy");
    //艺人详情页的个人作品切换选项
    //点击切换
    var aSpan=$(".B_tab p");
    TEXT_K(aSpan,1);
    aSpan.eq(0).click(function(){
        TEXT_K(aSpan,0);
        CHI_box.eq(1).css("display","block");
        CHI_box.eq(0).css("display","none");
    });
    aSpan.eq(1).click(function(){
        TEXT_K(aSpan,1);
        CHI_box.eq(1).css("display","none");
        CHI_box.eq(0).css("display","block");
    });
    //自运行一次函数,切换图片和图片对应的边框线*/*/*/*/////////////////////
    bOrde (name,0,borde);
    //点击图片切换艺人信息
    wOmAn.mouseenter (function(){
        var index=$(this).index();
        bOrde (name,index,borde);
        borde.mouseleave=null;
    });
    //点击名字切换艺人详情页
    name.mouseenter (function(){
        var index=$(this).index();
        bOrde (name,index,borde);
        borde.mouseleave=null
    });
    //自运行一次函数,切换图片和图片对应的边框线*/*/*/*/////////////////////
    //切换类的方法 第一个参数 点击后恢复默认样式
                //第二个参数 对应被选中的的元素的索引值
                //第三个参数，待定可以不用传
    function bOrde (name,index){
        name.css({
            "background-color":"#fff",
            "color":"#000",
            "border-color":"#000"
        });
        name.eq(index).css({
            "background-color":"#006cad",
            "color":"#fff",
            "border-color":"#006cad"
        });
        //对应的图片边框线
        borde.css("border-color","#ddd");
        $(".womAn").eq(index).css("border-color","#006cad");
        $(".womAn div").eq(index).css("border-color","#006cad");
    };
    //*********************************************************************
    //通过点击艺人的上下页切换艺人的图片
    var arr=$("#disPLy .ost");
    //找到上下分页的按钮
    var oPrev=$("#prev");
    var oNext=$("#next");
    //新建一个变量用作计数器
    var i=null;
    //点击下一页
    oNext.click(function(){
        if(i>=arr.length-2){
            i=arr.length-2;
        }
        arr.each(function(){
            var cctv=arr.eq(i)
            cctv.css("display","none");
            cctv.next().css("display","block");
        });
        i++;
        //计算I++的值
        console.log("计算I++的值:"+i)
    });
    oPrev.click(function(){
        if(i<=0){
            i=1;
        };
        arr.each(function(){
            var cctv=arr.eq(i)
            cctv.css("display","none");
            cctv.prev().css("display","block");
        });
        i--;
    });
    //************************************************************************
    ///详情页的JS  点击切换作品和简历的方法这里是封装的函数*/********************
    function TEXT_K (name,index) {
        name.css({
            "background-color": "#fff",
            "color": "#000",
            "border-color": "#000"
        });
        name.eq(index).css({
            "background-color": "#006cad",
            "color": "#fff",
            "border-color": "#006cad"
        });
    };
});