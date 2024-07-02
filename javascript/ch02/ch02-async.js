/** 비동기 처리
 *
 * JS 에서의 비동기 처리
 *
 * 1. 비동기 처리
 *    오래 걸리는 작업이 종료될 때까지 기다리지 않고 다음 작업을 수행할 수 있도록 하는 유연한 프로그래밍 방법
 *
 *    순차적으로 처리하는 코드를 동기처리라고도 함
 *    오래 걸리는 작업을 빨리 끝날 작업보다 먼저 실행하게 되면, 지연 문제가 발생
 *
 * 2. 세 가지 비동기 방식
 *    2.1 콜백 함수
 *        전통적으로 사용되는 방식
 *
 *        단점 : 콜백 함수가 연속해서 사용되는 경우 발생 -> 콜백 지옥
 *              콜백 지옥을 개선한 방법이 프로미스 방식
 *
 *    2.2 프로미스 방식
 *        a. promise 객체 생성
 *           resolve 콜백 : then() 와 연결
 *           reject 콜백 : catch() 와 연결
 *
 *        b. promise 객체 사용하는 쪽 구현
 *           then() : promise 에서 성공했다는 결과를 받아 처리
 *           catch() : promise 에서 실패했다는 결과를 받아 처리
 *           finally() (옵션) : 마지막으로 처리해야 할 부분을 구현
 *
 *        c. promise 체이닝
 *           then() 을 사용해서 여러 개의 promise 를 연결하는 것
 *
 *           promise().
 *              then(step1).
 *                then(step2).
 *                  then(step3)....
 *
 *           콜백 지옥보다는 상대적으로 각 단계에서의 처리에 대한 정의가 명확해짐
 *
 *        d. 장점
 *           promise 객체 작성시, resolve(성공), reject(실패) 를 사용
 *           -> 성공과 실패에 대해서 명확하게 구분이 가능
 *           -> 콜백 지옥을 해결할 수 있음
 *
 *    2.3 async, await
 *        promise 가 콜백 함수 방식에서 개선되었지만, 메서드 체이닝을 너무 길게 사용하면 유지보수에 무리..
 *
 *        이러한 문제를 해결하기 위한 대안이 async, await.
 *
 *        a. async 예약어 ( 비동기의 의미 )
 *           메서드 선언시 사용하게 되고, promise 반환
 *
 *        b. await 예약어 ( 대기의 의미 )
 *           await 은 async 메서드에서만 사용 가능
 *
 */

/** setTimeout 을 활용한 비동기 처리 */
// setTimeout(
//   function () {
//     console.log("1번");
//   },
//   3000 // 3초 후에 콜백 메서드 호출
// );

// 비동기 처리가 됨
// 처리 시간이 짧은 "2번" 이 먼저 수행되고,
// 처리 시간이 상대적으로 긴(3초 기다리는 액션이 필요하니까) setTimeout() 이 실행됨
console.log("2번");

// 만약 동기 처리가 되었다면,
// 3초가 지난 다음에, "1번" 이 실행되고, 그 후에 "2번" 이 실행될 것임
// -> 성능이 좋지 않음 -> 비동기 처리를 하는 이유 :)

function orderCoffee(coffee, time) {
  setTimeout(() => {
    console.log(`${coffee} 제조 완료 :)`);
  }, time);
}

// orderCoffee("아메리카노", 4000); // 2th 실행
// orderCoffee("카푸치노", 5000); // 3th 실행
// orderCoffee("레몬티", 2000); // 1th 실행

// callback 메서드를 이용한 비동기 처리
// function double(num) {
//   return setTimeout(() => {
//     const doubleNum = num * 2;
//     // console.log(doubleNum);
//     // return doubleNum;  // 안됨..
//   }, 1000);
// }

// const res = double(10);
// console.log(res);

function double(num, callback) {
  return setTimeout(() => {
    const doubleNum = num * 2;
    callback(doubleNum);
  }, 1000);
}

// double 함수에서 처리된 결과값을 외부에서 사용할 수 있다는 것이 중요
// -> callback 함수를 활용해서 비동기 처리
// -> 비동기 처리에서의 결과값을 반환받아 사용할 수 있음
double(10, (result) => {
  console.log("result : " + result);
});

/** callback hell : 콜백이 계속 반복되는 상태
 *
 * Ex. 서버에서 요청한 자료를 수신해서 처리하는 로직일 경우, 정말 많이 복잡해질 것..
 */
