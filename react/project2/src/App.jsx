import { useState, useRef } from "react";
import "./App.css";
import TestComp from "./component/TempComp";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

/**
 * 기본 데이터 -> 상태정보로 관리
 * 목 객체
 *
 * 글번호, 완료여부 플래그, 컨텐츠, 등록일
 */
const mokTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3); // 초기값이 3 인 Ref 객체 생성, idRef 변수에 저장
  const [todo, setTodo] = useState(mokTodo); // State 변수 todo 초기화

  // 할 일 추가 함수
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]); // 새롭게 추가된 아이템은 항상 배열의 0번 요소가 됨
    idRef.current += 1;
  };

  // 할 일 수정 함수
  /**
   * {} : 2줄 이상 작성할 때 사용..
   * 반환값이 boolean형이면 사용하면 에러남
   */
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  // 할 일 삭제 함수
  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  };

  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
