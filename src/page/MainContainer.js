import listStore from '../store/ListStore';
import MainPresenter from './MainPresenter';
import {useInView} from "react-intersection-observer";
import React from "react";

function Body() {
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
            <MainPresenter list={list} inViewTargetElement={ref} />
    );
}

export default Body;
