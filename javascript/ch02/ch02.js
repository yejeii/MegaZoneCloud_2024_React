console.log("hello ch02 javascript!~");

/** 지난 시간 Review */

/** 호이스팅 */
console.log("--- 호이스팅 ---");

func(); // 함수 정의가 없지만 우선 호출한 상태

function func() {
  console.log("호이스팅");
}

/** 콜백 함수 : 함수의 매개변수로 함수 전달, 호출 */
console.log("--- 콜백 함수 ---");

function parentFunc(callback) {
  console.log("Parent Function.");
  callback();
}

function childFunc() {
  console.log("Child Function");
}

parentFunc(childFunc);

// 아래의 함수에서 출력 부분만 제외하고 코드가 동일..
function repeat(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log(idx + 1);
  }
}

function repeatDouble(count) {
  for (let lidx = 0; lidx < count; lidx++) {
    console.log((lidx + 1) * 2);
  }
}

// 함수 리펙토링 : 반복문 재사용되도록 개선
function refactorRepeat(count, callback) {
  for (let idx = 0; idx < count; idx++) {
    callback(idx + 1);
  }
}

// 변경되는 부분만 함수로.
function origin(count) {
  console.log(count);
}

function refactorRepeatDouble(count) {
  console.log(count * 2);
}

refactorRepeat(5, origin);
refactorRepeat(5, refactorRepeatDouble);

/** 화살표 함수 : 함수 표현식을 더 간략하게. */
console.log("--- 화살표 함수 ---");

greeting = (name) => `hello ${name}`;

greetingText = greeting("홍길동");
console.log(greetingText);

/** 객체 */
console.log("--- 객체 ---");

let objA = {}; // 리터럴 객체
let objB = new Object(); // 객체 생성자

let obj = {
  // obj 는 객체 참조 변수 -> obj 에 저장된 것은 주소값
  a: 1,
};

let isPropertyExists = obj.b !== undefined;
console.log(isPropertyExists);

// "!== undefined" 보다 더 깔끔한 in 연산자
let person = {
  age: 10,
};

let isNameExist = "name" in person; // "name" 이라는 속성이 person 객체에 존재하느냐?!
console.log(isNameExist);

let isAgeExist = "age" in person; // "age" 이라는 속성이 person 객체에 존재하느냐?!
console.log(isAgeExist);

/** 배열 */
console.log("--- 배열 ---");

// 배열 값으로 어떤 자료형이든 가능
// 요소로 배열, 객체, 함수 ...

let arr = [
  1,
  "1",
  true,
  false,
  undefined,
  null,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1 },
];

console.log(arr); // arr 는 참조 변수. 저장된 값은 주소
// -> arr 은 객체 객체에는 프로퍼티, 메소드로 구성
// -> javascript 에서 제공해주는 프로퍼티, 메소드 가 있음

/**
 * javascript 의 자료형
 *
 * 원시자료형
 *      숫자형, 문자형, 불리언형, null형, Dudefined형
 * 객체자료형
 *      Object 형 - 배열, 함수, 정규표현식
 */

/**
 * javascript : C++, javascript engine C++ 로 만들어진 것임.
 *              C++ : C + OOP 를 더한 것임.
 *                    C : 메모리를 관리하는 변수 => 포인터
 *                        함수포인터 : 함수명
 *                    OOP : 기본형을 제외하고 다양한 사용자
 *                      정의 타입을 만들어서 사용할 수 있음.
 *
 * 기회가 된다면, C 언어 기본서 => C 언어 기반의 자료 구조.
 *              => C++ 기본서
 *
 * javascript 에서 객체주소 확이은?
 *   javascript engine 에서 보호하고 있음.
 *   1. javascript engine C++ 로 컴파일해서 확인.
 *   2. 개발조 모드에서 간접적으로 확인.
 *
 *
 */

/** null 병합 연산자 */
console.log("--- null 병합 연산자 ---");

