"use strict";
function hahaha() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '';
    yy = '哈哈';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    return yy;
}
var result = hahaha('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
