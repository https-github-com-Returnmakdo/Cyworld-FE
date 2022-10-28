import styled from "styled-components";

// 좌측 컴포넌트에 보여지는 프로필 컴포넌트
function Profile() {
  return (
    <PageBox>
      <Today>투데이</Today>
      <ProfBox>좌측 컴포넌트에 보여지는 프로필 컴포넌트</ProfBox>
    </PageBox>
  );
}
export default Profile;

//프로필 담는 박스
const PageBox = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;

//프로필 박스
const ProfBox = styled.div`
  width: 230px;
  flex: 2;
  margin: 0px 15px 15px 15px;
  background-color: white;
  border-radius: 9px;
  border: 1px solid #cdd5d8;
`;

//투데이표기
const Today = styled.div`
  flex: 0.1;
  margin: 17px 210px -2px 15px;
  text-align: center;
  font-size: 13px;
`;