let name;
let nickname = "nickname";

let user = name ?? nickname; // 값이 확정된 값은 nickname
console.log(user);

/** 지난 시간 Review End */

/** chapter 02 Start */

console.log("--- truthy, falsy ---");

// undefined, null, 0, -0, NaN, "", `` -> 조건식에서 false 로 치부됨
if (!undefined) {
  // undefined -> false 로 보고 있음
  console.log("undefined : falsy 한 값");
}

if (!null) {
  console.log("null : falsy 한 값");
}

if (!0) {
  console.log("0 : falsy 한 값");
}

if (!NaN) {
  console.log("NaN: falsy 한 값");
}

if (!"") {
  console.log('"" : falsy 한 값');
}

if (!``) {
  console.log("`` : falsy 한 값");
}

console.log("--- truthy, falsy 활용 ---");

let varA;

if (varA) {
  console.log("값이 있어!");
} else {
  console.log("값이 없어ㅜㅠ");
}

// 단락 평가 : 논리 연산에서 처리를 지름길로 수행할 수 있도록 함
// AND (&&) : 앞의 피연산자가 false 이면 뒤의 피연산자는 쳐다도 볼 필요 X
// OR (||) : 앞의 피연산자가 true 이면 뒤의 피연산자는 쳐다도 볼 필요 X

function calcA() {
  console.log("A");
  return false;
}

function calcB() {
  console.log("B");
  return true;
}

console.log(calcA() && calcB()); // B 까지 안가고 걍 false 리턴

// 단락 평가 + truthy falsy
// truthy falsy 에 해당되는 값이면, 그대로 반환
console.log("--- 1. 단락 평가 + truthy falsy ---");

function calcA2() {
  console.log("A2");
  return undefined; // falsy
}

function calcB2() {
  console.log("B2");
  return true;
}

console.log(calcA2() && calcB2()); // undefined 를 false 로 보고 뒤에꺼까지 가지 않음. undefined 반환

// 객체 + 단락 평가 + truthy falsy
console.log("--- 2. 객체 + 단락 평가 + truthy falsy ---");

function getName(person) {
  if (person !== undefined && person !== null) {
    return person.name;
  } else {
    return "존재하지 않는 객체정보입니다.";
  }
}

let person2; // 객체 생성
// console.log(person2);    // undefined
console.log(getName(person2));

let person3 = null;
console.log(getName(person3));

// 모든 객체에 대해서 null, undefined 체크를 하는 것이 부담이 됨..
// -> 객체 + 단락평가 + truthy falsy 적용해보자
function getName2(person) {
  return person && person.name;
  // person 이 null -> false 로 보겠다.
  // person.name 이 undefined -> false 로 보겠다.
}

let person4 = { name: "홍길동" }; // 값으로 바로 초기화
console.log(getName2(undefined)); // undefined
console.log(getName2(null)); // null
console.log(getName2(person4)); // null

// 객체 자료형
// 원시 자료형 제외한 모든 자료형은 객체 자료형 -> 배열도 객체.
// 배열에는 프로퍼티와 메서드가 있음
console.log("--- 객체 자료형 ---");

const arr1 = [1, 2, 3];
console.log(arr1.length); // 배열 객체의 프로퍼티

arr1.push(4); // 배열 객체의 메서드
console.log(arr1);

function myfunction() {
  console.log("hello");
}

console.log(myfunction.name); // 함수 객체의 프로퍼티

let numA = 1;
let numB = 1;
console.log(numA === numB);

let people1 = {
  name: "홍길동",
};

let people2 = {
  name: "홍길동",
};

console.log(people1 === people2); // false : 주소값 비교

// 객체의 프로퍼티 값을 비교해야 함

let func2 = () => {
  console.log("func2");
};

let func3 = () => {
  console.log("func3");
};

console.log(func2 === func3); // false : 객체의 주소값 비교

/** 반복문 활용 */
console.log("--- 반복문 활용 ---");

