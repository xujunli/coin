<template>
  <div class="index">
    <div class="banner">
      <img :src="banner" width="100%">
      <p>{{ $t("index.banner") }}</p>
    </div>
    <div class="market">
      <h3>{{ $t("index.market.title") }}</h3>
      <div>
        <ul>
          <router-link tag="li" :to="{ name: item.link}" v-for="(item,index) in market" :key="index">
            <img :src="item.imgUrl"/>
            <p>{{ $t("index.market." + item.title) }}</p>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="analysis">
      <h3>{{ $t("index.analysis.title") }}</h3>
      <div :style ="analysis">
        <ul>
          <li>
            <img src="@/assets/images/analysis-bg01.png"/>
            <p class="title">{{ $t("index.analysis.base.title") }}</p>
            <p class="message">{{ $t("index.analysis.base.message") }}</p>
          </li>
          <li>
            <img src="@/assets/images/analysis-bg02.png"/>
            <p class="title">{{ $t("index.analysis.invest.title") }}</p>
            <p class="message">{{ $t("index.analysis.invest.message") }}</p>
          </li>
          <li>
            <img src="@/assets/images/analysis-bg03.png"/>
            <p class="title">{{ $t("index.analysis.github.title") }}</p>
            <p class="message">{{ $t("index.analysis.github.message") }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="ico">
      <h3>{{ $t("index.icos.title") }}</h3>
      <ul>
        <router-link tag="li" :to="{ name:item.link }" v-for="(item,index) in ico" :key="index">
          <img :src="item.imgUrl"/>
          <p class="title">{{ item.title }}</p>
          <p class="message">{{ item.message }}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        banner: require("@/assets/images/banner.jpg"),
        market: [
          {
            link: 'CoinList',
            title: 'overview',
            imgUrl: require('@/assets/images/market-bg01.jpg'),
          },
          {
            link: 'CoinList',
            title: 'chart',
            imgUrl: require('@/assets/images/market-bg02.jpg'),
          },
          {
            link: 'CoinList',
            title: 'top',
            imgUrl: require('@/assets/images/market-bg03.jpg'),
          }
        ],
        ico: [
          {
            link: 'ICO',
            title: "当前发行的币种",
            message: "显示当前的ICO走势,为您预测ICO走势",
            imgUrl: require('@/assets/images/ico-bg01.jpg')
          },
          {
            link: 'ICO',
            title: "即将发行的币种",
            message: "显示当前的ICO走势,为您预测ICO走势",
            imgUrl: require('@/assets/images/ico-bg02.jpg')
          },
          {
            link: 'ICO',
            title: "已发行的币种",
            message: "显示当前的ICO走势,为您预测ICO走势",
            imgUrl: require('@/assets/images/ico-bg03.jpg')
          },
          {
            link: 'ICO',
            title: "公开发行的币种",
            message: "显示当前的ICO走势,为您预测ICO走势",
            imgUrl: require('@/assets/images/ico-bg04.jpg')
          },
          {
            link: 'ICO',
            title: "广告币种",
            message: "显示当前的ICO走势,为您预测ICO走势",
            imgUrl: require('@/assets/images/ico-bg05.jpg')
          },
          {
            link: 'ICO',
            title: "即将发行的币种",
            message: "显示当前的ICO走势,为您预测ICO走势",
            imgUrl: require('@/assets/images/ico-bg01.jpg')
          }
        ],
        analysis: {
          backgroundImage: "url(" + require("@/assets/images/analysis-bg04.jpg") + ")",
        }
      }
    },
    mounted () {
      const that = this;
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    min-height: 100%;
    padding: 74px 0 250px;
  }
  .banner {
    position: relative;
  }
  .banner img {
    display: block
  }
  .banner p {
    position: absolute;
    top: 45%;
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 50px;
    color: #fff
  }
  .market {
    padding: 80px 0 0;
    background-color: #fff
  }
  .market h3 {
    margin: 0 0 20px;
    text-align: center;
    font-size: 18px;
    color: #333333
  }
  .market div {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .market div ul {
    overflow: hidden;
    margin: 0 -15px;
  }
  .market div ul li {
    float: left;
    width: 33.333333%;
    padding: 0 15px;
    cursor: pointer
  }
  .market div ul li img {
    display: block;
    width: 100%;
    height: 210px;
  }
  .market div ul li p {
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    color: #666
  }
  .analysis {
    padding: 80px 0 0;
    background-color: #fff
  }
  .analysis h3 {
    margin: 0 0 20px;
    text-align: center;
    font-size: 18px;
    color: #333333
  }
  .analysis div {
    width: 100%;
    height: 450px;
    background-size: auto 100%;
  }
  .analysis ul {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center
  }
  .analysis ul li {
    padding: 0 10px;
    text-align: center;
  }
  .analysis ul li .title {
    margin: 15px 0 20px;
    text-align: center;
    font-size: 16px;
    color: #fff
  }
  .analysis ul li .message {
    text-align: center;
    font-size: 14px;
    color: #fff
  }
  .ico {
    padding: 80px 0 140px;
    background-color: #fff
  }
  .ico h3 {
    margin: 0 0 20px;
    text-align: center;
    font-size: 18px;
    color: #333333
  }
  .ico ul {
    margin: 0 auto;
    width: 1200px;
    overflow: hidden;
    border-left: 1px solid #c3c3c3;
    border-top: 1px solid #c3c3c3
  }
  .ico ul li {
    float: left;
    padding: 30px 35px;
    width: 33.333333%;
    border-right: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    cursor: pointer
  }
  .ico ul li img {
    display: block;
    width: 100%;
    height: 215px;
  }
  .ico ul li .title {
    margin-top: 25px;
    line-height: 16px;
    font-size: 16px;
    color: #333
  }
  .ico ul li .message {
    line-height: 14px;
    font-size: 14px;
    color: #666
  }
  @media (max-width: 767px){
    .index {
      padding: 65px 0 200px;
    }
    .banner {
      height: 150px;
    }
    .banner img {
      height: 100%
    }
    .banner p {
      position: absolute;
      top: 45%;
      width: 100%;
      line-height: 16px;
      text-align: center;
      font-size: 16px;
      color: #fff
    }
    .market {
      padding: 20px 0 0;
      background-color: #fff
    }
    .market h3 {
      margin: 0 0 10px;
      text-align: center;
      font-size: 16px;
      color: #333333
    }
    .market div {
      width: 100%;
      padding: 0 15px;
      margin: 0 auto;
      overflow: hidden;
    }
    .market div ul {
      overflow: hidden;
      margin: 0 -15px;
    }
    .market div ul li {
      margin-top: 10px;
      width: 100%;
      padding: 0 10px;
    }
    .market div ul li img {
      display: block;
      width: 100%;
      height: auto;
    }
    .market div ul li p {
      margin-top: 10px;
      text-align: center;
      font-size: 12px;
      color: #666
    }
    .analysis {
      padding: 20px 0 0;
      background-color: #fff
    }
    .analysis h3 {
      margin: 0 0 10px;
      text-align: center;
      font-size: 16px;
      color: #333333
    }
    .analysis div {
      width: 100%;
      height: auto;
      background-image: none !important;
    }
    .analysis ul {
      padding: 0 10px;
      display:block;
      width: 100%;
      height: 100%;
    }
    .analysis ul li {
      margin-top: 10px;
      width: 100%;
      padding: 0;
      text-align: center;
    }
    .analysis ul li .title {
      margin: 15px 0 10px;
      text-align: center;
      font-size: 14px;
      color: #333
    }
    .analysis ul li .message {
      text-align: center;
      font-size: 12px;
      color: #666
    }
    .ico {
      padding: 20px 0 30px;
      background-color: #fff
    }
    .ico h3 {
      margin: 0 0 10px;
      font-size: 16px;
    }
    .ico ul {
      width: 100%;
      border: none
    }
    .ico ul li {
      margin-top: 10px;
      padding: 0 10px;
      width: 100%;
      border: none
    }
    .ico ul li img {
      display: block;
      width: 100%;
      height: auto;
    }
    .ico ul li .title {
      margin-top: 15px;
      line-height: 14px;
      font-size: 14px;
      color: #333
    }
    .ico ul li .message {
      line-height: 12px;
      font-size: 12px;
      color: #666
    }
  }
</style>
