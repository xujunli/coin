<template>
    <div class="coin-tab f-j-e">
      <slot name="self"></slot>
      <slot name="filter"></slot>
      <slot name="clear"></slot>
    </div>
</template>

<script>
export default {
  name: 'CoinTab',
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
  .coin-tab > div {
    margin-left: 5px;
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: 500;
    color: #212121;
    background: #fff;
    border: 1px solid #E0E0E0;
    font-size: 14px;
    cursor: pointer;
  }
  .filter {
    position: relative
  }
  .filter-box {
    position: absolute;
    top: 100%;
    right: -91px;
    width: 300%;
    z-index: 998
  }
  @media (max-width: 767px){
    .coin-tab > div {
      margin-left: 5px;
      padding: 3px 8px;
      border-radius: 5px;
      font-weight: 500;
      color: #212121;
      background: #fff;
      border: 1px solid #E0E0E0;
      font-size: 14px;
      cursor: pointer;
    }
    .filter,.clear {
      display: none;
    }
  }
</style>