arr = [1, 2, 3, 4];

// 1. 인덱스 활용
for (let idx = 0; idx < 4; idx++) {
  console.log(arr[idx]);
}

// 2. 배열 객체의 프로퍼티 활용
let len = arr.length;
console.log(len);

for (let idx = 0; idx < arr.length; idx++) {
  console.log(arr[idx]);
}

// 3. for ... of 사용
for (let item of arr) {
  console.log(item);
}

/** 객체와 반복문 */
console.log("--- 객체와 반복문 ---");

// 1. 프로퍼티의 key 획득
person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

const keyArr = Object.keys(person);
console.log(keyArr);

// 2. 키를 활용한 프로퍼티 value 탐색
for (let key of keyArr) {
  let value = person[key];
  console.log(value);
}

// 3. Object.values 를 활용한 프로퍼티 value 탐색
const valueArr = Object.values(person);
console.log(valueArr);

// 4. for...in 을 이용한 순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

/** 구조 분해 할당
 * 배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담는 것
 */
console.log("--- 배열 구조 분해 할당 ---");

arr[(1, 2, 3)];

let one = arr[0];
let two = arr[1];
let three = arr[2];

let [_1, _2, _3] = arr; // 구조 분해 할당
console.log(_1, _2, _3);

let arr2 = [1, 2, 3];
let [__1, __2] = arr2;
console.log(__1, __2); // 요소가 3개인데, 구조 분해 할당은 2개로 설정

arr2 = [1, 2];
let [___1, ___2, ___3] = arr2;
console.log(___1, ___2, ___3); // ___3 은 undefined 로 할당

/** 객체 구조 분해 할당 */
console.log("--- 객체 구조 분해 할당 ---");

person = {
  name_: "홍길동",
  age_: 25,
  location_: "부산",
};

// 객체의 분해 할당이 객체의 key 기준으로 수행 X
// -> 모두 undefined 로 할당
// -> 배열의 분해 할당과의 차이!
let { _name, _age, _location } = person;
console.log(_name, _age, _location); // undefined undefined undefined

// 객체의 분해 할당 기준은 객체의 key 로 수행됨
let { name_, age_, location_ } = person;
console.log(name_, age_, location_); // 홍길동 25 부산

/** 함수의 매개변수 구조 분해 할당 */
console.log("--- 함수의 매개변수 구조 분해 할당 ---");

// 객체는 key 기준으로 분해 할당이 이루어지므로 인자로 던져주는 파라미터 값을 key 와 동일하게 설정해야 undefined 할당이 안됨!!!
function func4({ name_, age_, location_ }) {
  console.log(name_, age_, location_);
}

person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

func4(person); // undefined undefined undefined

// 수정
function func4_({ name, age, location }) {
  console.log(name, age, location);
}

person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

func4_(person);

/** 스프레드 연산자, rest 매개변수
 * 스프레드 연산자 : 반복이 가능한 객체에서 값을 개별 요소로 분리하는 연산자
 *                  전개 연산자라고도 함
 *
 * rest 매개변수 : 개별 요소를 다시 배열로 묶어주는 기능
 */
console.log("--- 스프레드 연산자(배열) ---");

arrA = [1, 2, 3];
arrB = [...arrA, 4, 5, 6];
// 스프레드 연산자(전개 연산자)
// arrA 의 요소를 하나씩 분리, arrB 의 각 요소에 할당함
console.log(arrB);

console.log("--- 스프레드 연산자(객체) ---");

objA = {
  a: 1,
  b: 2,
};

// objA 프로퍼티를 하나씩 분리, objB 의 프로퍼티로 나열
objB = {
  ...objA, // 스프레도 연산자(전개 연산자)
  c: 3,
};
console.log(objB);

console.log("--- 스프레드 연산자(함수) ---");

function func5(a, b, c) {
  console.log(a, b, c);
}

arr = [1, 2, 3];

func5(...arr);

