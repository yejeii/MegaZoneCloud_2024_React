import { act, useReducer } from "react";

/**
 * state : 상태값
 * dispatch : 상태 변화를 요청하는 함수
 *
 * reducer(콜백 함수)
 *  - 개발자 구현 부분
 *  - 상태를 실제로 변화시키는 기능
 *  - dispatch 의 요청정보를 처리
 *  - 즉, 변경을 실행하는 함수
 * 0 : state 의 초기값
 */

// reducer 구현
// 상태를 실제로 변경하는 것을 담당하는 함수
// 파라미터
// state : 상태값, 변경 대상
// action : 변경을 원하는 액션
//          희망하는 변경 기준이 되는 요청 정보
//          {type: 'increase', data: 1}
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "increase":
      return state + action.data;
    case "decrease":
      return state - action.data;
    default:
      return state;
  }
}

const ExamForUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  /**
   * 1. useReducer() 초기화
   *    state, dispatch(), reducer()
   *
   *    dispatch() : 상태 변화를 요청하는 함수
   *    reducer() : 변경을 실행하는 함수
   *
   * 2. button click event
   *    : 상태값의 변경을 원함 -> dispatch() 호출해야 함
   *
   * 3. click event handler 에서 dispatch() 호출
   *    상태값 변경을 원하므로 변경을 원하는 정보를 전달함
   *
   *    dispatch(변경기준정보)
   *
   * 4. useReducer.reducer() 가 자동으로 호출됨
   *
   * 5. reducer() 의 action(변경기준정보) 정보를 바탕으로
   *    state 수정이 이루어짐
   */
  const onClickPlus = () => {
    // click event 발생, 변경에 대한 요청을 해야함
    // 변경을 희망하는 기준 정보 전달
    // 객체 형태로 전달~
    dispatch({
      type: "increase",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "decrease",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default ExamForUseReducer;
