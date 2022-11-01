import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";
import { setCookie } from "../../shared/Cookies";
import { useNavigate } from "react-router-dom";

function Login({ setBtn }) {
  const SERVER = process.env.REACT_APP_SERVER;
  //로그인 데이터값
  const { register, handleSubmit } = useForm();
  //버튼 누른 후 상태변화
  const onSignBtn = () => {
    setBtn((x) => !x);
  };
  const navigate = useNavigate();

  //로그인하기
  function signin(data) {
    axios
      .post(`${SERVER}/users/login`, data)
      .then((res) => {
        const userId = res.data.userId;
        const accessToken = res.data.accesstoken;
        const refreshToken = res.data.refreshtoken;
        setCookie("accessToken", accessToken);
        setCookie("refreshToken", refreshToken);
        if (res.statusText === "OK") {
          navigate(`/HomeP/${userId}`);
        }
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          Swal.fire({
            icon: "error",
            title: "이메일 또는 비밀번호가 틀렸습니다.",
            text: "가입하신 이메일 아이디 뒤에 @cyworld.com을 붙여주세요.",
          });
        }
      });
  }

  //랜덤 파도타기
  function surfing() {
    let random = "";
    axios.get(`${SERVER}/users/surfing`).then((res) => {
      random = res.data.data;
      window.open(`http://localhost:3000/HomeP/${random}`);
      //https://cyworld-client.vercel.app
    });
  }

  return (
    <LogBox>
      <form onSubmit={handleSubmit(signin)}>
        <StLogin>
          <p>로그인</p>
          <input
            type="email"
            placeholder="example@cyworld.com"
            autoComplete="on"
            required
            {...register("email")}
          />
          <PassBox>
            <input
              type="password"
              placeholder="비밀번호"
              autoComplete="on"
              required
              {...register("password")}
            />
            <button type="submit">로그인</button>
          </PassBox>
        </StLogin>
      </form>
      <ButtonBox>
        <button onClick={onSignBtn}>회원가입</button>
        <button className="leftBtn">도토리 충전하기</button>
      </ButtonBox>
      <RandomHome onClick={surfing}>미니홈피 구경가기 🏠</RandomHome>
    </LogBox>
  );
}
export default Login;

/*전체 로그인 박스*/
const StLogin = styled.div`
  margin: 30px auto 15px auto;
  display: flex;
  gap: 15px;
  flex-direction: column;
  p {
    font-size: 2.5rem;
    font-weight: 600;
    color: #ff6500;
  }
  input {
    height: 40px;
    border: 1px solid #6d6d6d;
    border-radius: 7px;
  }
`;

/*비밀번호 박스*/
const PassBox = styled.div`
  display: flex;
  gap: 10px;
  input {
    width: 233px;
  }
  button {
    border: 1px solid #6d6d6d;
    border-radius: 7px;
    padding: 8px 15px 8px 15px;
    background-color: #ff6500;
    color: white;
    :hover {
      background-color: #ff9c59;
      cursor: pointer;
    }
  }
`;

/*미니홈피 랜덤버튼*/
const RandomHome = styled.button`
  margin-top: 20px;
  border: 1px solid #6d6d6d;
  border-radius: 7px;
  background-color: white;
  width: 320px;
  height: 40px;
  :hover {
    background-color: #e3e3e3;
    cursor: pointer;
  }
`;

/*전체 컴포넌트 정렬*/
const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/*버튼정렬*/
const ButtonBox = styled.div`
  display: felx;
`;
