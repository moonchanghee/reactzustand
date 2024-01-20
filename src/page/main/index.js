import listStore from '../../store/ListStore';
import List from '../../component/list'
import {useInView} from "react-intersection-observer";
import React from "react";

function Main() {
    const { list, getList , page, setPage} = listStore();
    const [ref, inView] = useInView({
        threshold:0.5,
        onChange:(inView) => {
            if(!inView){
                return;
            }
            setPage(page + 1)
            getList();
        }
    });

    return (
        <List list={list} inViewTargetElement={ref} />
    );
}

export default Main;
