<template>
    <div id="global">
        <h1 class="hd">Global Cryptocurrency Charts - Total Crypto Market Cap and Volume</h1>
        <div class="datapicker">
          <DatePicker :value="date" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="display: block;width: 200px;margin: 0 auto;"></DatePicker>
        </div>
        <div id="globalchart"></div>
    </div>
</template>
<script>
export default {
  name: 'Global',
  data () {
    return {
      date: ['2016-01-01', '2016-02-15']
    }
  },
  mounted () {
    const that = this;
    that.intCharts();
  },
  methods: {
    intCharts: function () {
      const that = this;
      let MapContainer = document.getElementById('global').offsetWidth;
      let globalChart = document.getElementById('globalchart');
      globalChart.style.width = MapContainer + 'px';
      globalChart.style.height = MapContainer/3*1 + 'px';
      let myChart = this.$echarts.init(globalChart);
      myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data:['24h Vol.','Mkt.Cap']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                formatter: '{value} bn'
              }
            }
          ],
          series: [
            {
              name:'24h Vol.',
              type:'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name:'Mkt.Cap',
              type:'line',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #global {
    min-height: 100%;
    padding: 124px 20px 250px;
    width: 100%;
  }
  #global h1 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: #313534;
    margin-bottom: 20px;
  }
  .datapicker {
    margin: 60px 0 40px;
  }
</style>
