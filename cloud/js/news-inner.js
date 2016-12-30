$(function(){
    //找到所有图片
    var aImg=$("#pic-inner").find("img");
    var num=0;
    tablod(num);
    $("#next").click(function(){
        num++;
        if(num==aImg.length){
            num=aImg.length-1
        };
        tablod(num);

    });
    $("#pre").click(function(){
        num--;
        if(num<0){
            num=0;
        };
        tablod(num);
    });


    //写一个切换方法
    function tablod(index){
        aImg.css({"display":"none"});
        aImg.eq(index).css({"display":"block"});
    };

});