import http from '@/utils/http'
import Axios from 'axios';

export default {
  namespaced:true,

  state: {
    filmList:[],
    
    filmComing:[],
    
    filmComingsoon:[],

    curFilmType:0,
    // loading:false
  },

  mutations: {
    setFilmList (state,list) {
      state.filmList=list
    },
    setFilmComing (state,list) {
      state.filmComing=list
    },
    setFilmComingsoon (state,list) {
      state.filmComingsoon=list
    },
    // setCurFilmList (state,type){
    //   state.curFilmType=type
    // }
  },
   
  actions: {
    getFilmList({commit}){
      Axios.get('/maoyan/ajax/movieOnInfoList?token=')
      .then(res =>{
        var data = res.data.movieList;
        // console.log(data);
        var newData = data.map(item => {
          return {
            ...item,
            img:item.img.replace('w.h','128.180')
          }
        });
        console.log(newData)
        commit('setFilmList',newData);
      })
    },

    getFilmComing({commit}){
      Axios.get('/maoyan/ajax/mostExpected?ci=30&limit=10&offset=0&token=')
      .then(res =>{
        var data1 = res.data.coming;
        // console.log(data1,'111')
        var newData1 = data1.map(item => {
          return {
            ...item,
            img:item.img.replace('w.h','128.180')
          }
        });
        // console.log(newData1,'22');
        commit('setFilmComing',newData1);
      })
    },

    getFilmComingsoon({commit}){
      Axios.get('/maoyan/ajax/comingList?ci=30&token=&limit=10')
      .then(res =>{
        var data2 = res.data.coming;
        // console.log(data2,'111')
        var newData2 = data2.map(item => {
          return {
            ...item,
            img:item.img.replace('w.h','128.180')
          }
        });
        // console.log(newData2,'22');
        // console.log(res.data.coming,'78');
        commit('setFilmComingsoon',newData2);
      })
    }
  }
}