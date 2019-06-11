import http from '@/utils/http'
import axios from 'axios'
export default{
  namespaced:true,
  state:{
    cinemaList:[]//电影院数据
  },
  mutations:{
    SETCINEMALIST(state,list){
      state.cinemaList=list
    }

  },
  actions:{
    getCinemaList({commit}){
      axios.get('http://localhost:8080/maoyan/ajax/cinemaList?day=2019-06-11&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1560224660248&cityId=30').then(
        response=>{

         let res=response.data.cinemas
         console.log(res)
          commit('SETCINEMALIST',res)
        }
      )
    }
  }
}
