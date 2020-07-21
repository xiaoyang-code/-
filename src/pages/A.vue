<template>
  <div class="home">
         <router-view></router-view>
        <van-tabbar route  active-color="#f00" >
            <van-tabbar-item replace to="/A/a1" icon="home-o">
               首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/A/a2" icon="qr">
               分类
            </van-tabbar-item>
            <van-tabbar-item replace to="/A/a3" :badge="$store.getters.nums" icon="cart-o">
               购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/A/a4" dot icon="contact">
               用户
            </van-tabbar-item>
        </van-tabbar>
  </div>
</template>
<script>

export default {
  components:{
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){

  }
}
</script>
<style lang="less">

</style>