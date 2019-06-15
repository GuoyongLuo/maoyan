import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import cinema from './cinema/index'
import detail from './detail/index'
import search from './search/index'
import city from './city' 


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    cinema,
    detail,
    search,
    city,
  }
})
