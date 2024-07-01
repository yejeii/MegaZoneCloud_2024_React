console.log("hello, javascript");

/* 변수 선언 */
let age = 25;
console.log(age);

let age1 = 25;

var age2 = 25; // 일반적으로 let 키워드로 변수 선언해서 사용

/* 상수 변수 선언 - const 키워드 */
const age3 = 25;
// age3 = 3;

/* 변수에 기호 사용 - _ 와 $ 만 가능 */
let $age = 25;
let human_age = 25;
// let #age = 239;

/* 변수에 숫자 사용 - 변수의 이름을 숫자로 시작하면 안됨 */
// let 2024year = "good";
let _2024year = "good";
let $2024year = "good";

console.log(_2024year);
console.log($2024year);

/** 변수에 예약어 사용 */
// let let = "good";

console.log("---------------------------------------------");

/** 자료형
 *  - 원시 자료형
 *    숫자형, 문자형, 불리언형, null형, undefined 형
 *  - 객체 자료형
 *    배열, 함수, 정규표현식
 */

/** 숫자형 */
let age4 = 25;
let tall = 175.9;
let minus = -20;

// Infinity
// 다른 언어와 달리 0으로 나누어도 오류가 발생치 않고 Infinity 로 결과가 리턴됨
console.log(1 / 0);

// NaN : Not a Number
// 수학적으로 연산이 불가능하면, NaN 이 반환됨
// 그러나, 프로그램이 오류를 발생시키거나 멈추지 않음
const nan1 = 1 * "NAN";
console.log(nan1);

/** 문자형 */
let name = 123;
let welcomeTxt = name + " Welcome!!";
console.log(welcomeTxt);
console.log(typeof welcomeTxt); // String

// 백틱을 사용한 문자열 결합 : 템플릿 리터럴
let guestName = "이정훈";
let greetingTxt = `Welcome ${guestName}`;
console.log(greetingTxt);

/** 불리언(boolean) */
let isSwitchOn = false;
console.log(isSwitchOn);
isSwitchOn = true;
console.log(isSwitchOn);

/** null : 변수에 아무런 값도 할당할 필요가 없는 경우
 *         JS 에서는 독립적인 자료형으로 분류
 */
let emptyVar = null;
console.log(emptyVar);

/** undefined : 미정의 값 */
let realEmptyVar;
console.log(realEmptyVar);

console.log("---------------------------------------------");

/** 형변환
 *  - 묵시적 형변환
 *  - 명시적 형변환
 */

// 묵시적 형변환
console.log("묵시적 형변환 ---------------------- ");
let number = 10;
let string = "20";

const result = number + string;
console.log(result); // 1020 -> 10 을 문자로 형변환 후 문자열 합치기(concat)

// 명시적 형변환
console.log("명시적 형변환 ---------------------- ");
let strA = "10";
let strB = "10개";
let strC = "개10";

let numA = Number(strA);
let numB = Number(strB);
console.log(numA); // 10
console.log(numB); // NAN

// 1. 문자가 포함된 숫자를 숫자로 변환하기
console.log("문자가 포함된 숫자를 숫자로 변환하기 ---------------------- ");
let numAA = parseInt(strA, 10); // strA 를 10 진수로 바꾸라
let numBB = parseInt(strB, 10); // strA 를 10 진수로 바꾸라
let numCC = parseInt(strC, 10); // strA 를 10 진수로 바꾸라

console.log(numAA); // 10
console.log(numBB); // 10
console.log(numCC); // NaN : strC 의 문자열이 문자로 시작하기 때문.
// parseInt 내장함수 : 문자열의 첫 문자부터 숫자로 변환하게 되므로, 문자로 시작하면 NaN 을 반환하게 됨.

// 2. 숫자를 문자로 변환하기
console.log("숫자를 문자로 변환하기 ---------------------- ");
let num = 2022;
let str = String(num); // 명시적 형변환
console.log(str);

// 3. undefined, null, boolean 을 문자로 변환하기
console.log(
  "undefined, null, boolean 을 문자로 변환하기 ---------------------- "
);
let varA;
let varB = null;
let varC = true;

let strvarA = String(varA);
let strvarB = String(varB);
let strvarC = String(varC);

console.log(strvarA); // 문자열 undefined
console.log(strvarB); // 문자열 null
console.log(strvarC); // 문자열 true

// 4. boolean 으로 형변환하기
console.log("Boolean 으로 형변환하기 ---------------------- ");
let varTrue = "1";
let varFalse = "0";
let varBlank = "";
let varnumTrue = 1;
let varnumFalse = 0;

console.log(Boolean(varTrue)); // true
console.log(Boolean(varFalse)); // true
console.log(Boolean(varBlank)); // false
console.log(Boolean(varnumTrue)); // true
console.log(Boolean(varnumFalse)); // false

console.log("---------------------------------------------");

