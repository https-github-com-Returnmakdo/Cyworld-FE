// 미니홈피 페이지 입니다. 초기상태는 Profile,Main 컴포넌트 상태에서 시작하고 Main컴포넌트에서 다이어리,방명록 링크태그로 걸어주세요
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import Main from "../components/main/Main";
import Diary from "../components/diaries/Diary";
import Guestbook from "../components/guestbooks/GuestBook";
import Profile from "../components/profile/Profile";
import { useState, React } from "react";

function HomeP() {
  // 홈피 컴포넌트 상태관리
  const [content, setContent] = useState("main");

  // 버튼의 이름으로 setContent
  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  // 선택될 컴포넌트 명단
  const selectComponent = {
    main: <Main />,
    diary: <Diary />,
    guestbook: <Guestbook />,
  };

  return (
    <Layout>
      <Outline>
        <Dot>
          <Page>
            <Profile />
            {content && <Content>{selectComponent[content]}</Content>}
            <Menu>
              <MenuButton onClick={handleClickButton} name="main">
                홈
              </MenuButton>
              <MenuButton style={{ marginTop: "2px" }} onClick={handleClickButton} name="diary">
                다이어리
              </MenuButton>
              <MenuButton style={{ marginTop: "2px" }} onClick={handleClickButton} name="guestbook">
                방명록
              </MenuButton>
            </Menu>
          </Page>
        </Dot>
      </Outline>
    </Layout>
  );
}
export default HomeP;

const Outline = styled.div`
  background-color: #aed2dd;
  border-radius: 9px;
  border: 1px solid #738186;
  width: 960px;
  height: 660px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  display: block;
`;

const Content = styled.div``;

const Dot = styled.div`
  border: 2px dashed white;
  border-radius: 9px;
  position: absolute;
  top: 15px;
  left: 15px;
  bottom: 15px;
  right: 15px;
  display: block;
`;

const Page = styled.div`
  background-color: #f0f0f0;
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  border-radius: 9px;
  display: flex;
`;

//메뉴 묶는 박스
const Menu = styled.div`
  flex: 0.2;
  margin-top: 70px;
  left: 48.6%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

//메뉴버튼
const MenuButton = styled.button`
  width: 80px;
  height: 35px;
  cursor: pointer;
`;
