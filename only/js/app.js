/**
 * Created by hxsd on 2016/11/23.
 */
angular.module("marsService",[]);
var myapp=angular.module('myapp',['ionic','marsService']);


myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    $stateProvider
        .state('tabs.bedroom',{
            url:'/bedroom',
            views:{'tab-home':{ templateUrl:'templates/bedroom/bedroom.html',controller:'my_bedroom'}}
        })
        .state('tabs.home',{
            url:'/home',
            views:{'tab-home':{ templateUrl:'templates/home/home.html',controller:'my_home'}}

        })
        .state('tabs.Community',{
            url:'/Community',
            views:{'tab-Community':{ templateUrl:'templates/Community/Community.html',controller:'my_community'}}

        })
        .state('tabs.shoppingcart',{
            url:'/shoppingcart',
            views:{'tab-shoppingcart':{templateUrl: "templates/ShoppingCart/shoppingcart.html",controller:'my_shoppingcart'}}

        })
        .state('tour',{
            url:'/tour',
            templateUrl:'templates/tour/tour.html'
        })
        .state('tabs.kitchen',{
            url:'/kitchen',
            views:{'tab-home':{ templateUrl:'templates/kitchen/kitchen.html',controller:'my_kitchen'}}

        })
        .state('tabs.livingroom',{
            url:'/livingroom',
            views:{'tab-home':{ templateUrl:'templates/livingRroom/livingroom.html',controller:'my_livingroom'}}
        })
        .state('tabs.restaurant',{
            url:'/restaurant',
            views:{'tab-home':{ templateUrl:'templates/restaurant/restaurant.html',controller:'my_restaurant'}}
        })
        .state('tabs.study',{
            url:'/study',
            views:{'tab-home':{ templateUrl:'templates/study/study.html',controller:'my_study'}}

        })
        .state('tabs.recommendation',{
            url:'/recommendation',
            views:{'tab-home':{ templateUrl:'templates/recommendation/recommendation.html',controller:'my_recommend'}}

        })
        .state('tabs.thx',{
            url:'/thx',
            views:{'tab-home':{ templateUrl:'templates/thx/thx.html'}}

        })
        .state('tabs',{
            url:'/tabs',
            abstract:true,
            templateUrl:'templates/tabs/tabs.html'
        })
        .state('tabs.details',{
            url:'/details?:id:title',
            views:{'tab-home':{ templateUrl:'templates/details/details.html',controller:'my_details'}}
        })
        .state('tabs.parameter',{
            cache:false,
            url:'/parameter',
            views:{'tab-home':{ templateUrl:'templates/parameter/parameter.html',controller:'my_parameter'}}
        })
        .state('tabs.detailspage',{
            cache:false,
            url:'/detailspage',
            views:{'tab-home':{ templateUrl:'templates/detailspage/detailspage.html',controller:'my_detailspage'}}

        })
        .state('tabs.evaluate',{
            cache:false,
            url:'/evaluate',
            views:{'tab-home':{ templateUrl:'templates/evaluate/evaluate.html',controller:'my_evaluate'}}
        })

    ;

    $urlRouterProvider.otherwise('/tour');

    //解决苹果和安卓系统选项卡显示问题
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

});



// $q 是内置服务，所以可以直接使用
// 创建一个Service，它负责从服务器请求商品数据，并全局共享
//myapp.factory("productFactory", function ($http, $q) {
//    return {
//        query: function () {
//            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
//            $http.get('JSON/home.json')
//                .success(function (data, status, headers, config) {
//                    deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
//                })
//                .error(function (data, status, headers, config) {
//                    deferred.reject(data);   // 声明执行失败，即服务器返回错误
//                });
//            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
//        } // end query
//    };
//});
myapp.factory("productFactory", function ($http, $q) {
    return {
        query: function (url) {
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
            $http.get(url)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);   // 声明执行失败，即服务器返回错误
                });
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
        } // end query
    };
});

// 使用工厂方法，创建的一个单例对象
// 这个单例对象会被缓存
/*myapp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中

    return {
        query: function () {
            return data;   // 返回数据
        } ,// end query,
        getData:function(url){
            $http.get(url).success(function (_data, status, headers, config) {

                data.productList = _data;
                console.log(data);
                return data;
            });
        }
    };
});*/



