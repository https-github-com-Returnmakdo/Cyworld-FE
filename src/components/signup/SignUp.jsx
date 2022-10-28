import styled from "styled-components";

import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";

function SignUp() {
  // 회원가입 데이터 값
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // 비밀번호 입력값 추적
  const password = watch("password");

  //회원가입 데이터 전송
  const onSubmit = (data) => {
    axios
      .post("", data)
      .then((res) => {
        if (res.data.message === "SUCCESS") {
          alert("회원가입에 성공했습니다.");
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") {
          alert("중복된 아이디 또는 닉네임입니다. 중복 검사를 진행해주세요.");
        }
      });
  };

  //닉네임 중복검사 진행하기
  const nickDup = () => {
    const nickname = watch("nickname");
    axios.post("", { value: nickname }).then((res) => {
      if (res.data.result === true) {
        alert("중복된 닉네임 입니다.");
      } else {
        alert("사용 가능한 닉네임 입니다.");
      }
    });
  };

  //아이디 중복검사 진행하기
  const userDup = () => {
    const username = watch("username");
    axios.post("", { value: username }).then((res) => {
      if (res.data.result === true) {
        alert("중복된 아이디 입니다.");
      } else {
        alert("사용 가능한 아이디 입니다.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        autoFocus
        margin="dense"
        label="닉네임"
        type="text"
        fullWidth
        variant="standard"
        placeholder="8자 이내로 작성해주세요."
        required
        error={errors?.nickname}
        helperText={errors.nickname?.message}
        {...register("nickname", {
          maxLength: {
            value: 8,
            message: "8글자 이내로 작성해주세요",
          },
        })}
      />
      <StBtn onClick={nickDup}>닉네임 검사</StBtn>
      <input
        autoFocus
        margin="dense"
        label="아이디"
        type="text"
        fullWidth
        variant="standard"
        placeholder="2~10자로 영문을 포함하고 숫자, 특수문자는_만 사용해주세요."
        required
        error={errors?.username}
        helperText={errors.username?.message}
        {...register("username", {
          maxLength: {
            value: 10,
            message: "10글자 이하로 작성해주세요",
          },
          minLength: {
            value: 4,
            message: "4글자 이상으로 작성해주세요",
          },
          pattern: {
            value: /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{2,10}$/,
            message: "형식에 맞지 않는 아이디 입니다.",
          },
        })}
      />
      <StBtn onClick={userDup}>아이디 검사</StBtn>
      <input
        autoFocus
        margin="dense"
        label="비밀번호"
        type="password"
        fullWidth
        variant="standard"
        placeholder="4~20 자리 영문을 포함하고 숫자, 특수문자(!@#$%^&*)만 사용해주세요."
        required
        error={errors?.password}
        helperText={errors.password?.message}
        {...register("password", {
          maxLength: {
            value: 20,
            message: "20자리 이하로 작성해주세요",
          },
          minLength: {
            value: 4,
            message: "4자리 이상으로 작성해주세요",
          },
          pattern: {
            value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{4,20}$/,
            message: "형식에 맞지 않는 비밀번호 입니다.",
          },
        })}
      />
      <input
        autoFocus
        margin="dense"
        label="비밀번호 재확인"
        type="password"
        fullWidth
        variant="standard"
        placeholder="비밀번호를 재입력해주세요."
        required
        error={errors?.confirm}
        helperText={errors.confirm?.message}
        {...register("confirm", {
          validate: {
            confirmPw: (v) => v === password || "비밀번호가 일치하지 않습니다.",
          },
        })}
      />
      <Button type="submit">가입하기</Button>
    </form>
  );
}
export default SignUp;

const StBtn = styled(Button)`
  width: 100px;
`;
