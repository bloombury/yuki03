/**
 * Created by hxsd on 2016/11/16.
 *
 */
angular.module("myapp").controller("productListCtrl",function($scope,cartShop){
    //点击首页左侧导航栏，根据商品类别筛选商品显示=======================
    //声明用于保存商品类别的变量
    $scope.selectedCategory=null;
    //点击事件--保存或改变商品类别
    $scope.selectCategory=function(category){
        $scope.selectedCategory=category;
        $scope.pageNum=1;
    };
    //过滤函数--定义显示条件
    $scope.filterByCategory=function(product){
        return $scope.selectedCategory==null || product.category==$scope.selectedCategory;
    };
     //分页筛选=========================================
    //分页变量初始值
    $scope.pageNum=1;
    $scope.pageSize=3;
    //分页按钮点击事件
    $scope.selectPage=function(page){
        $scope.pageNum=page;
    };
 //    购物车点击添加 ======================================
    $scope.add=function(product){
        cartShop.add(product);
    };
});