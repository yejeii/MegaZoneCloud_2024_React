import "./Main.css";

function Main() {
  // 변수 선언
  const numer = 10;
  const obj = { a: 1 };

  /**
   * session(로그인 성공 상태)이 있다고 가정하고 객체를 초기화해서
   * 프로퍼티 생성
   *
   * 로그인된 경우 -> logout
   * 로그아웃이 된 경우 -> login
   *
   * 방법1. return 하나로 하는 방법
   *
   * 방법2. return 둘로 하는 방법
   */
  const user = {
    userName: "유정",
    loginFlag: true,
  };

  //   return (
  //     // <div></div>
  //     <main>
  //       <h1>Main Area</h1>
  //       <h2>{numer}</h2>
  //       <h2>{numer + 10}</h2>
  //       <h2>{numer % 2 === 0 ? "짝수" : "홀수"}</h2>
  //       <h2>10</h2>
  //       <h2>{[111, 222, 333]}</h2>

  //       <h2>{true}</h2>
  //       <h2>{false}</h2>
  //       <h2>{undefined}</h2>
  //       <h2>{null}</h2>

  //       {/* <h2>{obj}</h2> */}
  //       <h2>{obj.a}</h2>

  //       {/* 방법 1.  */}
  //       {user.loginFlag ? (
  //         <div>
  //           {user.userName}님, 반갑습니다. <a href="#">로그아웃</a>
  //         </div>
  //       ) : (
  //         <div>
  //           <a href="#">로그인</a>
  //         </div>
  //       )}
  //     </main>
  //   );

  // 방법2. 로그인 상태에 따른 UI 상태 반환
  if (user.loginFlag) {
    return (
      <div
        className="logout"
        // style={{
        //   backgroundColor: "green",
        //   borderBottom: "3px solid red",
        // }}
      >
        {user.userName} 님, 반갑습니다.
        <a href="#">로그아웃</a>
      </div>
    );
  } else {
    return (
      <div>
        <a href="#">로그인</a>
      </div>
    );
  }
}

export default Main;
