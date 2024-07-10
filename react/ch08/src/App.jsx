import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";

/**
 * ch06 에서 만든 count app
 */
function App() {
  // state 초기화
  const [count, setCount] = useState(0);

  // useEffect hook 초기화 관련
  const [input, setInput] = useState("");

  // 마운트 여부를 관리하는 flag
  const isMount = useRef(false);

  // 1. Mount : 컴포넌트 생성
  /**
   * deps 를 빈 배열을 매개변수로 전달하면 됨
   * useEffect(() => {}, [])
   *
   * useEffect() 는 deps 에 있는 값이 변경될 때마다 실행
   * -> 콜백 함수는 컴포넌트가 처음 mount 될 때 이후로는 다시는 실행될 수 없음
   *    즉, 변경을 체크를 의존관계배열이 비어 있기 때문
   *
   * 버튼을 클릭해서 state(count)를 변경하더라도, 콜백함수의 동작이 실행되지 않음을 확인함
   *
   * 그래서, component lifecycle 의 mount 단계에서만 실행되는 것
   *
   */
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. Update : 리렌더링, 상태변수 변경
  /**
   * lifecycle 의 update 기준을 개발자가 별도로 정의해서 사용할 수 있음
   * 버튼이 click 되었을 때만 lifecycle 의 update 로 인정하겠다는 것
   * 기준에 따라 동작되도록 구현해야 함
   *
   * useEffect() 가 mount 단계가 아닌 경우를 판단할 수 있어야 함
   *
   * useEffect(() => {})
   *
   * 두 번째 매개변수인 의존관계배열을 매개변수로 전달하지 않음
   */
  useEffect(() => {
    // 조건문, mount 단계가 아님을 판단
    if (isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. UnMount : 컴포넌트 소멸, 렌더링에서 제외
  /**
   * 화면에 렌더링되었다가 렌더링에서 제외가 되도록 하는 테스트용 컴포넌트가 필요
   *
   */

  /**
   * - useEffect 사용
   *   첫 번째 매개변수 : 콜백함수
   *   두 번째 매개변수 : 배열
   *
   * - useEffect() 의 동작
   *   컴포넌트 내에서 원하는 상태변수 값이 변경되었을 때에만 callback 함수가 실행되고 있음
   *
   *   callback 함수는 count 상태변수에 의존하고 있음
   *
   *   의존관계에 있는 두번째 매개변수를 dependency array, 의존성 배열이라고 함
   *   deps 라고도 함
   *
   *   그리고, deps 는 여러 개의 의존값이 올 수 있음
   *
   * - useEffect() 실행과 관련된 이해
   *
   *   count 를 의존하고 있으므로, useEffect() 의 callback 함수를 사용하지 않고,
   *   event handler 에서 setCount() 상태변경 함수 호출 후에 변경된 상태값(State)을 사용하면 안될까?
   *
   *   결론은 안됨...
   *   WHY??
   */
  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);

  // 버튼 이벤트 핸들러
  const handleSetCount = (val) => {
    // 상태변경함수 호출은 되었으나, 완료가 되기전에
    // console.log() 호출된 것임.
    // => 순차처리가 아님 => 비동기 처리
    setCount(count + val);
  };

  // 입력 이벤트 핸들러
  const handleChangeText = (e) => {
    setTe;
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handelSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
