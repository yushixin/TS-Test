"use strict";
class haha {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('沙雕');
    }
}
class hahaha extends haha {
    say2() {
        console.log('da沙雕');
    }
}
let yu = new hahaha('yuyu', 18);
yu.say();
