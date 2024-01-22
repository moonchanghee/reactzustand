import listStore from '../../store/ListStore';
import scrapStore from '../../store/scrapStore';
import List from '../../component/list';
import { useInView } from "react-intersection-observer";

function Main() {
    const { list, getList, page, setPage } = listStore();
    const { getScrapList } = scrapStore();
    const [ref, inView] = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (!inView) {
                return;
            }
            setPage(page + 1);
            getList();
            getScrapList();
        }
    });

    return (
        <List list={list} inViewTargetElement={ref} />
    );
}

export default Main;
