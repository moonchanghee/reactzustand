import React, { useState } from 'react';
import listStore from '../store/ListStore';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import FilterModal from '../component/modal/FilterModal';

interface ButtonProps {
    isSelected?: boolean;
    numberOfLines?: number;
}

interface ApplyButtonProps {
    date?: Date | null;
    country?: any[];
    headline?: string | null
}

function Header() {
    const { country, headLine, setCountry, date, setHeadLine, setDate, getList, setPage } = listStore();
    const [isOpenFilterModal, setIsOpenFilterModal] = useState<boolean>(false);

    const onClickFilterButton = () => {
        setIsOpenFilterModal(true);
    };

    const onClickApplyButton = ({ date, country, headline }: ApplyButtonProps) => {
        if (date !== undefined && date !== null ) {
            let formatDate = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
            setDate(formatDate);
        } else {
            setDate(null);
        }
        setCountry(country);
        setHeadLine(headline);
        setPage(1);
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
            <Button onClick={onClickFilterButton} isSelected={headLine.value} numberOfLines={1}>
                <IconContainer>
                    <FaSearch />
                </IconContainer>
                {headLine.value || headLine.name}
            </Button>
            <Button onClick={onClickFilterButton} isSelected={date.begin_date}>
                <IconContainer>
                    <FaRegCalendarCheck />
                </IconContainer>
                {date.begin_date || date.name}
            </Button>
            <Button onClick={onClickFilterButton} isSelected={country[0]?.value}>
                {showCountryName()}
            </Button>
            <FilterModal isOpen={isOpenFilterModal} onClose={onClickApplyButton} />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fefefe;
`;

const Button = styled('button')<ButtonProps>`
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

  ${(props) =>
    props.isSelected &&
    `
    border: 1px solid #c2d8fa;
    color: #c2d8fa;
  `}
`;

const IconContainer = styled.span`
  margin-right: 5px;
  margin-top: 3px;
`;

export default Header;
