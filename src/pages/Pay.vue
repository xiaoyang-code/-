<template>
  <div id="paymeng_all">
    <div id="divd">
      <div id="payment_top">
        <!----> <i class="van-icon van-icon-arrow-left">
          <!----></i>
        <p>确认付款</p>
        <p></p>
      </div>
      <ul id="paymeng_content">
        <li><i class="van-icon van-icon-gold-coin-o">
            <!----></i>
          <div>
            <p>商品总额: <span>￥1</span></p>
            <p>订单号: ￥200720211169380005</p>
          </div>
        </li>
        <li><i class="van-icon van-icon-location-o">
            <!----></i>
          <div>
            <p>张杰 &nbsp;123123123</p>
            <p>1112123123</p>
          </div>
        </li>
      </ul>
      <!---->
      <div id="payment_foot">微信支付 ￥1</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style lang="less">
#payment_top {
  width: 4.6rem;
  height: 0.72rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  i {
    font-size: 0.24rem;
  }
  p {
    font-size: 0.2rem;
  }
}
#paymeng_content {
  // width: 100%;
  // min-height: 101%;
  > li {
    height: 1.17rem;
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    border-top: 0.01rem solid #e9e9e9;
    i {
      font-size: 0.32rem;
      color: #f8662f;
    }
    > div {
      margin-left: 0.25rem;
      height: 0.57rem;
      > p:nth-of-type(1) {
        font-size: 0.2rem;
        span {
          color: #d00000;
          font-size: 0.16rem;
        }
      }
      > p:nth-of-type(2) {
        margin-top: 0.2rem;
        color: #999;
        font-size: 0.14rem;
      }
    }
  }
  > li:nth-of-type(2) {
    i {
      color: #5a9fec;
    }
  }
}
#payment_foot {
  width: 100%;
  height: 0.7rem;
  background: #b7282e;
  color: white;
  text-align: center;
  line-height: 0.7rem;
  font-size: 0.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>