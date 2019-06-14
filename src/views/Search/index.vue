<template>
  <div>
        <header class="navbar">
      <div class="nav-wrap-left">
        <a class="back" href="#" onclick="javascript: window.history.back();return false;">
          <i class="icon-back iconfont iconzuojiantou"></i>
        </a>
      </div>
      <h1 class="nav-header">猫眼电影</h1>
    </header>
    

    <search/>
  </div>
</template>
<script>
import search from '@/components/search'
export default {
  components:{
    search
  }
}
</script>
<style lang="less" scoped>
.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.navbar .nav-wrap-left {
  height: 50.5px;
  line-height: 50.5px;
}
.navbar .h1.nav-header,
.navbar h1.nav-header {
  display: block;
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.icon-back {
  font-size: 40px;
  color: #fef6f6;
}

</style>
