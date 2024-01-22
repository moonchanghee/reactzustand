import React from "react";
import styled from 'styled-components';
import Card from '../card';

interface ListItem {
    headline?: {
        main: string;
    };
    byline?: {
        original: string;
    };
    web_url: string;
    pub_date: string;
    _id : string;
    item : object;
}

interface ListProps {
    list: ListItem[];
    inViewTargetElement: ()=> void;
}

function List({ list, inViewTargetElement }: ListProps) {
    return (
        <ListContainer>
            {list.map((item, index) => (
                <Card
                    key={index}
                    item = {item}
                    itemId={item._id}
                    title={item.headline?.main}
                    reporter={item.byline?.original}
                    articleUrl={item.web_url}
                    date={item.pub_date}
                />
            ))}
            <div ref={inViewTargetElement} />
        </ListContainer>
    );
}

const ListContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  padding-bottom: 60px;
`;

export default List;
