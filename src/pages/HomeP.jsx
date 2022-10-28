// 미니홈피 페이지 입니다. 초기상태는 Profile,Main 컴포넌트 상태에서 시작하고 Main컴포넌트에서 다이어리,방명록 링크태그로 걸어주세요
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import Main from "../components/main/Main";
import Profile from "../components/profile/Profile";
import MenuBar from "../components/layout/MenuBar";

function HomeP() {
  return (
    <Layout>
      <Outline>
        <Dot>
          <Page>
            <Profile />
            <Main />
            <MenuBar />
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
  margin: 100px auto;
  position: relative;
  display: block;
`;

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
