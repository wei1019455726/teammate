import api from '../index'
import urls from './urls'
export default {
    announceinfo () {
        // return出去了一个promise
        return api.get(urls.announceinfo)
      },
      getOneAnnounce (params) {
        params = {
            id: params
        }
        // return出去了一个promise
        return api.get(urls.getOneAnnounce,params)
      },


}
