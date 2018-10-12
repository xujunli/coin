<template>
    <div id="edit">
      <p class="title">个人资料修改</p>
      <div>
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
            <label><span class="l-t">新密码</span><span>：</span><input type="text" /></label>
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
export default {
  name: 'EditProfile',
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
  #edit > div {
    padding: 70px 0 85px;
    display: flex;
    justify-content: center;
  }
  .title {
    padding: 0 5px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e3d090;
    font-weight: bold;
    font-size: 18px;
    color: #e3d090
  }
  form {
    display: block
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
  input[type="submit"] {
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
</style>
