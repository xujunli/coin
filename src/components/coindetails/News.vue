<template>
  <div class="news">
    <h2 class="hd">比特币新闻</h2>
    <Row :gutter="20">
      <Col :xs="24" :sm="12" v-for="(item,index) in newsList " :key="index" v-if="index < 4">
      <Card>
        <div class="news-box">
          <div class="img">
            <div>
              <img :src="item.imgUrl"/>
            </div>
          </div>
          <div class="box">
            <div>
              <p class="title">{{item.title}}</p>
              <p class="time">{{item.time}}</p>
            </div>
            <p class="message">{{item.message}}</p>
          </div>
        </div>
      </Card>
      </Col>
    </Row>
    <Page class="m-b-40 t-a-c" :total="100"/>
  </div>
</template>

<script>
  export default {
    name: 'Purpose',
    data () {
      return {
        newsList: [
          {
            imgUrl: require('@/assets/images/market-bg01.jpg'),
            title: '比特币现金ABC 0.18.0宣布，激活后比特币将有多个选择',
            time: '2018年8月24日',
            message: '通过不断的改进，努力让界面变得更加友好，使得用户使用更\n' +
            '加方便，明了。让用户的体验不断提升，能够更好的了解货币\n' +
            '的走势，让用户能够在第一时间了解最新的动态，用户可以评\n' +
            '价我们的服务加方便，明了。让用户的体验不断提升.'
          },
          {
            imgUrl: require('@/assets/images/market-bg02.jpg'),
            title: '比特币现金ABC 0.18.0宣布，激活后比特币将有多个选择',
            time: '2018年8月24日',
            message: '通过不断的改进，努力让界面变得更加友好，使得用户使用更\n' +
            '加方便，明了。让用户的体验不断提升，能够更好的了解货币\n' +
            '的走势，让用户能够在第一时间了解最新的动态，用户可以评\n' +
            '价我们的服务加方便，明了。让用户的体验不断提升.'
          },
          {
            imgUrl: require('@/assets/images/market-bg03.jpg'),
            title: '比特币现金ABC 0.18.0宣布，激活后比特币将有多个选择',
            time: '2018年8月24日',
            message: '通过不断的改进，努力让界面变得更加友好，使得用户使用更\n' +
            '加方便，明了。让用户的体验不断提升，能够更好的了解货币\n' +
            '的走势，让用户能够在第一时间了解最新的动态，用户可以评\n' +
            '价我们的服务加方便，明了。让用户的体验不断提升.'
          },
          {
            imgUrl: require('@/assets/images/market-bg01.jpg'),
            title: '比特币现金ABC 0.18.0宣布，激活后比特币将有多个选择',
            time: '2018年8月24日',
            message: '通过不断的改进，努力让界面变得更加友好，使得用户使用更\n' +
            '加方便，明了。让用户的体验不断提升，能够更好的了解货币\n' +
            '的走势，让用户能够在第一时间了解最新的动态，用户可以评\n' +
            '价我们的服务加方便，明了。让用户的体验不断提升.'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hd {
    margin: 30px 0 20px;
    text-align: center;
  }
  .news-box {
    overflow: hidden
  }
  .news-box .img {
    padding-bottom: 99999px;
    margin: 0 0 -99999px;
    float: left;
    display: block;
    width: 320px;
  }
  .news-box .img div {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .news-box .img img {
    display: block;
    width: 100%;
    min-height: 100%;
  }
  .news-box .box {
    padding-bottom: 99999px;
    margin: 0 0 -99999px 345px;
    width: auto;
  }
  .news-box .box div {
    padding: 10px 0;
    border-bottom: 1px solid #c3c3c3;
  }
  .news-box .title {
    margin: 0 0 6px;
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
  .news-box .message {
    margin-top: 15px;
    height: 60px;
    line-height: 15px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: 12px;
    color: #666
  }
  .ivu-card-bordered {
    margin-bottom: 30px;
  }
  @media (max-width: 767px){
    .news-box .img {
      padding-bottom: 0;
      margin: 0 ;
      float: none;
      display: block;
      width: 100%;
    }
    .news-box .box {
      padding-bottom: 0;
      margin: 0;
      width: auto;
    }
    .ivu-card-bordered {
      margin-bottom: 10px;
    }
    .ivu-page {
      margin-top: 20px;
    }
  }
</style>