/** 연산자 */
// 대입연산자
console.log("대입연산자 ---------------------- ");
let numA1 = 1;
let numB1;
let numC1;

numB1 = numC1 = numA1;
console.log(numA1, numB1, numC1);

// 산술연산자
console.log("산술연산자 ---------------------- ");
let numberA = 1;
let numberB = 2;

console.log(numberA + numberB);
console.log(numberA - numberB);
console.log(numberA * numberB);
console.log(numberA / numberB);
console.log(numberA % numberB);

// 복합대입연산자
console.log("복합대입연산자 ---------------------- ");
let number1 = 10;

number1 += 10;
console.log(number1);

number1 -= 10;
console.log(number1);

number1 *= 10;
console.log(number1);

number1 /= 10;
console.log(number1);

number1 %= 10;
console.log(number1);

// 후위연산자
console.log("후위연산자 ---------------------- ");
let a = 1;
console.log(a++); // 1 : 참조 후 증가
console.log(a);

// 전위연산자
console.log("전위연산자 ---------------------- ");
a = 1;
console.log(++a); // 2 : 증가 후 참조
console.log(a);

// 논리연산자
// or(||) : 둘 중 하나라도 참이면 참
// and(&&) : 둘 중 하나라도 거짓이면 거짓
// not(!) : 반대
console.log("논리연산자 ---------------------- ");
boolA = true;
boolB = false;
console.log(boolA || boolB);
console.log(boolA && boolB);
console.log(!boolA);
console.log(!boolB);

// 비교연산자
console.log("비교연산자 ---------------------- ");
numberA = 2;
numberB = 2;
numberC = "2";
console.log(numberA === numberB);
console.log(numberA === numberC);

console.log(numberA !== numberB); // false
console.log(numberA !== numberC); // true

console.log(numberA < numberB); // false
console.log(numberA > numberC); // false(자동 형변환)

console.log(numberA <= numberB); // true
console.log(numberA >= numberC); // true

// null 병합 연산자
// 값이 확정된 변수를 찾을 때 사용
// null, undefined : 값이 확정되지 않은 변수
console.log("null 병합 연산자 ---------------------- ");
varA = 10;
varB = 20;
varC;
console.log(varA ?? varB); // 10 -> 연산자의 왼쪽 기준
console.log(varB ?? varC); // 20 -> 초기화가 안된 값이 있는 경우 초기화된 값을 사용

// 변수 user 에 해당하는 사용자의 이름이 없다면 닉네임으로 사용
let customerName;
let nickName = "WinterHood";
let user = customerName ?? nickName;
console.log(user);

// typeof 연산자
varA = 1;
varA = "문자열 저장";
console.log(typeof varA);

// 확인 결과 String 이면 varA++ 하지 않도록 하기 위함
// console.log(varA++); // NaN

// 삼항 조건 연산자
varA = "메뉴가 뭐지?";
typeof varA === "string" ? console.log(varA) : console.log("not String");

// 조건문
num = 10;
if (num > 10) {
  console.log("조건 일치");
} else if (num === 10) {
  console.log("10");
} else {
  console.log("조건 불일치");
}

// switch 문
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("사과");
    break;
  case "banana":
    console.log("바나나");
    break;
  default:
    console.log("해당 과일 X");
}

// 반복문
console.log("반복문 ---------------------- ");
for (let i = 1; i < 10; i++) {
  if (i > 5) {
    console.log("반복문 종료");
    break;
  }
  console.log(i);
}

console.log("---------------------------------------------");

/** 함수 */
console.log("함수 ---------------------- ");
function greeting() {
  console.log("안녕안녕안녕안녕안녕~~~~");
}
greeting();

function getArea() {
  let width = 10;
  let height = 20;

  let area = width * height;

  console.log(area);
}
getArea();

function getArea(width, height) {
  let area = width * height;

  console.log(area);
}
getArea(10, 20);

// 결과를 반환하는 함수
function getArea3(width, height) {
  let area = width * height;
  return area;
}
let result2 = getArea3(10, 20);
console.log(result2);

// 중첩 함수 : 함수 내에 또 다른 함수를 선언.
function greeting2() {
  function greetingWithName(name) {
    //중첩 함수
    console.log(`hello! ${name}`);
  }

  let name = "홍길동";
  greetingWithName(name);
}
greeting2();

/** 함수와 호이스팅(Hoisting)
 *
 * 함수 func 에 대한 선언이 호출 코드보다 아래에 위치하지만
 * 마치 호출보다 먼저 함수를 선언한 것처럼 자연스럽게 동작하고 있음
 *
 * 함수를 선언하기 전에도 호출할 수 있는 JS 기능
 *
 * JS 는 코드 실행전에 준비 단계를 수행
 * 따라서, 준비 단계에서 중첩 함수가 아닌 것들을 모두 찾아서 미리 생성해두게 됨.
 *
 * 코드 내에서 함수 선언의 위치를 강제하지 않기 때문에 더 유연한 프로그래밍이 가능
 *
 */
