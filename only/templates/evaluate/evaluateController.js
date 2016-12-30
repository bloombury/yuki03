/**
 * Created by YUKI on 2016/11/27.
 */
myapp.controller('my_evaluate',function($scope,$http,$ionicScrollDelegate,$ionicHistory,$cacheFactory){
    var parameter_cache = $cacheFactory.get("parameter_cache");
    $scope.ptitle= parameter_cache.get("p_title").title;
    $scope.back=function(){

        $ionicHistory.goBack()

    };
    $scope.in=[];

    $http.get('JSON/evaluate.json').success(function(data){//请求服务端数据
        $scope.content=data;
    });

    $scope.Sendout =function () {
        console.log($scope.body);
        $scope.newtext=
        {"name":"千叶长生","body":$scope.in.body,"images":"images/nga_8716194.jpg","time":new Date()/1000,"top":0};
        if($scope.in.body.length<=0){
            return;
        }else {
            $scope.content.push($scope.newtext);
            $scope.in.body=''
        };

    };

    $scope.top = function(){
        // 让content滚动到顶部
        $ionicScrollDelegate.scrollTop(true);
    };
});



