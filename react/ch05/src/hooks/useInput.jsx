import { useState } from "react";

function useInput() {
  // 새로운 상태 관리변수 생성
  const [input, setInput] = useState("");

  // 이벤트 핸들러
  const onChange = (e) => {
    // 상태 변경함수 호출
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
