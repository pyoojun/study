//1. 한줄주석


/* 2.여러줄 주석 */


//3. 변수(variable) var, let, const
//3-1 var
var name='jeehyun';
console.log(name)
var name='hyuns';
console.log(name)
//var 한번 선언된 변수를 다시 선언할수 있음

//3-2 let
let name1

console.log(name1);
name1='jun';
console.log(name1);
//let 한번 선언된 변수를 다시 선언할수 없음 대신 재선언 가능

//3-3 const
const name2='jjj';
console.log(name2)
//const 선언과 동시에 값을 대입해야 한다. 대도록이면 변하지 않는 값을 사용할때 선언 (보완상 다른 해커가 값을 변경하는것을 막을수 있음)

//4. type(primitve-[number, string, boolean, null, undefined, symbol, value], [object{}], [function] )

//4-1 number(숫자)
const count=17
const size=17.8
const infinity=1/0;

console.log(`value: ${count}, type: ${typeof count}`) // 벡틱기호(템프럴 리터럴)
console.log("value:"+ size+ ", type:" + typeof size);

//4-2 string(문자)
const char='c';
const names='jeehyun'
const greeting="hello" + names + 7;
console.log(`value: ${greeting}, type: ${typeof greeting}`)

//4-3 boolean(논리)
//false:0, " ", null, undefined, NaN
//true:다른 value내용이나 값이 들어있는 것은
const read=true; 
const test= 3<1;
console.log(`value: ${read}, type: ${typeof read}`)
console.log(`value: ${test}, type: ${typeof test}`)

//4-4 null
let nothing=null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)

//4-5 undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`)

//4-6 symbol
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2)// 유일한 값을 만들때 필요

const gsymbol1=Symbol.for('id');
const gsymbol2=Symbol.for('id');
console.log(gsymbol1===gsymbol2)// 유일한 값을 만들때 필요

//심볼은 바로 출력하면 오류가 남 그래서 .description
console.log(`value: ${gsymbol1.description}, type: ${typeof gsymbol1}`)

//5. 호이스팅 - 아래에 선엄만 끌어올립니다. 스코프 내부 어디서든 변수 선언은 최상위 선언된것처럼 행동

console.log(age);
var age='16'
console.log(age)


//6. 스코프 var:함수 스코프, let, const: 블럭 스코프
var age1=30;
if(age1>19){
    let txt='성인'
    console.log(txt);
}


add(1, 2)
function add(num1, num2){
    var result=num1+num2;
    console.log(result)
}
