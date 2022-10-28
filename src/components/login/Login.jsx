import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";
// import useCookie from "react-cookie";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const signin = (data) => {
    axios
      .post("", data)
      .then((res) => {
        console.log(res);
        const accessToken = res.data.accessToken.split(" ")[1];
        const refreshToken = res.data.refreshToken.split(" ")[1];
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken); // setCookie 해야함 !!
        if (res.data.message === "로그인되었습니다.") {
          navigate("/HomeP");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") {
          Swal.fire({
            icon: "error",
            title: "다시 확인해주세요!",
            text: "아이디 또는 비밀번호가 틀렸습니다.",
          });
        }
      });
  };
  return (
    <LogBox>
      <form>
        <StLogin>
          <p>로그인</p>
          <input
            label="아이디"
            variant="outlined"
            type="text"
            {...register("username")}
          />
          <PassBox>
            <input
              label="비밀번호"
              variant="outlined"
              type="password"
              {...register("password")}
            />

            <button
              variant="contained"
              type="submit"
              onClick={handleSubmit(signin)}
            >
              로그인
            </button>
          </PassBox>
        </StLogin>
      </form>
      <button>회원가입</button>
      <RandomHome>미니홈피 구경가기 🏠</RandomHome>
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
  }
`;

const RandomHome = styled.button`
  margin-top: 20px;
  border: 1px solid #6d6d6d;
  border-radius: 7px;
  background-color: white;
  width: 320px;
  height: 40px;
`;

const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
