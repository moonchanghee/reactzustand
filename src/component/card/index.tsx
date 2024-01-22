import React from "react";
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import scrapStore from '../../store/scrapStore';

interface CardProps {
    item: object;
    itemId: string;
    title?: string;
    reporter?: string | null;
    date: string;
    articleUrl: string;
}

function Card({ item, itemId, title, reporter, date, articleUrl }: CardProps) {
    const { list, setScrap, removeScrap } = scrapStore();

    const onClickCard = () => {
        window.open(articleUrl, '_self');
    };

    const checkScrap = (itemId: string ) => {
        return list.some((scrapItem : { _id: string }) => scrapItem._id === itemId);
    };

    const onCLickScrapButton = () => {
        if (checkScrap(itemId)) {
            removeScrap(item);
            return;
        }
        setScrap(item);
    };

    const setDateFormat = () => {
        const dateObject = new Date(date);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        const formattedDate = `${year}.${month}.${day}`;

        return formattedDate;
    };

    return (
        <StyledCard>
            <TitleWrapper>
                <Title onClick={onClickCard}>{title}</Title>
                <ScrapButton
                    onClick={onCLickScrapButton}
                    isScrap={checkScrap(itemId)}
                >
                    <StarIcon>{checkScrap(itemId) ? <FaStar /> : <FaRegStar />}</StarIcon>
                </ScrapButton>
            </TitleWrapper>
            <BottomSection>
                <Reporter>{reporter || '-'}</Reporter>
                <DateSection>{setDateFormat()}</DateSection>
            </BottomSection>
        </StyledCard>
    );
}

const StyledCard = styled.div`
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
`;

const Title = styled.h3`
  margin: 0;
  cursor: pointer;
`;

const ScrapButton = styled.button<{ isScrap: boolean }>`
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: gray;
  ${(props) => props.isScrap && `
    color: #feaf00;
  `}
`;

const StarIcon = styled.span`
  font-size: 20px;
`;

const Reporter = styled.p`
  margin: 0;
`;

const DateSection = styled.p`
  margin: 0;
`;

export default Card;
