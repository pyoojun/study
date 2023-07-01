//toString()

let num=10;
num.toString()
console.log(num)

//Math.ceil() - 올림
let num1=5.3;
let num2=5.7;

let n1=Math.ceil(num1);
console.log(num1)
let n2=Math.ceil(num2);
console.log(n1)
console.log(n2)

//Math.floor() - 소숫점 내림
/* let f1=Math.floor(num1)
let f2=Math.floor(num2)
console.log(f1)
console.log(f2) */

//Math.round() - 소숫점 반올림
let f1=Math.round(num1)
let f2=Math.round(num2)
console.log(f1)
console.log(f2)

let userRate=30.1274;
//요구사항 소숫점 둘째자리까지 표현(셋째자리에서 반올림)
/* let a=Math.round(userRate*100)/100
console.log(a) */

//toFixed() 소숫점 갯수의 반올림 문자를 반환함
/* let b=userRate.toFixed(3)
console.log(b) */

//toFixed() 문자를 숫자로 변환
/* let b=Number(userRate.toFixed(3))
console.log(b) */


let b=Number(userRate.toFixed(3))
console.log(typeof b) //문자인지 숫자인지 알려줌

//isNan 문자이면 true값을 반환, 숫자이면 false값을 반환
/* let x=Number("1");
console.log(isNaN(x)) */

//parseInt(); 문자를 숫자로 바꿔줌
//문자열에 숫자와 문자가 있으면 숫자만 읽어서 반환 / 시작하는 문자가 문자면 안나타남
let margin='d10px'
let c=parseInt(margin)
console.log(c) //시작하는 문자가 숫자면 숫자인 친구만 보여줌

let redColor='f3';
let d=parseInt(redColor,16)
console.log(d)

//parseFloat() -parseInt와 비슷하지만 부동소숫점을 반환
let padding='18.6%'
let f=parseInt(padding);//정수만 보여줌
let g=parseFloat(padding);
console.log(f)
console.log(g)

//Math.random()
//0~1사이 무작위 숫자 생성(난수)
//1~100 
/* let e=Math.floor(Math.random()*100);
console.log(e) */

let e=Math.round(Math.random()*100);
console.log(e)

//Math.max()-최대값 Math.min()-최소값 / Math.abs()-절대값 / Math.sqrt()-제곱근

let k=Math.max(2,5,10,50,6)
console.log(k)
let l=Math.abs(-1)
console.log(l)
let p=Math.sqrt(36)
console.log(p)















































