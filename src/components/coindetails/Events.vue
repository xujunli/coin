<template>
  <div class="news">
    <h2>比特币活动和路线图</h2>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in events" :key="index">
        <div class="item">
          <div class="img">
            <img :src="item.imgUrl"/>
          </div>
          <div class="box">
            <p class="time">{{item.time}}</p>
            <p class="title">{{item.title}}</p>
            <p class="message">{{item.message}}</p>
            <p class="picker"><i class="fa fa-thumbs-up" aria-hidden="true"></i><span>{{item.picker}}</span></p>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <Row :gutter="20">
      <Col span="24">
      <i-table :columns="columns1" :data="data1"></i-table>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'Purpose',
    data () {
      return {
        swiperOption: {
          autoplay:true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        events: [
          {
            imgUrl: require('@/assets/images/event-bg.jpg'),
            time: '2018年8月24日',
            title: 'CME:9月最后交易',
            message: '通过不断的改进，努力让界面变得更加友好，使得用户使用更',
            picker: '83%确认（131票）'
          },
          {
            imgUrl: require('@/assets/images/event-bg.jpg'),
            time: '2018年8月24日',
            title: 'CME:9月最后交易',
            message: '通过不断的改进，努力让界面变得更加友好，使得用户使用更',
            picker: '83%确认（131票）'
          },
          {
            imgUrl: require('@/assets/images/event-bg.jpg'),
            time: '2018年8月24日',
            title: 'CME:9月最后交易',
            message: '通过不断的改进，努力让界面变得更加友好，使得用户使用更',
            picker: '83%确认（131票）'
          }
        ],
        columns1: [
          {
            title: '日期',
            key: 'name'
          },
          {
            title: '标题',
            key: 'age'
          },
          {
            title: '描述',
            key: 'address'
          },
          {
            title: '验证',
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
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    text-align: center;
    margin: 30px 0 20px;
  }
  .item {
    padding: 0 100px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .item .img {
    overflow: hidden;
  }
  .item .img img {
    display: block;
    width: 100%;
  }
  .item .box {
    margin-left: 100px;
  }
  .item .box .time {
    font-size: 12px;
    color: #999
  }
  .item .box .title {
    font-size: 16px;
    color: #000
  }
  .item .box .message {
    font-size: 12px;
    color: #999
  }
  .item .box .picker {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #666
  }
  .ivu-row {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  @media (max-width: 767px){
    .item {
      padding: 0;
      display: block;
    }
    .item .box {
      margin-left: 0;
    }
  }
</style>