/** rest 매개변수 : 스프레드 연산자의 반대 기능.
 * 요소를 배열로 묶는 기능
 */
console.log("--- rest 매개변수 ---");

function func6(param, ...rest) {
  console.log(param); // 1 할당
  console.log(rest); // 2, 3, 4 배열로 묶여져 할당
}

func6(1, 2, 3, 4);

// 주의 : rest 매개변수는 매개변수 목록의 마지막에 위치해야 함.
// function func6(...rest, param) {
// console.log(param);   // 1 할당
// console.log(rest);    // 2, 3, 4 배열로 묶여져 할당
//   }

/** 배열 메서드 */
console.log("--- 배열 메서드 ---");

// 1. push : 요소 추가
console.log("--- 1. push() --- ");

let movie = ["비그치다", "매드맥스", "인사이드 아웃"];
const newLength = movie.push("행복을 찾아서");

console.log(newLength);
console.log(movie);

movie.push("쇼군", "나중에 생각나면 추가!!");
console.log(movie);

// 2. pop : 제거
console.log("--- 2. pop() --- ");

const removeItem = movie.pop();
console.log(removeItem);

console.log(movie);

let movie1 = [];
const removeItem1 = movie1.pop();
console.log(removeItem1); // 에러 발생 X, undefined 반환
console.log(movie1); // []

// 3. shift : 맨 앞의 요소 제거, 제거한 요소 반환
console.log("--- 3. shift() --- ");

const removeItem2 = movie.shift();

console.log(removeItem2);
console.log(movie);

// 4. unshift : 맨 앞의 요소를 추가, 배열의 길이 반환
console.log("--- 4. unshift() --- ");

const newLength1 = movie.unshift("비그치다2");
console.log(movie);

/**
 * shift , unshift
 *
 * unshift : 배열의 맨 앞에 추가. 기존의 배열 요소를 한 칸씩 뒤로 이동됨
 *
 * shift : 배열의 맨 앞 요소를 삭제. 기존의 배열 요소를 한 칸씩 앞으로 이동시켜야 함.
 *
 * -> unshift 와 shift 는 push, pop 에 비해 성능이 낮음.
 */

// 5. slice : 기존 배열에서 특정 범위를 잘라 새로운 배열 반환 (자르기)
//            원본 배열 유지.
console.log("--- 5. slice() --- ");

const arr3 = [1, 2, 3];
const sliced = arr3.slice(0, 2); // 0 번째 인덱스에서 2개의 요소 선택

console.log(arr3);
console.log(sliced);

const sliced2 = arr3.slice(1); // slice 할 위치만 설정
console.log(sliced2);

// 시작 위치를 음수로
console.log(arr3.slice(-1));
console.log(arr3.slice(-2));
console.log(arr3.slice(-3));

// 6. concat : 서로 다른 배열을 이어붙여 새 배열 반환
console.log("--- 6. concat() --- ");

arrA = [3, 4];
arrB = [5, 2];

let arrC = arrA.concat(arrB);
console.log(arrC);

/** 배열의 순회 메서드 */

/** 7. foreach : 서로 다른 배열을 이어붙여 새 배열 반환
 *
 *  - 인수로 함수를 요구함 -> 콜백 메서드
 *  - foreach 는 배열의 모든 요소를 각각 순회하여
 *    인수로 전달된 콜백 메서드가 정의된 대로 요소를 작업
 *  - item : 현재 순회중인 배열 요소
 *  - index : 현재 순회하는 배열 요소의 인덱스
 *  - array : 순회 중인 배열
 */
console.log("--- 7. foreach() --- ");

// 콜백 메서드 정의 -> foreach 메서드의 매개변수로 전달
// SOLID 의 OCP 원칙 적용
// 사용자 친화 API 로 제공되고 있음. foreach() 이름 자체가..
function cb(item, idx) {
  console.log(`${idx} 번째 요소 : ${item}`);
}

