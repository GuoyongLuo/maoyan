<template>
  <div class="page-index">
    <keep-alive include="cinema">
      <router-view></router-view>
    </keep-alive>
    <navbar :navs="navs"/>
  </div>
</template>
<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'index',
  components: {
    navbar
  },

  data () {
    return {
      navs: [
        { id: 1, name: '电影', icon: 'icondianying', href: '/films' },
        { id: 2, name: '影院', icon: 'iconyingyuan', href: '/cinemas' },
        { id: 3, name: '我的', icon: 'iconmine', href: '/mines' }
      ]
    }
  }
}
</script>

<style lang="less">
.page-index {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
