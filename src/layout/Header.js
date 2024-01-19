import React, { useState } from 'react';
import listStore from '../store/ListStore';
import styled from 'styled-components';
import Modal from '../component/modal/Modal'

function Header() {
    const { country, headLine ,setCountry, date,setHeadLine,setDate,getList} = listStore();
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false)
    const onClickFilterButton = () => {
        setIsOpenFilterModal(true)
    }
    const onClickApplyButton = (paylaod) => {
        setCountry(paylaod.country)
        // setHeadLine(paylaod.headline)
        setDate(paylaod.date)
        getList()
        setIsOpenFilterModal(false)
    }
    const showCountryName = () => {
        return country.length > 1 ? `${country[0].name} 외 ${country.length - 1} 개` : country[0].name;
    }

    return (
        <HeaderContainer>
            <Button onClick={onClickFilterButton}>{headLine.value || headLine.name}</Button>
            <Button onClick={onClickFilterButton}>{date.value || date.name}</Button>
            <Button onClick={onClickFilterButton}>{showCountryName()}</Button>
            <Modal isOpen={isOpenFilterModal} onClose={onClickApplyButton}/>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: lightgray;
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 3px; 
`;

export default Header;