const arr4 = [1, 2, 3, 4, 5];
arr4.forEach(cb);

// 위의 콜백 메서드를 화살표 표현식으로 변경
arr4.forEach((item, idx) => {
  console.log(`${idx} 번째 요소 : ${item}`);
});

/** 8. 탐색 메서드 - indexOf()
 *  배열에서 특정 조건을 만족하는 요소를 찾아내는 메서드
 *
 *  arr.indexOf(item, fromIndex);
 *
 *  - item : 배열에서 찾으려는 요소값
 *  - fromIndex : 탐색을 시작할 위치
 *
 * 검색이 되면, 검색 위치값을 반환하면서 탐색 중지
 */
console.log("--- 8. 탐색 메서드 : indexOf() --- ");

let arr5 = [1, 3, 5, 7, 9, 1];
console.log(arr5.indexOf(1, 0)); // 1 : 검색 조건, 0 : 검색 시작 위치

arr5 = [2, 3, 5, 7, 1];
console.log(arr5.indexOf(1, 0));

arr5 = [1, 3, 5, 7, 9, 1];
console.log(arr5.indexOf(1, -1)); // -1 : 배역의 끝에서부터 탐색 시작

// 탐색 결과가 없는 경우 : -1 반환
console.log(arr5.indexOf(2));

// 탐색 조건과 배열 요소의 데이터 타입이 다른 경우, -1 반환
// 비교 연산자(===) 로 요소를 비교함으로, 자료형이 다르면 다른 값으로 평가
console.log(arr5.indexOf("3"));

// 배열에서 객체를 탐색하는 경우 -> -1 반환
// indexOf 메서드로는 객체 자료형의 값 탐색 불가
// -> findIndex() , find() 를 사용해야 함
arr5 = [{ name: "홍길동" }, 1, 2, 3];
console.log(arr5.indexOf({ name: "홍길동" }));

/** 9. 탐색 메서드 - includes()
 * 배열의 특정 요소가 있는지 판별
 */
console.log("--- 9. 탐색 메서드 : includes() --- ");

arr = [1, 3, 5, 7, 1];
console.log(arr.includes(3)); // 탐색하는 데이터가 존재하면 TRUE
console.log(arr.includes(9)); // 탐색하는 데이터가 존재하지 않으면 FALSE
console.log(arr.includes("3")); // 자료형이 다르면 FALSE

/** 10. 탐색 메서드 - findIndex
 *  - 인수로 콜백 함수를 전달해야 함 -> 판별 함수
 *      true : 판별 함수의 조건식 만족하는 경우
 *      false: 판별 함수의 조건식 만족하지 않는 경우
 *  - 판별 함수를 만족하는 첫 번째 요소의 인덱스 번호를 반환하고, 없을 시 -1 반환
 *  - item : 현재 요소
 *  - index : 현재 인덱스
 *  - array : 탐색 대상 배열
 *
 */
console.log("--- 10. 탐색 메서드 : findIndex() --- ");

