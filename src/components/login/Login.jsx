import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
    <Stbox>
      <StSignin>
        <StForm as="form">
          <StLogin>
            <input label="아이디" variant="outlined" type="text" {...register("username")} />
            <input label="비밀번호" variant="outlined" type="password" {...register("password")} />
          </StLogin>
          <Button variant="contained" type="submit" onClick={handleSubmit(signin)}>
            로그인
          </Button>
        </StForm>
      </StSignin>
    </Stbox>
  );
}
export default Login;

const StForm = styled.form``;

/*전체 박스*/
const Stbox = styled.div``;

/*로그인박스*/
const StLogin = styled.div``;

/*전체 로그인박스*/
const StSignin = styled.div``;
