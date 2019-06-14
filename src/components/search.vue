<template>
  <div>

    <div class="search-header">
      <div class="input-wrapper">
        <img
          class="search-icon"
          src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png"
          alt
        >
        <input class="search-input" type="text" placeholder="搜影院" v-model="inputVal">
        <img
          class="del-input"
          style="display:none"
          src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png"
          alt
        >
      </div>
      <div class="cancel">取消</div>
    </div>
    <div class="list" v-if="searchList.length>0" >
      <div class="cinema cell" data-id="9627"
        v-for="item in searchList"
        :key="item.id"

      >
        <div class="info">
          <p class="name-price">
            <span class="name one-line">{{ item.nm }}</span>
            <span class="sell-price">
              <span class="price">{{ item.sellPrice }}</span>
              元起
            </span>
          </p>
          <p class="address one-line">{{ item.addr }}</p>
          <p class="feature-tags">
            <span>座</span>
          </p>
        </div>
        <div class="distance">{{ item.distance }}</div>
      </div>
    </div>
    <!-- <div  v-else>
      <p>没有找到相关影院</p>
    </div> -->
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      inputVal: ""
    };
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
    ...mapState("search", ["searchList"])
  },
  watch: {
    searchList(newVal, oldVal) {
      // console.log(newVal);
    },
    inputVal(newVal,oldVal){
      console.log(111)
    this.getSearch(this.inputVal);

      // if(newVal==''){
      //   console.log(222)
      //   document.getElementsByClassName('list')[0].innerHTML = '';
      // }
    }
  },
  methods: {
    ...mapActions("search", ["getSearch"]),
    fn() {
      // console.log(this.$store)
    }
  },
  created() {
    // this.fn()
    this.getSearch();
  },
  updated() {
    // this.getSearch(this.inputVal);
  }
};
</script>
<style lang="less" scoped>
.no-result p {
    font-size: 16px;
    color: #999;
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
 .list {
    padding-left: 15px;
    border-top: 1px solid #e6e6e6;
}
.cinema {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 15px 15px 0;
}
 .cinema .name-price {
    font-size: 16px;
    color: #000;
    margin-bottom: 6px;
    display: -webkit-box;
    display: flex;
}
.one-line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
 .cinema .sell-price {
    font-size: 11px;
    color: #999;
    white-space: nowrap;
    margin-left: 10px;
}
.cinema .price {
    font-size: 17px;
    color: #ef4238;
}
 .cinema .address {
    font-size: 13px;
    color: #999;
}
 .cinema .feature-tags {
    margin-top: 7px;
}
.cinema .feature-tags span {
    border: 1px solid #589daf;
    color: #589daf;
    position: relative;
    display: inline-block;
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: .6rem;
}
.distance {
    font-size: 13px;
    color: #999;
}
</style>
