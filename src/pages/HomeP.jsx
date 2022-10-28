// 미니홈피 페이지 입니다. 초기상태는 Profile,Main 컴포넌트 상태에서 시작하고 Main컴포넌트에서 다이어리,방명록 링크태그로 걸어주세요
import Layout from "../components/layout/Layout";
import Main from "../components/main/Main";
import Profile from "../components/profile/Profile";

function HomeP() {
  return (
    <Layout>
      <Profile />
      <Main />
    </Layout>
  );
}
export default HomeP;
