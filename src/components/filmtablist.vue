<template>
<div class="content">
  <div class="head">
     <span>近期最受期待</span>
  </div>
  <ul>
    <li v-for="film in comingList" :key="film.id">
      <div class="expected-item" >
        <div class=" film-img-bg">
          <img :src="film.img" onerror="this.style.visibility='hidden'">
          <span class="wish-bg"></span>
          <span class="wish"><span class="wish-num">{{film.wish}}</span>人想看</span>
          <div class="toggle-wish" data-wishst="0" data-movieid="1218029">
            <span></span>
          </div>
        </div>
      <h5 class="name">{{film.nm}}</h5>
      <p class="date">{{film.comingTitle}}</p>
    </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 2
    };
  },

  props:{
    //影片数据
    comingList:{
      type:Array
    }

  },

}
</script>
<style scoped>
  .content{
    border-bottom: 12px solid #F5F5F5;
    padding-left: 15px;
  }
  .head{
    font-size: 14px;
    color: #333;
    line-height: 14px;
    margin: 12px 0 12px 0;
  }
  ul{
    width: 343px;
    height: 147px;
    overflow-x: auto;
    display: flex;
    padding: 0px 0 12px 0;
  }
  .expected-item{
    width: 85px;
    margin-right: 10px;
    margin-left: 2px;
  }
  .film-img-bg img{
    width: 85px;
    height: 115px;
  }
  .film-img-bg{
    position: relative;
  }
  .wish{
    position: absolute;
    top:99px;
    left: 3px;
    z-index: 99;
    color: #faaf00;
    font-size: 11px;
    font-weight: 600;
  }
  .name{
    margin: 0 0 3px;
    font-size: 13px;
    color: #222;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .date{
    margin: 0;
    font-size: 12px;
    color: #999;
  }
</style>
