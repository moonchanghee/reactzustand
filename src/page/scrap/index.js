import scrapStore from '../../store/scrapStore';
import List from '../../component/list'
import {useInView} from "react-intersection-observer";
import React from "react";

function Scrap() {
    const { list, getScrapList , page, setPage} = scrapStore();
    const [ref, inView] = useInView({
        threshold:0.5,
        onChange:(inView) => {
            if(!inView){
                return;
            }
            setPage(page + 1)
            getScrapList();
        }
    });

    return (
        <List list={list} inViewTargetElement={ref} />
    );
}

export default Scrap;
