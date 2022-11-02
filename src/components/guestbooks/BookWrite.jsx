import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getCookie } from "../../shared/Cookies";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function BookWrite({ getBook }) {
  const { register, handleSubmit, watch, reset } = useForm();
  const SERVER = process.env.REACT_APP_SERVER;
  const param = useParams();
  const num = Math.ceil(Math.random() * 9) + "";
  const [bookImage, setBookImage] = useState();

  async function bookGo() {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    const guestbook = watch("guestbook");
    const data = { guestbook, bookImage };
    await axios
      .post(`${SERVER}/guestbooks/${param.userId}`, data, {
        headers: {
          accessToken,
          refreshToken,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `${res.data.msg}`,
        });
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          icon: "error",
          title: `${e.response.data.msg}`,
        });
      });
    getBook();
    reset();
  }

  //사진 랜덤
  const random = () => {
    setBookImage(
      `https://qportminiprojectmini.s3.ap-northeast-2.amazonaws.com/sample/${num}.gif`
    );
  };
  useEffect(() => {
    random();
  }, []);

  return (
    <BooksBox as="form" onSubmit={handleSubmit(bookGo)}>
      <BooksBase>
        <UserBook>
          <UserPic>
            <img
              src={bookImage}
              alt="방명록미니미"
              type="text"
              className="userMinimi"
            />
          </UserPic>
          <UserWrite
            type="text"
            rows="5"
            maxLength="100"
            required
            {...register("guestbook")}
          />
        </UserBook>
      </BooksBase>
      <ButtonBox>
        <button>완료</button>
      </ButtonBox>
    </BooksBox>
  );
}

export default BookWrite;

//방명록 작성 박스
const BooksBox = styled.div`
  margin: auto;
  width: 570px;
  height: 180px;
`;

//방명록 작성 백그라운드
const BooksBase = styled.div`
  background-color: #f1f1f1;
  border-top: 1px solid #838383;
  height: 130px;
  display: flex;
  align-items: center;
`;

//유저 박스
const UserBook = styled.div`
  padding: 5px 10px 0px 10px;
  display: flex;
`;

//유저 미니미
const UserPic = styled.div`
  background-color: #ffffff;
  width: 100px;
  height: 100px;
`;

//유저 방명록칸
const UserWrite = styled.textarea`
  /* background-color: green; */
  width: 420px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #f1f1f1;
  border-bottom: 1px solid #838383;
  padding-bottom: 5px;

  button {
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid;
    background-color: #ffffff;
    cursor: pointer;
  }
`;
