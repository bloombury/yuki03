/**
 * Created by YUKI on 2016/11/27.
 */
myapp.controller('my_parameter',function($scope,$http,$ionicScrollDelegate,$ionicHistory,$cacheFactory){
    var parameter_cache = $cacheFactory.get("parameter_cache");
    $scope.ptitle= parameter_cache.get("p_title").title;

    $scope.back=function(){

        $ionicHistory.goBack()

    };
});



