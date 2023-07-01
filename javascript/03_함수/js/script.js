//호이스팅이 일어남
love()//실행됨
function love(){
    for(let i=1; i<=10; i++){
        document.write('사랑해'+i, '<br>')
    }
}
love()//실행됨

//함수 표현식
//익명함수
//love1();실행하지 않음
const love1=function(){
    for(let i=1; i<=10; i++){
        document.write('공부해'+i, '<br>')
    }
}
love1();//실행함

//기명함수 표현 
let q=function square(w){
    return w*w
}
// console.log(q(2))
//console.log(square(2))//실행안됨
//기명함수 장점은 에러발생시 함수이름을 포함해서 출력하기 때문에 오류를 빨리 찾을수 있다는것 

let x=function(y, k){
    return y+k;
}
console.log(x(5, 3))
console.log(x(8, 1))

//즉시 실행함수 
/* (function square1(u){
    console.log(u*u)
})(6) */

//화살표 함수
const print=() => console.log('화살표 함수로 표현')
print();

/* const add= function(a, b){
    return console.log(a*b)
}
add(5,7) */

const add=(a,b) => console.log(a*b)
add(5,7)

