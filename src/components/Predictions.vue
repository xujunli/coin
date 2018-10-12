<template>
    <div id="coin-list">
      <div class="f-j-e pre-tab">
        <div>
          根据各种增长模式估算1年的价格，预测不能保证未来
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
                  <p>{{item.name}}</p>
                </router-link>
            </div>
        </div>
        <div class="box">
            <table id="c-table">
                <thead class="title">
                    <tr>
                        <th class="cell" nowrap="nowrap"  v-for="(item,index) in collumnName" :key="index">
                          {{item.showName}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="content" v-for="item in coinList">
                      <td class="cell">
                        {{item.Price}}
                      </td>
                      <td class="cell">
                        {{item.twePercent}}
                      </td>
                      <td class="cell">
                        {{item.tenPercent}}
                      </td>
                      <td class="cell">
                        {{item.fiftyPercent}}
                      </td>
                      <td class="cell">
                        {{item.internetGrowth}}
                      </td>
                      <td class="cell">
                        {{item.mobileGrowth}}
                      </td>
                      <td class="cell">
                        {{item.googleGrowth}}
                      </td>
                      <td class="cell">
                        {{item.facebookGrowth}}
                      </td>
                      <td class="cell">
                        {{item.mZeoFlow}}
                      </td>
                      <td class="cell">
                        {{item.mOneFlow}}
                      </td>
                      <td class="cell">
                        {{item.mTweFlow}}
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
export default {
  name: 'ICO',
  data () {
    return {
      coinList:[
        {
          id: 0,
          name: "bitcoin",
          Price: '$6456.70',
          twePercent: '$6456.70',
          tenPercent: '$6456.70',
          fiftyPercent: '$6456.70',
          internetGrowth: '$6456.70',
          mobileGrowth: '$6456.70',
          googleGrowth: '$6456.70',
          facebookGrowth: '$6456.70',
          mZeoFlow: '$6456.70',
          mOneFlow: '$6456.70',
          mTweFlow: '$6456.70'
        },
        {
          id: 0,
          name: "bitcoin",
          Price: '$6456.70',
          twePercent: '$6456.70',
          tenPercent: '$6456.70',
          fiftyPercent: '$6456.70',
          internetGrowth: '$6456.70',
          mobileGrowth: '$6456.70',
          googleGrowth: '$6456.70',
          facebookGrowth: '$6456.70',
          mZeoFlow: '$6456.70',
          mOneFlow: '$6456.70',
          mTweFlow: '$6456.70'
        },
        {
          id: 0,
          name: "bitcoin",
          Price: '$6456.70',
          twePercent: '$6456.70',
          tenPercent: '$6456.70',
          fiftyPercent: '$6456.70',
          internetGrowth: '$6456.70',
          mobileGrowth: '$6456.70',
          googleGrowth: '$6456.70',
          facebookGrowth: '$6456.70',
          mZeoFlow: '$6456.70',
          mOneFlow: '$6456.70',
          mTweFlow: '$6456.70'
        }
      ],
      collumnName: [
        {
          showName: '价格'
        },
        {
          showName: '平均2%比特币同比增长（2010年-16年）'
        },
        {
          showName: '平均10%比特币同比增长（2010年-16年）'
        },
        {
          showName: '平均50%比特币同比增长（2010年-16年）'
        },
        {
          showName: '平均，互联网同比增长（1995-2017）'
        },
        {
          showName: '平均，手机同比增长（1993-2013）'
        },
        {
          showName: '平均，谷歌同比增长（1993-2013）'
        },
        {
          showName: '平均，FaceBook同比增长（1993-2013）'
        },
        {
          showName: '4%全球M0资金流入加密市场'
        },
        {
          showName: '4%全球M1资金流入加密市场'
        },
        {
          showName: '4%全球M2资金流入加密市场'
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
    }
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
    #coin-list .title p,#coin-list .cell {
      text-align: center;
      font-size: 13px;
      color: #313534;
    }
    #coin-list .title p,#coin-list .title .cell {
      height: 38px;
      line-height: 38px;
      background-color: #161623;
      color: #FFF;
      border-right: 1px solid #7c7c82;
      font-weight: 600;
      font-size: 14px;
    }
    .coin-name .content p,#coin-list .content .cell {
      position: relative;
      padding: 5px 7px;
      height: 55px;
      line-height: 45px;
      max-height: 55px;
    }
    #coin-list .content p::after,#coin-list .content .cell::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: #c4c4c4;

    }
    #coin-list .content .cell p {
      height: 14px;
      line-height: 14px;
      text-align: center;
      font-size: 14px;
      color: #313534;
    }
    #coin-list .collect i {
      color: #313534;
    }
    #coin-list .chart {
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
      padding: 0 5px;
      /*min-width: 100px;*/
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
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
    .pre-tab {
      background-color: #000000;
      border-color: #000000;
      color: #fff;
    }
    .pre-tab div {
      padding: 15px 12px;
      line-height: 24px;
    }
</style>
