<template>
  <div class="news">
      <van-nav-bar
        title="专栏详情"
        left-arrow
        @click-left="onClickLeft"

        />
        <h3> {{ article.title }} </h3>
        <img :src="article.pic" alt="">
        <div v-html="article.content" >
             
        </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        article:{}
    }
  },
  watch:{},
  computed:{},
  methods:{
      onClickLeft(){
          this.$router.go(-1)
      }
  },
  created(){
       
       //console.log("get传值",this.$route.query)

       //console.log("动态路由",this.$route.params)

       this.http.get("cms/news/detail?id="+this.$route.query.id).then((msg)=>{

              console.log(msg)
              this.article = msg.data.data
       })
  },
  mounted(){}
}
</script>
<style lang="less">
.news{
   h3{
        font-size: 0.3rem;
        color: #333333;
        width: 100%;
        text-align: center;
        margin-top: 0.45rem;
        margin-bottom: 0.2rem;
   }
   img{
        width: 4.85rem;
        height: 3.13rem;
        display: block;
        margin: 0 auto;
   }
   p{
       font-size: 0.2rem;
    color: #333333;
    line-height: 0.48rem;
    text-indent: 2em;
    margin-top: 0.1rem;
   }
}
</style>