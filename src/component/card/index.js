import React , {useState} from "react";
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import scrapStore from '../../store/scrapStore'

function Card({item, title, reporter, company, date, articleUrl }) {
    const { list, setScrap, removeScrap } = scrapStore();
    const onClickCard = () => {
        window.open(articleUrl, '_self');
    }

    const checkScrap = (item) => {
        return list.some((scrapItem) => scrapItem._id === item._id);
    }

    const onCLickScrapButton = () => {
        if(checkScrap(item)){
         removeScrap(item);
         return;
        }
        setScrap(item);
    }

    return (
            <StyledCard>
                <TitleWrapper>
                    <Title onClick={onClickCard}>{title}</Title>
                    <ScrapButton
                        onClick={onCLickScrapButton}
                        isScrap={checkScrap(item)}
                    >
                        <StarIcon>{checkScrap ? <FaStar/> : <FaRegStar/>}</StarIcon>
                    </ScrapButton>
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
  align-items: flex-end;
  margin-top: 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const ScrapButton = styled.button`
  padding: 5px;
  background-color: transparent; /* 배경색을 투명으로 설정 */
  border: none;
  cursor: pointer;
  color: gray;
  ${(props) => props.isScrap && `
    color: yellow;
  `}
`;

const StarIcon = styled.span`
  font-size: 20px;
`;

const Reporter = styled.p`
  margin: 0;
`;

const Date = styled.p`
  margin: 0;
`;



export default Card;
