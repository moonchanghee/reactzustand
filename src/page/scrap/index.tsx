import React from "react";
import List from '../../component/list';
import scrapStore from '../../store/scrapStore';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { TiDocumentText } from "react-icons/ti";

function Scrap() {
    const { list, getScrapList } = scrapStore();
    const [ref, inView] = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (!inView) {
                return;
            }
            getScrapList();
        }
    });

    return (
        <>
            {list.length > 0 ?
                <List list={list} inViewTargetElement={ref} />
                :
                <NoScrapCard>
                    <TiDocumentText size={50} />
                    <h3>저장된 스크랩이 없습니다.</h3>
                    <GotoScrapButton to={'/'}>스크랩 하러 가기</GotoScrapButton>
                </NoScrapCard>
            }
        </>
    );
}

const NoScrapCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  height: 100%;
  padding-bottom: 60px;
  flex-direction: column;
`;

const GotoScrapButton = styled(Link)`
  padding: 20px 130px;
  background-color: #2f6cf5;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
`;

export default Scrap;
