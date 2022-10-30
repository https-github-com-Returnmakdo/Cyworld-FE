import styled from "styled-components";

import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp({ setBtn }) {
  const OnSignBtn = () => {
    setBtn((x) => !x);
  };

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
    console.log(data);
    axios
      .post("https://sparta-jyh.shop/api/users/signup", data)
      .then((res) => {
        console.log(res);
        // if (res.data.message === "SUCCESS") {
        //   alert("회원가입에 성공했습니다.");
        //   window.location.replace("/");
        // }
      })
      .catch((error) => {
        // console.log(error);
        // if (error.code === "ERR_BAD_REQUEST") {
        //   alert("중복된 아이디 또는 닉네임입니다. 중복 검사를 진행해주세요.");
        // }
      });
  };

  //아이디 중복검사 진행하기
  const userDup = () => {
    const emial = watch("emial");
    axios.post("", { value: emial }).then((res) => {
      if (res.data.result === true) {
        alert("중복된 아이디 입니다.");
      } else {
        alert("사용 가능한 아이디 입니다.");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StLogin>
          <p>회원가입</p>
          <Label>이메일 아이디</Label>
          <EmailBox>
            <input
              type="emial"
              placeholder="이메일 아이디"
              required
              {...register("email", {
                maxLength: {
                  value: 10,
                  message: "10글자 이하로 작성해주세요",
                },
                minLength: {
                  value: 4,
                  message: "4글자 이상으로 작성해주세요",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/,
                  message: "형식에 맞지 않는 아이디 입니다.",
                },
              })}
            />
            <span>@cyworld.com</span>
            <button className="leftBtn" onClick={userDup}>
              중복검사
            </button>
          </EmailBox>
          <Check>4~10자 영문을 포함해야하고 숫자 사용이 가능합니다.</Check>
          <Label>비밀번호</Label>
          <input
            type="password"
            {...register("password", {
              maxLength: {
                value: 20,
                message: "20자리 이하로 작성해주세요",
              },
              minLength: {
                value: 8,
                message: "4자리 이상으로 작성해주세요",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/,
                message: "형식에 맞지 않는 비밀번호 입니다.",
              },
            })}
            placeholder="비밀번호"
            required
          />
          <Check>
            8~20자 영문을 포함하고, 숫자, 특수문자(!@#$%^&*)사용 가능합니다.
          </Check>
          <Label>비밀번호 재확인</Label>
          <input
            type="password"
            {...register("confirm", {
              validate: {
                confirmPw: (v) =>
                  v === password || "비밀번호가 일치하지 않습니다.",
              },
            })}
            placeholder="비밀번호를 재입력해주세요."
          />
          <Check>비밀번호를 재입력해주세요.</Check>
          <div>
            <select {...register("gender")} required>
              <option disabled value="">
                성별
              </option>
              <option value="남자">남자</option>
              <option value="여자">여자</option>
            </select>
            <Label style={{ marginLeft: 10 }}>이름</Label>
            <input
              type="text"
              style={{ marginLeft: 10 }}
              required
              {...register("name", {
                maxLength: {
                  value: 5,
                  message: "5자리 이하로 작성해주세요",
                },
                pattern: {
                  value: /[^가-힣a-zA-Z]/,
                  message: "형식에 맞지 않는 이름 입니다.",
                },
              })}
            />
          </div>
          <Check>
            성별을 선택해주세요. 이름은 한글 또는 영문 1-5자만 가능합니다.
          </Check>
          <Label>생년월일</Label>
          <input
            type="date"
            min="1900-01-01"
            max="2003-12-31"
            {...register("birth")}
          />
          <Check>1900-2003년생만 가입이 가능합니다.</Check>
        </StLogin>
        <BtnBox>
          <button type="submit">가입하기</button>
          <button onClick={OnSignBtn} className="leftBtn">
            돌아가기
          </button>
        </BtnBox>
      </form>
    </>
  );
}
export default SignUp;

/*전체 회원가입 박스*/
const StLogin = styled.div`
  margin: 30px auto 15px auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  p {
    font-size: 2.5rem;
    font-weight: 600;
    color: #ff6500;
    margin-bottom: 15px;
  }
  input {
    border: 1px solid #6d6d6d;
    width: 200px;
  }
`;

/*기입 라벨*/
const Label = styled.label`
  font-weight: 700;
`;

/*유효성검사 출력*/
const Check = styled.span`
  font-size: 0.7rem;
  color: #d06400;
`;

const EmailBox = styled.div`
  input {
    width: 120px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #fb751b;
    padding: 7px;
    border: none;
    border-radius: 7px;
    color: white;
    :hover {
      background-color: #ff9c59;
      cursor: pointer;
    }
  }
`;
