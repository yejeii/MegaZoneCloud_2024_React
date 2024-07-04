// 비동기 함수의 실행 순서를 지키고 싶은 마음..
// 비동기를 동기화 시킬랭.

async function whatsYourFavorite() {
  let fav = "JS";

  return new Promise((resolve, reject) => {
    resolve(fav);
  });
}

async function displaySubject(subject) {
  return new Promise((resolve, reject) => {
    resolve(`Hello, ${subject}`);
  });
}

whatsYourFavorite().then(displaySubject).then(console.log);

/** async function 은 Promise 객체를 반환하넹?!
 *
 * -> async 와 함께 await 를 사용할 수 있음을 생각할 수 있음
 */
async function whatsYourFavorite_async() {
  let fav = "JS";

  // 암묵적으로 Promise 객체로 반환됨
  return fav;
}

async function displaySubject_async(subject) {
  return `Hello, ${subject}`;
}

/** await 적용 : 비동기 함수를 만들어 사용 -> async function */
async function init() {
  // promise 메서드 체이닝 단점을 해결 :)

  // whatsYourFavorite_async() 의 실행이 끝날 때까지 기다린 후 결과값을 response 에 저장
  const response = await whatsYourFavorite_async();
  // 인자값에 response 가 필요하므로,
  // whatsYourFavorite_async() 실행이 끝날 때까지 기다린 후 result 에 저장
  // 단, response 결과를 받을 때까지 처리를 긷려야 함
  const result = await displaySubject_async(response);

  console.log(result);
}

init();
