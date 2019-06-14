<template>
  <van-tabbar v-model="active" active-color="#E54847">
    <van-tabbar-item 
      v-for="nav in navs"
      :key="nav.id"
      :to="nav.href"
    >
      <span>{{nav.name}}</span>
      <i :class="['iconfont', nav.icon]" slot="icon"></i>
    </van-tabbar-item>
  </van-tabbar>
</template>


<script>
export default {
  data(){
    let tabIndex = this.$route.meta.tabIndex
    return{
      active:tabIndex,
    }
  },
  props:{
    navs:Array
  }
}
</script>
<style scoped>
   .iconyingyuan, .icondianying ,.iconmine{ 
       font-size: 18px;
   }
</style>

