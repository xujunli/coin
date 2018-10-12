<template>
  <div id="login" :style="bgUrl">
    <div class="box">
      <h3>登陆</h3>
      <form>
        <div>
          <label><span class="l-t">账号</span><span>：</span><input type="text" placeholder="用户名" /></label>
          <div class="msg"></div>
        </div>
        <div>
          <label><span class="l-t">密码</span><span>：</span><input type="text" placeholder="密码" /></label>
          <div class="msg"></div>
        </div>
        <input type="submit" value="登陆">
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
export default {
  name: 'Home',
  data () {
    return {
      bgUrl: {
        backgroundImage: "url(" + require("@/assets/images/login-bg.jpg") + ")",
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 74px 0 250px;
    background-size: auto 100%;
  }
  #login > div {
    position: absolute;
    top: 174px;
    right: 50%;
    margin-right: -600px;
    padding: 40px 0;
    width: 410px;
    border: 1px solid #c3c3c3;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
  #login h3 {
    margin-bottom: 30px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  label {
    margin-bottom: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center
  }
  label span {
    display: inline-block;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: #666
  }
  label span:after {
    content:"";
    display:inline-block;
    width:100%;
  }
  label input {
    padding: 0 10px;
    width: 280px;
    height: 36px;
    line-height: 34px;
    border: 1px solid #c3c3c3;
    outline: none;
    font-size: 14px;
  }
  #login input[type="submit"] {
    display: block;
    margin: 30px auto 0;
    width: 120px;
    height: 35px;
    line-height: 35px;
    background-color: #e3d090;
    outline: none;
    border: none;
    text-align: center;
    font-size: 16px;
    color: #fff
  }
  @media (max-width: 767px){
    #login {
      padding: 65px 0 160px;
      background-image: none !important;
    }
    #login > div {
      position: static;
      margin: 0 auto 30px;
      padding: 10px 0 40px;
      width: 80%;
      height: 100%;
      border: none;
      background-color: #fff;
    }
    #login h3 {
      margin-bottom: 20px;
    }
    #login > div form {
      display: block;
      width: 100%;
    }
    label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }
    label input {
      flex: 1;
      width: auto;
    }
  }
</style>
