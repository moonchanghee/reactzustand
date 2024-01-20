import create from 'zustand';
import React from "react";
import articleAPI from '../api/articleList'

const listStore = create((set,get) => ({
    list: [],
    page : 0 ,
    country : [{name: '전체 국가', value: null}],
    headLine : {name: '전체 헤드라인 ', value: null},
    date: {name:'전체 날짜', begin_date: null},
    setPage: (newPage) => set({ page: newPage }),
    setCountry: (newCountry) => {set({country: [...newCountry]})},
    setHeadLine: (newHeadLine) => set((state) => ({ headLine: { ...state.headLine, value: newHeadLine } })),
    setDate: (newDate) => set((state) => ({ date: { ...state.date, value: newDate } })),
    getList: async (isScroll = true) => {
        const { list, page, headLine, date: { begin_date } , country} = get();
        const countryValues = country.map(countryItem => countryItem.value).join(" ")
        const payload = {countryValues, page, headLine: headLine.value, begin_date }
        const articleList = await articleAPI.get(payload);

        if(isScroll){
            await set({list:[ ...list, ...articleList.data.response.docs]})
        }else{
            await set({list:[ ...articleList.data.response.docs]})
        }

        return articleList
    },
}));

export default listStore;
