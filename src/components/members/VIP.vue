<template>
      <div id="vip">
        <div class="package">
          <div class="item" :class="{active: isActive == 1}" @click="selectPackage(1)">
            <p class="now">$4700.00<span>/1年</span></p>
            <p class="original">$5500</p>
            <div class="msg">
              <img src="@/assets/images/zan.png"/>
              <p>所有币种8折</p>
            </div>
          </div>
          <div class="item" :class="{active: isActive == 2}" @click="selectPackage(2)">
            <p class="now">$4700.00<span>/1年</span></p>
            <p class="original">$5500</p>
            <div class="msg">
              <img src="@/assets/images/zan.png"/>
              <p>所有币种8.5折</p>
            </div>
          </div>
          <div class="item" :class="{active: isActive == 3}" @click="selectPackage(3)">
            <p class="now">$4700.00<span>/1年</span></p>
            <p class="original">$5500</p>
            <div class="msg">
              <img src="@/assets/images/zan.png"/>
              <p>所有币种9折</p>
            </div>
          </div>
        </div>
        <div class="auto-cash">
          <div :class="{active: autoCash}" @click="checkAuto()"></div>
          <p>到期后自动续费，可随时取消。</p>
        </div>
        <div class="payment">
          <p>支付方式：</p>
          <div>
            <img class="alipay" src="@/assets/images/alipay.png"/>
            <p>支付宝</p>
            <img class="choose" src="@/assets/images/choose.png"/>
          </div>
        </div>
        <div class="pay">立即支付</div>
      </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data () {
    return {
      isActive: 1,
      autoCash: false
    }
  },
  methods: {
    selectPackage: function (n) {
      const that = this;
      that.isActive = n
    },
    checkAuto: function () {
      const that = this;
      that.autoCash ? that.autoCash = false : that.autoCash = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #vip {
    padding: 40px 80px;
  }
  .package {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .package .item {
    padding: 20px 30px 30px;
    border: 2px solid #cccccc;
    border-radius: 10px;
    cursor: pointer
  }
  .package .item .now {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #e81111
  }
  .package .item .now span {
    font-size: 14px;
    color: #5d5d5d
  }
  .package .item .original {
    margin: 20px 0;
    text-decoration: line-through;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #cccccc
  }
  .package .item .msg {
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 30px;
  }
  .package .item .msg img {
    display: none;
    margin-right: 10px;
  }
  .package .item .msg p {
    font-weight: bold;
    font-size: 16px;
    color: #666666
  }
  .package .item.active {
    border: 2px solid #e81111;
  }
  .package .item.active .msg {
    background-color: #e81111;
  }
  .package .item.active .msg img {
    display: block;
  }
  .package .item.active .msg p {
    color: #fff
  }
  .auto-cash {
    margin: 20px 0 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .auto-cash div {
    margin-right: 15px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid #e3d090;
    background-color: #fff;
    cursor: pointer;
  }
  .auto-cash div.active {
    background-color: #e3d090;
  }
  .auto-cash p {
    font-size: 16px;
    color: #666
  }
  .payment {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .payment > p {
    margin-right: 30px;
    font-weight: bold;
    font-size: 16px;
    color: #333
  }
  .payment div {
    position: relative;
    width: 140px;
    height: 30px;
    border: 1px solid #e3d090;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
  .payment div p {
    margin-left: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #333
  }
  .payment div .choose {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .pay {
    margin: 30px auto 0;
    width: 90px;
    height: 30px;
    background-color: #e3d090;
    border-radius: 8px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #fff
  }
</style>
