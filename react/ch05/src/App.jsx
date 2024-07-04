import "./App.css";
import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from "./components/Footer";
import Body from "./components/Body";
// import Button from "./components/Button";

function ChildComp() {
  return <div>Child Component!!</div>;
}

function App() {
  const name = "예징";

  // 객체로 던지기
  const bodyProps = {
    name: "예징",
    location: "부천시",
    // favorList: ["파스타", "빵", "떡볶이"],
  };

  const buttonProps = {
    text: "기타",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  // return (
  //   <>
  //     {/* 부모에서 자식으로 Props 전달 : 이름 = {값} 형식 */}
  //     <Body name={name} />
  //     {/* 스프레드 연산자로 여러 개의 값 전달 */}
  //     <Body {...bodyProps} />
  //     <Button text={"메일"} color={"red"} /> <Button text={"카페"} />
  //     <Button text={"블로그"} />
  //     {/* <Button text={"기타"} color={"red"} a={1} b={2} c={3} /> .. 속성이 많을수록 계속 추가할 순 없자낭..? -> 변수로 빼자*/}
  //     <Button {...buttonProps} />
  //   </>
  // );

  return (
    <div className="App">
      <Header />
      <Body>
        {/* Props 로 컴포넌트 전달 */}
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
