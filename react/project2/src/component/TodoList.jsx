import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  // 사용자가 입력하는 검색어를 저장할 State
  const [search, setSearch] = useState("");

  // 검색 폼의 onChange 이벤트 핸들러
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 사용자가 입력한 검색어에 따라 할 일 아이템을 필터링
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🎯</h4>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => {
          return (
            <TodoItem
              key={item.id}
              {...item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
