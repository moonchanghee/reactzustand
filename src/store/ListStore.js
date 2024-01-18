import create from 'zustand';
import axios from 'axios'

const listStore = create((set) => ({
    list: [],
    getList: async (params) => {
        const list = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params:{
            "api-key" : "vjQmGxBSVAmVVM5lU2yFePaHenTESf9D"
            }
        })
        set({ list })
        return list
    },
}));

export default listStore;

