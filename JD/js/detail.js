
documentReady(function () {

    Magnifier();//放大镜
    function Magnifier() {
        function offsetTop( elm ){
            var top = elm.offsetTop;
            var parent = elm.offsetParent;
            while( parent != null ){
                top += parent.offsetTop;
                parent = parent.offsetParent;
            };
            return top;
        };


        function offsetLeft( elm ){
            var left = elm.offsetLeft;
            var parent = elm.offsetParent;
            while( parent != null ){
                left += parent.offsetLeft;
                parent = parent.offsetParent;
            };
            return left;
        };

        var oDiv1=document.getElementById('div1');
        var oDiv2=document.getElementById('div2');
        var Img=oDiv1.getElementsByTagName('img');
        var ul_tab=document.getElementById('ul_tab');
        var ul_li=ul_tab.getElementsByTagName('li');
        var li_Img=ul_tab.getElementsByTagName('img');
        var bigImg=oDiv2.getElementsByTagName('img');
        var oSpan=oDiv1.getElementsByTagName('span')[0];
        var li_w=hxsd_tools.getStyle(ul_li[0],'width');
        var btn_r=document.getElementsByClassName('btn_r')[0];
        var btn_l=document.getElementsByClassName('btn_l')[0];
        var iNow=0;
        ul_tab.style.width=li_w*ul_li.length+'px';
        btn_l.onclick=function(){
            iNow--;
            if(iNow<0){
                iNow=0;
            };
            //oUl移动
            hxsd_tools.move(ul_tab,{'left':(-li_w)*iNow});
        };

        btn_r.onclick=function(){
            iNow++;

            if(iNow>=ul_li.length-1){
                iNow=ul_li.length-1
            }
            //oUl移动
            hxsd_tools.move(ul_tab,{'left':(-li_w)*iNow});



        };
        Img[0].className='img';
        li_Img[0].className='bg';
        bigImg[0].className='img';
        for (var i=0;i<ul_li.length;i++) {
            ul_li[i].index = i;
            ul_li[i].onmousemove = function () {
                for (var j=0;j<ul_li.length;j++){
                    li_Img[j].className='';
                    Img[j].className='';
                    bigImg[j].className='';
                    li_Img[this.index].className='bg';
                    Img[this.index].className='img';
                    bigImg[this.index].className='img';
                };
            };
        };

        oDiv1.onmousemove=function(ev){
            oSpan.style.display=oDiv2.style.display='block';

            var oEv=ev||event;

            //获取滚动条  chrome不识别 documentElement.scrollTop
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            //鼠标在span的中心位置
            var l=oEv.clientX-offsetLeft(oDiv1)-oSpan.offsetWidth/2;
            var t=oEv.clientY+scrollTop-offsetTop( oDiv1 )-oSpan.offsetHeight/2;

            //限制范围
            if(l<0)l=0;
            if(l>=oDiv1.offsetWidth-oSpan.offsetWidth){
                l=oDiv1.offsetWidth-oSpan.offsetWidth;
            }

            if(t<0)t=0;
            if(t>=oDiv1.offsetHeight-oSpan.offsetHeight){
                t=oDiv1.offsetHeight-oSpan.offsetHeight;
            }
            oSpan.style.left=l+'px';
            oSpan.style.top=t+'px';


            var l_rate=l / (oDiv1.offsetWidth-oSpan.offsetWidth);
            var t_rate=t / (oDiv1.offsetHeight-oSpan.offsetHeight);

                for (var k=0;k<bigImg.length;k++){
                    bigImg[k].style.left= (oDiv2.offsetWidth-bigImg[k].offsetWidth)*l_rate +'px'; //外box 减 内部大图片，为负值
                    bigImg[k].style.top= (oDiv2.offsetHeight-bigImg[k].offsetHeight)*t_rate +'px';
                }
        };
        oDiv1.onmouseout=function(){
            oSpan.style.display=oDiv2.style.display='none';
        };

    };

    Shopping_quantity();//购物车数量
    function Shopping_quantity() {
        var count=document.getElementsByClassName('count')[0];
        var text=count.getElementsByTagName('input')[0];
        var up=count.getElementsByClassName('up')[0];
        var dn=count.getElementsByClassName('dn')[0];
        
        dn.style.color='#ddd';
        up.onclick=function () {
            text.value++;
            if(text.value>1){
                    dn.style.cursor='default';
                    dn.style.color='#666'
            }
         
        };
        dn.onclick=function () {
            text.value--;
            if(text.value<=1) {
                text.value=1;
                    dn.style.cursor='no-drop';
                    dn.style.color='#ddd'
            }
           
        };

    };






    Ious_staging();//白条选项卡
    function Ious_staging() {
    var dt=document.getElementsByClassName('p5')[0];
    var dd=dt.getElementsByTagName('dd');

    for (var i=0;i<dd.length;i++){
        dd[i].index=i;
        dd[i].onclick=function () {
           for (var j=0;j<dd.length;j++){
               dd[j].className='';
               this.className='dd';
           };
       };

    };

    };

    Suit_combination();
    function Suit_combination() {
        var SuitTab=document.getElementsByClassName('title-tab')[0];
        var oli=SuitTab.getElementsByTagName('li');
        var inner=SuitTab.getElementsByClassName('inner');
        oli[1].className='li';
        inner[1].style.display='block';
        for (var i=0;i<oli.length;i++){
            oli[i].index=i;
            oli[i].onclick=function () {
                for (var j=0;j<oli.length;j++){
                    oli[j].className='';
                    this.className='li';
                    inner[j].style.display='none';
                    inner[this.index].style.display='block';

                };
            };


        };



    };






    
    














});