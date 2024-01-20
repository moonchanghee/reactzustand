import axios from 'axios'
import {API_KEY} from "./ApiKey";

export default {
    /**
     * @description
     * 뉴욕타임스 기사 리스트를 조회한다
     * @param {Object} payload
     * @param {string} payload.countryValues
     * @param {string} payload.page
     * @param {string} payload.headLine
     * @param {Number} payload.begin_date
     * @author ChangHee Moon <ckdgml228@gmail.com>
     */

    get(payload){
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params:{
                "api-key" : API_KEY,
                "q" : payload.countryValues,
                "page" : payload.page,
                'fq' : payload.headLine,
                'begin_date' : payload.begin_date,
            }
        })
    }
}
