import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/sharp-solid-svg-icons";
import BookWrite from "./BookWrite";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { getCookie } from "../../shared/Cookies";

function GuestBook() {
  const SERVER = process.env.REACT_APP_SERVER;
  const param = useParams();
  const [myeng, setMyeng] = useState();
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  const num = Math.ceil(Math.random() * 9) + "";

  //방명록 가져오기
  function getBook() {
    axios
      .get(`${SERVER}/guestbooks/${param.userId}`)
      .then((res) => {
        console.log(res);
        setMyeng(res.data.data);
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: `${e.response.data.errorMessage}`,
        });
      });
  }

  //방명록 삭제하기
  async function deleteBook(id) {
    await axios
      .delete(`${SERVER}/guestbooks/${id}/${param.userId}`, {
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
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <PageBox>
      <Content>
        <BookWrite getBook={getBook} />
        {myeng?.map((item) => {
          return (
            <BooksBox key={item.guestBookId}>
              <BooksTitle>
                <div>
                  <BooksNum>
                    NO. <BooksNumber>{item.guestBookNum}</BooksNumber>
                  </BooksNum>
                  <BooksUser> {item.name}</BooksUser>
                  <UserHome>
                    <FontAwesomeIcon
                      icon={faHouse}
                      onClick={() => {
                        window.open(
                          `http://localhost:3000/HomeP/${item.writerId}`
                        );
                      }}
                    />
                  </UserHome>
                  <BooksDate>
                    ({item.createdAt.split("T")[0]}{" "}
                    {item.createdAt.split("T")[1].split(".")[0]})
                  </BooksDate>
                </div>
                <BooksButton>
                  <button
                    onClick={() => {
                      deleteBook(item.guestBookId);
                    }}
                  >
                    삭제
                  </button>
                </BooksButton>
              </BooksTitle>
              <UserBook>
                <UserPic>
                  <img
                    src={item.bookImage}
                    alt="방명록미니미"
                    className="userMinimi"
                  />
                </UserPic>
                <UserWrite>{item.guestBook}</UserWrite>
              </UserBook>
            </BooksBox>
          );
        })}
      </Content>
    </PageBox>
  );
}

export default GuestBook;

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
  overflow: auto;
`;

//방명록 담는 박스
const BooksBox = styled.div`
  margin: auto;
  width: 570px;
  height: 162px;
  /* background-color: aqua; */
`;

//방명록 타이틀
const BooksTitle = styled.div`
  background-color: #f1f1f1;
  border-top: 1px solid #838383;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//방명록 넘버
const BooksNum = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  margin-left: 10px;
`;

//방명록 넘버 표기
const BooksNumber = styled.span`
  font-size: 0.8rem;
  font-weight: 800;
  color: #4c4c4b;
`;

//방명록 유저 이름
const BooksUser = styled.span`
  color: #2d3862;
  font-weight: 500;
`;

//방명록 유저 홈피로 가기
const UserHome = styled.button`
  margin-top: -2px;
  border: none;
  cursor: pointer;
`;

//방명록 날짜
const BooksDate = styled.span`
  font-size: 0.7rem;
`;

//수정 삭제 버튼
const BooksButton = styled.div`
  margin-right: 20px;
  button {
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

//유저 박스
const UserBook = styled.div`
  padding: 15px;
  display: flex;
`;

//유저 미니미
const UserPic = styled.div`
  /* background-color: blue; */
  width: 100px;
  height: 100px;
`;

//유저 방명록칸
const UserWrite = styled.div`
  /* background-color: green; */
  width: 420px;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;
