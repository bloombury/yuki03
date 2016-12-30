/**
 * Created by hxsd on 2016/11/16.
 */
//声明专用过滤器模块
angular.module("marsFilter",[]);
//声明专用购物车模块
angular.module("marsService",[]);
//主模块（需注入对其他模块的依赖）
var myapp=angular.module("myapp",["marsFilter","marsService","ngRoute"]);
//设置路由====================
myapp.config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"views/productList.html",controller:"productListCtrl"})
        .when("/checkout",{templateUrl:"views/checkoutSummary.html",controller:"checkoutCtrl"})
        .when("/placeOrder",{templateUrl:"views/placeOrder.html"})
        .when("/thankYou",{templateUrl:"views/thankYou.html"})
        .otherwise({templateUrl:"views/productList.html"})
});
