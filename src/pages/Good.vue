<template>
  <div class="good">
    <div id="renqi">
      <div class="banner">banner</div>

      <div>
        <p>男式天鹅绒保暖牛仔裤</p>
        <p>柔软中包裹充盈的热量，抗冬无惧</p>
        <div>
          <p>低价<span>￥1</span></p>
          <p>原价￥269</p>
          <p>库存200</p>
        </div>
      </div>
      <div>
        <p class="borderred">商品介绍</p>
        <p class="noborderred">商品评价</p>
      </div>
      <ul>
        <li>
            <i class="van-icon van-icon-user-circle-o">
            <!----></i>
          <div>
            <div>
              <p>123123</p>
              <p>好评</p>
            </div>
            <p>系统默认好评</p>
            <div>
              <p>2019-11-12 10:20:00</p>
              <p>选择规格: <span>牛仔外套:L（175/92A）</span></p>
            </div>
          </div>
        </li>
      </ul>

    </div>
  
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" @click="add" />
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>       
    <van-popup v-model="show"
               position="bottom"
               :style="{  }">
      <div id="liebxq">
        <div><img src="https://cdn.it120.cc/apifactory/2018/11/06/035117f304fe7d475f4f2b3b317e7719.png"
               alt="">
          <div>
            <p>{{title}}</p>
            <p>￥1</p>
          </div> <i class="van-icon van-icon-cross">
            <!----></i>
        </div>
        <div>
          <div>
            <p>牛仔尺码y颜色</p>
            <div>
              <div class="redwu">26(160/66A)</div>
              <div class="redwu">27(160/68A)</div>
              <div class="redwu">28(165/70A)</div>
              <div class="redd">29(165/72A)</div>
              <div class="redwu">30(170/74A)</div>
            </div>
          </div>
          <div>
            <p>牛仔裤</p>
            <div>
              <div class="redd">深蓝</div>
            </div>
          </div>
        </div>
        <!---->
        <div>
          <p>购买数量</p>
          <div class="van-stepper"><button type="button"
                    class="van-stepper__minus van-stepper__minus--disabled"
                    style="width: 0.5rem; height: 0.5rem;"></button><input type="number"
                   role="spinbutton"
                   aria-valuemax="Infinity"
                   aria-valuemin="1"
                   aria-valuenow="1"
                   class="van-stepper__input"
                   style="width: 0.56rem; height: 0.5rem;"><button type="button"
                    class="van-stepper__plus"
                    style="width: 0.5rem; height: 0.5rem;"></button></div>
        </div>
        <!---->
        <p>立即购买</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false,
      title:"123123"
    }
  },
  watch: {},
  computed: {},
  methods: {
    add(){
        this.show = true
    }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="less">
#renqi {
  > div:nth-of-type(1) {
    width: 100%;
    img {
      width: 100%;
      height: 5.2rem;
      display: block;
      margin: 0 auto;
    }
  }
  > div:nth-of-type(2) {
    width: 5rem;
    height: 1.24rem;
    background: #ffffff;
    padding-left: 0.2rem;
    border-bottom: 0.14rem solid #f5f5f5;
    > p:nth-of-type(1) {
      font-size: 0.22rem;
      color: #464646;
      margin-top: 0.3rem;
    }
    > p:nth-of-type(2) {
      font-size: 0.16rem;
      color: #b8b8b8;
      margin-top: 0.16rem;
    }
    > div {
      display: flex;
      margin-top: 0.2rem;
      > p:nth-of-type(1) {
        font-size: 0.14rem;
        color: #cc0c0c;
        width: 0.9rem;
        span {
          font-size: 0.2rem;
        }
      }
      > p:nth-of-type(2) {
        font-size: 0.14rem;
        color: #b8b8b8;
        margin-top: 0.06rem;
        width: 3.4rem;
      }
      > p:nth-of-type(3) {
        font-size: 0.14rem;
        color: #b8b8b8;
        margin-top: 0.06rem;
      }
    }
  }
  > div:nth-of-type(3) {
    width: 100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      width: 50%;
      height: 0.57rem;
      text-align: center;
      line-height: 0.57rem;
      font-size: 0.22rem;
    }
  }
  > div:nth-of-type(4) {
    width: 100%;
    overflow: hidden;
    ul {
      li {
        p {
          width: 100% !important;
          display: block !important;
          span {
            font-size: 0.2rem;
          }
        }
      }
    }
  }
  ul {
    width: 100%;
    li:nth-of-type(1) {
      margin-top: 0.1rem;
    }
    li {
      height: 0.47rem;
      line-height: 0.27rem;
      padding-left: 0.14rem;
      padding-right: 0.24rem;
    }
  }
  ul:nth-last-child(1) {
    li {
      height: 1.54rem;
      padding: 0 0.2rem;
      border-bottom: 0.01rem solid #e9e9e9;
      display: flex;
      > i {
        font-size: 0.8rem;
        margin-top: 0.18rem;
      }
      > div {
        margin-left: 0.14rem;
        > div:nth-of-type(1) {
          display: flex;
          align-items: center;
          margin-top: 0.18rem;
          p:nth-of-type(1) {
            font-size: 0.16rem;
          }
          p:nth-of-type(2) {
            width: 0.48rem;
            height: 0.32rem;
            border-radius: 0.06rem;
            color: white;
            text-align: center;
            line-height: 0.32rem;
            background: #b7282e;
            font-size: 0.16rem;
            margin-left: 0.2rem;
          }
        }
        > p:nth-of-type(1) {
          font-size: 0.16rem;
          margin-top: 0.1rem;
        }
        > div:nth-of-type(2) {
          display: flex;
          margin-top: 0.2rem;
          > p {
            font-size: 0.12rem;
            color: #b2b2b2;
          }
          > p:nth-of-type(2) {
            margin-left: 0.25rem;
          }
        }
      }
    }
  }
}
.img-lazyload {
  width: 2rem;
}
.img-lazyloaded {
  width: 100% !important;
  height: 1.3rem !important;
}
.borderred {
  border-bottom: 0.03rem solid #ff0000;
}
.noborderred {
  border-bottom: 0.03rem solid #ffffff;
}
#shop_foot {
  height: 100%;
  height: 0.68rem;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background: white;
  box-shadow: 0 0 5px 1px #bebebe;
  li {
    width: 0.75rem;
    height: 0.68rem;
    border-right: 0.01rem solid #e9e9e9;
    border-top: 0.01rem solid #e9e9e9;
    text-align: center;
    align-items: center;
    cursor: pointer;
    i {
      font-size: 0.3rem;
      line-height: 0.68rem;
    }
    .xintwo {
      color: #f7ba2a;
    }
  }
  > li:nth-of-type(2) {
    position: relative;
    p {
      position: absolute;
      top: 0.04rem;
      right: 0.05rem;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background: crimson;
      color: white;
      text-align: center;
      line-height: 0.25rem;
      font-size: 0.14rem;
    }
  }
  > li:nth-of-type(4) {
    width: 1.46rem;
    line-height: 0.68rem;
    font-size: 0.2rem;
  }
  > li:nth-of-type(5) {
    width: 1.46rem;
    font-size: 0.2rem;
    line-height: 0.68rem;
    background: #b7282e;
    color: white;
  }
}
#liebxq {
  // width: 100%;
  > div:nth-of-type(1) {
    height: 1.23rem;
    border-bottom: 0.01rem solid #e9e9e9;
    display: flex;

    > img {
      width: 0.85rem;
      height: 0.85rem;
      display: block;
      margin-left: 0.2rem;
      margin-top: 0.2rem;
    }
    > div:nth-of-type(1) {
      margin-left: 0.16rem;
      width: 3.5rem;
      > p:nth-of-type(1) {
        font-size: 0.17rem;
        margin-top: 0.3rem;
      }
      > p:nth-of-type(2) {
        font-size: 0.18rem;
        color: #d00000;
        margin-top: 0.24rem;
      }
    }
    > i {
      font-size: 0.3rem;
      margin-top: 0.12rem;
      color: #989898;
    }
  }
  > div:nth-of-type(2) {
    padding: 0.3rem 0;
    border-bottom: 0.01rem solid #e9e9e9;
    > div {
      > p {
        font-size: 0.16rem;
        margin-left: 0.2rem;
      }
      > div {
        display: flex;
        flex-wrap: wrap;
        > div {
          // >p{
          padding: 0.1rem 0.2rem;
          // border: 0.01rem solid #d9d9d9;
          border-radius: 0.06rem;
          margin-top: 0.1rem;
          margin-left: 0.1rem;
          // }
        }
      }
    }
    > div:nth-of-type(2) {
      margin-top: 0.24rem;
    }
  }
  > div:nth-of-type(3) {
    height: 0.98rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    > p {
      font-size: 0.16rem;
      letter-spacing: 0.01rem;
    }
  }
  > p:nth-of-type(1) {
    width: 100%;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.22rem;
    color: white;
    background: #b7282e;
  }
}
.redd {
  border: 0.01rem solid #b6272d;
}
.redwu {
  border: 0.01rem solid #d9d9d9;
}
</style>