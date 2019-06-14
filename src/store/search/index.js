import http from '@/utils/http.js'
import axios from 'axios'
export default{
  namespaced:true,
  state:{
    inputVal:''
  },
  mutations:{
    SETINPUTVAL ( state,playload){
      state.inputVal=playload
    }
  },
  actions:{
    getSearch({commit,state}){
      axios.get('http://localhost:8080/maoyan/ajax/search?cityId=30&stype=2',{
        params:{
          kw:555,

        }
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
