class haha{
    public name:string;
    public age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;       
    }
    public say(){
        console.log('沙雕');
    }

}
class hahaha extends haha{
    public sex:string;
    public say2(){
        console.log('da沙雕');
    }
}
let yu:hahaha = new hahaha('yuyu',18);
yu.say();


class hahahaha extends haha{
    public interest(){
        super.interest()
        console.log('超级沙雕')
    }
}