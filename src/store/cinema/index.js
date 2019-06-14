import http from '@/utils/http'
import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'

Vue.use(Toast)
export default {
  namespaced: true,
  state: {
    cinemaList: [], // 电影院数据
    limit: 20,
    offset: 0,
    loading: false
  },
  mutations: {
    SETCINEMALIST (state, list) {
      state.cinemaList = list
    },
    ADDOFFSET (state) {
      state.offset += 20
    },
    SETLOADING (state, bol) {
      state.loading = bol
    }

  },
  actions: {
    getCinemaList ({ commit, state }, isLoadMore) {
      Toast.loading({
        duration: 0,
        mask: true
      })
      commit('SETLOADING', true)
      axios.get('http://localhost:8080/maoyan/ajax/cinemaList?day=2019-06-11&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1560224660248&cityId=30', {
        params: {
          limit: state.limit,
          offset: state.offset
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }

      }).then(
        response => {
          let res = response.data.cinemas
          //  console.log(res)
          if (isLoadMore) {
            let newCinemaList = [...state.cinemaList, ...res]
            commit('SETCINEMALIST', newCinemaList)
          } else {
            commit('SETCINEMALIST', res)
          }

          Toast.clear()
          commit('ADDOFFSET'),
          commit('SETLOADING', false)
        }
      )
    }
  }
}
