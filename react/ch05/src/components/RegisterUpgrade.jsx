import { useState } from "react";

/**
 * 기존의 Register.jsx 를 개선한 컴포넌트
 *
 * 1. state 정보가 다양한 경우 -> 객체로 관리
 *  - JS 건개(스프레드) 연산자
 *  - JS 의 객체 생성
 *
 * 2. 기존의 요소별 event handler -> 통합 event handler 관리
 *  - event 객체의 target.value, target.name
 *  - 수정되는 html 요소와 event 객체와의 관계
 */
const Register = () => {
  // state 정보를 객체로 관리
  const [form, setForm] = useState({
    name: "이름",
    birth: "",
    country: "",
    bio: "",
  });

  /**
   * 통합 event handler
   *
   * e.target.name : 객체의 프로퍼티 키를 나타냄
   *  즉, 이벤트가 발생한 태그의 name 속성에 설정된 값이 들어옴
   *
   * 객체의 프로퍼티를 나타내는 방법
   * [키값] -> [e.target.name] -> 객체의 프로퍼티 사용
   */
  const handleOnChange = (e) => {
    /**
     * ...form
     *
     * 전개(스프레드) 연산자를 사용하여,
     * form 에 저장되어 있던 기존의 프로퍼티 값(birth, country, bio 의 값)들을
     * 변경하지 않고 그대로 유지하도록 함
     *
     * 만약 ...form 을 사용하지 않으면, 기존의 값들을 사라지게 됨
     *
     * 따라서, 변경하고자 하는 프로퍼티 값만 변경되도록 event 객체의 프로퍼티 값을 사용
     */
    console.log("현재 수정 대상 :" + e.target.name);
    console.log("수정값 :" + e.target.value);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form action="">
        <div>
          <label> Name : </label>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="이름을 입력하세용 :)"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label> Birth : </label>
          <input
            type="date"
            name="birth"
            value={form.birth}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <select value={form.country} name="country" onChange={handleOnChange}>
            Country :<option value="">--</option>
            <option value="kr">한국</option>
            <option value="en">미국</option>
            <option value="uk">영국</option>
          </select>
        </div>

        <div>
          <label> Bio : </label>
          <textarea
            onChange={handleOnChange}
            value={form.bio}
            name="bio"
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default Register;
