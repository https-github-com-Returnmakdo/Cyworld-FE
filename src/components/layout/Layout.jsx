import styled from "styled-components";

// 미니홈피 전체 레이아웃
function Layout({ children }) {
  return <Base>{children}</Base>;
}
export default Layout;

//배경
const Base = styled.div`
  background-color: #a3a3a3;
  background-image: url("/image/pattern.png");
  background-size: 100px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;
