import React from "react";
import styled from "styled-components";

function MenuBar() {
  return (
    <Menu>
      <MenuButton>홈</MenuButton>
      <MenuButton>다이어리</MenuButton>
      <MenuButton>방명록</MenuButton>
    </Menu>
  );
}

export default MenuBar;

//메뉴 묶는 박스
const Menu = styled.div`
  flex: 0.2;
  margin: 70px 15px 15px 0px;
  display: flex;
  flex-direction: column;
`;

//메뉴버튼
const MenuButton = styled.button`
  cursor: pointer;
`;
