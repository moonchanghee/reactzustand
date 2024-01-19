import React from "react";
import styled from 'styled-components';
import Card from '../component/card/Card';


function Body({list, inViewTargetElement}) {
    return (
        <BodyContainer>
            {list.map((item, index) => (
                <Card
                    key={index}
                    title={item.headline.main}
                    reporter={item.byline.original}
                    date={item.pub_date}
                />
            ))}
            <div ref={inViewTargetElement}/>
        </BodyContainer>
    );
}

const BodyContainer = styled.div`
  overflow-y: auto;
  max-height: 100%;
  padding-bottom: 60px;
`;

export default Body;
