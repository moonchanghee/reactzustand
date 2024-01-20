import React, { useState } from 'react';
import listStore from '../store/ListStore';
import styled from 'styled-components';
import FilterModal from '../component/modal/FilterModal'

function Header() {
    const { country, headLine ,setCountry, date,setHeadLine,setDate,getList} = listStore();
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false)
    const onClickFilterButton = () => {
        setIsOpenFilterModal(true)
    }
    const onClickApplyButton = ({date, country, headline}) => {
        setCountry(country)
        setHeadLine(headline)
        let formatDate = date !== null ? `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}` : null;
        setDate(formatDate)
        getList(false)
        setIsOpenFilterModal(false)
    }
    const showCountryName = () => {
        if(country.length === 0){
            return '전체 국가';
        }
        return country.length > 1 ? `${country[0].name} 외 ${country.length - 1} 개` : country[0].name;
    }

    return (
        <HeaderContainer>
            <Button onClick={onClickFilterButton}>{headLine.value || headLine.name}</Button>
            <Button onClick={onClickFilterButton}>{date.value || date.name}</Button>
            <Button onClick={onClickFilterButton}>{showCountryName()}</Button>
            <FilterModal isOpen={isOpenFilterModal} onClose={onClickApplyButton}/>
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
