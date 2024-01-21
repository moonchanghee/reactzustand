import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FilterModal({ isOpen = true, onClose }) {
    const countryNames = [
        { name: '대한민국', value: 'korea'},
        { name: '중국', value: 'china' },
        { name: '일본', value: 'japan' },
        { name: '미국', value: 'usa' },
        { name: '북한', value: 'north_korea' },
        { name: '러시아', value: 'russia' },
        { name: '프랑스', value: 'france'},
        { name: '영국', value: 'england'},
    ];
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [headline, setHeadline] = useState(null);
    const checkSelectedCountryList = (country) => {
        return selectedCountries.some(selectedCountry => selectedCountry.value === country.value);
    }

    const onClickCountryButton = (country) => {
        if (checkSelectedCountryList(country)) {
            // 이미 선택된 국가인 경우 제거
            setSelectedCountries(prevSelectedCountries => prevSelectedCountries.filter(selectedCountry => selectedCountry.value !== country.value));
            return;
        }

        setSelectedCountries([...selectedCountries, country]);
    };
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setHeadline(inputValue);
    };

    return (
        <>
            {isOpen && (
                <ModalOverlay>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>헤드라인</h2>
                        <LargeInput
                            placeholder={"검색하실 헤드라인을 입력해주세요"}
                            type="text" value={headline}
                            onChange={handleInputChange} />
                        <h2>날짜</h2>
                        <StyledDatePicker
                            placeholderText={"날짜를 선택해주세요"}
                            selected={startDate}
                            onSelect={(date) => {
                            setStartDate(date)
                        }}
                        showIcon
                        dateFormat="yyyy.MM.dd"
                        />
                        <h2>국가</h2>
                            {countryNames.map((country, index) => (
                                <Countrybutton
                                    key={index + 1}
                                    isSelected={checkSelectedCountryList(country)}
                                    onClick={() => onClickCountryButton(country)}
                                >
                                    {country.name}
                                </Countrybutton>
                            ))}
                        <br/><br/>
                        <ApplyFilterButton onClick={() => onClose({headline, country: selectedCountries, date: startDate})}>필터 적용하기</ApplyFilterButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
}

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 25%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  text-align: left;
  margin-bottom: 30%;
`;

const LargeInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const ApplyFilterButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 15px 30px;
  background-color: blue;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
`;

const Countrybutton = styled.button`
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 45%;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  outline: none;

  ${(props) => props.isSelected && `
    background-color: blue;
    color: white;
  `}
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
`;

export default FilterModal;
