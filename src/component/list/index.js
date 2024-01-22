import React from "react";
import styled from 'styled-components';
import Card from '../card';


function List({list, inViewTargetElement}) {

    return (
        <ListContainer>
            { list.map((item, index) => (
                <Card
                    key={index}
                    item={item}
                    title={item.headline?.main}
                    reporter={item.byline?.original}
                    articleUrl = {item.web_url}
                    date={item.pub_date}
                />
            ))}
            <div ref={inViewTargetElement}/>
        </ListContainer>
    );
}

const ListContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  padding-bottom: 60px;
`;

export default List;
