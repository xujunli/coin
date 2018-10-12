<template>
    <div class="coin-box">
        <div class="coin-name">
            <div class="title">
              <p>#</p>
              <p>{{$t("collumnName.name")}}</p>
            </div>
            <div class="content" v-for="(item, index) in message">
                <p>{{index + 1}}</p>
                <router-link :to="{ name: 'CoinShow',query:{id: item.id }}" tag="p" class="f-j-a-c name">
                  <img :src="item.coinImg"/>
                  <span>{{item.name}}</span>
                </router-link>
            </div>
        </div>
        <div class="box">
            <table id="c-table">
                <thead class="title">
                    <tr>
                        <th class="cell"  v-for="item in selectTab">
                          <Tooltip content="Top Left text" placement="top" v-if="item === 'Followed'">
                            <div><i class="fa fa-heart" aria-hidden="true"></i></div>
                          </Tooltip>
                          <!--<div v-else>{{collumnName[item].showName}}</div>-->
                          <Tooltip content="Top Left text" placement="top" v-else>
                            <div>{{$t("collumnName." + item)}}</div>
                          </Tooltip>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="content" v-for="item in message">
                        <td class="cell" v-for="type in selectTab" :class="type === 'sevenDayPrice' ? 'charts-box':''">
                          <div v-if="type === 'Followed'">
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                          </div>
                          <div v-else-if="type === 'sevenDayPrice'" :id="type === 'sevenDayPrice' ? 'myChart' + item.id:''"></div>
                          <div v-else-if="type === 'actions'">
                            <router-link :to="{ name: 'Charts',query:{id: item.id }}" tag="a">
                              <i class="fa fa-bar-chart" aria-hidden="true"></i>
                            </router-link>
                            <router-link :to="{ name: 'Analysis',query:{id: item.id }}" tag="a">
                              <i class="fa fa-tachometer" aria-hidden="true"></i>
                            </router-link>
                            <router-link :to="{ name: 'Markets',query:{id: item.id }}" tag="a">
                              <i class="fa fa-bolt" aria-hidden="true"></i>
                            </router-link>
                            <router-link :to="{ name: 'Prediction',query:{id: item.id }}" tag="a">
                              <i class="fa fa-rocket" aria-hidden="true"></i>
                            </router-link>
                          </div>
                          <div v-else-if="typeof item[type] === 'object'">
                            <p>{{item[type].num1}}.</p>
                            <p>{{item[type].num2}}.</p>
                          </div>
                          <div v-else>{{item[type]}}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
</template>

<script>
  import CoinTab from '@/components/CoinTab.vue'
export default {
  name: 'CoinBox',
  props:['selectTab','message','collumnName'],
  data () {
    return {
    }
  },
  mounted () {
    const that = this;
    that.selectTab.find((value,index,arr) => {return value === 'sevenDayPrice'}) ? that.intCharts() : null;
    that.tabResize()
  },
  updated () {
    const that = this;
    that.selectTab.find((value,index,arr) => {return value === 'sevenDayPrice'}) ? that.intCharts() : null;
  },
  methods: {
    //渲染折线图
    intCharts: function () {
      const that = this;
      let containerWidth = document.getElementsByClassName('charts-box')[0].offsetWidth;
      let containerHeight = document.getElementsByClassName('charts-box')[0].offsetHeight;
      for (let i = 0; i < that.message.length; i++) {
        let chart = document.getElementById('myChart' + that.message[i].id );
        chart.style.width = containerWidth + 'px';
        chart.style.height = containerHeight + 'px';
        let myChart = this.$echarts.init(chart);
        myChart.setOption(
          {
            tooltip: {
              trigger: 'item',
              confine: true
            },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            },
            series: [{
              data: that.message[i].sevenDayPrice.data,
              type: 'line'
            }]
          }
        );
      }
    },
    //栅格大小调整
    tabResize: function () {
      var that = this;
      var i,
        self,
        table = document.getElementById("c-table"),
        header = table.rows[0],
        tableX = header.clientWidth,
        length = header.cells.length;
      for (i = 0; i < length; i++) {
        header.cells[i].onmousedown = function () {
          self = this;
          if (event.offsetX > self.offsetWidth - 10) {
            self.mouseDown = true;
            self.oldX = event.x;
            self.oldWidth = self.offsetWidth;
          }
        };
        header.cells[i].onmousemove = function () {
          if (event.offsetX > this.offsetWidth - 10) {
            this.style.cursor = 'col-resize';
          } else {
            this.style.cursor = 'default';
          }
          if (self == undefined) {
            self = this;
          }
          if (self.mouseDown != null && self.mouseDown == true) {
            self.style.cursor = 'default';
            if (self.oldWidth + (event.x - self.oldX) > 0) {
              self.width = self.oldWidth + (event.x - self.oldX);
            }
            self.style.width = self.width;
            table.style.width = tableX + (event.x - self.oldX) + 'px';
            self.style.cursor = 'col-resize';
          }
        };
        table.onmouseup = function () {
          if (self == undefined) {
            self = this;
          }
          self.mouseDown = false;
          self.style.cursor = 'default';
          tableX = header.clientWidth;
        };
      };
    },
    //接收自定义参数
    acceptChange: function (checked) {
      const that = this;
      that.selectTab = checked
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .coin-box {
      position: relative;
    }
    .coin-box .title p,.coin-box .cell {
      text-align: center;
      font-size: 13px;
      color: #313534;
    }
    .coin-box .title p,.coin-box .title .cell {
      position: relative;
      height: 38px;
      line-height: 38px;
      background-color: #161623;
      color: #FFF;
      border-right: 1px solid #b0b0b2;
      font-weight: 600;
      font-size: 14px;
    }
    .coin-name .content p,.coin-box .content .cell {
      position: relative;
      /*padding: 5px 7px;*/
      height: 55px;
      line-height: 45px;
      max-height: 55px
    }
    .coin-box .content p::after,.coin-box .content .cell::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #e0e0e0;

    }
    .coin-box .content .name {
      cursor: pointer
    }
    .coin-box .content .cell p {
      height: 14px;
      line-height: 14px;
      text-align: center;
      font-size: 14px;
      color: #313534;
    }
    .coin-box .collect i {
      color: #313534;
    }
    .coin-box .chart {
      padding: 0 !important
    }
    .coin-name {
      padding-top: 40px;
      position: absolute;
      left: 0;
      top: 0;
      width: 160px;
    }
    .coin-name div {
      display: flex;
      justify-content: space-between;
      align-items: center
    }
    .coin-name p {
      flex: 1;
      text-align: center;
      font-size: 16px;
      color: #313534;
    }
    .box {
      margin-left: 160px;
      overflow: auto;
      padding-top: 40px;
      margin-top: -20px;
    }
    .box  .cell {
      min-width: 160px;
    }
    .box .set-box i {
      background-color: transparent;
      font-size: 13px;
      color: #555;
    }
    table {
      width: 100%;
      border-spacing: 0;
    }
    @media (max-width: 767px){
      .coin-name {
        padding-top: 0;
      }
      .box {
        padding-top: 0;
        margin-top: 0;
      }
    }
</style>
