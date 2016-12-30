/**
 * Created by hxsd on 2016/11/16.
 */

angular.module("marsFilter")
    //分页过滤器=======================
    .filter("pageFilter",function(){
        //传参：被过滤数组； 请求页码数； 页面大小（显示个数）
        return function (products,pageNum,pageSize) {
            //判断传入参数类型是否正确,不正确返回原数据
            if (angular.isArray(products) && angular.isNumber(pageNum) && angular.isNumber(pageSize)) {
                //计算该页起始索引
                var startIndex = (pageNum - 1) * pageSize;
                //判断起始索引范围,超出返回空数组【或最后一页起始】
                if (startIndex > products.length) {
                    return [];
                }
                //返回被筛选（切割）出的新数组
                return products.slice(startIndex, startIndex + pageSize);
            } else {
                return products
            }
        }
    })
//过滤计算按钮总数===========================
    .filter("navButtonFilter",function(){
        return function (products,pageSize){
            //计算按钮总数
            if(angular.isArray(products)&&angular.isNumber(pageSize)){
                var count=Math.ceil(products.length/pageSize);
                //空数组装页码
                var arr=[];
                for(var index=1;index<=count;index++){
                    arr.push(index);
                }
                return arr;
            }

        }
    });