import { useState } from "react";
import styled from "styled-components";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";

function SignBase({ children }) {
  const [btn, setBtn] = useState(true);

  return (
    <Backbase>
      {children}
      <SetBox>
        <img alt="로그인배경" src="/image/logo.png" className="logopic" />
        <SignBox>
          {btn ? <Login setBtn={setBtn} /> : <SignUp setBtn={setBtn} />}
        </SignBox>
      </SetBox>
    </Backbase>
  );
}

export default SignBase;

//백그라운드
const Backbase = styled.div`
  background-color: #f7f7f7;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

//로그인 회원가입 박스
const SignBox = styled.div`
  background-color: white;
  border-radius: 7px;
  border: 1px solid #6d6d6d;
  padding: 15px;
  width: 350px;
  min-width: 350px;
  height: 550px;
`;

//로그이미지와 로그인 박스 정렬
const SetBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 100px;
  margin: 80px 80px;
`;
