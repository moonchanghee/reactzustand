import React from "react";
import styled from 'styled-components';
import Modal from '../component/modal/Modal'

function Header() {
    return (
        <HeaderContainer>
            <Button>전체 헤드라인</Button>
            <Button>전체 날짜</Button>
            <Button>전체 국가</Button>
        </HeaderContainer>
    );
}


const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: lightgray;
  border-top-left-radius: 10px; /* 왼쪽 상단을 둥글게 만들기 */
  border-top-right-radius: 10px; /* 오른쪽 상단을 둥글게 만들기 */
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 3px; 
`;

export default Header;
