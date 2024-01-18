// Modal.js
import React from "react";
import styled from 'styled-components';

function Modal({ isOpen = false, onClose }) {
    return (
        <>
            {isOpen && (
                <ModalOverlay onClick={onClose}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>헤드라인</h2>
                        <LargeInput type="text"/>
                        <h2>날짜</h2>
                        <LargeInput type="text"/>
                        <h2>국가</h2>
                        <FilterButtons>
                            {[...Array(8)].map((_, index) => (
                                <OvalButton key={index + 1}>{index + 1}</OvalButton>
                            ))}
                        </FilterButtons>
                        <br/><br/>
                        <ApplyFilterButton onClick={onClose}>필터 적용하기</ApplyFilterButton>
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
  max-width: 500px;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  text-align: left;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  flex-wrap: wrap;
`;

const OvalButton = styled.button`
  width: 40px;
  height: 60px;
  background-color: blue;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin: 5px;
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
`;

export default Modal;
