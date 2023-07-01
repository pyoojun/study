//1. 문자결합(string concatenation)
console.log('my'+'hyun');
console.log('my'+2);
console.log(`string literals : 1+2=${1+2}`);

console.log('jeehyun\'s \t room') //\특수문자 \n 줄바꿈 \t 탭 - escape

// 2.숫자연산자 (numberic operators)
console.log(1+1)

//3.증감연산자
let cnt=2;
/* const preincrement=cnt++;
console.log(preincrement) */
const predecrement=--cnt;
console.log(predecrement)

//4.할당연산자
let x=3;
let y=6;

/* x= x+y; */
x += y //9
x -= y // x = x-y =3
x *= y  //x= 3*6=18
x /= y 
x %= y
console.log(x)

//5. 비교연산자
console.log(10<6)
console.log(10<=6)
console.log(10>6)
console.log(10>=6)

//6. or(||) and(&&) not(!) 논리연산자
const value1=false;
const value2= 4<2;
const value3= 5>2;
function check(){
    for(let i=0; i<10; i++){
        console.log('오늘 수업 끝나감')
    }
    return true;
}

console.log(`or:${ check() || value2 || value1}`)
/* var a=true
if(cnt==1){
    console.log('hi')
   
}else{
    console.log('bye')
   
}
console.log(cnt) */
console.log(`and:${ check() && value2 && value1}`)
console.log(!value1)

//7. 같다(Equality)
const stringFive='5';
const numberFive=5;

console.log(stringFive==numberFive)
console.log(stringFive!=numberFive)

console.log(stringFive===numberFive)
console.log(stringFive!==numberFive)

const hyun1={name:'hyun'}
const hyun2={name:'hyun'}
const hyun3=hyun1;

console.log(hyun1==hyun2)//false
console.log(hyun1===hyun2)//false
console.log(hyun1===hyun3)//true

console.log(0==false)//true
console.log(0===false)//false
console.log(''==false)//true
console.log(''===false)//false
console.log(null==undefined)//treu
console.log(null===undefined)//false

//8. if(){}문 if(){}else{} elseif(){}
const name3='hyun';

if(name3==='hyun1'){
   /*  console.log('Welcome'+name3) */
    console.log(`Welcome ${name3}`)
}else{
    console.log('바보')
}
const name4='hyun';
console.log(name4 === 'hyun1' ? '오예': '바보탱이')

const browser='Chrome';
switch (browser){
    case 'IE':
    console.log('나야');
    break;
    case 'Chrome':
    console.log('나 크롬');
    break;   
    case 'firefox':
    console.log('나 파이어폭스');
    break;  
    default:
    console.log('나 기본');
    break;  
}

/* let a=prompt('나이','20');
console.log(a) */
/* let gender=prompt('당신의 성별은?','여성');
let age=prompt('나이는 어떻게 되나요?', '20');
let result= age>=20 && age<30 && gender=="여성";
console.log(result); */

/* let korNum=Number(prompt('국어','60'))
let mathNum=Number(prompt('수학','60'))
let engNum=Number(prompt('영어','60'))
let avg=(korNum+mathNum+engNum)/3
let result=avg >= 70 && korNum >=60 && mathNum >=60 && engNum >=60;
console.log(result) */

const price1=3000;
const price2=4000;
const price3=0;

let total=price1+price2+price3;
let result= total>10000 ? total-10000+"원 초과":"돈관리 참 잘했어요";
document.write(result)


//9.반복문
//9-1 while
let i=3;
let j=3
while(i>0){
    console.log(`while: ${i}`);
    i--;
}
//9-2 do while
do{
    console.log(`dowhile: ${j}`);
    j--;
}while(j<0)

//9-3 for
//숫자 8을 만나면 멈추게 해주세요
for(let k=0; k<11; k++){
    if(k>8){
        break;
    }
    console.log(k)
}


























