/**
 * Created by hxsd on 2016/11/15.
 */
//引入
var http=require("http");
var path=require("path");
var express=require("express");
//express 方法
var app=express();
//资源与数据请求========================
//静态资源请求-----------------------------------
var staticPath=path.resolve(__dirname,"public");
app.use(express.static(staticPath));
// 商品类别数据请求------------------------------
app.get("/categories",function(req,res){
   var categories=[
       {"id":10001,"category":"商品类别001"},
       {"id":10002,"category":"商品类别002"},
       {"id":10003,"category":"商品类别003"},
       {"id":10004,"category":"商品类别004"}
   ];
    res.json(categories);
});
//产品信息数据请求--------------------------------
app.get("/products",function(req,res){
    var products=[
        {"name":"1商品01","category":"商品类别001","price":100,"desc":"PRASE女装欧洲站2016冬装新款潮毛领轻薄羽绒服女中长款加厚外套","imgsrc":"images/TB1_50x50.jpg"},
        {"name":"1商品02","category":"商品类别001","price":200,"desc":"男装 高级轻型羽绒罗纹茄克(菱格)(MA-1) 172986 优衣库UNIQLO","imgsrc":"images/TB2_50x50.jpg"},
        {"name":"2商品03","category":"商品类别002","price":400,"desc":"JackJones杰克琼斯男士白鸭绒连帽修身短款羽绒服外套C|216312525","imgsrc":"images/TB3_50x50.jpg"},
        {"name":"3商品04","category":"商品类别003","price":100,"desc":"骆驼男装 秋冬季外套男 青年大码修身保暖男士羽绒服短款外穿上衣","imgsrc":"images/TB4_50x50.jpg"},
        {"name":"1商品05","category":"商品类别001","price":200,"desc":"JackJones杰克琼斯白鸭绒冬季轻薄羽绒服男短款外套C|216312507","imgsrc":"images/TB1_50x50.jpg"},
        {"name":"1商品06","category":"商品类别001","price":100,"desc":"Discovery秋冬时尚超轻户外羽绒服男女 保暖服修身羽绒外套拼色薄","imgsrc":"images/TB2_50x50.jpg"},
        {"name":"2商品07","category":"商品类别002","price":500,"desc":"迪卡侬 户外轻薄羽绒服 女 连帽保暖轻型短款 正品滑雪服 QUECHUA","imgsrc":"images/TB3_50x50.jpg"},
        {"name":"3商品08","category":"商品类别003","price":220,"desc":"【经典款】Columbia/哥伦比亚户外男OMNI-HEAT700蓬羽绒服XE5983","imgsrc":"images/TB4_50x50.jpg"},
        {"name":"3商品09","category":"商品类别003","price":310,"desc":"Columbia/哥伦比亚户外男双色拼接700蓬OMNI-HEAT羽绒服PM5404","imgsrc":"images/TB1_50x50.jpg"},
        {"name":"4商品10","category":"商品类别004","price":100,"desc":"ARCTERYX/始祖鸟 Camosun Parka GTX 男户外保暖羽绒服外套 16110","imgsrc":"images/TB2_50x50.jpg"}
    ];
    res.json(products);
});
//订单数据提交-----------------------------
app.post("/shipping",function(req,res){
    var order={"orderId":new Date().toLocaleDateString()};
    res.json(order);
});
//服务器=================================
http.createServer(app).listen(3840,function() {
    console.log("服务器正运行在3840端口...");
});