// findIndex 의 콜백 메서드를 정의 : 짝수 탐색
function determine(item, idx, arr) {
  // 나머지 인자는 알아서 됨
  if (item % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

arr5 = [1, 3, 5, 6, 7, 8];
let index = arr5.findIndex(determine);
console.log(index); // 3 반환 -> index 3 인 요소는 6 (짝수)

console.log("--- findIndex() - 화살표 표현식 --- ");
index = arr5.findIndex((item) => (item % 2 === 0 ? true : false));
console.log(index);

console.log("--- findIndex() - 객체 탐색 --- ");

arr5 = [
  { name: "홍길동", age: 20 },
  { name: "이종원", age: 21 },
  { name: "신다민", age: 22 },
  { name: "김효빈", age: 23 },
];

index = arr5.findIndex((item) => item.name === "신다민");
console.log(index);

/** 11. 탐색 메서드 - find()
 *  find 는 findIndex 와 달린 탐색해서 찾으면 요소를 반환
 */
console.log("--- 11. 탐색 메서드 : find() - 객체 탐색 --- ");

let element = arr5.find((item) => item.name === "신다민");
console.log(element);

/** 12. 탐색 메서드 - filter
 *  배열에서 조건을 만족하는 요소만 모아 새로운 배열 반환
 */
console.log("--- 12. 탐색 메서드 : filter() - 객체 탐색 --- ");

arr5 = [
  { name: "홍길동", hobby: "당구" },
  { name: "이종원", hobby: "영화" },
  { name: "신다민", hobby: "당구" },
  { name: "김효빈", hobby: "노래" },
];

let filterArr = arr5.filter((item) => item.hobby === "당구");
console.log(filterArr);

/** 13. 변형 메서드 - map()
 *  배열을 변형하거나 요소를 재정렬
 *
 *  - 콜백 메서드를 매개변수로 전달
 *  - item, index, array 가 제공
 */
console.log("--- 13. 변형 메서드 : map() ---");

arr5 = [1, 2, 3, 4];
let newArr = arr5.map((item) => item * 3);
console.log(newArr);

console.log("--- map() - 객체 배열 ---");

arr5 = [
  { name: "홍길동", hobby: "당구" },
  { name: "이종원", hobby: "영화" },
  { name: "신다민", hobby: "당구" },
  { name: "김효빈", hobby: "노래" },
];

newArr = arr5.map((o) => o.name);
console.log(newArr);

/** 14. 정렬 메서드 - sort
 *  배열의 요소를 재정렬
 *
 *  - 콜백 메서드를 매개변수로 전달. 비교함수(오름차순, 내림차순)
 *  - item, index, array 제공
 */
console.log("--- 14. 정렬 메서드 : sort() ---");

arr5 = ["b", "a", "C"];
arr5.sort(); // 오름차순 정렬
console.log(arr5);

arr5 = [10, 5, 3];
arr5.sort();
console.log(arr5);

// 문자 형태는 정렬되나, 숫자 형태는 정렬 안되고 있음
// -> 비교 함수를 사용해야함

// 비교 함수 선언 : 오름차순 정렬
function compareAsc(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

// 비교 함수 선언 : 내림차순 정렬
function compareDesc(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

arr5.sort(compareAsc);
console.log(arr5);

/** 15. 변형 메서드 - 문자열 연결 : join
 *  배열 요소 모두를 연결해 하나의 문자열로 반환
 *
 *  - 분리 기호를 사용하는 구분자를 인수로 전달 (필수 X)
 *    생략시, 기본적으로 "," 사용
 */
console.log("--- 15. 변형 메서드 - 문자열 연결 : join() ---");

arr5 = ["너무", "쉬워", "JS"];
console.log(arr5.join());
console.log(arr5.join("-"));

/** 16. 변형 메서드 - reduce
 *  배열 요소를 모두 순회하면서 인수로 제공한 함수를 실행하고,
 *  단 하나의 결과값을 반환
 *
 *  - 콜백 메서드를 전달해야 함 -> "리듀서" 라고 함
 *  - 콜백 메서드 전달시, 초기값 전달
 *  - acc 제공 : 누산기
 *    이전 함수의 호출 결과를 저장
 *    리듀서(콜백 메서드)의 두 번째 매개변수가 누산기의 초기값이 됨
 *  - item, index, array 제공
 */
console.log("--- 16. 변형 메서드 - reduce() ---");

// reduce 메서드 활용 - 배열의 모든 요소값에 대한 누적값을 구할 수 있음
arr5 = [1, 2, 3, 4, 5];

let result = arr5.reduce((acc, item) => acc + item, 0);
/**
 * acc : 누산기
 * item : 현재의 배열 요소
 * acc + item : 콜백 메서드
 * 0 : acc(누산기) 초기값
 *
 * 0 -> 0+1 -> 0+1+2 -> ... -> 0+1+2+3+4+5
 */
console.log(result);
