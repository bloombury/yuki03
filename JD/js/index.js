
documentReady(function () {
    CarouselFigure(); //轮播图
    function CarouselFigure() {
        var banner_Pic=document.getElementsByClassName('banner-pic')[0];
        var l_Btn=document.getElementById('prevBtn');
        var r_Btn=document.getElementById('nextBtn');
        var oUl=banner_Pic.getElementsByTagName('ul')[0];
        var oLi=oUl.getElementsByTagName('li');
        var oOl=document.createElement('ol');
        var iNow=0;
        for(var i=0;i<oLi.length;i++){
            oOl.innerHTML+='<li>'+(i+1)+'</li>'
        };
        banner_Pic.appendChild(oOl);
        var oOLi=oOl.childNodes;
        oOLi[0].className='bg';
        Interval();
        function Interval() {
            oLi.time=setInterval(function () {
                iNow++;
                if(iNow>oLi.length-1){
                    iNow=0;
                    slideItem(oLi.length-1,0);
                }else{
                    slideItem(iNow-1,iNow);
                };
                changeAc();
            },2000)
        }
        banner_Pic.onmousemove=function () {
            clearInterval(oLi.time)
        };
        banner_Pic.onmouseout=function () {
            Interval();
        };
        for(var k=0; k<oOLi.length; k++){
            oOLi[k].index=k;//发拍照
            oOLi[k].onmousemove=function(){

                if(iNow!=this.index){
                    slideItem(iNow,this.index);
                    iNow=this.index;
                    changeAc();
                };
            };
        };
        l_Btn.onclick=function(){
            if(iNow<1){
                iNow=oLi.length;
                slideItem(0,oLi.length-1);
            }else{
                slideItem(iNow,iNow-1);
            };
            iNow--;
            changeAc();
        };
        r_Btn.onclick=function(){
            iNow++;
            if(iNow>oLi.length-1){
                iNow=0;
                slideItem(oLi.length-1,0);
            }else{
                slideItem(iNow-1,iNow);
            };
            changeAc();
        };
        function slideItem(a,b){//淡出淡入
            oLi[a].style.display='block';
            oLi[a].style.opacity=1;
            oLi[b].style.display='block';
            oLi[b].style.opacity=0;
            hxsd_tools.move(oLi[a],{'opacity':0},1000);//淡出
            hxsd_tools.move(oLi[b],{'opacity':100},1000,function(){
                oLi[a].style.display='none';
            });
        };
        function changeAc(){
            for(var j=0; j<oOLi.length; j++){
                oOLi[j].className='';
            };
            oOLi[iNow].className='bg';
        };
    };

    titleNav();  //菜单导航
    function titleNav() {
        var TitleNav = document.getElementsByClassName('title-nav')[0];
        var oUl = TitleNav.getElementsByTagName('ul')[0];
        var oLi = oUl.getElementsByTagName('li');
        var NavLink = document.getElementsByClassName('nav-link');
        var timer = null;

    for (var i=0;i<oLi.length;i++){
            oLi[i].index=i;
            oLi[i].onmouseenter=function () {
                var _this=oLi[this.index];
                oLi[this.index].className='bg';
                NavLink[this.index].className='nav-link nav-link-block';
                NavLink[this.index].onmouseenter=function () {
                    this.className='nav-link nav-link-block';
                    _this.className='bg';
                }
            };
            oLi[i].onmouseleave=function () {
                var _this=oLi[this.index];
                    oLi[this.index].className='';
                    NavLink[this.index].className='nav-link';
                        NavLink[this.index].onmouseleave=function () {
                                this.className = 'nav-link';
                                _this.className='';
                    };
            };

        };

    };


//选项卡
    Ftab(); //选项卡
    function Ftab() {
        function Tab(id){
            this.oParent = document.getElementById(id);
            this.aUl=this.oParent.getElementsByClassName("tab")[0];
            this.ali = this.aUl.getElementsByTagName("li");
            this.tabItem = this.oParent.getElementsByClassName("dress-warp");
        };

        Tab.prototype.init=function(){
            var _this = this;// Tab对象
            for(var i=0; i<this.ali.length;i++){
                this.ali[i].index = i;
                this.ali[0].className="li_hover";
                this.ali[i].onmousemove=function(){
                    for(var j=0; j<_this.ali.length;j++){
                        _this.ali[j].className="";
                        _this.tabItem[j].style.display="none";
                    }
                    this.className="li_hover";
                    _this.tabItem[this.index].style.display="block";
                }
            }
        };
        var f1 = new Tab("1f");
        var f2 = new Tab("2f");
        var f3 = new Tab("3f");
        var f4 = new Tab("4f");
        var f5 = new Tab("5f");
        f1.init();
        f2.init();
        f3.init();
        f4.init();
        f5.init();
    };

    floor();//京东楼层
    function floor() {
        var LocationFloorList=document.getElementsByClassName('LocationFloorList')[0];
        var aLi=LocationFloorList.getElementsByTagName('li');
        var aFloor=document.getElementsByClassName('main-1f');
        var arr=[];

        //-------------------------------------------------

        for(var i=0; i<aFloor.length; i++){
            var json={};
            json.name=i;
            json.offsetTop=aFloor[i].offsetTop;
            arr.push(json);
        };


        window.onscroll=function(){
            //显示楼层编号-------------------------------------------------
            var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
            if(scrolltop>1400 && scrolltop<9650 ){
                LocationFloorList.style.display='block';
            }else{
                LocationFloorList.style.display='none';
            };

            // 根据楼层滚动位置，定位编号------------------------------------------------
            var last_arr=[];

            for(var j=0; j<arr.length; j++){
                if(arr[j].offsetTop<scrolltop+500){
                    last_arr.push(arr[j].name);
                }
            };

            var li_index=last_arr[last_arr.length-1];

            for(var l=0; l<aFloor.length; l++){
                aLi[l].className='';
            };
            aLi[li_index].className='ac';
        };
        //点击编号，跳转到相对楼层-----------------------------------------------
        for(var k=0; k<aFloor.length; k++){
            aLi[k].index=k;
            aLi[k].onclick=function(){
                var start=document.documentElement.scrollTop || document.body.scrollTop;
                var end=arr[this.index].offsetTop;
                move(start,end)
            }
        };
        //move-------------------------------------------------------
        var timer;
        function move(start,end){
            var dis=end-start;
            var count=parseInt(1500/30);
            var n=0;
            clearInterval(timer);
            timer=setInterval(function(){
                n++;
                var a=1-n/count;
                var step_dis=start+dis*(1-a*a*a*a);
                window.scrollTo(0,step_dis);
                if(n==count){
                    clearInterval(timer);
                };
            },30)
        };
    }

});

