<template>
  <div id="cinema">
    <div class="item mb-line-b" data-id="23768"
      v-for="item in list"
      :key="item.id"
    >
      <div class="title-block box-flex middle">
        <div class="title line-ellipsis">
          <span>{{ item.nm }}</span>
          <span class="price-block">
            <span class="price">{{ item.sellPrice }}</span>
            <span class="q">元起</span>
          </span>
        </div>
        <div class="location-block box-flex">
          <div class="flex line-ellipsis">{{ item.addr }}</div>
          <div class="distance">{{ item.distance }}</div>
        </div>
        <div class="flex"></div>
        <div class="label-block">
          <div class="allowRefund">退</div>
          <div class="endorse">改签</div>
          <div class="snack">小吃</div>
          <div class="vipTag">折扣卡</div>
          <div class="hallType">CGS中国巨幕厅</div>
          <div class="hallType">杜比全景声厅</div>
        </div>
        <div class="discount-block">
          <div>
            <div class="discount-label-text">开卡特惠，首单2张立减4元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    get(){
      console.log(this.list)
    }
  },
  mounted() {
    this.get()
  },
};
</script>
<style lang="less">
@import '~@/styles/common/mixins.less';
body {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
// .cinema{
//   overflow-y: auto;

// }
.item {
  .border-bottom;
  padding: 0 15px;
  margin-bottom: 10px;
  overflow-y: auto;

}
.cinema-list .list-wrap .item {
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.label-block {
  display: flex;
}
.location-block {
  display: flex;
  justify-content: space-between;
}
.title {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
  .q {
    font-size: 11px;
    color: #f03d37;
  }
  .price {
    color: #f03d37;
    font-size: 18px;
  }
}
.endorse,
.allowRefund {
  color: #589daf;
  border: 1px solid #589daf;
}
.snack,
.vipTag {
  color: #f90;
  border: 1px solid #f90;
}
.hallType {
  color: #589daf;
  border: 1px solid #589daf;
}
.label-block > div {
  position: relative;
  display: inline-block;
  padding: 0 3px;
  margin-right:  5px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  font-size: 0.6rem;
}
.discount-label-text{
  margin-bottom: 10px;
}

</style>
