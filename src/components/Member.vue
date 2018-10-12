<template>
  <div id="member">
    <div class="box">
      <div class="left">
        <p class="title">个人中心</p>
        <ul>
          <li><router-link tag="a" :to="{ name: 'EditProfile' }">修改资料</router-link></li>
          <li><router-link tag="a" :to="{ name: 'MyAttention' }">我的关注</router-link></li>
        </ul>
        <p class="title">我的账户</p>
        <ul>
          <li><router-link tag="a" :to="{ name: 'Wallet' }">钱包</router-link></li>
          <li><router-link tag="a" :to="{ name: 'VIP' }">VIP充值</router-link></li>
        </ul>
        <p class="title">我的交易</p>
        <ul>
          <li><router-link tag="a" :to="{ name: 'Order' }">我的订单</router-link></li>
        </ul>
        <div class="col-bottom"></div>
      </div>
      <div class="right">
        <router-view></router-view>
        <div class="col-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #member {
    min-height: 100%;
    padding: 74px 0 250px;
  }
  #member .box {
    position: relative;
    margin: 75px auto 0;
    width: 1200px;
    overflow: hidden
  }
  #member .left .col-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 190px;
    height: 1px;
    background-color: #e6e6e6;
  }
  #member .right .col-bottom {
    position: absolute;
    left: 220px;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
  }
  #member .box .left {
    padding: 0 15px 9999px;
    margin-bottom: -9999px;
    float: left;
    width: 190px;
    border: 1px solid #e6e6e6;
  }
  #member .box .left .title {
    margin-bottom: 10px;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 18px;
    color: #333
  }
  #member .box .left ul a {
    position: relative;
    display: block;
    padding: 5px 10px;
    line-height: 20px;
    font-size: 14px;
    color: #666
  }
  #member .box .left ul .router-link-active {
    color: #e3d090
  }
  #member .box .left ul .router-link-active:before {
    position: absolute;
    left: -15px;
    top: 8px;
    content: '';
    height: 16px;
    width: 3px;
    background-color: #e3d090
  }
  #member .box .right {
    margin-left: 220px;
    margin-bottom: -9999px;
    padding: 0 15px 9999px;
    border: 1px solid #e6e6e6;
    border: 1px solid #e6e6e6;
  }

  /*#member .right .r-box {
    padding: 70px 0 85px;
    display: flex;
    justify-content: center;
  }*/
</style>
