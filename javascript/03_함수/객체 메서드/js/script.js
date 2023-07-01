let a='age';

const user={
    name1:'jee',
    [a]:30, //계산된 프로퍼티
    [5+2]:7,
    ["안녕"+"하세요"]:'Hello'
}
console.log(user)

//const user1=user;
//객체 복제
//확인필요
const newUser=Object.assign({user:'yun'},user)

/* user1.name1='hyun'; */
/* newUser.name1='hyun';
console.log(user.name1)
console.log(newUser.name1)
 *//* console.log(user)*/
console.log(newUser) 

//==============
//키 배열 반환 Objext.keys()
const user1={
    name2:'yun',
    age:30,
    gender:'female'
}
const u=Object.keys(user1)
console.log(user1)

//값 배열 반환 Obect.values()
const user2={
    name2:'yun',
    age:30,
    gender:'female'
}
const u1=Object.values(user2)
console.log(u1)

//키/값 배열로 반환 Objext.entries()
const user3={
    name2:'yun',
    age:30,
    gender:'female'
}
const u3=Object.entries(user3)
console.log(u3)

//키,값이 배열로 되어있는것을 객체로 Object.fromEntries()
const arr=[
    ['name3','hyuns'],
    ['age','42'],
    ['gender','female'],
]
const u4=Object.fromEntries(arr)
console.log(u4)