function printLetter() {
  console.log("A");

  setTimeout(() => {
    console.log("B");

    setTimeout(() => {
      console.log("C");

      setTimeout(() => {
        console.log("D");

        setTimeout(() => {
          console.log("처리 완료!!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// printLetter();

/** 2. promise 객체를 활용한 비동기 처리 */
console.log("--- promise 객체를 활용한 비동기 처리 ---");

/** Promise 객체 활용
 *
 *  Promise 의 매개변수 -> (실행) 함수
 *  실행 함수 : 비동기 작업을 수행하는 함수 -> setTimeout() 이 있는 것
 *
 *  실행 함수 파라미터 --
 *  resolve : 비동기 작업의 상태를 성공으로 변경하는 함수
 *            then() 와 연결(실행)됨
 *
 *  reject : 비동기 작업의 상태를 실패로 변경하는 함수
 *           catch() 와 연결
 */
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("성공"); // resolve() 가 호출되면서 promise.then() 호출, "성공" 데이터가 매개변수로 전달됨
    reject("실패"); // reject() 가 호출되면서 promise.catch() 호출, "실패" 데이터가 매개변수로 전달됨
  }, 1000);
});

// 성공 시 액션
promise.then(function (res) {
  console.log(res);
});

promise.then((res) => console.log(res));

// 실패 시 액션
promise.catch((err) => console.log(err));

/** Promise 를 활용한 주문 프로그램을 비동기 프로그램으로 구현
 *
 * 성공, 실패 flag 정보
 * true : 성공
 * false : 실패
 */
let orderPizza = true;

const pizzaOrder = new Promise((resolve, reject) => {
  if (orderPizza) resolve("피자 주문 성공");
  else reject("피자 주문 실패");
});

// pizzaOrder.then((res) => console.log(res));
// pizzaOrder.catch((err) => console.log(err));
// pizzaOrder.finally(() => console.log("자원 해제"));

/**
 * 1. 커피 주문 프로그램 구현
 *  - promise 사용
 *  - 주문할 커피는 변수로 설정
 *
 *  a. 주문 접수
 *     요구사항 1. null / 공백 체크(falsy 체크)
 *     요구사항 2. 요1. 에서 통과하면 주문 접수 메시지 출력
 *
 *  b. 준비 완료
 *     요구사항 1. 3초 후 준비 완료됨
 *
 *     resolve(전용 메서드를 인자로 전달)
 *
 *  c. 주문 취소
 *     reject(전용 메서드를 인자로 전달)
 */
orderSuccess = (msg) => console.log(`${msg} 준비 완료`);

orderFail = (msg) => console.log(msg);

orderCoffee = new Promise((resolve, reject) => {
  let coffee = "아이스 아메리카노";

  // null, 공백 체크 -> 커피 주문 가능 여부 확인
  if (coffee !== undefined && coffee.length !== 0) {
    console.log(`${coffee} 주문 접수`);

    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else reject("주문할 커피가 없습니다!");
});

// 커피 주문 Promise 와 만든 메서드 연결
// orderCoffee.then((msg) => orderSuccess(msg)).catch((err) => orderFail(err));
orderCoffee.then(orderSuccess).catch(orderFail);

/**
 * 2. 피자를 만드는 과정을 then() 메서드 체이닝을 활용한 비동기로 구현
 *  a. 피자 주문
 *
 *  b. 조리
 *      step1. 피자 도우 준비(2초)
 *      step2. 토핑 완료(1초)
 *      step3. 굽기 완료(2초)
 *
 *  c. 피자 준비 완료
 *
 * 결과>>
 * pizza
 *  .then( (result) => step1(result) )
 *  .then( (result) => step2(result) )
 *  .then( (result) => step3(result) )
 *  .then(() => {
 *    console.log("피자 준비 완료");
 * });
 *
 * -> step1, step2, step3 가 Promise 객체를 반환해야 then() 을 통한 메서드 체이닝이 가능!
 */

// 1. 시작 Promise 구현
const pizza = new Promise((resolve, reject) => {
  resolve("피자 주문 시작");
});

// 2. 각 조리단계별로 메서드 구현. step1 ~ step3 이름으로 정의
//    각 조리별 메서드는 반드시 Promise 객체를 리턴해야함
function step1(msg) {
  console.log(msg);

  // Promise 객체 생성 및 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 2000);
  });
}

function step2(msg) {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 1000);
  });
}

function step3(msg) {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 2000);
  });
}

// 위 함수를 더 쉽게 표현(함수 표현식 + 람다 표현식)
// const step1 = (msg) => {
//   console.log(msg);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("피자 도우 준비");
//     }, 2000);
//   });
// };

// 3. 시작 Promise 와 단계별 메서드를 then() 으로 연결
pizza
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log(result))
  .then(() => {
    console.log("피자 준비 완료");
  });
