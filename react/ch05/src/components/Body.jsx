import "./Body.css";

// 1. Props 받아 사용
// const Body = (props) => {
//
// 2. 객체 구조 분해 할당으로 사용
// const Body = ({ name, location, favorList }) => {
//
// 3. Props 로 전달된 프로퍼티 사용
const Body = ({ children }) => {
  return (
    // <div style={{ backgroundColor: "red", color: "blue" }}>  // CSS 인라인 스타일링
    <div className="body">
      {/* <h1>{props.name}</h1> */}
      {/* <h1>{name}</h1> */}
      {/* <h1>{location}</h1> */}
      {/* <h1>{favorList.length}개의 음식을 좋아합니다.</h1> */}
      {children}
    </div>
  );
};

export default Body;
