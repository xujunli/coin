<template>
    <div id="header">
      <div class="headerbar-top">
        <div class="content">
          <div class="left">
            <router-link tag="a" :to="{ name: 'Charts' }">Cryptocurrencies:{{ global.active_cryptocurrencies }}</router-link>
            <router-link tag="a" :to="{ name: 'Charts' }">Markets:{{ global.active_markets }}</router-link>
            <router-link tag="a" :to="{ name: 'Charts' }">Market Cap:{{ global.total_market_cap }}</router-link>
            <router-link tag="a" :to="{ name: 'Charts' }">24h Vol:{{ global.total_volume_24h }}</router-link>
          </div>
          <Dropdown class="right" @on-click="selectLanguage">
            <a href="javascript:void(0)">
              {{language}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="0">中文</DropdownItem>
              <DropdownItem name="1">English</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div class="headerbar-bar">
        <router-link tag="a" :to="{ name: 'Index'}" class="log">
            <img src="@/assets/images/logo.png">
            <div>
                <p class="title">利得数据</p>
            </div>
        </router-link>
        <ul class="menu">
            <li>
                <div class="title"><span>{{ $t("navbar.market") }}</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                <div class="dropdown-menu">
                    <div class="left">
                        <p class="subheading">概述</p>
                        <ul>
                          <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in market.overview"  :key="index">
                            <p class="title">{{$i18n.locale == 'cn'? item.title : '英文'}}</p>
                            <p class="subtitle">{{item.subtitle}}</p>
                          </router-link>
                        </ul>
                    </div>
                    <div class="right">
                        <p class="subheading">分类</p>
                        <ul>
                          <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in market.classify"  :key="index">
                            <p>{{item.value}}</p>
                          </router-link>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div class="title"><span>{{ $t("navbar.analysis") }}</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                <div class="dropdown-menu">
                  <div class="left">
                    <p class="subheading">方法</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in analysis.methods"  :key="index">
                        <p class="title">{{$i18n.locale == 'cn'? item.title : '英文'}}</p>
                        <p class="subtitle">{{item.subtitle}}</p>
                      </router-link>
                    </ul>
                  </div>
                  <div class="analysis left">
                    <p class="subheading">工具</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in analysis.tools"  :key="index">
                        <p class="title">{{item.title}}</p>
                        <p class="subtitle">{{item.subtitle}}</p>
                      </router-link>
                    </ul>
                  </div>
                </div>
            </li>
            <li>
                <router-link :to="{ name: 'Predictions' }" tag="div" class="title"><span>{{ $t("navbar.predictions") }}</span></router-link>
            </li>
            <li>
              <div class="title"><span>{{ $t("navbar.icos") }}</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
              <div class="dropdown-menu">
                <div class="left">
                  <p class="subheading">概述</p>
                  <ul>
                    <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in release.overview"  :key="index">
                      <p class="title">{{$i18n.locale == 'cn'? item.title : '英文'}}</p>
                    </router-link>
                  </ul>
                </div>
                <div class="right">
                  <p class="subheading">分类</p>
                  <ul>
                    <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in release.classify"  :key="index">
                      {{item.value}}
                    </router-link>
                  </ul>
                </div>
              </div>
            </li>
        </ul>
        <div class="set-box">
          <form>
            <div class="select">
              <div class="checked" @click="selectBtn">
                <span>{{select.value}}</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <ul class="list" v-show="select.show">
                <li v-for="(item,index) in select.list" :key="index" @click="chooseItem($event)">{{item}}</li>
              </ul>
            </div>
            <div class="search" :class="{ active: searchState }">
                <input type="text"/>
                <div class="btn">
                    <input type="submit" />
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
          </form>
          <!--<router-link tag="a" :to="{ name: 'Login' }" class="login">{{ $t("navbar.login") }}</router-link>
          <router-link tag="a" :to="{ name: 'Register' }" class="register">{{ $t("navbar.register") }}</router-link>-->
          <div class="search-bar" @click="searchBtn">
              <i v-show="!searchState" class="fa fa-search" aria-hidden="true"></i>
              <i v-show="searchState" class="fa fa-search-minus" aria-hidden="true"></i>
          </div>
          <div class="menu-bar" @click="menuBtn">
              <i v-show="!menuState" class="fa fa-bars" aria-hidden="true"></i>
              <i v-show="menuState" class="fa fa-times" aria-hidden="true"></i>
          </div>
          <!--移动端下拉菜单-->
          <div class="mobile-menu" :class="{ active: menuState }" @click="menuBtn">
            <ul class="">
              <li class="mobile-list">
                <div class="title one"><span>{{ $t("navbar.market") }}</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                <div class="dropdown-menu">
                  <div class="left">
                    <p class="subheading">概述</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in market.overview"  :key="index">
                        <p class="title">{{$i18n.locale == 'cn'? item.title : '英文'}}</p>
                        <p class="subtitle">{{item.subtitle}}</p>
                      </router-link>
                    </ul>
                  </div>
                  <div class="right">
                    <p class="subheading">分类</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in market.classify"  :key="index">
                        <p>{{item.value}}</p>
                      </router-link>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="mobile-list">
                <div class="title one"><span>{{ $t("navbar.analysis") }}</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                <div class="dropdown-menu">
                  <div class="left">
                    <p class="subheading">方法</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in analysis.methods"  :key="index">
                        <p class="title">{{$i18n.locale == 'cn'? item.title : '英文'}}</p>
                        <p class="subtitle">{{item.subtitle}}</p>
                      </router-link>
                    </ul>
                  </div>
                  <div class="analysis left">
                    <p class="subheading">工具</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in analysis.tools"  :key="index">
                        <p class="title">{{item.title}}</p>
                        <p class="subtitle">{{item.subtitle}}</p>
                      </router-link>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="mobile-list predictions">
                <router-link :to="{ name: 'Predictions' }" tag="div" class="title one"><span>{{ $t("navbar.predictions") }}</span></router-link>
              </li>
              <li class="mobile-list">
                <div class="title one"><span>{{ $t("navbar.icos") }}</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                <div class="dropdown-menu">
                  <div class="left">
                    <p class="subheading">概述</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in release.overview"  :key="index">
                        <p class="title">{{$i18n.locale == 'cn'? item.title : '英文'}}</p>
                      </router-link>
                    </ul>
                  </div>
                  <div class="right">
                    <p class="subheading">分类</p>
                    <ul>
                      <router-link tag="li" :to="{ name: item.link }" v-for="(item,index) in release.classify"  :key="index">
                        {{item.value}}
                      </router-link>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="account">
                <div class="title one"><span>账户</span></div>
                <router-link tag="a" :to="{ name: 'Login' }" v-if="!isLogin" class="login">{{ $t("navbar.login") }}</router-link>
                <router-link tag="a" :to="{ name: 'Register' }" v-if="!isLogin" class="register">{{ $t("navbar.register") }}</router-link>
                <div v-else class="member-bar">
                  <div class="img-box"><img src="@/assets/images/ico-bg04.jpg"/></div>
                  <div class="drop-menu">
                    <ul>
                      <li><div><img src="@/assets/images/ico-bg04.jpg"/></div><span>是徐军利啊</span></li>
                      <li><router-link tag="a" :to="{ name: 'Member' }">个人中心</router-link></li>
                      <li><a href="#">我的账户</a></li>
                      <li><a href="#">我的交易</a></li>
                      <li><a href="#">我的关注</a></li>
                      <li><a href="#">退出</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLogin: false,
      language: '中文',
      select: {
        show: false,
        list: ['USD','EUR','AUD','INR'],
        value:'USD'
      },
      menuState: false,
      searchState: false,
      market: {
        overview: [
          {
            title: '市场概览',
            subtitle: '观察最新的货币价格，市值，数量。',
            link: 'CoinList'
          },
          {
            title: '全球市场图标',
            subtitle: '全球市场的市值和数量',
            link: 'Global'
          },
          {
            title: '最近添加',
            subtitle: '发现最新货币',
            link: 'CoinList'
          },
          {
            title: 'Top Gainers',
            subtitle: '发现最新货币',
            link: 'CoinList'
          },
          {
            title: '最佳失败者',
            subtitle: '发现最新货币',
            link: 'CoinList'
          }
        ],
        classify: [
          {
            id: 0,
            value: '数字货币',
            link: 'CoinList'
          },
          {
            id: 1,
            value: '平台',
            link: 'CoinList'
          },
          {
            id: 2,
            value: '合同',
            link: 'CoinList'
          },
          {
            id: 3,
            value: '支付',
            link: 'CoinList'
          },
          {
            id: 4,
            value: '市井',
            link: 'CoinList'
          },
          {
            id: 5,
            value: '隐私',
            link: 'CoinList'
          },
          {
            id: 6,
            value: '匿名',
            link: 'CoinList'
          },
          {
            id: 7,
            value: '赌博',
            link: 'CoinList'
          },
          {
            id: 8,
            value: '建立dapps',
            link: 'CoinList'
          },
          {
            id: 9,
            value: '交换',
            link: 'CoinList'
          },
          {
            id: 10,
            value: '令牌发行',
            link: 'CoinList'
          },
          {
            id: 11,
            value: '贸易',
            link: 'CoinList'
          },
          {
            id: 12,
            value: '真实世界的资产',
            link: 'CoinList'
          },
          {
            id: 13,
            value: '付款服务提供商',
            link: 'CoinList'
          },
          {
            id: 14,
            value: '区块链',
            link: 'CoinList'
          }
        ]
      },
      analysis: {
        methods: [
          {
            title: '基础',
            subtitle: '分析基于我们的算法分数的基本分析。',
            link: 'CoinList'
          },
          {
            title: '投资分析',
            subtitle: '所有加密货币的历史表现和统计数据',
            link: 'CoinList'
          },
          {
            title: 'GitHub分析',
            subtitle: '超过950种开源加密货币的开发活动',
            link: 'CoinList'
          }
        ],
        tools: [
          {
            title: '数据更新',
            subtitle: '实时交易数据分析',
            link: 'CoinList'
          },
          {
            title: '套利机会',
            subtitle: '列出从50USD到50+BTC的所有套利机会。',
            link: 'CoinList'
          },
          {
            title: '加密问题解答',
            subtitle: '大多数加密问题',
            link: 'CoinList'
          }
        ]
      },
      release: {
        overview: [
          {
            title: '目前的ICO',
            link: 'ICO'
          },
          {
            title: '即将上市的ICO',
            link: 'ICO'
          },
          {
            title: '存档的ICO',
            link: 'ICO'
          },
          {
            title: '发布ICO',
            link: 'ICO'
          },
          {
            title: '广告ICO',
            link: 'ICO'
          }
        ],
        classify: [
          {
            id: 0,
            value: '数字货币',
            link: 'ICO'
          },
          {
            id: 1,
            value: '平台',
            link: 'ICO'
          },
          {
            id: 2,
            value: '合同',
            link: 'ICO'
          },
          {
            id: 3,
            value: '支付',
            link: 'ICO'
          },
          {
            id: 4,
            value: '市井',
            link: 'ICO'
          },
          {
            id: 5,
            value: '隐私',
            link: 'ICO'
          },
          {
            id: 6,
            value: '匿名',
            link: 'ICO'
          },
          {
            id: 7,
            value: '赌博',
            link: 'ICO'
          },
          {
            id: 8,
            value: '建立dapps',
            link: 'ICO'
          },
          {
            id: 9,
            value: '交换',
            link: 'ICO'
          },
          {
            id: 10,
            value: '令牌发行',
            link: 'ICO'
          },
          {
            id: 11,
            value: '贸易',
            link: 'ICO'
          },
          {
            id: 12,
            value: '真实世界的资产',
            link: 'ICO'
          },
          {
            id: 13,
            value: '付款服务提供商',
            link: 'ICO'
          },
          {
            id: 14,
            value: '区块链',
            link: 'ICO'
          }
        ]
      },
      global: {
        active_cryptocurrencies: null,
        active_markets: null,
        total_market_cap: null,
        total_volume_24h: null
      }
    }
  },
  created: function(){
    const that = this;
    that.$axios.get("https://api.coinmarketcap.com/v2/global/").then(res=>{
      console.log(res);
      that.global.active_cryptocurrencies = res.data.data.active_cryptocurrencies;
      that.global.active_markets = res.data.data.active_markets;
      that.global.total_market_cap = res.data.data.quotes.USD.total_market_cap;
      that.global.total_volume_24h = res.data.data.quotes.USD.total_volume_24h
    }).catch(function (err) {
      console.log(err)
    });
    //source.cancel('取消请求')
  },
  methods: {
    selectBtn: function () {
      const that  = this;
      if(that.select.show === true) {
        that.select.show = false
      } else {
        that.select.show = true
      }
    },
    chooseItem: function (e) {
      const that = this;
      that.select.value = e.target.innerText;
      that.select.show = false
    },
    menuBtn: function () {
      const that = this;
      if (that.menuState === false) {
        that.menuState = true
      } else {
        that.menuState = false
      }
    },
    searchBtn: function () {
      const that = this;
      if (that.searchState === false) {
        that.searchState = true
      } else {
        that.searchState = false
      }
    },
    selectLanguage: function (name) {
      const that = this;
      that.language = name == 0 ? '中文' : 'English';
      that.$i18n.locale = name == 0 ? 'cn' : 'en';
      console.log(that.$i18n.locale)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header {
      width: 100%;
      background: #161623;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 998;
    }
    .headerbar-top {
      background-color: #000000
    }
    .headerbar-top .content {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }
    .headerbar-top .content .left {
      float: left;
      overflow: hidden
    }
    .headerbar-top .content .left a {
      display: block;
      height: 25px;
      line-height: 25px;
      margin-right: 20px;
      float: left;
      font-size: 12px;
      color: #fff
    }
    .headerbar-top .content .right {
      float: right;
      height: 25px;
      line-height: 25px;
    }
    .headerbar-top .content .right .ivu-dropdown-rel a{
      font-size: 12px;
      color: #f8e19a
    }
    .headerbar-bar {
      margin: 0 auto;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .log {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .log img {
      margin: 0 10px 0 0;
      height: 45px;
      width: auto;
      flex-shrink: 0;
    }
    .log .title {
      position: relative;
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.4px;
      color: #e3d090
    }
    .log .tag {
      position: relative;
      top: -4px;
      font-size: 11px;
      font-weight: 300;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.75);
      font-style: italic;
      letter-spacing: 0.3px;
    }
    .menu {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #fff
    }
    .menu > li {
      position: relative;
      padding: 15px 10px;
      border-radius: 5px;
      margin-right: 30px;
      font-size: 13px;
    }
    .menu > li .title {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer
    }
    .menu i {
      margin-left: 10px
    }
    .dropdown-menu {
      position: absolute;
      top: 90%;
      left: 0;
      z-index: 1000;
      display: none;
      min-width: 500px;
      padding: 7px 15px;
      margin: 2px 0 0;
      list-style: none;
      font-size: 13px;
      text-align: left;
      background-color: #fff;
      border-radius: 2px;
      border-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
      background-clip: padding-box;
    }
    .menu > li:hover {
      background-color: #d7be5d
    }
    .menu li:hover .dropdown-menu {
      display: flex;
    }
    .dropdown-menu .left {
      min-width: 40%;
      max-width: 45%;
      padding-right: 25px;
    }
    .dropdown-menu .left li {
      display: block;
      color: #313534;
      padding: 0;
      font-size: 12px;
      line-height: 19px;
      float: none;
      margin-bottom: 10px;
    }
    .dropdown-menu .left li .title {
      display: block;
      font-size: 15px;
      color: #313534;
    }
    .dropdown-menu .left li .subtitle {
      color: #969c9c;
      font-size: 11px;
      font-weight: 300;
      line-height: 15px;
      margin-bottom: 8px;
    }
    .dropdown-menu .left li:hover p {
      color: #d7be5d;
    }
    .dropdown-menu .right {
      max-width: 55%;
      padding-right: 25px;
    }
    .dropdown-menu .right ul {
      column-count: 2;
    }
    .dropdown-menu .right ul li {
      margin-right: 7px;
      display: block;
      color: #313534;
      padding: 0;
      font-size: 12px;
      line-height: 19px;
      float: none;
      margin-bottom: 10px;
    }
    .dropdown-menu .right ul li:hover {
      color: #1BABA1;
    }
    .dropdown-menu .subheading {
      text-transform: uppercase;
      color: #d7be5d;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .set-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .set-box form {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0 0 15px;
      border-radius: 5px;
      border: 1px solid #4f4f58;
      height: 38px;
      color: #fff;
      width: 200px;
    }

    .search input[type="text"] {
      flex: 1;
      border: none;
      height: 38px;
      background-color: transparent;
      outline: none;
      color: #fff;
    }
    .search .btn {
      position: relative;
      height: 38px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    .search input[type="submit"] {
      position: absolute;
      left: 0;
      top: 0;
      border: none;
      height: 100%;
      width: 100%;
      background-color: transparent;
      visibility: collapse;
    }
    .search .btn i {
      font-size: 20px;
      color: #9c9c9d
    }
    .select {
      position: relative;
      margin-right: 10px;
      color: #fff
    }
    .checked {
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38px;
      width: 95px;
      padding: 0 10px 0 7px;
      border: 1px solid #4f4f58;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer
  }
    .select .list {
      /*padding: 5px 0;*/
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      width: 100%;
      height: auto;
      max-height: 200px;
      overflow-x: hidden;
      margin: 0;
      background-color: #fff;
      border-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
      border-radius: 2px;
      cursor: pointer;
      font-size: 13px;
      color: #333
    }
    .select .list li {
      cursor: pointer;
      display: block;
      padding: 3px 0;
      clear: both;
      font-weight: 400;
      line-height: 1.42857143;
      color: #333;
      white-space: nowrap;
      text-align: center;
    }
    .select .list li:hover {
      background-color: #d7be5d;
      color: #fff
    }
    .account  {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .login,.register {
      display: block;
      height: 38px;
      border: solid 2px #d7be5d;
      color: #d7be5d;
      border-radius: 5px;
      line-height: 24px;
      padding: 5px 10px;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: bold;
    }
    .login {
      margin-left: 20px;
      margin-right: 10px;
      background: #d7be5d;
      color: #fff;
    }
    .menu-bar,.search-bar {
      display: none;
      height: 38px;
      width: 38px;
    }
    .menu-bar i,.search-bar i {
      font-size: 25px;
      font-weight: lighter;
      color: #fff
    }
    .mobile-list {
      display: none
    }
    .one.title {
      display: none
    }
    .member-bar {
      margin-left: 20px;
      position: relative
    }
    .member-bar .img-box {
      width: 45px;
      height: 45px;
      overflow: hidden;
      border-radius: 50%;
    }
    .member-bar .img-box img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .member-bar .drop-menu {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 999;
      box-shadow: 5px 5px 10px 0 rgba(4,0,0,0.2), -5px 5px 10px 0 rgba(4,0,0,0.1);
      background-color: #fff
    }
    .member-bar:hover .drop-menu {
      display: block;
    }
    .member-bar .drop-menu a {
      display: block;
      padding: 6px 10px;
      text-align: center;
      font-size: 12px;
      color: #333
    }
    .member-bar .drop-menu a:hover,.member-bar .drop-menu a.router-link-active {
      background-color: #e3d090;
      color: #fff
    }
    .member-bar .drop-menu li:first-child {
      padding: 5px 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
    }
    .member-bar .drop-menu li:first-child div {
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50%;
    }
    .member-bar .drop-menu li:first-child div img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .member-bar .drop-menu li:first-child span {
      margin-left: 3px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #333
    }
    .member-bar .drop-menu li:last-child {
      border-top: 1px solid #dddddd
    }
  @media (max-width: 1639px) {
    .search {
      width: 200px;
    }
    .checked {
      width: 60px
    }
    .login {
      padding: 5px 10px;
    }
  }
  @media (max-width: 1100px) {
    .search {
    width: 160px
    }
    .search input[type="text"] {
      flex-shrink: 1;
      width: 95px
    }
  }
  @media (max-width: 991px) and (min-width: 768px){
    .log img {
      width: 38px;
      height: 38px
    }
    .log .title {
      height: 19px;
      line-height: 19px;
      font-size: 16px;
    }
    .log .tag {
      position: static;
      height: 10px;
      line-height: 10px;
      font-size: 10px
    }
    .register {
      display: none !important;
    }
  }
  @media (max-width: 767px){
    .headerbar-top .content {
      width: 100%;
      padding: 0 15px;
      margin: 0 auto;
      overflow: hidden;
    }
    .headerbar-top .content .left {
      display: none;
      float: left;
      overflow: hidden
    }
    .headerbar-top .content .left a {
      display: block;
      height: 25px;
      line-height: 25px;
      margin-right: 20px;
      float: left;
      font-size: 12px;
      color: #fff
    }
    .headerbar-top .content .right {
      float: right;
      height: 25px;
      line-height: 25px;
    }
    .headerbar-top .content .right .ivu-dropdown-rel a{
      font-size: 12px;
      color: #f8e19a
    }
    .headerbar-bar {
      margin: 0 auto;
      padding: 2px 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .log img {
      width: auto;
      height: 36px
    }
    .log .title {
      height: 19px;
      line-height: 19px;
      font-size: 16px;
    }
    .log .tag {
      position: static;
      height: 10px;
      line-height: 10px;
      font-size: 10px
    }
    .menu {
      display: none
    }
    .mobile-list {
      display: block
    }
    .mobile-menu {
      display: none;
    }
    .mobile-menu .predictions {
      display: none;
    }
    .mobile-menu.active {
      display: block;
      position: fixed;
      top: 65px;
      left:0;
      display: block;
      width: 100%;
      height: calc( 100% - 65px);
      overflow-y: auto;
      background: #212121;
    }
    .mobile-menu li {
      margin: 0;
      padding: 0 10px
    }
    .mobile-menu .dropdown-menu {
      padding: 0;
      display: block;
      position: static;
      min-width: unset;
      background-color: transparent;
      box-shadow: unset;
    }
    .mobile-menu .dropdown-menu .left {
      min-width: unset;
      max-width: unset;
      width: 100%;
      padding-right: 0
    }
    .mobile-menu .dropdown-menu .right {
      display: none
    }
    .mobile-menu .title.one {
      display: block;
      padding-bottom: 5px;
      text-transform: uppercase;
      color: #e3d090;
      font-weight: 700;
      margin-top: 15px;
      margin-bottom: 7px;
      text-align: center;
      font-size: 15px;
      border-bottom: 1px solid #e3d090;
    }
    .mobile-menu .title.one i {
      display: none;
    }
    .mobile-menu .dropdown-menu .subheading {
      display: none;
    }
    .mobile-menu .dropdown-menu .left li {
      margin: 0
    }
    .mobile-menu .dropdown-menu .left li .title {
      padding: 10px;
      font-size: 12px;
      color: #FFF;
    }
    .mobile-menu .dropdown-menu .left li .subtitle {
      display: none
    }
    .search {
      padding: 0 15px;
      display: none;
      position: fixed;
      left: 15px;
      top: 65px;
      width: calc(100% - 30px);
      background: rgba(255, 255, 255, 0.13);
    }
    .search.active {
      display: block
    }
    .search input[type="text"] {
      display: block;
      width: 100%;
      font-size: 14px;
      color: #fff
    }
    .search .btn {
      display: none
    }
    .menu-bar,.search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .account  {
      display: block;
    }
    .login,.register {
      display: block;
      margin: 0;
      background: none;
      border: none;
      color: #fff
    }
    .menu-bar,.search-bar {
      height: 36px;
      width: 36px;
    }
    .checked {
      height: 36px;
    }
    .member-bar {
      display: block;
      margin-left: 0;
    }
    .member-bar .img-box {
      display: none
    }
    .member-bar .drop-menu {
      display: block;
      position: static;
      box-shadow: unset;
      background-color: transparent
    }
    .member-bar .drop-menu a {
      display: block;
      padding: 6px 10px;
      text-align: left;
      font-size: 12px;
      color: #fff
    }
    .member-bar .drop-menu li:first-child {
      padding: 5px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
    }
    .member-bar .drop-menu li:first-child div {
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 50%;
    }
    .member-bar .drop-menu li:first-child div img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .member-bar .drop-menu li:first-child span {
      margin-left: 3px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #e3d090
    }
    .member-bar .drop-menu li:last-child {
      border-top: 1px solid #dddddd
    }
  }
</style>
