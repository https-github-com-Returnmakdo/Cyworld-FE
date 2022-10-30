import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVenus } from "@fortawesome/free-solid-svg-icons"; 여성일땐 이 아이콘 사용 (삼항 연산자로 구분하기)
import { faMars } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <PageBox>
      <Today>
        Today<span style={{ color: "red" }}> 10</span> | Total 999
      </Today>
      <ProfBox>
        <DayOfTheWeek>
          TODAY is ... <span style={{ color: "black" }}>행복🥰</span>
        </DayOfTheWeek>
        <RandomImage>
          <ProfileImage src="http://res.heraldm.com/content/image/2021/07/16/20210716000671_0.jpg" />
        </RandomImage>
        <Intro>난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ...</Intro>
        <History>히스토리</History>
        <Pado>파도타기</Pado>
        <UserName>
          안치영 <FontAwesomeIcon icon={faMars} />
        </UserName>
        <UserEmail>ahncy12@cyworld.com</UserEmail>
        <Birth>1997.9.30</Birth>
      </ProfBox>
    </PageBox>
  );
}
export default Profile;

//프로필 담는 박스
const PageBox = styled.div`
  width: 100px;
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

const DayOfTheWeek = styled.div`
  width: 85%;
  margin: 20px auto 15px auto;
  text-align: center;
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1ea7cc;
  border: 1px solid #cdd5d8;
`;

//투데이표기
const Today = styled.div`
  flex: 0.1;
  margin: 17px 195px -2px 15px;
  text-align: center;
  font-size: 0.8rem;
`;

const RandomImage = styled.div`
  width: 85%;
  height: 230px;
  margin: 10px auto auto auto;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Intro = styled.div`
  width: 85%;
  height: 80px;
  padding: 5px;
  margin: 20px auto auto auto;
  text-align: center;
  font-size: 0.8rem;
`;

const History = styled.div`
  width: 85%;
  margin: 10px auto auto auto;
  padding: 5px;
  border-bottom: 1px solid #cdd5d8;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1ea7cc;
`;

const Pado = styled.div`
  width: 85%;
  margin: 10px auto auto auto;
  padding: 5px;
  text-align: center;
  border: 1px solid #cdd5d8;
  font-size: 0.8rem;
  cursor: pointer;
`;

const UserName = styled.div`
  width: 85%;
  margin: 10px auto auto auto;
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const UserEmail = styled.div`
  width: 85%;
  margin: 5px auto auto auto;
  padding-left: 5px;
  font-size: 0.7rem;
  cursor: pointer;
`;

const Birth = styled.div`
  width: 85%;
  margin: 12px auto auto auto;
  padding-left: 5px;
  font-size: 0.7rem;
`;
