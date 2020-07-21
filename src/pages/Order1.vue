<template>
  <div >
    <div 
         id="order_top"><i 
         class="van-icon van-icon-arrow-left">
        <!----></i>
      <p >确认订单</p>
      <p ></p>
    </div>
    <div 
         id="order_neirong">
      <div 
           class=""><i 
           class="van-icon van-icon-location-o">
          <!----></i>
        <div @click="goAddressList">
          <p >
            <span >{{ address.linkMan}} </span>
            <span >{{ address.mobile}} </span>
         </p>
            <p >{{ address.address}} </p>
        </div> 
        <i class="van-icon van-icon-arrow">
          <!----></i>
      </div>
      <!----> <img 
           src="data:image/png;base64,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"
           alt="">
      <p >商品列表</p>
      <ul >
        <li v-for="item in $store.getters.order"  :key = "item.id" >
            <img :src="item.pic" alt=""/>
          <div >
            <p>
                {{ item.name }}
            </p>
            <p >
                <span v-for="p in item.pro" :key="p.id">
                    {{ p.name }}
                </span>
            </p>
          </div>
          <div >
            <p >￥{{ item.price }}</p>
            <p >x{{ item.num}}</p>
          </div>
        </li>
      </ul>
      <!---->
      <div >
        <p >配送方式</p>
        <p >快递</p>
      </div>
      <div ><label 
               for="cont">备注</label> <input 
               type="text"
               placeholder="如需备注请输入"></div>
      <p ></p>
      <div >
        <p >商品金额</p>
        <p >￥{{ $store.getters.hj }}</p>
      </div>
    </div>
    <div 
         id="order_foot">
      <p >合计: ￥{{ $store.getters.hj }}</p>
      <p @click="sub">提交订单</p>
    </div>
  </div>
</template>

<script>
import qs from "qs"
export default {
  components: {},
  props: {},
  data() {
    return {
        address:{}
    }
  },
  watch: {},
  computed: {},
  methods: {
      goAddressList(){

           this.$router.push("/addresslist")
      },
      sub(){


          var re =this.$store.getters.order.map((item)=>{
                var  obj = {}
                var str = []
                obj.goodsId = item.id
                obj.number = item.num
                 
                 item.pro.forEach(element => {
                    str.push(element.propertyId + ":" + element.id)  
                 });

                obj.propertyChildIds = str.join(",")

                return obj

           })

           console.log(re)

           // https://api.it120.cc/small4/order/create
           // token goodsJsonStr
           var token = localStorage.getItem("token");
           if(token == null){

                this.$router.push("/login")
           }
            re = JSON.stringify(re)
            var d = {
                 "token":token,
                 "goodsJsonStr":re
           }
          
          var d1 = qs.stringify(d)

          this.http.post("https://api.it120.cc/small4/order/create",d1).then((msg)=>{

                  console.log(msg)
                  if(msg.data.msg == "success"){

                      // this.$store.commit("")  把购物车中checked 是true那些商品 删掉
                      this.$router.push({name:"pay",query:{ordernum:msg.data.data.orderNumber,price:msg.data.data.amount}})
                  
                  }

          })

      }
  },
  created() {

      console.log(localStorage.getItem("token"))
        
         this.http.get("https://api.it120.cc/small4/user/shipping-address/default?token="+localStorage.getItem("token")).then((msg)=>{

               console.log(msg)
               if(msg.data.msg == "success"){

                     this.address = msg.data.data
               }

         })

  },
  mounted() {}
}
</script>
<style lang="less">
#order_top {
  display: flex;
  padding: 0 0.3rem;
  width: 4.6rem;
  height: 0.76rem;
  background: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  i {
    font-size: 0.26rem;
  }
  p {
    font-size: 0.2rem;
  }
}
#order_neirong {
  // width: 4.8rem;
  padding-top: 0.76rem;
  padding-bottom: 0.7rem;
  // padding: 0.76rem 0.2rem 0.7rem 0.2rem;
  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    align-items: center;
    height: 1.1rem;
    padding: 0 0.2rem;
    > p:nth-of-type(1) {
      width: 0.44rem;
      height: 0.44rem;
      border-radius: 0.06rem;
      text-align: center;
      // line-height: 0.44rem;
      background: #3283f9;
      i {
        font-size: 0.2rem;
        color: white;
        margin-top: 0.13rem;
      }
    }
    > i:nth-of-type(1) {
      font-size: 0.24rem;
      color: #dbdadf;
    }
    > div {
      width: 4.13rem;
      height: 0.58rem;
      margin-left: 0.32rem;
      > p:nth-of-type(1) {
        span {
          font-size: 0.18rem;
        }
      }
      > p:nth-of-type(2) {
        margin-top: 0.28rem;
        font-size: 0.16rem;
        color: grey;
      }
    }
    > i:nth-of-type(2) {
      font-size: 0.26rem;
      color: #dbdadf;
    }
  }
  > img:nth-of-type(1) {
    width: 100%;
    height: 0.02rem;
    display: block;
  }
  > p:nth-of-type(1) {
    height: 0.65rem;
    padding: 0 0.2rem;
    line-height: 0.65rem;
    font-size: 0.16rem;
    border-top: 0.13rem solid #f5f5f5;
    border-bottom: 2px solid #e8e8e8;
  }
  > ul {
    border-bottom: 0.15rem solid #f5f5f5;
    li {
      height: 1.53rem;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      > img {
        width: 1.12rem;
        height: 1.12rem;
        display: block;
        margin-left: 0.2rem;
      }
      > div:nth-of-type(1) {
        margin-left: 0.12rem;
        width: 3.06rem;
        height: 1.12rem;
        > p:nth-of-type(1) {
          font-size: 0.18rem;
          margin-top: 0.1rem;
        }
        > p:nth-of-type(2) {
          font-size: 0.18rem;
          margin-top: 0.55rem;
          color: #999;
        }
      }
      > div:nth-of-type(2) {
        height: 1.34rem;
        > p:nth-of-type(1) {
          font-size: 0.18rem;
          margin-top: 0.1rem;
        }
        > p:nth-of-type(2) {
          font-size: 0.18rem;
          margin-top: 0.6rem;
          margin-left: 0.29rem;
          color: #999;
        }
      }
    }
  }
  > div:nth-of-type(2) {
    height: 0.6rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.18rem;
    border-bottom: 0.01rem solid #e5e5e5;
  }
  > div:nth-of-type(3) {
    height: 0.59rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    > label {
      font-size: 0.18rem;
    }
    > input {
      width: 3.1rem;
      height: 0.2rem;
      font-size: 0.18rem;
      color: #333;
      margin-left: 0.76rem;
      border: none;
    }
  }
  > p:nth-of-type(2) {
    width: 0%;
    height: 0.01rem;
    background: #0098e9;
    transition: all 1s;
    margin: 0 auto;
  }
  > div:nth-of-type(4) {
    height: 0.64rem;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.15rem solid #f5f5f5;
    border-bottom: 0.15rem solid #f5f5f5;
    > p:nth-of-type(1) {
      font-size: 0.18rem;
    }
    > p:nth-of-type(2) {
      font-size: 0.18rem;
    }
  }
}
#order_foot {
  width: 100%;
  background: white;
  height: 0.69rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p:nth-of-type(2) {
    width: 1.73rem;
    height: 0.69rem;
    background: #b7282e;
    color: white;
    font-size: 0.22rem;
    text-align: center;
    line-height: 0.69rem;
  }
  > p:nth-of-type(1) {
    font-size: 0.2rem;
    color: #d00000;
    line-height: 0.69rem;
    margin-left: 2rem;
  }
}
</style>