// 브라우저 DOM 제어

// 주문정보 취득 -> DOM 요소 선택
const title = document.querySelector("#container>h2");

// 버튼 요소 선택 -> DOM 요소 선택
const orderBtn = document.querySelector("#order");

// 주문 정보 입력 -> DOM 요소 선택
const orderInfo = document.querySelector("#orderInfo");

// 버튼 객체에 이벤트 등록
orderBtn.addEventListener(
  "click",
  () => {
    // 브라우저 DOM 에 직접 요소 추가

    // 1. DOM 에 노드(요소- p tag) 추가
    let addP = document.createElement("p");

    // 2. text node 생성해서 도서 title 저장
    //    #container>h2 요소의 요소값(도서 제목)을 가져와서 저장
    let textNode = document.createTextNode(title.innerText);

    // 3. p tag 와 text node 관계 설정
    addP.appendChild(textNode);

    // 4. p tag 스타일 적용
    addP.style.fontSize = "2em"; // 32px
    addP.style.color = "red";

    // 부모 node(div tag) 와 p tag 연결
    orderInfo.appendChild(addP);
  },
  { once: true }
);
