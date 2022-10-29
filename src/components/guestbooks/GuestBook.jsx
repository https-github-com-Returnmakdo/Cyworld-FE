import React from "react";
import styled from "styled-components";

function GuestBook() {
  return (
    <PageBox>
      <Content>방명록</Content>
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
  margin: 0px 0px 15px 15px;
  background-color: white;
  border-radius: 9px;
  border: 1px solid #cdd5d8;
  padding: 3%;
`;
