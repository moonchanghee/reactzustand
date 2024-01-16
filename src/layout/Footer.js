import React from "react";
import styled, { css } from 'styled-components';

function Footer() {
    return (
        <StyledFooter>
            <Button>버튼 1</Button>
            <Button>버튼 2</Button>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 10px; /* 둥근 사각형을 위한 border-radius 값 */

  ${({ theme }) => css`
    max-width: ${theme.appMaxWidth};
  `}
`;

const Button = styled.button`
  padding: 10px 60px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;

export default Footer;
