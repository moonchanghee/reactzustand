import create from 'zustand';
import React from "react";
import articleAPI from '../api/articleList'

const listStore = create((set,get) => ({
    list: [],
    page : 0 ,
    isFetching: false,
    country : [{name: '전체 국가', value: null}],
    headLine : {name: '전체 헤드라인 ', value: null},
    date: {name:'전체 날짜', begin_date: null},
    setPage: (newPage) => set({ page: newPage }),
    setCountry: (newCountry) => {set({country: [...newCountry]})},
    setHeadLine: (newHeadLine) => set((state) => ({ headLine: { ...state.headLine, value: newHeadLine } })),
    setDate: (newDate) => set((state) => ({ date: { ...state.date, begin_date: newDate } })),
    setIsFetching: (isFetch) => { set({isFetching: isFetch})},
    getList: async (isScroll = true) => {
        const {setIsFetching, list, page, headLine, date: { begin_date } , country} = get();
        const countryValues = country.map(countryItem => countryItem.value).join(" ")
        const payload = {countryValues, page, headLine: headLine.value, begin_date }
        setIsFetching(true)
        return await articleAPI.get(payload).then((res) => {
            if(isScroll){
                set({list:[ ...list, ...res.data.response.docs]})
            }else{
                set({list:[ ...res.data.response.docs]})
            }
            setIsFetching(false)
        })
    },
}));

export default listStore;
