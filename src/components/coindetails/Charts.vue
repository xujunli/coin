<template>
  <div id="charts-box">
    <div class="datapicker f-j-c f-a-c">
      <p class="f-s-16">Date range:</p>
      <DatePicker :value="date" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="display: block;width: 200px;"></DatePicker>
    </div>
    <div id="s-chart"></div>
    <div id="Anchor_history" class="content-box">
      <h2 class="f-s-20 t-a-c m-b-30">Bitcoin price historical Open - High - Low - Close - Volume data</h2>
      <div class="f-j-e f-a-c m-b-20">
        <p class="f-s-16">Date range:</p>
        <DatePicker :value="date1" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="display: block;width: 200px;"></DatePicker>
      </div>
      <Row :gutter="20">
        <Col span="24">
        <i-table :columns="columns1" :data="data1"></i-table>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data () {
    return {
      date: ['2016-01-01', '2016-02-15'],
      date1: ['2016-01-01', '2016-02-15'],
      columns1: [
        {
          title: 'Month',
          key: 'name'
        },
        {
          title: '2016',
          key: 'age'
        },
        {
          title: '2017',
          key: 'address'
        },
        {
          title: '2018',
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
      let MapContainer = document.getElementById('charts-box').offsetWidth;
      let Chart = document.getElementById('s-chart');
      Chart.style.width = MapContainer + 'px';
      if(MapContainer < 768){
        Chart.style.height = MapContainer/5*4+ 'px';
      } else {
        Chart.style.height = MapContainer/3*1 + 'px';
      }
      let myChart = this.$echarts.init(Chart);
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
          grid: {
            left: '40',
            right: '30'
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
  .datapicker {
    margin: 60px 0 40px;
    position: relative;
  }
</style>
