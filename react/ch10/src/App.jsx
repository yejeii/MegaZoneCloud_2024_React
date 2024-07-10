import { useState, useRef, useReducer, createContext } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import ExamForUseReducer from "./component/ExamForUseReducer";

/**
 * - project2(할 일 관리앱)의 소스 사용
 *
 * - useReducer hook 활용
 *   목적
 *    root app 에는 자식 컴포넌트에서 사용될 기능(함수)을 직접 구현해서
 *    자식에게 전달하고 있음
 *
 *    따라서, 향후 자식 컴포넌트에서 기능이 대폭 늘어날 수 있다고 가정하면,
 *    root app 이 관리해야 함...
 *
 *    그레서, 부모 컴포넌트 함수 내부에 구현해야 함
 *
 *    부모 컴포넌트 함수 외부에서 구현하려고 한다면...
 *    -> useReducer 사용하자
 *
 * - createContext 활용
 *   App - Header
 *         Editor
 *         List - TodoItem
 *
 *   문제점 : 삭제 기능의 경우, 실제 사용하는 컴포넌트는 TodoItem 이지만,
 *            부모에서부터 생성하여 계속 하향식으로 전달받고 있음
 *
 *           따라서, 관계의 깊이가 깊어질수록 유지보수가 어려워지고 버그 발생 가능성이 높음..
 *
 *   해결 : App 에서 TodoItem 으로 삭제함수를 direct 로 전달시키자!
 *         -> useContext!
 *
 *
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

// 컴포넌트 외부에 선언
// 리렌더링이 될때마다 App() 호출되므로 Context 가 생성됨을 고려한 것
export const TodoContext = createContext();

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "create":
      return [action.data, ...state];
    case "update": {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    case "delete": {
      return state.filter((item) => item.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  const idRef = useRef(3); // 초기값이 3 인 Ref 객체 생성, idRef 변수에 저장
  // const [todo, setTodo] = useState(mokTodo); // State 변수 todo 초기화

  const [todo, dispatch] = useReducer(reducer, mokTodo); // useReducer 를 이용한 상태 변화 코드를 컴포넌트와 분리

  // 할 일 추가 함수
  const onCreate = (content) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    // const newItem = {
    // id: idRef.current,
    // isDone: false,
    // content,
    // createdDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]); // 새롭게 추가된 아이템은 항상 배열의 0번 요소가 됨
    idRef.current += 1;
  };

  // 할 일 수정 함수
  /**
   * {} : 2줄 이상 작성할 때 사용..
   * 반환값이 boolean형이면 사용하면 에러남
   */
  const onUpdate = (targetId) => {
    dispatch({
      type: "update",
      targetId,
    });
  };

  // 할 일 삭제 함수
  const onDelete = (targetId) => {
    dispatch({
      type: "delete",
      targetId,
    });
  };

  return (
    <div className="App">
      {/* <ExamForUseReducer /> */}
      <Header />
      <TodoContext.Provider
        value={{
          todo,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <TodoEditor />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
