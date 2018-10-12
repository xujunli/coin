<template>
  <div id="order">
    <p class="hd">我的订单</p>
    <div>
      <table>
        <thead class="title">
        <tr>
          <th class="cell">
            序号
          </th>
          <th class="cell">
            名称
          </th>
          <th class="cell">
            支付方式
          </th>
          <th class="cell">
            $4567
          </th>
          <th class="cell">
           备注
          </th>
          <th class="cell">
            成交时间
          </th>
          <th class="cell">
            订单状态
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="content">
          <td class="cell">1</td>
          <td class="cell">比特币</td>
          <td class="cell">支付宝</td>
          <td class="cell">$4567</td>
          <td class="cell">我买的比特币</td>
          <td class="cell">2018年8月10日</td>
          <td class="cell">已到账</td>
        </tr>
        <tr class="content">
          <td class="cell">1</td>
          <td class="cell">比特币</td>
          <td class="cell">支付宝</td>
          <td class="cell">$4567</td>
          <td class="cell">我买的比特币</td>
          <td class="cell">2018年8月10日</td>
          <td class="cell">已到账</td>
        </tr>
        </tbody>
      </table>
      <Page class="self-page t-a-c" :total="100"/>
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
  .hd {
    padding: 0 5px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e3d090;
    font-weight: bold;
    font-size: 18px;
    color: #e3d090
  }
  #order > div {
    padding: 40px 0;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-top: 1px solid #c4c4c4;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
  }
  .title p,.coin-box .cell {
    text-align: center;
    font-size: 13px;
    color: #313534;
  }
  .title p,.title .cell {
    height: 38px;
    line-height: 38px;
    background-color: #161623;
    color: #FFF;
    border-right: 1px solid #b0b0b2;
    font-weight: 600;
    font-size: 14px;
  }
  .content .cell {
    position: relative;
    padding: 5px 7px;
    height: 55px;
    line-height: 45px;
    max-height: 55px;
    text-align: center
  }
  .content .cell::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
  }
  .content .set div {
    display: flex;
    justify-content: center;
    align-items: center
  }
  .content .cell p {
    width: 74px;
    height: 34px;
    line-height: 32px;
    border: 1px solid #e3d090;
    text-align: center;
    font-size: 14px;
    color: #e3d090;
  }
  .content .cell .concel {
    margin-right: 10px;
    background-color: #e3d090;
    color: #fff;
  }
  .self-page {
    margin-top: 30px;
  }
</style>
