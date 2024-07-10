import { useState, useRef, useContext } from "react";
import "./TodoEditor.css";
import { TodoContext } from "../App";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoContext);

  // 할 일 입력 폼에서 사용자가 입력하는 새로운 할 일 데이터를 저장하는 State
  const [content, setContent] = useState("");

  // 할 일 입력 폼을 제어하는 Ref 객체
  const inputRef = useRef();

  // 입력 폼의 onChange 이벤트 핸들러
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 추가 버튼 onClick 이벤트 핸들러
  // onCreate() 호출, content 값 전달
  const onSubmit = () => {
    if (content === "") {
      // content 값이 빈 문자열일 때 포커스 처리, 종료
      inputRef.current.focus();
      return; // 함수 종료
    }
    onCreate(content);
    setContent(""); // 입력 폼 초기화
  };

  // Enter 키 onKeyDown 이벤트 핸들러
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 ToDo 작성하기 ✏️</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          type="text"
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo...."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
