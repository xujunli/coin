<template>
    <div id="coin-list">
      <div class="coin-t-menu">
        <SelfPage></SelfPage>
        <CoinTab>
          <Custom slot="self"></Custom>
          <div slot="filter" class="filter">
            <div class="f-j-sb f-a-c" @click="filterMenu">
              <i class="fa fa-filter f-c-fae199" aria-hidden="true"></i>
              <span class="m-l-3">筛选</span>
            </div>
            <div class="filter-box" v-show="filter">
              <Collapse v-model="value" accordion>
                <Panel name="1">
                  Fundamentals
                  <p slot="content">
                    <span>Catagory</span>
                    <Select class="m-10-0" v-model="model10" size="small" multiple style="width:100%">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span>Cic. Supply</span>
                    <Slider v-model="slider" size="small" range></Slider>
                  </p>
                </Panel>
                <Panel name="2">
                  CoinCheckUp Score
                  <p slot="content">
                    <span>Total score</span>
                    <Slider v-model="slider" range></Slider>
                  </p>
                </Panel>
                <Panel name="3">
                  Market & Trading
                  <p slot="content">
                    <span>Exchanges</span>
                    <Select class="m-10-0" v-model="model10" size="small" multiple style="width:100%">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span>Market Cap</span>
                    <Slider v-model="slider" size="small" range></Slider>
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div slot="clear" class="clear">
            <div class="f-j-sb f-a-c">
              <i class="fa fa-refresh f-c-fae199" aria-hidden="true"></i>
              <span class="m-l-3">刷新</span>
            </div>
          </div>
        </CoinTab>
      </div>
      <CoinBox :selectTab="selectTab" :message="message" :collumnName="collumnName"></CoinBox>
      <Page class="m-30-0 t-a-c" :total="100"/>
    </div>
</template>

