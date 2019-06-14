<template>
<div class="page-film">
  <h1>猫眼电影</h1>
  <div class="top location-position">
      <span>深圳</span>
      <i class="iconfont iconxiasanjiao"></i>
  </div>
  <div class="top search-position">
      <i class="iconfont iconsousu"></i>
  </div>
  <van-tabs class="font" v-model="active" :line-width="83" :line-height="2" title-active-color="#E54847" :duration="0.1">
    <van-tab title="标签 1">定位背景</van-tab>
    <van-tab title="正在热映" id="cc" class="overflowy" >
      <filmList :list="filmList" />
    </van-tab>
    <van-tab title="即将上映" id="cd" class="overflowy">
       <filmtablist :comingList="filmComing"/>
       <filmList :list="filmComingsoon"/>
    </van-tab>
    <van-tab title="标签 1">搜索背景</van-tab>
 </van-tabs>
</div>
</template>
<script>
import filmList from '@/components/filmlist.vue'
import filmtablist from '@/components/filmtablist.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    filmList,
    filmtablist
  },
  data() {
    return {
      active: 1,
    };
  },
  computed:{
    ...mapState('film',[
      "filmList",
      "filmComing",
      "filmComingsoon"
    ]),
    
  },

  methods:{
    ...mapActions('film',[
      'getFilmList',
      'getFilmComing',
      'getFilmComingsoon'
    ]),
      onScroll () {
      // 判断当前是否滚动到了底部
      let scrollTop = document.getElementById('cc').scrollTop // 滚动条距离顶部的距离
      let scrollHeight = document.getElementById('cc').scrollHeight // 页面的高度
      let clientHeight = document.getElementById('cc').clientHeight // 可视区域的高度
      // console.log(scrollTop, scrollHeight, clientHeight);
      // console.log(scrollTop,scrollHeight,clientHeight)s

      if ((scrollHeight - clientHeight) - scrollTop < 50) {
        console.log('到底了');
      }
    },
    fn(){
      console.log(active);
    }
  },

  created(){
    this.getFilmList();
    this.getFilmComing();
    this.getFilmComingsoon();
    window.addEventListener('scroll', this.onScroll,true);
  }
   
}
</script>
<style scoped>
 .overflowy{
   height: 520px;
   overflow-y: auto;
 }
 .iconxiasanjiao{
    color: #B0B0B0;
 }
 .page-film{
    position: relative;
 }
 .top{
   width: 93px;
   height: 43px;
   background: white;
   position: absolute;
   z-index: 100;
   line-height: 44px;
 }
  .top span{
    color: #666;
  }
 .location-position{
   left: 0;
   padding-left: 15px;
   box-sizing: border-box;
 }
 .search-position{
   right: 0;
   padding-left: 50px;
   box-sizing: border-box;
 }
 .van-ellipsis{
   font-size: 15px;
   font-weight: 700;
 }
 h1{
   width: 375px;
   height: 50px;
   font-size: 18px;
   font-weight: 400;
   text-align: center;
   line-height: 50px;
   background: #E54847;
   color: white;
 }
 .iconsousu{
   font-size: 30px;
   color: #E54847;
 }
 /* .font{
   font-size: 15px;
   font-weight: 700;
 } */
</style>
