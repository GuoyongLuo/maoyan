<template>
  <div class="page-index-cinema">
    <div class="top">
      <h1 class="nav-header">影院</h1>
      <div class="gray-bg topbar-bg">
        <div class="city-entry">
          <span class="city-name">深圳</span>
          <i class="city-entry-arrow"></i>
        </div>
        <router-link
          class="search-entry search-input"
          :to="{
          name:'search',
          } "
          tag="div"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
          >
          <span>搜影院</span>
        </router-link>
      </div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"/>
        <van-dropdown-item v-model="value2" :options="option2"/>
        <van-dropdown-item v-model="value2" :options="option3"/>
      </van-dropdown-menu>
    </div>
    <Cinema :list="cinemaList" class="cinema" id="cc" ref="scrollCinema"/>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Cinema from "@/components/cinema.vue";

export default {
  name: "cinema",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全城", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "品牌", value: "a" },
        { text: "中影UL城市影院", value: "b" },
        { text: "中影国际影城", value: "c" },
        { text: "星美国际影城", value: "d" }
      ],
      option3: [
        { text: "特色", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },
  computed: {
    ...mapState("cinema", ["cinemaList", "loading"])
  },
  methods: {
    ...mapActions("cinema", ["getCinemaList"]),
    onScroll() {
      let scrollHeight = document.getElementById("cc").scrollHeight;
      let scrollTop = document.getElementById("cc").scrollTop;
      let clientHeight = document.getElementById("cc").clientHeight;
      if (scrollHeight - clientHeight - scrollTop < 100) {
        if (!this.loading) {
          this.getCinemaList(true);
        }
      }
    }
  },
  created() {
    this.getCinemaList(true);
    window.addEventListener("scroll", this.onScroll, true);
  },
  components: {
    Cinema
  },
  deactivated() {
    window.removeEventListener("scroll", this.onScroll, true);
  },
  activated() {
    window.addEventListener("scroll", this.onScroll, true);
  }
};
</script>
<style lang="less" scoped>
.page-index-cinema {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.top {
  height: 135px;
  width: 100%;
}
.cinema {
  flex: 1;
  overflow-y: auto;
  display: block;
}
.nav-header {
  display: block;
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: red;
}
.topbar-bg {
  background: #f5f5f5;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  .city-entry {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    .city-entry-arrow {
      margin-right: 5px;
      width: 0;
      height: 0;
      border: 4px solid #b0b0b0;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      display: inline-block;
      margin-left: 4px;
      margin-top: 5px;
    }
  }
  .search-input {
    -webkit-box-flex: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    font-size: 13px;
    color: #b2b2b2;
    margin-left: 18px;
    border: 0.5px solid #e6e6e6;
    border-radius: 5px;
    margin-right: 15px;
    background-color: #fff;
    img {
      width: 14px;
      height: 14px;
      margin-left: 3px;
      margin-right: 4px;
    }
  }
}
</style>
