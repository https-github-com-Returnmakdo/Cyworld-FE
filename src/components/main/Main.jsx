import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

// 우측 컴포넌트에 띄워지는 홈 화면
function Main() {
  useEffect(() => {}, []);
  const { register, handleSubmit } = useForm();
  const SERVER = process.env.REACT_APP_SERVER;

  //일촌평 작성하기
  function illChonWrite(data) {
    axios.post(`${SERVER}/bests/:userId`, data).then((res) => {
      console.log(res);
    });
  }

  //일촌평 조회하기
  function illChonGet(data) {
    axios.post(`${SERVER}/bests/:userId`, data).then((res) => {
      console.log(res);
    });
  }

  //일촌평 삭제하기
  function illChonDelete(data) {
    axios.post(`${SERVER}/bests/:userId`, data).then((res) => {
      console.log(res);
    });
  }

  return (
    <PageBox>
      <Content>
        <Box>
          <Title>미니룸</Title>
          <img
            alt="미니룸사진"
            src="/image/miniroom1.gif"
            className="miniroom"
          />
          <img alt="미니미" src="/image/minimi1.png" className="minimi" />
          <Illchon as="form" onSubmit={handleSubmit(illChonWrite)}>
            <p>일촌평</p>
            <input
              type="text"
              style={{ width: 65 }}
              placeholder="일촌명"
              maxLength="10"
              required
              {...register("nick")}
            />
            <input
              type="text"
              placeholder="일촌과 나누고 싶은 이야기를 나눠보세요~!"
              style={{ width: 320 }}
              maxLength="30"
              required
              {...register("ilchonpyung")}
            />
            <button type="submit">등록</button>
          </Illchon>
          <IllChonBox>
            <IllBox>
              <p>
                · 일촌평 남겨드려요~! (일촌 <span>정세모</span>)
              </p>
              <BooksButton>
                <button onClick={illChonDelete}>삭제</button>
              </BooksButton>
            </IllBox>
          </IllChonBox>
        </Box>
      </Content>
    </PageBox>
  );
}
export default Main;

//흰색박스
const PageBox = styled.div`
  width: 643px;
  height: 562px;
  margin-left: -22%;
  margin-top: 17px;
  display: flex;
  position: absolute;
  flex-direction: column;
`;

//컨텐츠 들어갈 박스
const Content = styled.div`
  flex: 2;
  margin: 3px 0px 15px 15px;
  background-color: white;
  border-radius: 9px;
  border: 1px solid #cdd5d8;
  padding: 3%;
`;

/*제목 주소*/
const Title = styled.p`
  font-weight: 700;
  margin: 5px 0px 10px 0px;
  color: #1ea7cc;
`;

/*박스안 정렬*/
const Box = styled.div`
  padding: 20px;
`;

/*일촌평 남기기*/
const Illchon = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin: 10px 0px 10px 0px;
  background-color: #f4f4f4;
  input {
    height: 25px;
    margin: 0px 5px 0px 5px;
    border: 1px solid #dedddd;
    &:focus {
      outline: none;
    }
  }
  p {
    font-weight: 700;
    color: #1ea7cc;
  }
  button {
    background-color: #ffffff;
    border: 1px solid #dedddd;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
`;

/*일촌평 담는 박스*/
const IllChonBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #6c6c6c;
  overflow: auto;
  width: 544px;
  height: 100px;
  p {
    margin-bottom: 5px;
  }
  span {
    font-weight: 600;
    color: #1ea7cc;
  }
`;

//수정 삭제 버튼
const BooksButton = styled.div`
  margin-right: 20px;
  button {
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
    background-color: white;
  }
`;

const IllBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
