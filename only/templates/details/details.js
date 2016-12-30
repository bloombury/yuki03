/**
 * Created by hxsd on 2016/9/1.
 */
myapp.controller("my_details", function ($scope, $stateParams,$cacheFactory, productFactory,cartShop,$ionicHistory) {


    var parameter_cache = $cacheFactory.get("parameter_cache");
    if(!parameter_cache){
        parameter_cache = $cacheFactory("parameter_cache");
    }
    parameter_cache.put("p_title",{title:$stateParams.title});

    $scope.back=function(){

        $ionicHistory.goBack()

    };
    $scope.add = function(product){
        // 调用购物车对象的add方法
        cartShop.add(product);
    };
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var title = $stateParams.title;


        // 查询出来要显示在view中的商品数据
        var promsise = productFactory.query("JSON/details.json");
    promsise.then(function(data){
        angular.forEach(data, function (item) {
            if (item.title == title) {
                $scope.product = item;
                $scope.product.imgsrc = "images/c"+parseInt(Math.random()*10) +".jpg";
                return false;   // 中断forEach循环 <=> break
            }
        });
    },function(err){
        console.log(err);
    });

    });