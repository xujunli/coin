<template>
      <div class="custom">
        <div class="f-j-sb f-a-c" @click="customizeMenu">
          <i class="fa fa-tasks f-c-fae199" aria-hidden="true"></i>
          <span class="m-l-3 m-r-3">预设系统</span>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div class="down-menu" v-show="coinMenu.state">
          <ul>
            <li class="f-j-st f-a-c" @click="customizeCheck($event,0)">
              <p class="check">
                <i class="fa fa-check" aria-hidden="true" v-show="coinMenu.type == 0"></i>
              </p>
              <p class="f-s-15 m-l-5">BASIC</p>
            </li>
            <li class="f-j-st f-a-c" @click="customizeCheck($event,1)">
              <p class="check">
                <i class="fa fa-check" aria-hidden="true" v-show="coinMenu.type == 1"></i>
              </p>
              <p class="f-s-15 m-l-5">PRO</p>
            </li>
            <li class="f-j-st f-a-c" @click="customizeCheck($event,2)">
              <p class="check">
                <i class="fa fa-check" aria-hidden="true" v-show="coinMenu.type == 2"></i>
              </p>
              <p class="f-s-15 m-l-5">高级</p>
            </li>
            <li class="f-j-st f-a-c">
              <div class="f-j-st f-a-c" @click="customizeCheck($event,3)">
                <p class="check">
                  <i class="fa fa-check" aria-hidden="true" v-show="coinMenu.type == 3"></i>
                </p>
                <p class="f-s-15 m-l-5">CUSTOM</p>
              </div>
              <div class="f-s-14 m-l-10">
                <p @click="customizeEdit">编辑</p>
                <div class="edit" v-show="coinMenu.customize.edit" v-on:click.self="customizeEdit">
                  <div class="e-content">
                    <h2>市场概览网络设置</h2>
                    <div class="e-box">
                      <div class="tips">
                        <p class="m-b-20">1、您可以调整列的大小（在网格本身内）</p>
                        <p>2、确保登陆/注册，以便在浏览会话之间保存这些设置</p>
                      </div>
                      <div class="check-box">
                        <p class="f-s-16 m-t-15 m-b-20">类目</p>
                        <CheckboxGroup v-model="coinMenu.customize.checked" size="large">
                          <Checkbox :label="item.showName" v-for="(item,index) in coinMenu.customize.checkList" :key="index">{{item.checkName}}</Checkbox>
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
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
  export default {
    name: 'CoinTab',
    data () {
      return {
        coinMenu: {
          state: false,
          type: 0,
          basic: ['Followed', 'Price','oneHour','twentyFourHour','sevenDayPrice'],
          pro: ['Followed', 'Price','oneHour','twentyFourHour','sevenDayPrice', 'mktCap','actions'],
          advanced: ['Followed', 'Price','oneHour','twentyFourHour','sevenDayPrice', 'mktCap','dayVol','actions'],
          customize: {
            edit: false,
            checkList:[
              {
                checkName: 'Followed',
                showName: 'Followed'
              },
              {
                checkName: 'Price in DC*',
                showName: 'Price'
              },
              {
                checkName: 'Change 1h %',
                showName: 'oneHour'
              },
              {
                checkName: 'Change 24h %',
                showName: 'twentyFourHour'
              },
              {
                checkName: 'Mini-graphs 7d',
                showName: 'sevenDayPrice'
              },
              {
                checkName: 'Market Cap in DC*',
                showName: 'mktCap'
              },
              {
                checkName: 'Volume (24h) in DC*',
                showName: 'dayVol'
              },
              {
                checkName: 'Score (stars)',
                showName: 'algoScore'
              },
              {
                checkName: 'Action buttons',
                showName: 'actions'
              },
              {
                checkName: 'Symbol',
                showName: 'symbol'
              },
              {
                checkName: 'Price in BTC',
                showName: 'btc'
              },
              {
                checkName: 'Change 7d %',
                showName: 'sevenDay'
              },
              {
                checkName: 'Change 14d %',
                showName: 'fourteenDay'
              },
              {
                checkName: 'Change 30d %',
                showName: 'thirtyDay'
              },
              {
                checkName: 'Change 45d %',
                showName: 'fortyFiveDay'
              },
              {
                checkName: 'Change 90d %',
                showName: 'ninetyDay'
              },
              {
                checkName: 'Change 200d %',
                showName: 'tweHundredDay'
              },
              {
                checkName: 'Market Cap in BTC',
                showName: 'mcapBtc'
              },
              {
                checkName: '24h Vol in BTC',
                showName: 'twentyFourBtc'
              },
              {
                checkName: 'Circulating Supply',
                showName: 'circSupply'
              },
              {
                checkName: 'Total Supply',
                showName: 'totalSupply'
              },
              {
                checkName: 'Max. Supply',
                showName: 'maxSupply'
              },
              {
                checkName: 'Volatility 7d %',
                showName: 'sevenDayVolat'
              },
              {
                checkName: 'Volatility 30d %',
                showName: 'thirtyDayVolat'
              },
              {
                checkName: 'Age (months)',
                showName: 'age'
              },
              {
                checkName: 'All time high in DC*',
                showName: 'ath'
              },
              {
                checkName: '% change from ATH',
                showName: 'fmAth'
              },
              {
                checkName: 'All time high in BTC',
                showName: 'athBtc'
              },
              {
                checkName: '% change from ATH (BTC)',
                showName: 'fmAthBtc'
              }
            ],
            checked: []
          },
        }
      }
    },
    methods: {
      ...mapMutations({
        'changeMenu': 'changeMenu',
        'customMenu': 'customMenu'
      }),
      //预设系统打开关闭
      customizeMenu: function () {
        const that = this;
        if(that.coinMenu.state === false) {
          that.coinMenu.state = true
        } else {
          that.coinMenu.state = false
        }
      },
      //选择预设模式
      customizeCheck: function (e,num) {
        const that = this;
        if(num == 0) {
          that.changeMenu(that.coinMenu.basic);
          that.coinMenu.type = num;
        } else if (num == 1) {
          that.changeMenu(that.coinMenu.pro);
          that.coinMenu.type = num;
        } else if (num == 2) {
          that.changeMenu(that.coinMenu.advanced);
          that.coinMenu.type = num;
        } else {
          console.log(that.$store.state.coinmenu.customize.length);
          if(that.$store.state.coinmenu.customize.length){
            that.customMenu(that.$store.state.coinmenu.customize);
            that.coinMenu.type = num;
          } else {
            that.$Message.warning('请先编辑自定义菜单');
          }
        }
      },
      //编辑自定义模式
      customizeEdit: function () {
        const that = this;
        if(that.coinMenu.customize.edit === false) {
          that.coinMenu.customize.edit = true
        } else {
          that.coinMenu.customize.edit = false
        }
      },
      checkedSave: function() {
        const that = this;
        let checked = that.coinMenu.customize.checked;
        that.customMenu(checked);
        that.coinMenu.type = 3;
        that.coinMenu.customize.edit = false
      },
      checkedConcel: function() {
        const that = this;
        that.coinMenu.customize.edit = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .custom {
     position: relative
   }
  .custom .down-menu {
    padding: 20px;
    width: 150%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 998;
    background-color: #fff;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
    color: #313534;
  }
  .custom .down-menu li {
    padding: 8px 0;
  }
  .custom .check {
    display: flex;
    align-items: center;
    height: 16px;
    width: 16px;
    border: 1px solid #fae199;
    text-align: center;
    vertical-align: middle;
    color: #fae199;
  }
  .edit {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4)
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
  /*.edit .ivu-checkbox-group-item {
    display: inline-flex;
    align-items: center;
  }*/
  @media (max-width: 767px){
    .custom {
      position: relative
    }
    .custom > div:first-child span {
      display: none
    }
    .custom > div:first-child i:first-child {
      margin-right: 5px;
    }
    .custom .down-menu {
      padding: 15px;
      width: 160px;
      position: absolute;
      top: 100%;
      left: unset;
      right: 0;
      z-index: 998;
      background-color: #fff;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
      color: #313534;
    }
    .custom .down-menu li {
      padding: 8px 0;
    }
    .custom .check {
      display: flex;
      align-items: center;
      height: 16px;
      width: 16px;
      border: 1px solid #fae199;
      text-align: center;
      vertical-align: middle;
      color: #fae199;
    }
    .edit {
      overflow-y: auto
    }
    .edit .e-content {
      width: 100%;
      position: static;
      transform: translate(0,0);
      min-height: 600px
    }
    .edit .e-content h2 {
      font-size: 16px;
    }
    .edit .tips p {
      line-height: 18px;
    }
    .edit .check-box {
      overflow: hidden
    }
    .edit .check-box label{
      float: left;
      width: 50%;
      margin:0 0 15px;
      height: 16px;
    }
  }
</style>
