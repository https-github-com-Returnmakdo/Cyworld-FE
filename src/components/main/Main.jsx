import styled from "styled-components";

// 우측 컴포넌트에 띄워지는 홈 화면
function Main() {
  return (
    <PageBox>
      <Domain>도메인주소</Domain>
      <Content>우측 컴포넌트에 띄워지는 홈 화면</Content>
    </PageBox>
  );
}
export default Main;

//흰색박스
const PageBox = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;

//도메인주소
const Domain = styled.div`
  display: flex;
  flex: 0.1;
  margin: 15px 0px 0px 15px;
  font-size: 13px;
`;

//컨텐츠 들어갈 박스
const Content = styled.div`
  flex: 2;
  margin: 0px 0px 15px 15px;
  background-color: white;
  border-radius: 9px;
  border: 1px solid #cdd5d8;
  padding: 3%;
`;