console.log("함수와 호이스팅 ---------------------- ");
func(); // func 함수 호출
function func() {
  console.log("hello");
}

/** 함수 표현식
 *
 * 함수를 생성하고 변수에 값으로 저장하는 방법
 *
 * 함수 표현식으로 만든 함수는 호이스팅되지 않음
 */
console.log("함수 표현식 ---------------------- ");

let greeting3 = function () {
  console.log("hello");
};
greeting3();

let greeting4 = greeting3;
greeting4;

// 함수 표현식으로 호이스팅 확인
funcA();
// funcB; // 함수 표현식은 호이스팅 지원 X

function funcA() {
  // 일반적인 함수
  console.log("funcA");
}

let funcB = function () {
  // 함수 표현식으로 만든 함수
  console.log("funB");
};

/** 콜백 함수
 *
 * 함수를 다른 함수의 매개변수로 사용되어지는 경우
 */
console.log("콜백 함수 ---------------------- ");

function parentFunc(callback) {
  console.log("parent");
  callback();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc);

// 함수 표현식을 이용한 콜백함수
console.log("함수 표현식을 이용한 콜백함수 ---------------------- ");

function repeat(count, callback) {
  // callback 에 double 함수가 전달
  for (let idx = 0; idx < count; idx++) {
    callback(idx + 1);
  }
}

const double = function (count) {
  console.log(count * 2);
};

repeat(5, double); // double : 함수 표현식

// 화살표 표현식(화살표 함수) : 함수 표현식의 단축형
// let funcA = (매개변수) -> 반환값;
console.log("화살표 표현식 ---------------------- ");

greeting4 = (name) => `hello ${name}`;
greetingTxt = greeting4("홍길동");
console.log(greetingTxt);

greeting4 = (name) => {
  let greetingTxt = `hello ${name}`;
  return greetingTxt;
};
console.log(greeting4("홍길동2"));

// 콜백함수 + 화살표 함수
console.log("콜백함수 + 화살표 함수 ---------------------- ");

let isConfirm = true;

// 콜백 함수, 매개변수 두 개가 함수 표현식
function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}

// 콜백 함수 호출
confirm(
  () => console.log("승인"),
  () => console.log("거부")
);

/** 스코프 */
console.log(" 스코프 ---------------------- ");

a = 1;

function foo() {
  console.log(a);
}

function bar() {
  console.log(a);
}

foo();
bar();
console.log(a);

console.log("---------------------------------------------");

/** 객체
 *
 * 객체 생성 방법
 * let objA = {};   // literal 객체
 * let objB = new ObjB();   // 객체 생성자
 *
 * let person = {
 *  name : "홍길동",    // name 프로퍼티 (자바에서는 멤버)
 *  age : 25           // age 프로퍼티 (자바에서는 멤버)
 * }
 */
console.log("객체 ---------------------- ");

let person = {
  name: "홍길동",
  age: 25,
  "like cat": true,
};

console.log(person.name);
console.log(person["age"]);
console.log(person["like cat"]);

// 프로퍼티 추가
person.gender = "male";
person["nickname"] = "winterhood";

console.log(person.gender);
console.log(person["nickname"]);

// 프로퍼티 추가 - key 와 value 가 유동적
function addProperty(obj, key, value) {
  obj[key] = value;
}

let obj = {};

addProperty(obj, "a", 1);
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);

console.log(obj);

// 프로퍼티 수정
let cat = {
  name: "귀요미",
  age: 1,
};
cat.name = "귀요밍><";

console.log(cat);

// 프로퍼티 삭제
delete cat.name;
delete cat["age"];

console.log(cat);

// 상수 객체의 프로퍼티 : 수정, 추가, 삭제 가능
const obj2 = {
  a: 1,
  b: "text",
};

obj2.a = 2;
obj2.c = undefined;
delete obj2.b;

console.log(obj2);

// 객체에 특정 프로퍼티의 존재 유무
let obj3 = {
  a: 1,
};

console.log(obj3.b);

let isPropertyExists = obj3.b !== undefined;
console.log(isPropertyExists);

// 메서드
let person2 = {
  name: "홍길동",
  sayHi: function () {
    // 객체의 메서드
    console.log("안녕");
  },
};

person2.sayHi();

console.log("---------------------------------------------");

/** 배열
 *
 * 요소는 어떤 값도 올 수 있음
 *
 * let arrA = new Array(); // 배열 생성자
 * let arrB = [];   // 배열 리터럴
 */
console.log("배열 ---------------------- ");

let arr = [
  1,
  "1",
  true,
  null,
  undefined,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1 },
];

console.log(arr);

// 배열 인덱스
let food = ["짜장면", "대연동 서소문 족발", "치킨"];

console.log(food[0]);

food[2] = "스시";
food[3] = "대방어 강추";

console.log(food);