<script>
  import SelfPage from '@/components/SelfPage.vue'
  import CoinTab from '@/components/CoinTab.vue'
  import CoinBox from '@/components/CoinBox.vue'
  import Custom from '@/components/Custom.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'CoinList',
    data () {
      return {
        message:[
          {
            id: 0,
            name: "bitcoin",
            coinImg: require('@/assets/images/eos-adc92c47.webp'),
            Price: 'CN￥4393',
            oneHour: '-0.77%',
            twentyFourHour: '5.11%',
            sevenDayPrice: {
              id: 0,
              data: [820, 932, 901, 255, 1290, 1330, 1320],
            },
            mktCap: 'CN￥139.66',
            dayVol: 'CN￥139.66',
            algoScore: '2.31',
            actions: {

            },
            symbol: 'mscn',
            btc:'0.00000021',
            sevenDay: {
              num1: '-40.45%',
              num2: '0.00044'
            },
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
            circSupply: '0.000',
            totalSupply: '0.00000021',
            maxSupply: '0.00000021',
            sevenDayVolat: '20%',
            thirtyDayVolat: '20%',
            age: 11,
            ath: '￥2.15',
            fmAth: '-99.72',
            athBtc: '0.0000399',
            fmAthBtc: '-93.1%'
          },
          {
            id: 1,
            coinImg: require('@/assets/images/bitcoin-cadc0923.webp'),
            name: "bitcoin",
            Price: 'CN￥4393',
            oneHour: '-0.77%',
            twentyFourHour: '5.11%',
            sevenDayPrice: {
              id: 0,
              data: [820, 932, 901, 255, 1290, 1330, 1320],
            },
            mktCap: 'CN￥139.66',
            dayVol: 'CN￥139.66',
            algoScore: '2.31',
            actions: {},
            symbol: 'mscn',
            btc:'0.00000021',
            sevenDay: {
              num1: '-40.45%',
              num2: '0.00044'
            },
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
            circSupply: '0.000',
            totalSupply: '0.00000021',
            maxSupply: '0.00000021',
            sevenDayVolat: '20%',
            thirtyDayVolat: '20%',
            age: 11,
            ath: '￥2.15',
            fmAth: '-99.72',
            athBtc: '0.0000399',
            fmAthBtc: '-93.1%'
          },
          {
            id: 2,
            coinImg: require('@/assets/images/ethereum-6d4caf50.webp'),
            name: "bitcoin",
            Price: 'CN￥4393',
            oneHour: '-0.77%',
            twentyFourHour: '5.11%',
            sevenDayPrice: {
              id: 0,
              data: [820, 932, 901, 255, 1290, 1330, 1320],
            },
            mktCap: 'CN￥139.66',
            dayVol: 'CN￥139.66',
            algoScore: '2.31',
            actions: {},
            symbol: 'mscn',
            btc:'0.00000021',
            sevenDay: {
              num1: '-40.45%',
              num2: '0.00044'
            },
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
            circSupply: '0.000',
            totalSupply: '0.00000021',
            maxSupply: '0.00000021',
            sevenDayVolat: '20%',
            thirtyDayVolat: '20%',
            age: 11,
            ath: '￥2.15',
            fmAth: '-99.72',
            athBtc: '0.0000399',
            fmAthBtc: '-93.1%'
          }
        ],
        collumnName: {
          Followed: {

          },
          Price: {
            showName: 'Price'
          },
          oneHour: {
            showName: '1h'
          },
          twentyFourHour: {
            showName: '24h'
          },
          sevenDayPrice: {
            showName: '7d Price'
          },
          mktCap: {
            showName: 'Mkt.Cap'
          },
          dayVol: {
            showName: '24h Vol'
          },
          algoScore: {
            showName: 'Algo.Score'
          },
          actions: {
            showName: 'Actions'
          },
          symbol: {
            showName: 'Symbol'
          },
          btc: {
            showName: 'BTC'
          },
          sevenDay: {
            showName: '7d'
          },
          fourteenDay: {
            showName: '14d'
          },
          thirtyDay: {
            showName: '30d'
          },
          fortyFiveDay: {
            showName: '45d'
          },
          ninetyDay: {
            showName: '90d'
          },
          tweHundredDay: {
            showName: '200d'
          },
          mcapBtc: {
            showName: 'MCAP BTC'
          },
          twentyFourBtc: {
            showName: '24h Vol BTC'
          },
          circSupply: {
            showName: 'Circ.Supply'
          },
          totalSupply: {
            showName: 'Total Supply'
          },
          maxSupply: {
            showName: 'Max.Supply'
          },
          sevenDayVolat: {
            showName: '7d Volat.'
          },
          thirtyDayVolat: {
            showName: '30d Volat.'
          },
          age: {
            showName: 'Age(mo)'
          },
          ath: {
            showName: 'ATH'
          },
          fmAth: {
            showName: '%fm.ATH'
          },
          athBtc: {
            showName: 'ATH (BTC)'
          },
          fmAthBtc: {
            showName: '% fm. ATH (BTC)'
          }
        },
//        selectTab: ['Followed', 'Price','oneHour','twentyFourHour','sevenDayPrice', 'mktCap','dayVol','algoScore','actions']
        filter: false, //筛选框状态
        value: '1', //筛选tab初始值
        cityList: [ //输入框值
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model10: [], //输入框选中值
        slider: [20, 50], //滑动条
      }
    },
    mounted () {
    },
    created:function(){
      const that = this;
  //    自定义api
      /*that.$axios.get("api/market").then(res=>{
        console.log(res.data);
        that.selectTab = res.data.data.selectTab;
        that.collumnName = res.data.data.collumnName;
        that.message = res.data.data.message
      });*/
    },
    methods: {
      //筛选框打开关闭
      filterMenu: function () {
        const that = this;
        if(that.filter === false) {
          that.filter = true
        } else {
          that.filter = false
        }
      }
    },
    computed: {
      ...mapState({
         selectTab: state => state.coinmenu.selectTab
      }),
    },
    components: {
      SelfPage: SelfPage,
      CoinTab: CoinTab,
      CoinBox: CoinBox,
      Custom: Custom
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #coin-list {
      min-height: 100%;
      padding: 124px 20px 250px;
    }
    .coin-t-menu {
      /*margin-bottom: 20px;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media (max-width: 767px){
      #coin-list{
        padding: 100px 15px 200px;
      }
      .coin-t-menu {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
</style>
