<template>
    <div id="register">
      <div class="box">
        <h3>注册</h3>
        <form>
          <div>
            <label><span class="l-t">账号</span><span>：</span><input type="text" /></label>
            <div class="msg"></div>
          </div>
          <div>
            <label><span class="l-t">姓名</span><span>：</span><input type="text" /></label>
            <div class="msg"></div>
          </div>
          <div>
            <label><span class="l-t">邮箱</span><span>：</span><input type="text" /></label>
            <div class="msg"></div>
          </div>
          <div>
            <label><span class="l-t">密码</span><span>：</span><input type="text" /></label>
            <div class="msg"></div>
          </div>
          <div>
            <label><span class="l-t">确认密码</span><span>：</span><input type="text" /></label>
            <div class="msg"></div>
          </div>
          <input type="submit" value="注册">
        </form>
      </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
export default {
  name: 'Register',
  data () {
    return {

    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #register {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    padding: 140px 0 315px;
  }
  #register > div {
    height: 100%;
    border: 1px solid #c3c3c3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
  #register h3 {
    margin-bottom: 40px;
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
  label .l-t {
    width: 60px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: justify;
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
  #register input[type="submit"] {
    display: block;
    margin: 30px auto 20px;
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
    #register {
      margin: 0 auto;
      width: 100%;
      min-height: 100%;
      padding: 65px 0 160px;
    }
    #register > div {
      padding: 20px 0 30px;
      height: 100%;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center
    }
    #register h3 {
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }
    #register form {
      display: block;
      width: 80%
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
    label .l-t {
      width: 60px;
      height: 36px;
      line-height: 36px;
      display: inline-block;
      text-align: justify;
      flex-shrink: 0;
    }
    label span:after {
      content:"";
      display:inline-block;
      width:100%;
    }
    label input {
      flex: 1;
      width: auto;
    }
    #register input[type="submit"] {
      display: block;
      margin: 20px auto 20px;
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
  }
</style>
