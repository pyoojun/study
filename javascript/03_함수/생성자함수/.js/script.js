let user={
    name:"yoojun",
    age:36,
}

console.log(user)

function User(name, age){
    //this={}//보이지 않지만 실행이 됨.
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log(this.name)
    }
    //return this
}

let user1=new User('mike',30)
let user2=new User('jane',20)
let user3=new User('min',22)
let user4=new User('tom',31)
/* console.log(user1)
console.log(user2)
console.log(user3) */
/* console.log(user4) */
user4.sayName() 