<template>
    <div id="foot">
      <div class="link">
        <div>
          <ul>
            <li>交易市场</li>
            <li><router-link to="{ name: Charts }" tag="a">市场概述</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">最近添加</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">失败者</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">数据</router-link></li>
          </ul>
          <ul>
            <li>数据分析</li>
            <li><router-link to="{ name: Charts }" tag="a">投资分析</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">GitHub分析</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">套利机会</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">基础</router-link></li>
          </ul>
          <ul>
            <li>预测</li>
            <li><router-link to="{ name: Charts }" tag="a">涨幅预测</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">跌幅预测</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">赔率预测</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">风险预测</router-link></li>
          </ul>
          <ul>
            <li>ICOS</li>
            <li><router-link to="{ name: Charts }" tag="a">目前的icos</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">存档的icos</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">发布的icos</router-link></li>
            <li><router-link to="{ name: Charts }" tag="a">广告icos</router-link></li>
          </ul>
          <div class="company">
            <div>
              <img src="@/assets/images/logo.png"/>
              <p>利得数据</p>
            </div>
            <p>利得数据安全加密，货币预测风险降低</p>
          </div>
          <div class="contact">
            <p>联系热线：4444-4543534</p>
            <div>
              <img src="@/assets/images/qq.png"/>
              <img src="@/assets/images/wechat.png"/>
              <img src="@/assets/images/web.png"/>
              <img src="@/assets/images/facebook.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">版权所有©lengfeng.com</div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #foot {
    position: relative;
    margin-top: -250px;
  }
  #foot .link {
    background-color: #161623
  }
  #foot .link > div {
    margin: 0 auto;
    width: 1200px;
    height: 190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #foot .link li {
    margin-bottom: 10px;
  }
  #foot .link li:first-child {
    margin-bottom: 15px;
    line-height: 12px;
    text-align: center;
    font-size: 12px;
    color: #fffefe
  }
  #foot .link li:last-child {
    margin: 0;
  }
  #foot .link li a {
    margin-bottom: 10px;
    display: block;
    text-align: center;
    line-height: 12px;
    font-size: 12px;
    color: #a7a7a9
  }
  #foot .link .company {
    margin: 0 40px 0 20px;
  }
  #foot .link .company p {
    font-size: 14px;
    color: #fffefe
  }
  #foot .link .company div {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  #foot .link .company div img {
    margin-right: 10px;
    display: block;
    width: auto;
    height: 80px;
  }
  #foot .link .company div p {
    font-size: 32px;
    color: #e3d090
  }
  #foot .link .contact p {
    margin-bottom: 10px;
    line-height: 14px;
    text-align: right;
    font-size: 14px;
    color: #fffefe
  }
  #foot .link .contact img {
    display: inline-block;
    margin-left: 10px
  }
  #foot .copyright {
    background-color: #161623;
    border-top: 1px solid #8b8b91;
    height: 60px;
    line-height: 59px;
    text-align: center;
    font-size: 12px;
    color: #a7a7a9
  }
  @media (max-width: 767px){
    #foot {
      position: relative;
      margin-top: -160px;
    }
    #foot .link {
      padding: 10px 0;
      background-color: #161623
    }
    #foot .link > div {
      margin: 0 auto;
      width: 100%;
      height: auto;
      display: block;
    }
    #foot .link > div ul {
      display: none
    }
    #foot .link .company {
      margin: 0 auto;
    }
    #foot .link .company p {
      display: none;
    }
    #foot .link .company div {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #foot .link .company div img {
      margin-right: 0;
      display: block;
      width: 90px;
      height: 45px;
    }
    #foot .link .contact p {
      margin-bottom: 10px;
      line-height: 14px;
      text-align: center;
      font-size: 14px;
      color: #fffefe
    }
    #foot .link .contact div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #foot .link .contact img {
      display: inline-block;
      padding: 0 5px;
      margin-left: 0;
      width: 40px;
      height: 30px;
    }
    #foot .copyright {
      background-color: #161623;
      border-top: 1px solid #8b8b91;
      height: 30px;
      line-height: 29px;
      text-align: center;
      font-size: 12px;
      color: #a7a7a9
    }
  }
</style>
