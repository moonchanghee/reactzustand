import React from "react";
import styled from 'styled-components';
import { Link, useLocation} from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

function Footer(){
    const location = useLocation();
    return (
        <StyledFooter>
            <TabButton to='/' isSelected={location.pathname === '/'} ><MdHomeFilled /> 홈</TabButton>
            <TabButton to='/scrap' isSelected={location.pathname === '/scrap'}><TiDocumentText /> 스크랩</TabButton>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
  background-color: black;
  height: 80px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
`;

const TabButton = styled(Link)<{ isSelected:boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: ${(props) => (props.isSelected ? 'white' : 'gray')};

  &:hover {
    border-bottom: 2px solid #fff;
  }

  svg {
    margin-bottom: 5px;
  }
`;

export default Footer;
