<template>
  <div class="markets">
    <h2>比特币市场行情</h2>
    <p>市场或交易所是您可以买入或卖出（即交易）加密硬币的地方，可以是针对其他加密硬币或针对法定货币（例如美元，欧元）。</p>
    <div class="coin-t-menu">
      <CoinTab>
        <div slot="self">
          <div class="f-j-sb f-a-c" @click="customizeEdit">
            <i class="fa fa-tasks f-c-fae199" aria-hidden="true"></i>
            <span class="m-l-3 m-r-3">预设系统</span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
          <div class="edit" v-show="edit" v-on:click.self="customizeEdit">
            <div class="e-content">
              <h2>市场概览网络设置</h2>
              <div class="e-box">
                <div class="tips">
                  <p class="m-b-20">1、您可以调整列的大小（在网格本身内）</p>
                  <p>2、确保登陆/注册，以便在浏览会话之间保存这些设置</p>
                </div>
                <div class="check-box">
                  <p class="f-s-16 m-t-15 m-b-20">类目</p>
                  <CheckboxGroup v-model="checked" size="large">
                    <Checkbox :label="item.showName" v-for="(item,index) in checkList" :key="index">{{item.checkName}}</Checkbox>
                  </CheckboxGroup>
                </div>
                <div class="e-btn f-j-st">
                  <div class="save" @click="checkedSave">保存</div>
                  <div class="concel" @click="checkedConcel">取消</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div slot="filter" class="filter">
          <div class="f-j-sb f-a-c" @click="filterMenu">
            <i class="fa fa-filter f-c-fae199" aria-hidden="true"></i>
            <span class="m-l-3">{{ select }}</span>
          </div>
          <div class="filter-d-menu" v-show="filter">
            <ul>
              <li v-for="(item,index) in filterBox" :key="index" @click="selectMenu(item)">{{ item }}</li>
            </ul>
          </div>
        </div>
      </CoinTab>
    </div>
    <div class="coin-box">
      <div class="coin-name">
        <div class="title">
          <p>{{$t("coinshow.market.collumnName.Exchange")}}</p>
        </div>
        <div class="content" v-for="(item, index) in message" :key="index">
          <a href="" class="f-j-a-c name">
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
      <div class="box">
        <table id="c-table">
          <thead class="title">
          <tr>
            <th class="cell"  v-for="item in selectTab">
              <div>{{$t("coinshow.market.collumnName." + item)}}</div>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="content" v-for="item in message">
            <td class="cell" v-for="type in selectTab">
              <div>{{item[type]}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState,mapMutations } from 'vuex'
  import CoinTab from '@/components/CoinTab.vue'
  import Custom from '@/components/Custom.vue'
  import CoinBox from '@/components/CoinBox.vue'
  export default {
    name: 'Markets',
    data () {
      return {
        message:[
          {
            name: "Poloniex",
            Pair: 'ETH',
            Price: 'E 0.0486',
            otherPrice: '11.25',
            openTwentyFourHour: 'E 0.0486',
            highTwentyFourHour: 'E 0.0486',
            lowTwentyFourHour: 'E 0.0486',
            volumeTwentyFourHour: 'E 0.0486',
            Updated: 'E 0.0486',
            sourceVolumeTwentyFourHour: 'E 0.0486'
          },
          {
            name: "Poloniex",
            Pair: 'ETH',
            Price: 'E 0.0486',
            otherPrice: '11.25',
            openTwentyFourHour: 'E 0.0486',
            highTwentyFourHour: 'E 0.0486',
            lowTwentyFourHour: 'E 0.0486',
            volumeTwentyFourHour: 'E 0.0486',
            Updated: 'E 0.0486',
            sourceVolumeTwentyFourHour: 'E 0.0486'
          },
          {
            name: "Poloniex",
            Pair: 'ETH',
            Price: 'E 0.0486',
            otherPrice: '11.25',
            openTwentyFourHour: 'E 0.0486',
            highTwentyFourHour: 'E 0.0486',
            lowTwentyFourHour: 'E 0.0486',
            volumeTwentyFourHour: 'E 0.0486',
            Updated: 'E 0.0486',
            sourceVolumeTwentyFourHour: 'E 0.0486'
          }
        ],
        collumnName: {
          Pair: {
            showName: 'Pair'
          },
          Price: {
            showName: 'Price'
          },
          otherPrice: {
            showName: 'CNY'
          },
          openTwentyFourHour: {
            showName: 'Open 24h'
          },
          highTwentyFourHour: {
            showName: 'High 24h'
          },
          lowTwentyFourHour: {
            showName: 'Low 24h'
          },
          volumeTwentyFourHour: {
            showName: 'Volume 24h(CNY)'
          },
          Updated: {
            showName: 'Updated'
          },
          sourceVolumeTwentyFourHour: {
            showName: 'Source Volume 24h(CNY)'
          }
        },
        selectTab: ['Pair', 'Price','otherPrice','openTwentyFourHour','highTwentyFourHour', 'lowTwentyFourHour','volumeTwentyFourHour','Updated','sourceVolumeTwentyFourHour'],
        edit: false,
        checkList:[
          {
            checkName: 'Pair',
            showName: 'Pair'
          },
          {
            checkName: 'Price',
            showName: 'Price'
          },
          {
            checkName: 'Price in USD',
            showName: 'otherPrice'
          },
          {
            checkName: 'Open (24h)',
            showName: 'openTwentyFourHour'
          },
          {
            checkName: 'High (24h)',
            showName: 'highTwentyFourHour'
          },
          {
            checkName: 'Low (24h)',
            showName: 'lowTwentyFourHour'
          },
          {
            checkName: 'Volume 24h',
            showName: 'volumeTwentyFourHour'
          },
          {
            checkName: 'Last Updated',
            showName: 'Updated'
          },
          {
            checkName: 'Source Volume 24h',
            showName: 'sourceVolumeTwentyFourHour'
          }
        ],
        checked: [],
        filter: false,
        filterBox: ['All pairs','AUD','BCH','BNB','BRL','BTC'],
        select: 'All pairs'
      }
    },
    mounted () {
    },
    methods: {
      ...mapMutations({
        'marketMenu': 'marketMenu'
      }),
      //编辑自定义模式
      customizeEdit: function () {
        const that = this;
        that.edit = !that.edit
      },
      checkedSave: function() {
        const that = this;
        let checked = that.checked;
        that.marketMenu(checked);
        that.edit = false
      },
      checkedConcel: function() {
        const that = this;
        that.edit = false;
      },
      //筛选框
      filterMenu: function () {
        const that = this;
        that.filter = !that.filter
      },
      selectMenu: function (val) {
        const that = this;
        that.select = val;
        that.filter = false
      }
    },
    components: {
      CoinTab: CoinTab,
      CoinBox: CoinBox,
      Custom: Custom
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .coin-t-menu {
    margin-bottom: 20px;
  }
  .markets h2 {
    margin: 30px 0 30px;
    text-align: center;
  }
  .markets > p {
    margin-bottom: 30px;
    text-align: center;
    font-size: 13px;
  }
  .custom {
    position: relative
  }
  .edit {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 998
  }
  .edit .e-content {
    padding-bottom: 60px;
    background-color: #fff;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-height: 600px
  }
  .edit .e-content h2 {
    padding: 15px;
    background-color: #5D696E;
    text-align: center;
    color: #fff
  }
  .edit .e-content .e-box {
    padding: 15px
  }
  .edit .tips {
    padding: 20px;
    background-color: #eeefef;
    border-radius: 5px;
  }
  .edit .tips p {
    font-size: 14px;
    color: #313534;
  }
  .edit .check-box label{
    margin:0 15px 30px;
    height: 16px;
  }
  .edit .e-btn {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
  .edit .e-btn div {
    width: 100px;
    border-radius: 5px;
    height: 35px;
    line-height: 33px;
    border: 1px solid #fae199;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  .edit .e-btn .save {
    margin-right: 20px;
    background-color: #fae199;
    color: #fff
  }
  .filter-d-menu {
    padding-bottom: 8px;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    z-index: 998;
    max-height: 300px;
    overflow-y: auto;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    border-radius: 2px;
  }
  .filter-d-menu li {
    padding: 8px 15px;
    line-height: 14px;
    font-size: 14px;
  }
  .filter-d-menu li:first-child {
    margin-bottom: 8px;
    padding: 15px 15px;
    border-bottom: 1px solid #e5e5e5;
  }
  .coin-box {
    position: relative;
  }
  .coin-box .title p,.coin-box .cell {
    text-align: center;
    font-size: 13px;
    color: #313534;
  }
  .coin-box .title p,.coin-box .title .cell {
    height: 38px;
    line-height: 38px;
    background-color: #161623;
    color: #FFF;
    border-right: 1px solid #b0b0b2;
    font-weight: 600;
    font-size: 14px;
  }
  .coin-name .content a,.coin-box .content .cell {
    position: relative;
    /*padding: 5px 7px;*/
    height: 55px;
    line-height: 45px;
    max-height: 55px
  }
  .coin-box .content p::after,.coin-box .content .cell::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;

  }
  .coin-box .content .name {
    cursor: pointer
  }
  .coin-box .content .cell p {
    height: 14px;
    line-height: 14px;
    text-align: center;
    font-size: 14px;
    color: #313534;
  }
  .coin-name {
    position: absolute;
    left: 0;
    top: 0;
    width: 160px;
  }
  .coin-name div {
    display: flex;
    justify-content: space-between;
    align-items: center
  }
  .coin-name p,.coin-name a {
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: #313534;
  }
  .box {
    margin-left: 160px;
    overflow: auto;
  }
  .box  .cell {
    min-width: 160px;
  }
  table {
    width: 100%;
    border-spacing: 0;
  }
</style>
