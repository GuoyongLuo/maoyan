<template>
  <div>
    <header class="navbar">
      <div class="nav-wrap-left">
        <a class="back" href="#" onclick="javascript: window.history.back();return false;">
          <i class="iconfont iconzuojiantou"></i>
        </a>
      </div>
      <h1 class="nav-header">{{ detailCinema.cinemaData && detailCinema.cinemaData.nm }}</h1>
    </header>
    <div class="cinema-block">
      <div class="cinema-info">
        <div class="title line-ellipsis">{{ detailCinema.cinemaData && detailCinema.cinemaData.nm }}</div>
        <div class="location line-ellipsis">{{ detailCinema.cinemaData && detailCinema.cinemaData.addr}}</div>
        <div class="location-icon" data-bid="dp_wx_cinema_map">
          <img
            src="data:image/png;base64,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"
          >
        </div>
      </div>
      <div>
        <div>
          <div class="cinema-nav swiper-container swiper-container-horizontal">
            <div
              class="post-bg"
              style="background-image: url(&quot;//p0.meituan.net/148.208/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg&quot;);"
            ></div>
            <div class="post-bg-filter"></div>
            <div
              class="swiper-wrapper"
              style="transform: translate3d(140px, 0px, 0px); transition-duration: 0ms;"
            >
              <div
                class="swiper-slide swiper-slide-active"
                data-obj="{&quot;movieId&quot;:246061,&quot;globalReleased&quot;:true,&quot;desc&quot;:&quot;132分钟 | 科幻 | 凯尔·钱德勒,维拉·法梅加&quot;,&quot;nm&quot;:&quot;哥斯拉2：怪兽之王&quot;,&quot;sc&quot;:&quot;8.5&quot;,&quot;wish&quot;:325416,&quot;bgImage&quot;:&quot;http://p0.meituan.net/148.208/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg&quot;,&quot;preferential&quot;:0}"
              >
                <div class="post" data-bid="dp_wx_cinema_movie_pic_click">
                  <img
                    src="//p0.meituan.net/148.208/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg"
                  >
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-next"
                data-obj="{&quot;movieId&quot;:1242431,&quot;globalReleased&quot;:true,&quot;desc&quot;:&quot;110分钟 | 爱情 | 陈飞宇,何蓝逗,惠英红&quot;,&quot;nm&quot;:&quot;最好的我们&quot;,&quot;sc&quot;:&quot;8.9&quot;,&quot;wish&quot;:122838,&quot;bgImage&quot;:&quot;http://p0.meituan.net/148.208/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg&quot;,&quot;preferential&quot;:0}"
              >
                <div class="post" data-bid="dp_wx_cinema_movie_pic_click">
                  <img
                    src="//p0.meituan.net/148.208/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg"
                  >
                </div>
              </div>
              <div
                class="swiper-slide"
                data-obj="{&quot;movieId&quot;:1218215,&quot;globalReleased&quot;:true,&quot;desc&quot;:&quot;103分钟 | 犯罪 | 梁家辉,古天乐,林家栋&quot;,&quot;nm&quot;:&quot;追龙Ⅱ&quot;,&quot;sc&quot;:&quot;7.8&quot;,&quot;wish&quot;:137664,&quot;bgImage&quot;:&quot;http://p0.meituan.net/148.208/movie/c0a02897fa49e5c529bfe3cead0f49652270427.jpg&quot;,&quot;preferential&quot;:0}"
              >
                <div class="post" data-bid="dp_wx_cinema_movie_pic_click">
                  <img
                    src="//p0.meituan.net/148.208/movie/c0a02897fa49e5c529bfe3cead0f49652270427.jpg"
                  >
                </div>
              </div>
              <div
                class="swiper-slide"
                data-obj="{&quot;movieId&quot;:344328,&quot;globalReleased&quot;:true,&quot;desc&quot;:&quot;114分钟 | 动作 | 苏菲·特纳&quot;,&quot;nm&quot;:&quot;X战警：黑凤凰&quot;,&quot;sc&quot;:&quot;7.7&quot;,&quot;wish&quot;:307488,&quot;bgImage&quot;:&quot;http://p0.meituan.net/148.208/movie/47af2656af6cd0110057bc527b862c665484423.jpg&quot;,&quot;preferential&quot;:0}"
              >
                <div class="post" data-bid="dp_wx_cinema_movie_pic_click">
                  <img
                    src="//p0.meituan.net/148.208/movie/47af2656af6cd0110057bc527b862c665484423.jpg"
                  >
                </div>
              </div>
              <div
                class="swiper-slide"
                data-obj="{&quot;movieId&quot;:1226516,&quot;globalReleased&quot;:true,&quot;desc&quot;:&quot;111分钟 | 动画 | 水田山葵,大原惠美&quot;,&quot;nm&quot;:&quot;哆啦A梦：大雄的月球探险记&quot;,&quot;sc&quot;:&quot;8.7&quot;,&quot;wish&quot;:59726,&quot;bgImage&quot;:&quot;http://p1.meituan.net/148.208/movie/06daf32301ff2fd54f6ffd59299d0326672524.jpg&quot;,&quot;preferential&quot;:0}"
              >
                <div class="post" data-bid="dp_wx_cinema_movie_pic_click">
                  <img
                    src="//p1.meituan.net/148.208/movie/06daf32301ff2fd54f6ffd59299d0326672524.jpg"
                  >
                </div>
              </div>
              <div
                class="swiper-slide"
                data-obj="{&quot;movieId&quot;:346559,&quot;globalReleased&quot;:false,&quot;desc&quot;:&quot;115分钟 | 动作 | 克里斯·海姆斯沃斯&quot;,&quot;nm&quot;:&quot;黑衣人：全球追缉&quot;,&quot;sc&quot;:&quot;0.0&quot;,&quot;wish&quot;:179007,&quot;bgImage&quot;:&quot;http://p0.meituan.net/148.208/moviemachine/262f95bad79b6ae45b978593157cb68550938.jpg&quot;,&quot;preferential&quot;:0}"
              >
                <div class="post" data-bid="dp_wx_cinema_movie_pic_click">
                  <img
                    src="//p0.meituan.net/148.208/moviemachine/262f95bad79b6ae45b978593157cb68550938.jpg"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="movie-info">
            <div class="movie-title line-ellipsis">
              <span class="title">哥斯拉2：怪兽之王</span>
              <span class="grade">
                <span>
                  8.5
                  <span class="small">分</span>
                </span>
              </span>
            </div>
            <div class="movie-desc line-ellipsis">132分钟 | 科幻 | 凯尔·钱德勒,维拉·法梅加</div>
          </div>
        </div>
      </div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="今天6月12日">内容 1</van-tab>
      <van-tab title="今天6月13日">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 2
    };
  },
  computed: {
    ...mapState("detail", ["detailCinema"])
  },
  watch: {
    detailCinema(newVal, oldVal) {
      console.log(newVal);
    }
  },
  methods: {
    ...mapActions("detail", ["getDetailCinema"]),
    detail() {
      this.getDetailCinema(this.$route.params.cinemaId);
    }
  },
  created() {
    this.detail();
  },
  // activated() {
  //   if (window.name != "bencalie") {
  //     location.reload();
  //     window.name = "bencalie";
  //   } else {
  //     window.name = "";
  //   }
  // }
};
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
  .nav-wrap-left {
    height: 50.5px;
    line-height: 50.5px;
    .back {
      height: 50px;
      width: 22.5px;
      line-height: 50px;
      padding: 0 15px;
      .icon-back {
        display: inline-block;
        width: 22.5px;
        height: 22.5px;
        vertical-align: middle;
        position: relative;
      }
    }
  }
  .nav-header {
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
}
.iconzuojiantou {
  font-size: 40px;
  color: #fefbfb;
}
.cinema-info {
  position: relative;
  padding: 15px 100px 15px 15px;
}
.title {
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  color: #333;
  margin-top: -5px;
}
.location {
  margin-top: 2px;
  font-size: 13px;
  line-height: 18.5px;
  color: #999;
}
.cinema-block .cinema-info .location-icon {
  position: absolute;
  right: 0;
  top: 50%;
  width: 70px;
  height: 31px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-left: 1px solid #d8d8d8;
  text-align: center;
}
.cinema-block .cinema-info .location-icon img {
  display: inline-block;
  width: 19px;
  height: 22px;
  margin-top: 5px;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.cinema-block .cinema-nav .post-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  -webkit-filter: blur(30px);
  filter: blur(30px);
  background-position-y: 40%;
}
.cinema-block .cinema-nav .post-bg-filter {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #40454d;
  opacity: 0.55;
}
.swiper-wrapper {
  z-index: 1;
  display: -webkit-box;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
}
.cinema-block .movie-info {
  padding: 11px 15px;
  text-align: center;
  border-bottom: 1px solid red;
}
.cinema-block .movie-info .movie-title {
  height: 24px;
  line-height: 24px;
  font-size: 17px;
  color: #333;
  font-weight: 700;
}
.cinema-block .movie-info .movie-title {
  height: 24px;
  line-height: 24px;
  font-size: 17px;
  color: #333;
  font-weight: 700;
}
.cinema-block .movie-info .movie-title .grade {
  color: #ffb400;
  font-size: 16px;
}
.cinema-block .movie-info .movie-desc {
  margin-top: 2px;
  height: 18.5px;
  line-height: 18.5px;
  font-size: 13px;
  color: #999;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.movie-title {
  display: flex;
}
</style>

