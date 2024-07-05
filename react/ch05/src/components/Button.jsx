/**
 * {props.color.toUpperCase()}  -> 오류 발생
 *  - 원인
 *    두 번째 버튼은 color 속성값이 undefined 임
 *    undefined 이므로 toUpperCase() 를 적용할 수 없음
 *
 *    값이 전달될 수도 있고, 전달되지 않을 수도 있음
 *
 *  - 해결
 *    기본값으로 설정
 */

// // props 는 객체참조변수 -> 객체의 프로퍼티를 사용해 구분처리하고 있음
// const Button = (props) => {
//   //   console.log(props);
//   return (
//     <button style={{ color: props.color }}>
//       {props.text}-{props.color.upperCase()}
//     </button>
//   );
// };

// props 가 아닌, 객체 구조분해 할당을 사용한 처리
// 객체의 프로퍼티명과 동일하게 매개변수로 정의할 것
// ({ text, color }) : 객체 속성으로 묶어서 받는다는 의미
// ( text, color ) : 하나하나가 걍 변수

/** -- 주의 --
 * defaultProps 사용이 불가능해질 수 있음
 * Warning: Button: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
 *
 * 따라서, 함수 컴포넌트에서 기본값을 설정하는 방법으로 기본 매개변수 값을 사용하도록 함
 *
 * 기존에는 defaultProps 에 설정된 아래의 내용을
 * color="white"
 * 매개변수 기본값으로 설정 변경함
 */
const Button = ({ text, color = "white", children = [] }) => {
  //   console.log(props);

  // 이벤트 핸들링 : 함수 방식
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button
      // 이벤트 핸들링 : 인라인 방식
      // onClick={() => {
      //   console.log(text);
      // }}
      onClick={onClickButton}
      style={{ color: color }}
    >
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

/**
 * defaultProps 사용
 *
 * {props.color.toUpperCase()} -> 오류 발생 해결 방안
 * 아래의 코드 추가 후, 브라우저에서 새로고침
 */
// Button.defaultProps = {
//   color: "white",
// };

export default Button;
