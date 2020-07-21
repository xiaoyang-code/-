<template>
  <div class="detail">
    <div v-if="loading">
      加载中
    </div>
    <div v-else>
      <div id="banner">
        <van-swipe class="my-swipe"
                   :autoplay="3000"
                   indicator-color="white">
          <van-swipe-item v-for="p in detail.pics"
                          :key="p.id">
            <img :src="p.pic"
                 alt="">
          </van-swipe-item>
        </van-swipe>
        <div class="back"
             @click="goback">
          <van-icon name="arrow-left"
                    size="25px" />
        </div>
      </div>
      <div class="desc">
        <p>{{ detail.basicInfo.name }}</p>
        <p>{{ detail.basicInfo.characteristic }}</p>
        <div>
          <p>低价<span>￥{{ detail.basicInfo.minPrice }}</span></p>
          <p>原价￥{{ detail.basicInfo.originalPrice }}</p>
          <p>库存{{ detail.basicInfo.stores }}</p>
        </div>
      </div>
      <!-- 
      <div class="tab">
          <div class="title">
              <ul>
                  <li :class="{'active':n==0}" @click="tab(0)" >商品介绍</li>
                  <li :class="{'active':n==1}" @click="tab(1)">商品评价</li>
              </ul>
          </div>
          <div>
              <div v-show="n==0">11111111111</div>
              <div v-show="n==1">2222222222</div>
          </div>

      </div> -->
      <van-tabs @click="onClick"
                @change="ch">
        <van-tab title="商品介绍">
          <div v-html="detail.content">

          </div>

        </van-tab>
        <van-tab title="商品评价">
          <ul class="comment">
            <li v-for="plnbh of comments"
                :key="item.id">
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
        </van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="show"
               closeable
               position="bottom">
      <div id="liebxq">
        <div>
          <img :src="detail.basicInfo.pic"
               alt="">
          <div>
            <p>{{ detail.basicInfo.name }}</p>
            <p>￥{{ detail.basicInfo.minPrice }}</p>
          </div>
        </div>
        <div>
          <div v-for="(p,index1) in ps"
               :key="p.id">
            <p>{{ p.name }}</p>
            <div>
              <div class="redwu"
                   :class="{'active':p2.checked}"
                   @click="select(index1,index2)"
                   v-for="(p2,index2) in p.childsCurGoods"
                   :key="p2.id">
                {{ p2.name }}
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div>
          <p>购买数量</p>
          <van-stepper v-model="value" />
        </div>
        <!---->
        <p @click="buy">立即购买</p>
      </div>
    </van-popup>
    <van-goods-action>
      <van-goods-action-icon   icon="chat-o"  text="客服" color="#07c160" />
      <van-goods-action-icon   icon="cart-o"  text="购物车" :badge="$store.getters.nums" @click="gocart"  />
      <van-goods-action-icon   icon="star"    text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger"  text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  components: {},
  props: {},
  data() {
    return {
      detail: {},
      loading: true,
      n: 0,
      comments: [],
      show: false,
      value: 1,
      ps: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    goback() {
      this.$router.go(-1)
    },
    tab(n) {
      this.n = n
    },
    onClick() {},
    ch(e) {
      // console.log(e)
      if (e == 1) {
        if (this.comments.length == 0) {
          this.http
            .get(
              'https://api.it120.cc/small4/shop/goods/reputation?goodsId=' +
                this.$route.params.id
            )
            .then(msg => {
              console.log(msg)
              if (msg.data.msg == 'success') {
                this.comments = msg.data.data
              } else {
              }
            })
        }
      }
    },
    addCart() {
      this.show = true
    },
    select(n1, n2) {
      //  alert(n2)
      //this.ps[n1].childsCurGoods[n2].checked = true
      // var a1 = this.ps[n1].childsCurGoods[n2];
      //  a1.checked = true

      //this.$set(this.ps[n1].childsCurGoods,n2,a1)

      this.ps[n1].childsCurGoods.forEach((item, index) => {
        if (index == n2) {
          item.checked = true
          this.$set(this.ps[n1].childsCurGoods, index, item)
        } else {
          item.checked = false
          this.$set(this.ps[n1].childsCurGoods, index, item)
        }
      })
    },
    buy() {
      var t = localStorage.getItem('token')
      console.log(t)
      if (t) {
        // 把数据添加到购物车
        var p0 = []
        this.ps.forEach(item => {
          var r = item.childsCurGoods.filter(p => {
            return p.checked
          })
          p0 = p0.concat(r)
        })
        console.log(p0)
        if (p0.length  < this.ps.length ) {
          // alert("请选择属性")

          this.$notify('请选择属性')
          return false
        }
        var obj = {
          pic: this.detail.basicInfo.pic,
          name: this.detail.basicInfo.name,
          price: this.detail.basicInfo.minPrice,
          num: this.value,
          pro: p0,
          checked: false,
          id: this.detail.basicInfo.id
        }
        this.$store.commit('addCart', obj);
        Toast.success('加入成功');
        this.show = false

      } else {
        this.$router.push('/login')
      }
    },
    gocart(){

        this.$router.push("/home/cart")
    }
  },
  created() {
    var id = this.$route.params.id
    this.http
      .get('https://api.it120.cc/small4/shop/goods/detail?id=' + id)
      .then(msg => {
        console.log(msg)
        if (msg.data.msg == 'success') {
          this.detail = msg.data.data
          this.loading = false

          //   this.detail.properties.forEach((element,index,arr) => {
          //             var r = element.childsCurGoods.map((item)=>{
          //                    item.checked = false
          //                    return   item
          //             })
          //             console.log(r)
          //             arr[index]['childsCurGoods'] = r

          //   });
          var arr = this.detail.properties
          arr.forEach(item => {
            item.childsCurGoods.forEach(a => {
              a.checked = false
            })
          })

          this.ps = arr
        }
      })
  },
  mounted() {}
}
</script>
<style lang="less" >
#banner {
  position: relative;
  .my-swipe {
    img {
      width: 100%;
    }
  }
  .back {
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #fff;
    opacity: 0.8;
  }
}
.desc {
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
.tab {
  .title {
    ul {
      display: flex;
      li {
        width: 50%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 0.18rem;
      }
      li.active {
        border-bottom: 2px solid #f00;
      }
    }
  }
}
.van-tabs__content {
  width: 100%;
  overflow: hidden;
  img {
    width: 100% !important;
  }
  ul {
    li {
      height: 0.5rem;
      line-height: 0.5rem;
      overflow: hidden;
      padding-left: 0.15rem;
      span {
        font-size: 0.18rem;
      }
    }
    li:nth-of-type(1) {
      margin-top: 0.1rem;
    }
  }

  .comment {
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
  .active {
    border: 1px solid red;
  }
}
</style>