import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

/**
 * State Lifting(state 상태 끌어올리기)
 *
 * 상태정보 : [count, setCount]
 *
 * 1. App 컴포넌트(부모) -> Viewer(자식)
 *    전달 대상 : count
 *
 * 2. App 컴포넌트(부모) -> Controller(자식)
 *    Controller 에 있는 button 이 클릭되었을 때,
 *    setCount() 이 실행되어야 함 -> event handler
 *
 * 정리하면, react 의 데이터 흐름은 위에서 아래, 즉 부모 -> 자식으로 이동하는 단방향 통신
 *
 * React 는 컴포넌트 간의 단방향 통신만 가능해서 데이터 흐름이 복잡하지 않음
 *
 * SPA(Vue.js) 와 비교가 필요..
 */
function App() {
  // state 초기화
  const [count, setCount] = useState(0);

  // 버튼 이벤트 핸들러
  const handleSetCount = (val) => {
    setCount(count + val); // 상태값 재설정
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
