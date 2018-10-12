<template>
  <div class="purpose">
    <h2>Bitcoin project purpose and description</h2>
    <Row>
      <Col span="16" offset="4" class="box">
        <div class="info">
          <h4 class="title">Bitcoin clarity of purpose</h4>
          <p class="message">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </p>
          <h4 class="title">Bitcoin purpose and aspects</h4>
          <p class="message">Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.</p>
          <h4 class="title">Bitcoin additional differentiation against competition</h4>
          <p class="message">Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>
        </div>
      </Col>
      <Col span="16" offset="4" class="box"><iframe id="video" width="793" height="446" src="https://www.youtube.com/embed/QtvI72mjGiQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></Col>
      <Col span="24">
        <div class="dec">
          <p class="title">Short description</p>
          <p class="message">Bitcoin is an innovative payment network and a new kind of money.
            Bitcoin uses peer-to-peer technology to operate with no central authority or banks;
            managing transactions and the issuing of bitcoins is carried out collectively by the network.
            Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part.
            Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>
          <p class="title">Abstract</p>
          <p class="message">Bitcoin is an innovative payment network and a new kind of money.
            Bitcoin uses peer-to-peer technology to operate with no central authority or banks;
            managing transactions and the issuing of bitcoins is carried out collectively by the network.
            Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part.
            Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'Purpose',
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {

    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .purpose h2 {
    margin: 20px 0 20px;
    text-align: center;
  }
  .purpose .info {
    padding: 15px;
    margin-bottom: 24px;
    border: 1px solid #b5e4f6;
    border-radius: 2px;
    background-color: #d4e9fa;
    color: #31708f;
  }
  .purpose .info .title {
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
  }
  .purpose .info .message {
    margin-bottom: 10px;
    text-align: center;
    font-size: 14px;
  }
  .purpose .dec {
    margin: 20px 0;
  }
  .purpose .dec .title {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .purpose .dec .message {
    margin-bottom: 10px;
    font-size: 14px;
  }
  #video {
    display: block;
    margin: 0;
    width: 100%;
  }
  @media (max-width: 767px){
    .purpose .box {
      margin: 0;
      width: 100%
    }
    #video {
      display: block;
      margin: 0;
      width: 100%;
      height: 200px;
    }
  }
</style>
