import axios from 'axios'
export default{
  namespaced:true,
  state:{
    detailCinema:{}
  },
  mutations:{
    SETDETAILCINEMA(state,list){
      state.detailCinema=list
    }
  },
  actions:{
    getDetailCinema({commit,state},cinemaId){
      axios.get('/maoyan/ajax/cinemaDetail',{
        params:{
          cinemaId:cinemaId
        }
      }).then(response=>{
       let res= response.data
      //  console.log(response.data)
       commit("SETDETAILCINEMA",res)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
