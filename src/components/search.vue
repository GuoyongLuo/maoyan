<template>
  <div>
    <header class="navbar  ">
    <div class="nav-wrap-left">
        <a class="back" href="#" onclick="javascript: window.history.back();return false;"><i class="icon-back iconfont iconzuojiantou"></i></a>
    </div>
    <h1 class="nav-header">猫眼电影</h1>
  </header>
  <div class="search-header">
      <div class="input-wrapper">
        <img class="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt="">
        <input class="search-input" type="text" placeholder="搜影院" v-model="inputVal">
        <img class="del-input" style="display:none" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt="">
      </div>
      <div class="cancel">取消</div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return{
      inputVal:''
    }
  },
  computed: {
    // inputVal:{
    //   get(){
    //     this.$store.state.search.inputVal
    //   },
    //   set(value){
    //     this.$store.commit('search/SETINPUTVAL',value)
    //   }
    // }
  },
  methods: {
    ...mapActions('search',["getSearch"]),
    fn(){
      console.log(this.$store)
    }
  },
  created() {
    this.fn()
    this.getSearch()
  },

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
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
.navbar .nav-wrap-left {
    height: 50.5px;
    line-height: 50.5px;
}
.navbar .h1.nav-header, .navbar h1.nav-header {
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
.search-header {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 0 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
}
.search-header .input-wrapper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.search-header .search-icon {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    float: left;
    position: relative;
    top: 6px;
}
.search-header .search-input {
    -webkit-box-flex: 1;
    flex: 1;
    border: none;
    font-size: 13px;
    color: #333;
    line-height: 20px;
    padding: 4px 0;
    width: calc(100% - 40px);
}
.search-header .del-input {
    width: 15px;
    height: 15px;
    float: right;
    top: 6px;
}
.search-header .cancel {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    color: #f03d37;
}
</style>

