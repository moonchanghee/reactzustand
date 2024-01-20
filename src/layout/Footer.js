import React from "react";
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";


function Footer() {
    return (
        <StyledFooter>
            <Link to='/'><Button><MdHomeFilled/></Button></Link>
            <Link to='/scrap'><Button><TiDocumentText/></Button></Link>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 30%;
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
