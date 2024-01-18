import React, { useEffect } from "react";
import listStore from '../store/ListStore';
import MainPresenter from './MainPresenter';

function Body() {
    const { list, getList } = listStore();

    useEffect(() => {
        // 컴포넌트가 마운트될 때 API에서 데이터를 가져옴
        console.log("test")
        const fetchData = async () => {
            await getList();
        };

        fetchData();
    }, [getList]);

    return <MainPresenter list={list} />;
}

export default Body;
