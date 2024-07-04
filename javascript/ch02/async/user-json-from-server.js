/**
 * 1. 대량의 데이터를 서버에 요청하는 걸 가정
 *
 * 2. 서버와 통신시 fetch API 사용 (promise 가 반환되기 때문)
 *    서버 요청 주소는 아래의 주소를 사용.
 *    https://jsonplaceholder.typicode.com/users
 *
 *    fetch()
 *      -
 * 3. fetch API 실행시 await 예약어 사용
 *
 * 4. response 되는 것은 JSON 임. 이걸 객체로 변환
 *    response.json() 실행시 await 예약어 사용
 *
 * 5. 객체 배열을 화면에 출력하기 위한 함수 구현
 */

// 1. 통신부 구현
async function commToServer() {
  // fetch API 사용
  // 서버와 통신시, 서버에서 언제 응답(요청한 결과, response)이
  // 빠를수도, 느릴수도 있음
  // 때문에 작업 효율을 위해 fetch API 자체에서 비동기 처리를 지원함
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });

  // response 결과가 JSON 포맷임. => 객체(리터럴 객체) 배열
  // => 비동기 처리
  const users = await response.json();

  // 화면 출력 => 매개변수로 사용자 객체 전달
  display(users);
}

// 2. 화면 출력부 구현
function display(users) {
  // console.log(users);
  // console.log(typeof users);  // Object

  // 출력할 화면의 요소 지정
  const result = document.querySelector("#result");

  // 요소 생성
  let tb = document.createElement("tbody");

  // html 코드 작성
  // let htmlStr = "";

  // 순회
  users.forEach((user) => {
    // console.log(user);
    // htmlStr += `<tr>`;
    // htmlStr += `<td>${user.id}</td>`;
    // htmlStr += `<td>${user.name}</td>`;
    // htmlStr += `<td>${user.username}</td>`;
    // htmlStr += `<td>${user.email}</td>`;
    // htmlStr += `<td>`;
    // htmlStr += `<ul>`;
    // htmlStr += `<li>${user.address.street} - ${user.address.suite} - ${user.address.city} - ${user.address.zipcode}</li>`;
    // htmlStr += `<li>geo : ${user.address.geo.lat} , ${user.address.geo.lng}</li>`;
    // htmlStr += `</ul>`;
    // htmlStr += `</td>`;
    // htmlStr += `<td>${user.phone}</td>`;
    // htmlStr += `<td>${user.website}</td>`;
    // htmlStr += `<td>`;
    // htmlStr += `<ul>`;
    // htmlStr += `<li>${user.company.address}</li>`;
    // htmlStr += `<li>${user.company.catchPhrase}</li>`;
    // htmlStr += `<li>${user.company.bs}</li>`;
    // htmlStr += `</ul>`;
    // htmlStr += `</td>`;

    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdUser = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdAddr = document.createElement("td");
    let tdPhone = document.createElement("td");
    let tdWeb = document.createElement("td");
    let tdCom = document.createElement("td");

    let uladd = document.createElement("ul");
    let ulcom = document.createElement("ul");

    let liadd1 = document.createElement("li"); // 주소
    let liadd2 = document.createElement("li"); // geo

    let licom1 = document.createElement("li"); // name
    let licom2 = document.createElement("li"); // catchPhrase
    let licom3 = document.createElement("li"); // bs

    // li 부터
    liadd1.textContent =
      user.address.street +
      " " +
      user.address.suite +
      " " +
      user.address.city +
      " " +
      user.address.zipcode;
    liadd2.textContent = "geo : " + user.address.geo.lat + user.address.geo.lng;

    licom1.textContent = user.company.name;
    licom2.textContent = user.company.catchPhrase;
    licom3.textContent = user.company.bs;

    // ul 에 append
    uladd.appendChild(liadd1);
    uladd.appendChild(liadd2);

    ulcom.appendChild(licom1);
    ulcom.appendChild(licom2);
    ulcom.appendChild(licom3);

    // td
    tdId.textContent = user.id;
    tdName.textContent = user.name;
    tdUser.textContent = user.username;
    tdEmail.textContent = user.email;
    tdAddr.appendChild(uladd);
    tdPhone.textContent = user.phone;
    tdWeb.textContent = user.website;
    tdCom.appendChild(ulcom);

    // tr 에 append
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdUser);
    tr.appendChild(tdEmail);
    tr.appendChild(tdAddr);
    tr.appendChild(tdPhone);
    tr.appendChild(tdWeb);
    tr.appendChild(tdCom);

    // tbody 에 append
    tb.appendChild(tr);
    // tb.setAttributeNode(htmlStr);
  });

  document.querySelector(".datat").appendChild(tb);
}

// 3. 1번의 함수를 호출
commToServer();
