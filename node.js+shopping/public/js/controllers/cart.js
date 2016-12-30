/**
 * Created by hxsd on 2016/11/17.
 */
//顶部导航栏部分购物车==================
angular.module("myapp").controller("cartCtrl",function($scope,cartShop){
    //拿到购物车所有商品
    var cartDate=cartShop.findAll();
    //计算全部商品数量
    $scope.totalNumber=function(){
        var total=0;
        angular.forEach(cartDate,function(item){
            total+=item.number;
        });
        return total;
    };
    //计算全部商品金额
    $scope.totalMoney=function(){
        var total=0;
        angular.forEach(cartDate,function(item){
            total+=item.number*item.product.price;
        });
        return total;
    };

});