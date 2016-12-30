/**
 * Created by hxsd on 2016/11/17.
 */
angular.module("myapp").controller("checkoutCtrl",function($scope,cartShop){
    //获取所有商品
    $scope.cart=cartShop.findAll();
    //计算总金额
    $scope.summary=function(){
        var total=0;
        angular.forEach($scope.cart,function(item){
            total+=item.number*item.product.price;
        });
        return total;
    };
    //删除指定商品
    $scope.remove=function(item){
        cartShop.remove(item.product.name);
    }
});