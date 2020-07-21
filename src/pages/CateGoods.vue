<template>
  <div class="wrapper">
    <van-nav-bar
    title="分类商品"
    left-arrow
    :border="f"
    @click-left="onClickLeft"
    />
     <ul id="classify" v-if="list.length !=0">
        <li class="" v-for="item of list" :key="item.id"  @click="godetail(item.id)" >
            <img :src="item.pic" alt="">
            <p>{{ item.name }}</p>
            <p>￥{{ item.originalPrice}}</p>
        </li>
    </ul>
    <img v-else class="classify_img" src="/static/fc9016c81219eb449d20df78381e70af.4b93135.png" alt="">
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [],
      f:false
    }
  },
  watch: {},
  computed: {},
  methods: {
     onClickLeft(){

          this.$router.go(-1)
    },
    godetail(id){
     

            this.$router.push({name:"detail",params:{id}})
    }
  },
  created() {
     
     //alert(this.$route.query.cid)
     this.http.get("https://api.it120.cc/small4/shop/goods/list").then((msg)=>{

          console.log(msg)
          if(msg.data.msg == "success"){

             this.list  = msg.data.data.filter((item)=>{

                      return item.categoryId == this.$route.query.cid
               })
          }
     })


  },
  mounted() {}
}
</script>
<style lang="less">
.wrapper{
    .van-nav-bar{
         .van-icon{
              color: #000;
         }

}
}
.classify_img{
    img{
        width: 100%;
        margin-top: 2rem;
    }
}
#classify{
    margin-top: 0.7rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    flex-wrap: wrap;
    li{
        width: 2.45rem;
        position: relative;
        img{
            width: 100%;
        }
        p:nth-of-type(1){
            position: absolute;
            left: 0;
            top: 2rem;
            width: 100%;
            height: 0.4rem;
            background: #F0EDD4;
            font-size: 0.14rem;
            color: #B69B72;
            text-indent: 0.02rem;
            line-height: 0.4rem;
        }
        p:nth-of-type(2){
            font-size: 0.2rem;
            color: #CF1311;
             position: absolute;
            left: 0;
            top: 2.5rem;
        }
    }
}
.classify_img {
    width: 100%;
    margin-top: 2rem;
}
</style>