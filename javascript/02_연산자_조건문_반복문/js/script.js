//1. 문자결합(string concatenation)
console.log('my'+'hyun');
console.log('my'+2);
console.log(`string literals : 1+2=${1+2}`);

console.log('jeehyun\'s \t room') // \특수문자 \n 줄바꿈 \t 탭 - escape

//2. 숫자연산자 (numberic operators
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

/* x= x+y 적게 쓴 코드가 잘쓴 코드*/
x += y //9
x -= y //x= x -y 9-6
x *= y //x=3*6=18
x /= y //x=18/6=3
x %= y //x=3/6=3 %=나눈 나머지  
console.log(x)

//5.비교연산자
console.log(10<6)
console.log(10<=6)
console.log(10>6)
console.log(10>=6)

//6.or(||) and(&&) not(!) 논리 연산자
const valuel=false;
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
    a=false
}else{
    console.log('bye')
    a=true
}
console.log(cnt) */
//true 인데 가벼운게 제일 앞에 있는게 좋음 

console.log(`and:${ check() && value2 && value1}`)
//제일 무거운걸 참으로 넣음. 무거움

console.log(!valuel)
//리엑트나 뷰에서 많이 씀 

//7.같다(Equality)
const stringFive='5'//숫자?문자?
const numberFive=5; 

console.log(stringFive==numberFive)
console.log(stringFive!=numberFive)

console.log(stringFive===numberFive)
console.log(stringFive!==numberFive)
//이미지슬라이드 만들때 헷갈림

const hyun1={name:"hyun"}//객체는 중괄호 안에 있음
const hyun2={name:"hyun"}
const hyun3=hyun1;

console.log(hyun1==hyun2)//false 객체는 
console.log(hyun1===hyun2)//false
console.log(hyun1===hyun3)//true

console.log(0==false)//true
console.log(0===false)//false 0은 타입자체가 true false가 아님
console.log(''==false)//true 빈값은 false다 
console.log(''===false)//false 빈값은 분리형 타입이 아니다. 
console.log(null==undefined)//true
console.log(null===undefined)//false

//8.if(){}문 if(){}else{} elseif(){}
const name3='hyun'; //문자는 ''안에 써준다

if(name3=='hyun1'){
    /* console.log('welcome' +name3) */
    console.log(`welcome ${name3}`)
}else{
    console.log('바보')
}

//삼항조건문
const name4='hyun';
console.log(name4 === 'hyun1' ? '오예' : '바보탱이')

//스위치문
const browser="chrome";
switch (browser){
    case 'IE':
    console.log('나야');
    break;
    case 'chrome':
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

/* let gender=prompt('당신의 성별은?', '여성');//값이 변할수 있으니 let
let age=prompt('나이는 어떻게 되나요', '20');
let result= age>=20 && age<30 && gender=="여성";
console.log(result); */

//prompt 메서드를 활용하여 국어,영어,수학 점수를 입력받으세요
//평균이 70이상이고
//각 과목별 점수가 60점 이상이면 true를 아니라면 false를 출력합니다.


/* let korNum=Number(prompt('국어','60'));
let matNum=Number(prompt('영어','60'));
let engNum=Number(prompt('수학','60'));
let avg=(korNum+matNum+engNum)/3
let result=avg >= 70 && korNum >=60 && matNum >=60 && engNum >=60;
console.log(result) */ 

//지현쌤의 지출 내역은 교통비 3,000원 식비 7,000원 음료비 2,000원
//삼항 조건 연산자를 사용하여 하루 적정 지출 비용인 1만원을 초과했을 경우
//"000원 초과"라고 출력되고, 아니면 "돈 관리 참 잘했어요!"라고 출력

/* const price1=3000;
const price2=7000;
const price3=2000;

let total=price1+price2+price3;
let result= total>10000 ? total-10000+"원 초과":"돈관리 참 잘했어요";
document.write(result) */

const price1=3000;
const price2=4000;
const price3=2000;

let total=price1+price2+price3;
let result= total>10000 ? total-10000+"원 초과":"돈관리 참 잘했어요";
document.write(result)

//09. 반복문
//9-1 while
let i=3; //i index약자로 많이 씀.순서를 나타낼때 ()조건문 {}실행문 블랙스코프
let j=3;
while(i>0){
    console.log(`while:${i}`);
    i--;
}
//9-2 do while
do{
    console.log(`dowhile:${j}`);
    j--;
}while(j<0)
//9-3 for 설정 조건 증감
/* for(let k=0; k<11; k++){
    if(k%2===0){
        console.log(k)
    }
}
 */

//숫자 8을 만나면 멈추게 해주세요
for(let k=0; k<11; k++){
    if(k>8){
        break; //브레이크문
    }
    console.log(k)
}



