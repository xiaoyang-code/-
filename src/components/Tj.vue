<template>
  <div id="home_popularity">
    <div>
      <p class="">人气推荐</p> <i class="van-icon van-icon-arrow">
        <!----></i>
    </div>
    <ul>
      <li class="" v-for="item of list" :key="item.id" @click="godetail(item.id)" >
          <img :src="item.pic"
             alt="">
        <p>{{ item.characteristic }}</p>
        <p>{{ item.name }}</p>
        <p>￥{{ item.minPrice }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
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
      godetail(id){

                 this.$router.push({name:"detail",params:{id:id}})

      }
  },
  created() {
      this.http.get("https://api.it120.cc/small4/shop/goods/list").then((msg)=>{

             console.log(msg)
             this.list = msg.data.data

      })
  },
  mounted() {}
}
</script>
<style lang="less">
#home_popularity {
  width: 100%;
  border-bottom: 0.14rem solid #f5f5f5;
  > div:nth-of-type(1) {
    font-size: 0.22rem;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
    text-align: center;
    height: 0.65rem;
    // border-bottom: 0.01rem solid #E9E9E9;
    > i {
      font-size: 0.2rem;
    }
  }
  > ul {
    width: 4.8rem;
    display: flex;
    padding: 0 0.2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    > li {
      img {
        width: 2.33rem;
        height: 3rem;
        display: block;
      }
      > p:nth-of-type(1) {
        font-size: 0.2rem;
        color: #000000;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > p:nth-of-type(2) {
        font-size: 0.14rem;
        color: #b2b2b2;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.1rem;
      }
      > p:nth-of-type(3) {
        font-size: 0.16rem;
        color: #d00000;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>