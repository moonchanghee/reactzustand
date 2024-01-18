import React from "react";
import styled from 'styled-components';

function Card({ title, reporter,company, date }) {
    return (
        <StyledCard>
            <TitleWrapper>
                <Title>{title}</Title>
                <ScrapButton>스크랩</ScrapButton>
            </TitleWrapper>
            <BottomSection>
                <Reporter>{company} {reporter}</Reporter>
                <Date>{date}</Date>
            </BottomSection>
        </StyledCard>
    );
}

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 리포터를 아래로 이동 */
  margin-top: 10px; /* 리포터와 상위 섹션 간의 간격 조절 */
`;

const Title = styled.h3`
  margin: 0;
`;

const ScrapButton = styled.button`
  padding: 5px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Reporter = styled.p`
  margin: 0; /* 리포터의 상단 마진 제거 */
`;

const Date = styled.p`
  margin: 0;
`;

export default Card;
