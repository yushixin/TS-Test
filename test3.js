"use strict";
//TS的形参 剩余形参
function hahaha(...xuqiu) {
    let yy = '';
    yy = '哈哈';
    for (let i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    return yy;
}
var result = hahaha('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
