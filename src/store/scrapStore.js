import create from 'zustand';

const scrapStore = create((set) => ({
    list: [],
    setPage: (newPage) => set({ page: newPage }),
    getScrapList: () => {
        // 로컬 스토리지에서 스크랩 리스트 불러오기
        const scrapList = localStorage.getItem('scrapList');
        const parsedList = scrapList ? JSON.parse(scrapList) : [];
        set({ list: parsedList });
    },
    setScrap: (item) => {
        // 스크랩 아이템 추가 및 로컬 스토리지에 저장
        set((state) => {
            const updatedList = [...state.list, item];
            localStorage.setItem('scrapList', JSON.stringify(updatedList));
            return { list: updatedList };
        });
    },
    removeScrap: (item) => {
        // 스크랩 아이템 삭제 및 로컬 스토리지 업데이트
        set((state) => {
            const updatedList = state.list.filter((i) => i._id !== item._id);
            localStorage.setItem('scrapList', JSON.stringify(updatedList));
            return { list: updatedList };
        });
    },
}));

export default scrapStore;
