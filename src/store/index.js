import Vue from 'vue'
import Vuex from 'vuex'
import cinema from './cinema/index'
import detail from './detail/index'
import search from './search/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cinema,
    detail,
    search
  }
})
