import React, { useState } from 'react';
import listStore from '../store/ListStore';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import FilterModal from '../component/modal/FilterModal';

function Header() {
    const { country, headLine, setCountry, date, setHeadLine, setDate, getList } = listStore();
    const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

    const onClickFilterButton = () => {
        setIsOpenFilterModal(true);
    };

    const onClickApplyButton = ({ date, country, headline }) => {
        setCountry(country);
        setHeadLine(headline);
        let formatDate = date !== null ? `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}` : null;
        setDate(formatDate);
        getList(false);
        setIsOpenFilterModal(false);
    };

    const showCountryName = () => {
        if (country.length === 0) {
            return '전체 국가';
        }
        return country.length > 1 ? `${country[0].name} 외 ${country.length - 1} 개` : country[0].name;
    };

    return (
        <HeaderContainer>
            <Button onClick={onClickFilterButton} isSelected = {headLine.value} numberOfLines={1}>
                <IconContainer>
                    <FaSearch />
                </IconContainer>
                {headLine.value || headLine.name}
            </Button>
            <Button onClick={onClickFilterButton} isSelected = {date.begin_date}>
                <IconContainer>
                    <FaRegCalendarCheck />
                </IconContainer>
                {date.begin_date || date.name}
            </Button>
            <Button onClick={onClickFilterButton} isSelected = {country[0]?.value}>{showCountryName()}</Button>
            <FilterModal isOpen={isOpenFilterModal} onClose={onClickApplyButton} />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fefefe;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 3px;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;

  &:hover {
    background-color: #e6e6e6;
  }

  ${(props) => props.isSelected && `
    border: 1px solid #c2d8fa;
    color: #c2d8fa;
  `}
`;

const IconContainer = styled.span`
  margin-right: 5px;
  margin-top: 3px;
`;

export default Header;
