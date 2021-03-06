/**
 * Created by hxsd on 2016/11/16.
 * 顶层控制器，存储整个网站中要用到的数据
 */
angular.module("myapp").controller("sportStoreCtrl",function($scope,$http,cartShop,$location){
    //商品数据================
    $scope.data={
        //订单信息
        shipping:{}
    };
    //请求商品类别数据=====================
    $http.get("/categories").success(function(data){
        $scope.data.categories=data;
    });
    //请求产品信息数据=====================
    $http.get("/products").success(function(data){
        $scope.data.products=data;
    });
    //发送订单的方法===========================
    $scope.sendOrder=function(){
        //准备数据
        var orderDate={};
        orderDate.cartData=cartShop.findAll();//购物车商品数据
        orderDate.shipping=angular.copy($scope.data.shipping);//订单数据（copy）
        //发送数据
        $http.post("/shipping",orderDate)
            .success(function(data){//data为服务器端发回响应信息
                //保存响应信息
                $scope.data.orderId=data.orderId;
                //清空购物车
                cartShop.clear();
            })
            .error(function(data,status){//status:状态码
                $scope.data.errorStatus=status;
            })
            .finally(function(){
                $location.path("/thankYou");
            })
    };
});