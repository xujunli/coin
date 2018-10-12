<template>
  <div class="page-info f-j-st f-a-c">
    <i class="fa fa-chevron-left f-c-fae199" aria-hidden="true"></i>
    <span class="m-l-15">第一页，</span>
    <span class="m-r-15">共12页</span>
    <i class="fa fa-chevron-right f-c-fae199 m-r-10" aria-hidden="true"></i>
    <span class="line f-s-15 m-r-10"></span>
    <span>100结果</span>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
export default {
  name: 'Home',
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
  .coin-tab {
    margin-bottom: 20px;
  }
  .page-info {
    font-size: 14px;
  }
  .page-info span {
    display: block;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    color: #666
  }
  .page-info .line {
    height: 15px;
    width: 2px;
    background-color: #999
  }
</style>
