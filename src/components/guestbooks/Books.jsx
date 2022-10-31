import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/sharp-solid-svg-icons";

function Books() {
  return (
    <BooksBox>
      <BooksTitle>
        <div>
          <BooksNum>
            NO. <BooksNumber>393</BooksNumber>
          </BooksNum>
          <BooksUser> 김동글</BooksUser>
          <UserHome>
            <FontAwesomeIcon icon={faHouse} />
          </UserHome>
          <BooksDate>(2022-10-30 18:30)</BooksDate>
        </div>
        <BooksButton>
          <button>수정</button> | <button>삭제</button>
        </BooksButton>
      </BooksTitle>
      <UserBook>
        <UserPic>
          <img src="/image/example.gif" alt="방명록미니미" className="userMinimi" />
        </UserPic>
        <UserWrite>안녕여여영영여여여여여여</UserWrite>
      </UserBook>
    </BooksBox>
  );
}

export default Books;

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
