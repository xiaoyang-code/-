<template>
  <div class="wrapper">
    <div>
     <div id="shop_top">
                <p v-if="!edit" @click="bj" >编辑</p> 
                <p style="color: rgb(208, 0, 0);" v-else @click="bj" >完成</p>
                <p>购物车</p>
                <p></p>
      </div>
      <ul class="cart">
        <li v-for="(item,index) in list" :key="item.id">
        <van-checkbox v-model="item.checked" checked-color="#f00" @click="sel(index)" ></van-checkbox>
          <img :src="item.pic"
               alt="" />
          <div class="descrip">
            <p class="p1">{{ item.name }}</p>
            <p class="p2">
                 <span v-for="p in item.pro" :key="item.id">
                     {{ p.name }}
                 </span>    
            </p>
            <div class="f">
              <p class="p3">￥{{ item.price }}</p>
              <van-stepper v-model="item.num" @change="ch(index)" />
            </div>
          </div>

        </li>
      </ul>

    </div>

    <div id="place" v-show="list.length>0">
      <van-checkbox v-model="ss" checked-color="#f00" @change="qx" >全选</van-checkbox>
      <p>合计: ￥{{ $store.getters.hj }}</p>
      <p v-show="!edit" @click="goorder" >下单</p>
      <p class="shan" v-show="edit" @click="del" >删除</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
      checked: true,
      edit:false,
     
    }
  },
  watch: {},
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      list: state => state.cart,
      t: state => state.title,
    }),
    ss:{
          get:function(){
               
               return  this.$store.getters.select

          },
          set:function(v){

                 console.log(v)
                 //alert(v)
                 this.$store.commit("qx",v)
          }
      }
  },
  methods: {
      sel(n){
          console.log(this.list[n].checked)
          this.$store.commit("sel",{index:n,value:this.list[n].checked})
      },
      ch(n){

           //alert(this.list[n].num)
           this.$store.commit("num",{index:n,value:this.list[n].num})
      },
      qx(v){
           //alert()
          // console.log(v)
      },
      bj(){

          this.edit = !this.edit
      },
      del(){

          this.$store.commit("del")
      },
      goorder(){

          this.$router.push("/order")
      }

  },
  created() {
     // console.log(this.$store.getters.select)
  },
  mounted() {}
}
</script>
<style lang="less" >
#shop_top{
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 0.56rem;
    border-bottom: 1px solid #e9e9e9;
    background: white;
    padding: 0 0.13rem;
    font-size: 0.2rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 123;
    >p:nth-of-type(1) {
       color: #d00000;
    }
}
.wrapper {
//   overflow: hidden;
  .cart {
    padding-top: 0.57rem;
    width: 5.2rem;
    overflow: hidden;
    li {
      height: 1.6rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 0.16rem;
      width: 5.78rem;
      position: relative;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      img{
        width: 1.1rem;
        height: 1.1rem;
        display: block;
        border-radius: 0.04rem;
        margin-left: 0.17rem;
      }
      .descrip{
            width: 3.09rem;
            height: 1.1rem;
            margin-left: 0.24rem;
            .p1{
                 font-size:0.18rem;
            }
            .p2{
                font-size: 0.14rem;
                margin-top: 0.16rem;
                color: #b2b2b2;
            }
            .p3{
                font-size: 0.18rem;
                color: #d00000;
            }
            .f{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                margin-top: 0.17rem;
                width: 3.09rem;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
            }
      }
    }
  }
}
.item {
  height: 100px;
  width: 100%;
  position: relative;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  .del {
    width: 60px;
    height: 100px;
    background: #f00;
    position: absolute;
    right: 0;
  }
}
#place {
  height: 0.68rem;
  border-top: 0.01rem solid #e9e9e9;
  border-bottom: 0.01rem solid #e9e9e9;
  display: flex;
  align-items: center;
  background: white;
  z-index: 1;
  justify-content: space-between;
  padding-left: 0.16rem;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0.87rem;
  > div {
    width: 2.1rem;
  }
  > p:nth-of-type(1) {
    font-size: 0.18rem;
    color: #d00000;
  }
  > p:nth-of-type(2) {
    width: 1.66rem;
    height: 0.68rem;
    font-size: 0.2rem;
    color: white;
    text-align: center;
    line-height: 0.68rem;
    background: #d00000;
  }
}
.shan {
  width: 1.66rem;
  height: 0.68rem;
  font-size: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.68rem;
  background: #d00000;
}
</style>