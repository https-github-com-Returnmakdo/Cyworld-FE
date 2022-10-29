import styled from "styled-components";

// 우측 컴포넌트에 띄워지는 홈 화면
function Main() {
  return (
    <PageBox>
      <Domain>http://cyworld.com/3조</Domain>
      <Content>
        <Box>
          <Title>미니룸</Title>
          <img
            alt="미니룸사진"
            src="/image/miniroom1.gif"
            className="miniroom"
          />
          <img alt="미니미" src="/image/minimi1.png" className="minimi" />
          <Illchon>
            <Title>일촌평</Title>
            <input type="text" style={{ width: 65 }} placeholder="일촌명" />
            <input
              type="text"
              placeholder="일촌과 나누고 싶은 이야기를 나눠보세요~!"
              style={{ width: 320 }}
            />
            <button>등록</button>
          </Illchon>
          <IllChonBox>
            <p>
              · 일촌평 남겨드려요~! (일촌 <span>정세모</span>)
            </p>
            <p>
              · 일촌평 남기기기기기기기긱 ((づ^.^)づ~♡ <span>김네모</span>)
            </p>
            <p>
              · 안녕하세요. (친구 <span>박동글</span>)
            </p>
            <p>
              · 안녕하세요. (친구 <span>박동글</span>)
            </p>
            <p>
              · 안녕하세요. (친구 <span>박동글</span>)
            </p>
            <p>
              · 안녕하세요. (친구 <span>박동글</span>)
            </p>
            <p>
              · 안녕하세요. (친구 <span>박동글</span>)
            </p>
            <p>
              · 안녕하세요. (친구 <span>박동글</span>)
            </p>
          </IllChonBox>
        </Box>
      </Content>
    </PageBox>
  );
}
export default Main;

//흰색박스
const PageBox = styled.div`
  width: 630px;
  height: 602px;
  margin-left: -21%;
  margin-top: 2px;
  display: flex;
  position: absolute;
  flex-direction: column;
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

/*제목 주소*/
const Title = styled.p`
  font-weight: 700;
  margin: 10px 0px 10px 0px;
  color: #1ea7cc;
`;

/*박스안 정렬*/
const Box = styled.div`
  padding: 20px;
`;

/*일촌평 남기기*/
const Illchon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin: 10px 0px 10px 0px;
  background-color: #f4f4f4;
  input {
    height: 25px;
    margin: 0px 5px 0px 5px;
    border: 1px solid #dedddd;
    &:focus {
      outline: none;
    }
  }
  p {
    font-weight: 700;
    color: #1ea7cc;
  }
  button {
    background-color: #ffffff;
    border: 1px solid #dedddd;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
`;

/*일촌평 담는 박스*/
const IllChonBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #6c6c6c;
  overflow: auto;
  width: 530px;
  height: 100px;
  p {
    margin-bottom: 4px;
  }
  span {
    font-weight: 600;
    color: #1ea7cc;
  }
`;

//도메인주소
const Domain = styled.div`
  display: flex;
  flex: 0.1;
  margin: 15px 0px 0px 460px;
  font-size: 0.8rem;
`;
