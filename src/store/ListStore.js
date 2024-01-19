import create from 'zustand';
import axios from 'axios'
import React from "react";

const listStore = create((set,get) => ({
    list: [],
    page : 0 ,
    country : [{name: '전체 국가', value: null}],
    headLine : {name: '전체 헤드라인 ', value: null},
    date: {name:'전체 날짜', begin_date: null},
    setPage: (newPage) => set({ page: newPage }),
    setCountry: (newCountry) => {
        set({country: [...newCountry]})
    },
    setHeadLine: (newHeadLine) => set({ headLine: { value: newHeadLine } }),
    setDate: (newDate) => set({ date: { value: newDate } }),
    getList: async () => {
        const { list, page, headLine, date: { begin_date } , country} = get();
        const countryValues = country.map(countryItem => countryItem.value).join(" ")
        const articleList = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params:{
            "api-key" : "vjQmGxBSVAmVVM5lU2yFePaHenTESf9D",
             "q" : countryValues,
             "page" : page,
             'headLine' : headLine.value,
             'begin_date' : begin_date,
            }
        })
        await set({list:[ ...list, ...articleList.data.response.docs]})
        return articleList
    },
}));

export default listStore;
