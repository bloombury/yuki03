/**
 * Created by YUKI on 2016/11/27.
 */
myapp.controller('my_recommend',function($scope,$state,$ionicViewSwitcher,productFactory){

    var promsise = productFactory.query("JSON/recommend.json");
    promsise.then(function(data){
        $scope.data= data
    });
    // 跳转
    $scope.toDetail = function(product){
        $state.go("tabs.details",{id:"1001",title:product.title});

        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };

});



