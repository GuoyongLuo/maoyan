import http from '@/utils/http.js'
import axios from 'axios'
export default{
  namespaced:true,
  state:{
    inputVal:'',
    searchList:[]
  },
  mutations:{
    SETINPUTVAL ( state,playload){
      state.inputVal=playload
    },
    SEARCHCINAMLIST(state,playload){
      state.searchList=playload
    }
  },
  actions:{
    getSearch({commit},inputVal){
      axios.get('http://localhost:8080/maoyan/ajax/search?cityId=30&stype=2',{
        params:{
          kw:inputVal,

        },
        headers:{
          "Accept": "application/json, text/javascript, */*; q=0.01",
        }
      }).then(response => {
        // let res=[];
      let  res = response.data.cinemas ? response.data.cinemas.list : []
        // console.log(response)
        commit('SEARCHCINAMLIST',res)
      })
    }
  }
}
