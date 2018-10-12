<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  html{
    height: 100%;
  }
  body {
    height: 100%;
    overflow-x: hidden;
    background: #ffffff;
    background-size: 100% 100%;
    color: #313534;
  }
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
#home {
  height: 100%;
}
/*#home .content-box {
  min-height: 100%;
  padding: 74px 20px 250px;
}*/
  .ivu-checkbox-checked:hover .ivu-checkbox-inner {
    border-color: #fae199;
    background-color: #fae199;
  }
  .ivu-checkbox-checked .ivu-checkbox-inner {
    border-color: #fae199;
    background-color: #fae199;
  }
  .ivu-slider-wrap {
    margin: 10px 0;
  }
  .ivu-anchor {
    display: flex;
    justify-content: flex-start
  }
  .ivu-anchor-wrapper {
    margin: 0;
    padding: 0;
    background: #161623;
  }
  .ivu-affix {
    top: 74px !important;
  }
  .ivu-anchor-link-active>.ivu-anchor-link-title {
    color: #e3d090
  }
  .ivu-anchor-ink {
    display: none
  }
  .ivu-anchor-link {
    padding: 10px 0 10px 16px;
  }
  .ivu-anchor-link a {
    color: #fff
  }
  .ivu-tabs-nav-scroll {
    background-color: #161623
  }
  .ivu-tabs-ink-bar {
    display: none
  }
  .ivu-tabs-tab {
    color: #fff
  }
  .ivu-tabs-nav .ivu-tabs-tab:hover {
    color: #e3d090 !important
  }
  .ivu-tabs-nav .ivu-tabs-tab-active {
    color: #e3d090 !important
  }
  .scores .ivu-collapse-header {
    display: flex;
    align-items: center;
    justify-content: flex-start
  }
  .ivu-checkbox {
    width: 16px;
    height: 16px;
  }
  .ivu-checkbox-input {
    width: 16px;
    height: 16px;
  }
  .ivu-page-item-active {
    border-color: #f8e19a;
    background-color: #f8e19a;
  }
  .ivu-page-item-active a {
    color: #000
  }
  .t-a-c {
    text-align: center
  }
/*字体大小*/
  .f-s-12 {
    font-size: 12px;
    height: 12px;
    line-height: 12px;
  }
  .f-s-13 {
    font-size: 13px;
    height: 13px;
    line-height: 13px;
  }
  .f-s-14 {
    font-size: 14px;
    height: 14px;
    line-height: 14px;
  }
  .f-s-15 {
    font-size: 15px;
    height: 15px;
    line-height: 15px;
  }
  .f-s-16 {
    font-size: 16px;
    height: 16px;
    line-height: 16px;
  }
/*字体颜色*/
  .f-c-fae199 {
    color: #fae199
  }
  /* flex样式 */
  .f-j-c {
    display: flex;
    justify-content: center
  }
  .f-j-sb {
    display: flex;
    justify-content: space-between
  }
  .f-j-sa {
    display: flex;
    justify-content: space-around
  }
  .f-j-st {
    display: flex;
    justify-content: flex-start
  }
  .f-j-e {
    display: flex;
    justify-content: flex-end
  }
  .f-a-c {
    display: flex;
    align-items: center;
  }
  .f-a-st {
    display: flex;
    align-items: flex-start
  }
  .f-a-e {
    display: flex;
    align-items: flex-end
  }
  .f-d {
    flex-direction: column;
  }
  .flex-1 {
    flex: 1
  }
  .flex-2 {
    flex: 2
  }
  .flex-3 {
    flex: 3
  }
  .flex-4 {
    flex: 4
  }
  .flex-5 {
    flex: 5
  }
  .f-grow {
    flex-grow: 0;
  }
  .f-shrink {
    flex-shrink: 0;
  }
  .f-j-a-c {
    display: flex;
    align-items: center;
    justify-content: center
  }
  /* 常用margin */
  .m-r-3 {
    margin-right: 3px;
  }
  .m-r-5 {
    margin-right: 5px;
  }
  .m-r-10 {
    margin-right: 10px;
  }
  .m-r-15 {
    margin-right: 15px;
  }
  .m-r-20 {
    margin-right: 20px;
  }
  .m-r-25 {
    margin-right: 25px;
  }
  .m-r-30 {
    margin-right: 30px;
  }
  .m-r-40 {
    margin-right: 40px;
  }
  .m-r-60 {
    margin-right: 60px;
  }
  .m-l-3 {
    margin-left: 3px;
  }
  .m-l-5 {
    margin-left: 5px;
  }
  .m-l-10 {
    margin-left: 10px;
  }
  .m-l-15 {
    margin-left: 15px;
  }
  .m-l-20 {
    margin-left: 20px;
  }
  .m-t-10 {
    margin-top: 10px;
  }
  .m-t-15 {
    margin-top: 15px;
  }
  .m-t-20 {
    margin-top: 20px;
  }
  .m-t-24 {
    margin-top: 20px;
  }
  .m-t-30 {
    margin-top: 30px;
  }
  .m-t-40 {
    margin-top: 40px;
  }
  .m-t-45 {
    margin-top: 45px;
  }
  .m-b-8 {
    margin-bottom: 8px;
  }
  .m-b-10 {
    margin-bottom: 10px;
  }
  .m-b-15 {
    margin-bottom: 15px;
  }
  .m-b-20 {
    margin-bottom: 20px;
  }
  .m-b-24 {
    margin-bottom: 24px;
  }
  .m-b-25 {
    margin-bottom: 25px;
  }
  .m-b-30 {
    margin-bottom: 30px;
  }
  .m-b-35 {
    margin-bottom: 35px;
  }
  .m-b-40 {
    margin-bottom: 40px;
  }
  .m-b-45 {
    margin-bottom: 45px;
  }
  .m-b-50 {
    margin-bottom: 50px;
  }
  .m-b-60 {
    margin-bottom: 60px;
  }
  .m-b-70 {
    margin-bottom: 70px;
  }
  .m-b-80 {
    margin-bottom: 80px;
  }
  .m-b-100 {
    margin-bottom: 100px;
  }
  .m-10-0 {
    margin: 10px 0;
  }
  .m-24-0 {
    margin: 24px 0;
  }
  .m-30-0 {
    margin: 30px 0;
  }
  .m-40-0 {
    margin: 40px 0;
  }
  .m-30-0-60 {
    margin: 30px 0 60px;
  }
  .m-40-0-80 {
    margin: 40px 0 80px;
  }
  .m-15-0-20 {
    margin: 15px 0 20px;
  }
  .m-0-10 {
    margin: 0 10px;
  }
  .m-0-20 {
    margin: 0 20px;
  }
  .m-0-30 {
    margin: 0 30px;
  }
  @media (max-width: 767px){
    .analysis .ivu-collapse-header {
      height: auto !important
    }
    .analysis .list {
      padding: 5px 0;
      display: block !important;
    }
    .analysis .list .subject {
      float: left;
      width: 100%;
      line-height: 20px;
    }
    .analysis .list .max {
      float: left;
      width: 50%;
      text-align: right;
      line-height: 16px;
    }
    .analysis .list .point {
      float: left;
      width: 50%;
      line-height: 16px;
    }
    .analysis .ivu-collapse-content {
      border-top: 1px dotted #dcdee2;
    }
    .analysis .ivu-collapse-content-box {
      padding-top: 10px !important;
      padding-bottom: 10px;
    }
    .analysis .ivu-tabs-nav .ivu-tabs-tab {
      font-size: 12px;
    }
    .prediction .ivu-tabs-nav .ivu-tabs-tab {
      font-size: 12px;
    }
  }
</style>
