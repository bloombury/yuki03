/**
 * Created by YUKI on 2016/11/29.
 */
myapp.controller('my_community',function($scope,$http,$ionicScrollDelegate) {


    $http.get('JSON/evaluate2.json').success(function (data) {//请求服务端数据
        $scope.content = data;
        data.forEach(function (item,e) {
            Array.prototype.push.call(item,parseInt(Math.random()*2333));
            Array.prototype.push.call(item,{c:parseInt(Math.random()*2333)});
        })
    });

    $scope.topup=function (content) {
        $scope.iszan=true;
        content[1].c++;
    };
    $scope.top = function(){
        // 让content滚动到顶部
        $ionicScrollDelegate.scrollTop(true);
    };
});