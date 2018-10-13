<template>
    <div class="overview">
      <div class="o-tab">
        <Anchor>
          <AnchorLink href="#o-c-box" title="PRICE CHART" />
          <AnchorLink href="#static_position" title="PRICE FACTS" />
          <AnchorLink href="#Anchor_props" title="UPDATES" />
          <AnchorLink href="#Anchor_events" title="PERFORMANCE STATS" />
          <AnchorLink href="#Anchor_history" title="HISTORICAL PERFORMANCE" />
        </Anchor>
      </div>
      <div id="o-c-box" class="m-t-30">
          <div id="o-charts"></div>
      </div>
      <div id="static_position" class="content-box">
        <Row :gutter="20">
          <Col :sm="8" :xs="24">
            <Card>
              <p slot="title">
                比特币价格波动
              </p>
              <ul id="list-price">
                <li v-for="item in movieList" class="f-j-sb">
                  <span>{{ item.name }}</span>
                  <span>{{ item.rate }}</span>
                </li>
              </ul>
            </Card>
          </Col>
          <Col :sm="8" :xs="24">
          <Card>
            <p slot="title">我今天应该买比特币吗</p>
            <div id="gauge-box">
              <div id="gauge"></div>
            </div>
          </Card>
          </Col>
          <Col :sm="8" :xs="24">
            <Card>
              <p slot="title">Algo. 得分等级</p>
              <div id="grade-box">
                <i-circle :percent="80">
                  <span class="demo-Circle-inner" style="font-size:24px">80%</span>
                </i-circle>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div id="Anchor_props" class="content-box">
        <h2 class="t-a-c m-b-20">Today’s Bitcoin News &amp; Event Updates</h2>
        <Row :gutter="20">
          <Col :sm="8" :xs="24" v-for="(item,index) in newsList " :key="index" v-if="index < 3">
            <Card>
              <div class="news-box">
                <div class="img">
                  <img :src="item.imgUrl"/>
                </div>
                <p class="title">{{item.title}}</p>
                <p class="time">{{item.time}}</p>
                <span class="link" @click="See(item.newsLink)">MORE</span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div id="Anchor_events" class="content-box">
        <h3 class="f-s-20 t-a-c m-b-20">比特币价格统计</h3>
        <Row :gutter="20">
          <Col span="24">
            <i-table :columns="columns2" :data="data2"></i-table>
          </Col>
        </Row>
      </div>
      <div id="Anchor_history" class="content-box">
        <h3 class="f-s-20 t-a-c m-b-20">比特币历史投资回报率</h3>
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
  name: 'Overview',
  data () {
    return {
      anchor: [
        {value: 'Overview',link: 'Overview'},
        {value: 'Charts',link: 'Charts'},
        {value: 'Analysis',link: 'Analysis'}
      ],
      newsList: [
        {
          imgUrl: require('@/assets/images/market-bg01.jpg'),
          title: '比特币现金ABC 0.18.0宣布，激活后比特币将有多个选择',
          time: '2018年8月24日',
          newsLink: 'http://www.baidu.com'
        },
        {
          imgUrl: require('@/assets/images/market-bg02.jpg'),
          title: '比特币现金ABC 0.18.0宣布，激活后比特币将有多个选择',
          time: '2018年8月24日',
          newsLink: 'http://www.baidu.com'
        },
        {
          imgUrl: require('@/assets/images/market-bg03.jpg'),
          title: '比特币现金ABC 0.18.0宣布，激活后比特币将有多个选择',
          time: '2018年8月24日',
          newsLink: 'http://www.baidu.com'
        }
      ],
      movieList: [
        {
          name: 'The Shawshank Redemption',
          rate: 9.6
        },
        {
          name: 'Leon:The Professional',
          rate: 9.4
        },
        {
          name: 'Farewell to My Concubine',
          rate: 9.5
        },
        {
          name: 'Forrest Gump',
          rate: 9.4
        },
        {
          name: 'Life Is Beautiful',
          rate: 9.5
        },
        {
          name: 'Spirited Away',
          rate: 9.2
        },
        {
          name: 'Schindler List',
        rate: 9.4
        },
        {
          name: 'The Legend of 1900',
          rate: 9.2
        },
        {
          name: 'WALL·E',
          rate: 9.3
        },
        {
          name: 'Inception',
          rate: 9.2
        }
      ],
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
      ],
      columns2: [
        {
          title: '问题',
          key: 'question'
        },
        {
          title: '答案',
          key: 'answer'
        }
      ],
      data2: [
        {
          question: '比特币接下来还会涨吗？',
          answer: '你猜'
        },
        {
          question: '比特币接下来还会涨吗？',
          answer: '你猜'
        },
        {
          question: '比特币接下来还会涨吗？',
          answer: '你猜'
        },
        {
          question: '比特币接下来还会涨吗？',
          answer: '你猜'
        }
      ]
    }
  },
  created () {
    const that = this;
    that.$axios.get("https://api.coinmarketcap.com/v2/ticker/").then(res=>{
      console.log(res);
    }).catch(function (err) {
      console.log(err)
    });
  },
  mounted () {
    const that = this;
    that.intCharts1();
    that.intCharts2()
  },
  methods: {
    intCharts1: function () {
      const that = this;
      let MapContainer = document.getElementById('o-c-box').offsetWidth; //图表一box
      let globalChart = document.getElementById('o-charts');   //图表一
      globalChart.style.width = MapContainer + 'px';
      if(MapContainer < 768){
        globalChart.style.height = MapContainer/4*3 + 'px';
      } else {
        globalChart.style.height = MapContainer/3*1 + 'px';
      }
      var base = +new Date(1968, 9, 3);    //图表一模拟数据
      var oneDay = 24 * 3600 * 1000;
      var date = [];
      var data = [Math.random() * 300];
      for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }                                       //图表一模拟数据
      let myChart = this.$echarts.init(globalChart);  //初始化图表一
      myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          title: {
            left: 'center',
            text: 'Bitcoin Price Chart',
          },
          grid: {
            left: '30',
            right: '30'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [
            {
              type: 'inside',
              start: 0,
              end: 10
            },
            {
              start: 0,
              end: 10,
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
           }
          ],
          series: [
            {
              name:'模拟数据',
              type:'line',
              smooth:true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: '#ae7918'
                }
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#ae7918' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#FFF' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              },
              data: data
            }
          ]
        }
      );
    },
    intCharts2: function () {
      const that = this;
      let gaugeBox = document.getElementById('gauge-box').offsetWidth;
      let gauge = document.getElementById('gauge');
      let grade = document.getElementById('grade-box');
      let price = document.getElementById('list-price');
      gauge.style.width = gaugeBox + 'px';
      gauge.style.height = gaugeBox/6*4 + 'px';
      grade.style.height = gaugeBox/6*4 + 'px';
      price.style.height = gaugeBox/6*4 + 'px';
      let myChart = this.$echarts.init(gauge);  //初始化图表2
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        grid: {
          left: '0',
          right: '0'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
          }
        ]
      });
    },
    See: function (e) {
      console.log(e);
      window.location.href = e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #coin-show {
    margin-top: 200px;
    position: relative;
  }
  .overview {
    box-sizing: border-box;
    background-color: #fff
  }
  .content-box {
    margin-top: 30px;
    padding: 0;
  }
  .placeholder {
    height: 100px;
  }
  .o-tab {
    background: #1BABA1;
    color: #fff
  }
  .news-box .img {
    display: block;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .news-box .img img {
    display: block;
    width: 100%;
    min-height: 100%;
  }
  .news-box .title {
    margin: 6px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 14px;
    font-size: 14px;
    color: #666
  }
  .news-box .time {
    line-height: 12px;
    font-size: 12px;
    color: #999
  }
  .news-box .link {
    display: block;
    margin: 15px auto 0;
    width: 140px;
    height: 30px;
    line-height: 30px;
    background-color: #e3d090;
    text-align: center;
    font-size: 12px;
    color: #fff;
    cursor: pointer
  }
  @media (max-width: 767px){
    .ivu-col-span-xs-24,.ivu-col-span-24 {
      margin-bottom: 10px;
    }
  }

</style>
