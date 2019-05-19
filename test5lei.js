"use strict";
// class XiaoJieJie{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age 
//     }
//     say(){
//         console.log('小哥哥好')
//     }
// }
// let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
// console.log(jiejie)
// jiejie.say()
class XiaoJieJie2 {
    constructor(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('小哥哥好');
    }
    sayLove() {
        console.log('我爱你');
    }
}
var jiejie2 = new XiaoJieJie2('女', '热巴', 22);
console.log(jiejie2.sex);
console.log(jiejie2.name); //报错
console.log(jiejie2.age); //报错
jiejie2.sayHello();
jiejie2.sayLove(); //报错
