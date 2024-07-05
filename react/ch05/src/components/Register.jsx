import { useState } from "react";

/**
 * 간단한 회원 가입폼
 *
 * 1. 이름
 * 2. 생년월일
 * 3. 국적
 * 4. 자기소개
 *
 * 생각해야 할 부분
 * 1. state 로 회원 가입폼의 항목 관리
 *    항목을 하나의 무언가로 관리하도록 하면...
 *    -> state 정보를 객체로 관리
 *
 * 2. 각 항목(tag)의 value 를 event handler 를 이용해 초기화 -> 통합 이벤트 핸들러
 *
 * 비슷한 기능을 하는 event handler 를 통합할 수 있는 방법은..
 */
const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };

  // const onChnageCountry = (e) => {
  //   setCountry(e.target.value);
  // };

  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  // return (
  //   <>
  //     <div>
  //       <textarea></textarea>
  //         type="text"
  //         value={name}
  //         placeholder="이름을 입력하세용 :)"
  //         onChange={onChangeName}
  //       />
  //       {name}
  //     </div>
  //     <div>
  //       <input type="date" value={birth} onChange={onChangeBirth} />
  //     </div>
  //     <div>
  //       <select value={country} onChange={onChnageCountry}>
  //         <option value=""></option>
  //         <option value="kr">한국</option>
  //         <option value="us">미국</option>
  //         <option value="uk">영국</option>
  //       </select>
  //       {country}
  //     </div>
  //     <div>
  //       <textarea value={bio} onChange={onChangeBio}>
  //         {bio}
  //       </textarea>
  //     </div>
  //   </>
  // );

  // state 정보를 객체로 관리
  const [form, setForm] = useState({
    name: "이름",
    birth: "",
    country: "",
    bio: "",
  });

  return (
    <>
      <form action="">
        <div>
          <label> Name : </label>
          <input
            type="text"
            value={form.name}
            placeholder="이름을 입력하세용 :)"
            onChange={(e) => {
              setForm({
                ...form,
                name: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label> Birth : </label>
          <input
            type="date"
            value={form.birth}
            onChange={(e) => {
              setForm({
                ...form,
                birth: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <select
            value={form.country}
            onChange={(e) => {
              setForm({
                ...form,
                country: e.target.value,
              });
            }}
          >
            Country :<option value="">--</option>
            <option value="kr">한국</option>
            <option value="en">미국</option>
            <option value="uk">영국</option>
          </select>
        </div>

        <div>
          <label> Bio : </label>
          <textarea
            onChange={(e) => {
              setForm({
                ...form,
                bio: e.target.value,
              });
            }}
            value={form.bio}
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default Register;
