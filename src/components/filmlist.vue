<template>
   <ul>
     <li v-for="film in list"
      :key="film.id"
     > 
        <div v-if="film.comingTitle" class="film-date">
         {{film.comingTitle}}
        </div> 
        <div v-else></div>
       <div class="film-img">
         <img :src="film.img" alt="">
       </div>
       <div class="film-info">
           <p class="film-info-name">{{film.nm}}
             <span class="film-type" v-if="`${film.version}`==='v3d imax'">
                <span><p>3D</p></span><span><p>IMAX</p></span>
             </span>
             <span class="film-type" v-if="`${film.version}`==='v2d imax'">
                <span><p>2D</p></span><span><p>IMAX</p></span>
             </span>
           </p>
           <p class="film-info-grade film-info-font">
             <span v-if="`${film.globalReleased}`==='true'&`${film.sc}`!=0">观众评分:
               <span class="font-num">{{film.sc}}</span>
             </span>
             <span v-else-if="`${film.globalReleased}`==='false'&`${film.sc}`==0">
               <span class="font-num">{{film.wish}}</span>人想看
             </span>
             <span v-else-if="`${film.globalReleased}`==='true'&`${film.sc}`==0">
               暂无评分
             </span>
           </p>
           <p class="film-info-actor film-info-font">主演:
             <span>{{film.star}}</span>
           </p>
           <p class="film-info-showmes film-info-font">
             {{film.showInfo}}
           </p>
       </div>
       <div class="film-info-btn">
          <button style="background: #E54847" v-if="`${film.showst}`==3">购票</button>
          <button style="background: #3C9FE6" v-else-if="`${film.showst}`==4">预售</button>
          <button style="background: #FAAF00" v-else>想看</button>
       </div>
     </li>
   </ul>
</template>
<script>
import filmtablist from '@/components/filmtablist.vue'
export default {
  components: {
    filmtablist
  },
  props:{
    //影片类型
    filmType:{
      validator(value){
        return ['nowPlaying','comingSoon'].indexOf(value)!==-1
      }
    },
    
    //影片数据
    list:{
      type:Array
    },

  }
}
</script>

<style scoped>
   .film-date{
     width: 358px;
     height: 31px;
   }
   .film-type>span{
     display: inline-block;
   }
   .film-type span:nth-child(1){
      width: 13px;
      height: 14px;
      font-weight: normal;
      background: #3C9FE6;
      color: white;
      border-radius: 2px 0 0 2px;
   }
   .film-type span:nth-child(1) p{
      font-size: 12px;
      line-height: 14px;
      transform:scale(.6); 
   }
   .film-type span:nth-child(2){
      width: 25px;
      height: 14px;
      font-weight: normal;
      background: white;
      color: #3C9FE6;
      border: 0.5px solid #3C9FE6;
      border-radius: 2px;
   }
   .film-type span:nth-child(2) p{
      font-size: 12px;
      line-height: 14px;
      transform:scale(.6); 
   }
   .font-num{
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
   }
   /* ul{
     height: 523px;
     overflow-y: auto;
   } */
   li{
     padding: 12px 0 8px 0;
     overflow: hidden;
     margin: 0 14px 0 15px;
     border-bottom: 1px solid #F0F0F0;
   }
   .film-info-btn{
     float: right;
     color: white;
     font-size: 12px;
     margin-right: 20px;
     margin-top:22px;
   }
   .film-info-btn button{
     width: 47px;
     height: 27px;
     border: 0px solid white;
     /* background: white; */
     background: #E54847;
     border-radius: 5px;
   }
   .film-img{
     width: 64px;
     height: 90px;
     float: left;
   }
   .film-img img{
     width: 64px;
   }
   .film-info{
     width: 207px;
     float: left;
     margin-left: 6px;
   }
   .film-info-name{
     font-size: 17px;
     font-weight: 700;
   }
   .film-info-name span{
     font-size: 14px;
   }
   .film-info-font{
     font-size: 13px;
     color: #666;
     margin-top: 6px;
     line-height: 15px;
     width: 202px;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
   }
</style>
