<template>
  <div class="prediction">
    <Tabs value="name1" :animated="false">
      <TabPane label="全球资金流动" name="name1">
        <div class="flows">
          <div class="title">
            <h2>Bitcoin price prediction based on worldwide money flows</h2>
            <p class="t-a-c">Predictions are no guarantees for the future. Use any data on CoinCheckup for informational purposes. Information should not be considered investment advice.</p>
            <ul>
              <li>M0: The total of all physical currency, plus accounts at the central bank which can be exchanged for physical currency.</li>
              <li>M1: Measure M0 plus the amount in demand accounts, including "checking" or "current" accounts.</li>
              <li>M2: Measure M1 plus most savings accounts, money market accounts, and certificate of deposit (CD) accounts of under $100,000.</li>
            </ul>
          </div>
          <div class="bd">
            <ul class="tab">
              <li>Graph</li>
              <li>Sources</li>
            </ul>
            <div class="graph">
              <p>The vertical red bar indicates the current amount of M0, M1 or M2 money in the crypto market, respectively. If a greater percentage of money flows into crypto, Bitcoin would likely be worth the indicated amount.</p>
              <div id="m-box">
                <div id="one-chart"></div>
              </div>
              <div id="m-box">
                <div id="twe-chart"></div>
              </div>
              <div id="m-box">
                <div id="tre-chart"></div>
              </div>
            </div>
            <div class="sources"></div>
          </div>
        </div>
      </TabPane>
      <TabPane label="比特币的增长" name="name2">
        <div class="p-grow">
          <h2>基于比特币增长模式的比特币价格预测</h2>
          <p>预测不能保证未来。预测不能保证未来。预测不能保证未来。预测不能保证未来。预测不能保证未来。</p>
          <Tabs value="name1" :animated="false">
            <TabPane label="BTC的平均增长率" name="name1">
              <i-table :columns="columns1" :data="data1"></i-table>
            </TabPane>
            <TabPane label="来源" name="name2">
            </TabPane>
          </Tabs>
        </div>
      </TabPane>
      <TabPane label="其他科技行业" name="name3">
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    name: 'prediction',
    data () {
      return {
        columns1: [
          {
            title: '预测',
            key: 'name'
          },
          {
            title: '2019',
            key: 'age'
          },
          {
            title: '2020',
            key: 'address'
          },
          {
            title: '2021',
            key: 'date'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    mounted () {
      const that = this;
      that.intCharts();
    },
    methods: {
      intCharts: function () {
        const that = this;
        let chartBox = ['one-chart','twe-chart','tre-chart'];
        for(let i = 0; i < chartBox.length; i++){
          let MapContainer = document.getElementById('m-box').offsetWidth;
          let Chart = document.getElementById(chartBox[i]);
          Chart.style.width = MapContainer + 'px';
          if(MapContainer < 768) {
            Chart.style.height = MapContainer/5*3 + 'px';
          } else {
            Chart.style.height = MapContainer/5*1 + 'px';
          }
          let myChart = this.$echarts.init(Chart);
          myChart.setOption(
            {
              xAxis: [
                {
                  type: 'category',
                  data: ['1%','2%','4%','8%','16%','32%'],
                  axisPointer: {
                    type: 'shadow'
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  axisLabel: {
                    formatter: '$ {value}'
                  }
                }
              ],
              series: [
                {
                  name:'Mkt.Cap',
                  type:'line',
                  label: {
                    normal: {
                      show: true,
                      position: 'top'
                    }
                  },
                  data:[5855, 8522, 16982, 15982, 12333, 18252]
                }
              ]
            }
          );
        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .prediction {
    padding: 0;
    background-color: #fff
  }
  .flows .title h2 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .flows .title p {
    text-align: center;
    font-size: 14px;
  }
  .p-grow h2 {
    margin: 20px 0 20px;
    text-align: center;
  }
  .p-grow > p {
    text-align: center;
    font-size: 13px;
  }
</style>
