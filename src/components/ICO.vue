<template>
    <div id="coin-list">
      <div class="coin-tab f-j-sb f-a-c">
        <SelfPage></SelfPage>
        <Breadcrumb>
          <BreadcrumbItem v-for="(item,index) in overview" to="/" :key="index">{{item.title}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="set-box f-j-e">
          <div class="filter">
            <div class="f-j-sb f-a-c" @click="filterMenu">
              <i class="fa fa-filter f-c-fae199" aria-hidden="true"></i>
              <span class="m-l-3">筛选</span>
            </div>
            <div class="filter-box" v-show="filter">
              <h3 class="m-b-20">过滤ICO</h3>
              <p>过滤评级</p>
              <Slider v-model="slider" size="small" range></Slider>
              <p>类别</p>
              <Select class="m-10-0" v-model="model10" size="small" style="width:100%">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <p>平台</p>
              <Select class="m-10-0" v-model="model10" size="small" style="width:100%">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <p>国家</p>
              <Select class="m-10-0" v-model="model10" size="small" style="width:100%">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <p>验收</p>
              <Select class="m-10-0" v-model="model10" size="small" style="width:100%">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <p>奖金</p>
              <RadioGroup class="m-10-0" v-model="phone">
                <Radio label="apple">
                  <span>是</span>
                </Radio>
                <Radio label="android">
                  <span>否</span>
                </Radio>
                <Radio label="windows">
                  <span>全部</span>
                </Radio>
              </RadioGroup>
              <p>赏金</p>
              <RadioGroup class="m-10-0" v-model="phone">
                <Radio label="apple">
                  <span>是</span>
                </Radio>
                <Radio label="android">
                  <span>否</span>
                </Radio>
                <Radio label="windows">
                  <span>全部</span>
                </Radio>
              </RadioGroup>
              <p>代售代币</p>
              <Slider class="m-10-0" v-model="slider" size="small" range></Slider>
              <div class="f-j-st f-a-c m-t-20">
                <div class="submit m-r-10">提交</div>
                <div class="reset">重置</div>
              </div>
            </div>
          </div>
          <div class="clear">
            <div class="f-j-sb f-a-c">
              <i class="fa fa-refresh f-c-fae199" aria-hidden="true"></i>
              <span class="m-l-3">刷新</span>
            </div>
          </div>
        </div>
      </div>
      <div class="coin-box">
        <div class="coin-name">
            <div class="title">
                <p>#</p>
                <p>Name</p>
            </div>
            <div class="content" v-for="(item, index) in coinList">
                <p>{{index + 1}}</p>
                <router-link :to="{ name: 'CoinShow',query:{id: item.id }}" tag="p" class="f-j-a-c">
                  <img :src="item.icoImg"/>
                  <p>{{item.icoName}}</p>
                </router-link>
            </div>
        </div>
        <div class="box">
            <table id="c-table">
                <thead class="title">
                    <tr>
                        <th class="cell"  v-for="(item,index) in collumnName" :key="index">
                          {{item.showName}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="content" v-for="item in coinList">
                      <td class="cell">
                        {{item.description}}
                      </td>
                      <td class="cell">
                        <span>{{item.reviewScore}}</span>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </td>
                      <td class="cell">
                        {{item.icoPrice}}
                      </td>
                      <td class="cell">
                        {{item.preIcoPrice}}
                      </td>
                      <td class="cell">
                        {{item.softCap}}
                      </td>
                      <td class="cell">
                        {{item.hardCap}}
                      </td>
                      <td class="cell">
                        {{item.startDate}}
                      </td>
                      <td class="cell">
                        {{item.endDate}}
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <Page class="m-30-0 t-a-c" :total="100"/>
    </div>
</template>

<script>
  import SelfPage from '@/components/SelfPage.vue'
export default {
  name: 'ICO',
  data () {
    return {
      coinList:[
        {
          id: 0,
          icoName: "bitcoin",
          icoImg: require('@/assets/images/eos-adc92c47.webp'),
          description:'比特币发行单位',
          reviewScore: 2.7,
          icoPrice: 'CN￥4393',
          preIcoPrice: 0.1,
          softCap: 15000000,
          hardCap: 25000000,
          startDate: '2018/08/31',
          endDate: '2019/08/31'
        },
        {
          id: 1,
          icoName: "bitcoin",
          icoImg: require('@/assets/images/eos-adc92c47.webp'),
          description:'比特币发行单位',
          reviewScore: 2.7,
          icoPrice: 'CN￥4393',
          preIcoPrice: 0.1,
          softCap: 15000000,
          hardCap: 25000000,
          startDate: '2018/08/31',
          endDate: '2019/08/31'
        },
        {
          id: 2,
          icoName: "bitcoin",
          icoImg: require('@/assets/images/eos-adc92c47.webp'),
          description:'比特币发行单位',
          reviewScore: 2.7,
          icoPrice: 'CN￥4393',
          preIcoPrice: 0.1,
          softCap: 15000000,
          hardCap: 25000000,
          startDate: '2018/08/31',
          endDate: '2019/08/31'
        }
      ],
      collumnName: [
        {
          showName: '描述'
        },
        {
          showName: '评分'
        },
        {
          showName: 'ICO价格'
        },
        {
          showName: '预ICO价格'
        },
        {
          showName: '软帽'
        },
        {
          showName: '硬帽'
        },
        {
          showName: '开始日期'
        },
        {
          showName: '结束日期'
        }
      ],
      filter: false, //筛选框状态
      value: '1', //筛选tab初始值
      cityList: [ //输入框值
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model10: [], //输入框选中值
      slider: [20, 50], //滑动条
      phone: 'apple', //单选框
      overview: [
        {
          title: '目前的ICO',
          link: 'ICO'
        },
        {
          title: '即将上市的ICO',
          link: 'ICO'
        },
        {
          title: '存档的ICO',
          link: 'ICO'
        },
        {
          title: '发布ICO',
          link: 'ICO'
        },
        {
          title: '广告ICO',
          link: 'ICO'
        }
      ]
    }
  },
  mounted () {
    const that = this;
    that.tabResize()
  },
  methods: {
    //栅格大小调整
    tabResize: function () {
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
      }
    },
    //筛选框打开关闭
    filterMenu: function () {
      const that = this;
      if(that.filter === false) {
        that.filter = true
      } else {
        that.filter = false
      }
    },
  },
  components: {
    SelfPage: SelfPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #coin-list {
      min-height: 100%;
      padding: 124px 20px 250px;
    }
    .coin-box {
      position: relative;
    }
    .coin-box .title p,.coin-box .cell {
      text-align: center;
      font-size: 13px;
      color: #313534;
    }
    .coin-box .title p,.coin-box .title .cell {
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
      padding: 5px 7px;
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
    .coin-tab {
      margin-bottom: 20px;
    }
    .page-info {
      font-size: 14px;
    }
    .set-box > div {
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
      position: relative;
    }
    .filter-box {
      padding: 20px;
      position: absolute;
      top: 100%;
      right: -91px;
      width: 500%;
      z-index: 998;
      background-color: #fff
    }
    .filter-box .submit {
      padding: 10px 15px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      border-radius: 5px;
      background-color: #147f78;
      border: solid 1px #0f605b;
      line-height: 16px;
    }
    .filter-box .reset {
      padding: 10px 15px;
      line-height: 16px;
      text-align: center;
      font-size: 14px;
      color: #333;
      border-radius: 5px;
      background-colro: #fff;
      border: solid 1px #dddddd;
    }
    @media (max-width: 767px){
      #coin-list {
        min-height: 100%;
        padding: 65px 10px 160px;
      }
      .coin-tab {
        padding: 30px 0 10px;
        margin: 0;
        flex-direction: column;
      }
      .coin-tab .page-info {
        width: 100%;
        order: 3
      }
      .coin-tab .ivu-breadcrumb {
        order: 1;
        text-align: center
      }
      .coin-tab .set-box {
        margin: 10px 0 20px;
        order: 2
      }
      .set-box > div {
        margin-left: 5px;
        padding: 5px 10px;
      }
      .filter-box {
        padding: 20px;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 998;
        box-sizing: border-box;
        background-color: #fff
      }
    }
</style>
