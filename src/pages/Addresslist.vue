<template>
  <div>
    <div id="site_top"><i class="van-icon van-icon-arrow-left">
        <!----></i>
      <p>我的地址</p>
      <p class="" @click="goaddaddress" >新建地址</p>
    </div>
    <ul id="site">
      <li class="rightshow" v-for="item of list" :key="item.id">
        <div role="checkbox"
             tabindex="0"
             aria-checked="true"
             class="van-checkbox">
          <div class="van-checkbox__icon van-checkbox__icon--round van-checkbox__icon--checked"
               style="font-size: 0.22rem;"><i class="van-icon van-icon-success"
               style="border-color: rgb(171, 41, 41); background-color: rgb(171, 41, 41);">
              <!----></i></div>
        </div>
        <div>
          <div>
            <p>{{ item.linkMan }}</p>
            <p>{{ item.mobile }}</p>
          </div>
          <p><span>- </span> {{ item.provinceStr }} <span> {{ item.address }} </span> </p>
        </div> <i class="ii router-link-exact-active router-link-active"><i class="van-icon van-icon-share">
            <!----></i></i>
        <p>删除</p>
      </li>



    </ul>
  </div>
</template>

<script>
import qs from "qs"
export default {
  components: {},
  props: {},
  data() {
    return {
        list:[]
    }
  },
  watch: {},
  computed: {},
  methods: {
      goaddaddress(){

             this.$router.push("/address")
      }
  },
  created() {
  
  var d = {"token":localStorage.getItem("token")}
  var data = qs.stringify(d)

      this.http.post("https://api.it120.cc/small4/user/shipping-address/list",data).then((msg)=>{

               console.log(msg)
               if(msg.data.msg == "success"){
                       
                       this.list = msg.data.data

               }
      })
  },
  mounted() {}
}
</script>
<style lang="less">
#site_top{
    height: 0.72rem;
    padding: 0 0.3rem;
    width: 4.6rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    >i{
        font-size: 0.26rem;
    }
    >p{
        font-size: 0.2rem;
    }
}
#site{
    padding-top: 0.72rem;
    background: #ffffff;
    width: 5.2rem;
    overflow: hidden;
    li{
        width: 6.23rem;
        height: 1.01rem;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
        padding-left: 0.38rem;
        background: #ffffff;
        position: relative;
        // right: 1.41rem;
        // right: 0;
        translate: all .5s;
        >div:nth-of-type(2){
            margin-left: 0.28rem;
            height: 0.58rem;
            width: 3.78rem;
            >div{
                display: flex;
                >p:nth-of-type(1){
                    font-size: 0.2rem;
                }
                >p:nth-of-type(2){
                    font-size: 0.2rem;
                    margin-left: 0.12rem;
                }
            }
            >p:nth-of-type(1){
                font-size: 0.16rem;
                margin-top: 0.21rem;
                color: #939393;
            }
        }
        >i{
            font-size: 0.3rem;
            color: #999;
        }
        >p:nth-last-child(1){
            width: 1.4rem;
            height: 1.01rem;
            background: red;
            font-size: 0.2rem;
            color: white;
            text-align: center;
            line-height: 1.01rem;
            // position: fixed;
            // transition: all .5s;
            // margin-left: 1rem;
        }
    }
}
.righthide{
    right: 1.41rem;
    transition: all .5s;
}
.rightshow{
    right: 0;
    transition: all .5s;
}
.ii{
    margin-right: 0.25rem;
}

</style>