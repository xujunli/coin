<template>
    <div id="coin-show">
        <div class="f-j-sb coin-view">
            <div class="f-j-st name">
                <img src="@/assets/images/bitcoin-b.png"/>
                <div>
                    <div class="f-j-st">
                        <p>{{coinInfo.name}}</p>
                        <p>BTC</p>
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div class="f-j-st">
                        <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                        <p>{{coinInfo.Price}}<span>（#1）</span></p>
                    </div>
                </div>
            </div>
            <div>
                <p>市值</p>
                <p>{{coinInfo.mktCap}}Bn</p>
            </div>
            <div>
                <p>24小时</p>
                <p>{{coinInfo.fourteenDay.num2}}</p>
            </div>
            <div>
                <p>24小时波动</p>
                <p>{{coinInfo.fourteenDay.num1}}</p>
            </div>
            <div>
                <p>7D波动</p>
                <p>{{coinInfo.fourteenDay.num1}}</p>
            </div>
            <div>
                <p>保监会。/最大供应量</p>
                <p>{{coinInfo.mktCap}}</p>
            </div>
            <div>
                <p>ALGO得分</p>
                <p>点击查看详细分析</p>
            </div>
            <div>
              <i class="fa fa-github" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook-square" aria-hidden="true" @click="sharePage"></i>
            </div>
        </div>
        <div class="coin-tab">
            <ul class="f-j-st f-a-c">
              <router-link tag="li" active-class="active" :to="{ name: item.link }" v-for="(item,index) in coinTab" :key="index">
                  {{item.value}}
              </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'CoinShow',
  data () {
    return {
      coinInfo: {
        name: "bitcoin",
        Price: 'CN￥4393',
        oneHour: '-0.77%',
        oneDay: '5.11%',
        sevenDay: {
          id: 0,
          data: [820, 932, 901, 255, 1290, 1330, 1320],
        },
        mktCap: 'CN￥139.66',
        dayVol: 'CN￥139.66',
        algoScore: '2.31',
        circSupply: '0.000',
        fmAth: '-99.72',
        actions: {},
        symbol: 'mscn',
        btc: '0.00000021',
        fourteenDay: {
          num1: '-40.45%',
          num2: '0.00044'
        },
        thirtyDay: {
          num1: '-40.45%',
          num2: '0.00044'
        },
        fortyFiveDay: {
          num1: '-40.45%',
          num2: '0.00044'
        },
        ninetyDay: {
          num1: '-40.45%',
          num2: '0.00044'
        },
        tweHundredDay: {
          num1: '-40.45%',
          num2: '0.00044'
        },
        mcapBtc: '0.00000021',
        twentyFourBtc: '0.00000021',
        totalSupply: '0.00000021',
        maxSupply: '0.00000021',
        sevenDayVolat: '20%',
        thirtyDayVolat: '20%',
        age: 11,
        ath: '￥2.15',
        athBtc: '0.0000399',
        fmAthBtc: '-93.1%'
      },
      coinTab: [
        {value: 'Overview',link: 'Overview'},
        {value: 'Charts',link: 'Charts'},
        {value: 'Analysis',link: 'Analysis'},
        {value: 'Predictions',link: 'Prediction'},
        {value: 'Masrkets',link: 'Markets'},
        {value: 'Purpose',link: 'Purpose'},
        {value: 'News',link: 'News'},
        {value: 'Events',link: 'Events'}
      ]
    }
  },
  created: function () {
    console.log(this.$route.query.id)
  },
  methods: {
    sharePage: function () {
      var shareUrl = "http://www.facebook.com/sharer/sharer.php?u=https://www.google.com";
      window.open(shareUrl)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #coin-show {
    position: relative;
    min-height: 100%;
    padding: 74px 20px 250px;
  }
  .coin-view {
    padding: 30px 0;
    align-items: center;
  }
  .coin-view .name {
    align-items: center;
  }
  .coin-view .name img {
    margin-right: 10px;
    display: block;
    width: 50px;
    height: 50px;
  }
  .coin-tab {
    position: relative;
  }
  .coin-tab:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    height: 1px;
    width: 100%;
    background-color: #161623
  }
  .coin-tab li {
    margin-right: 3px;
    background: #fff;
    color: #212121;
    opacity: 1;
    border: none;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 3.5px 1.5px rgba(66,65,65,0.06);
    line-height: 20px;
    font-weight: 400;
    padding: 11px 18px;
    text-transform: none;
    font-size: 14px;
    cursor: pointer
  }
  .coin-tab li.active {
    background: #161623;
    color: #e3d090;
    font-weight: bold;
    border: none;
  }
  @media (max-width: 767px){
    #coin-show {
      position: relative;
      min-height: 100%;
      padding: 65px 10px 160px;
    }
    .coin-view {
      display: block;
      padding: 20px 0 10px;
      overflow: hidden
    }
    .coin-view > div {
      margin-bottom: 10px;
      float: left;
      display: inline-block;
      width: 33.333333333%
    }
    .coin-view .name {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .coin-view .name img {
      display: block;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .coin-tab {
      overflow: hidden;
      width: 100%;
      position: relative;
    }
    .coin-tab ul {
      display: block;
      white-space: nowrap;
      overflow-y: auto;
    }
    .coin-tab:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      height: 1px;
      width: 100%;
      background-color: #161623
    }
    .coin-tab li {
      display: inline-block;
      margin-right: 3px;
      line-height: 20px;
      font-weight: 400;
      padding: 5px 10px;
      text-transform: none;
      font-size: 14px;
      cursor: pointer
    }
  }
</style>
