<template>
  <div id="fenlei">
    <p>
        <input placeholder="回车搜索商品" type="text">
    </p>
    <div>
      <ol>
        <li class="feired" :class="{'active':n==0}"  @click="all"  >所有分类</li>
        <li class="feired" :class="{'active':(index+1)==n}" v-for="(item,index) of a1" :key ="item.id" @click="getChildren(item.id,index+1)" >
               {{ item.name }}
        </li>

      </ol>
      <div>
            <ul >
                <li  v-for="item of a2"  :key="item.id" class="" @click="gocate(item.id)" >
                    <img :src="item.icon" />
                    <p> {{ item.name }} </p>
                </li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        a1:[],
        a2:[],
        a3:[],
        n:0
    }
  },
  watch: {},
  computed: {},
  methods: {
         async getData(){ // 获取分类数据的方法
              var  d =   await  this.http.get("https://api.it120.cc/small4/shop/goods/category/all");
              console.log(d)
              
              if(d.data.msg == "success"){

                     var c1 = d.data.data.filter((item)=>{   // 通过数组过滤方法  把一级分类 过滤出来
                             return item.level == 1
                     })
                     //console.log(c1)
                     this.a1 = c1    // 把一级分类放到a1
                     this.a3 = d.data.data // 把所有的分类放到 a3
                     this.a2 = d.data.data
              }
         },
         getChildren(id,index){

                 //alert(id)

                var d2 = this.a3.filter((item)=>{

                           return item.pid == id
                 })

                 console.log(d2)
                 this.a2 = d2

                 this.n = index   // 把索引值 赋值给 n
         },
         all(){
             
             this.a2 =  this.a3   // 右侧显示所有的分类
             this.n = 0   // 设置激活样式

         },
         gocate(id){

             this.$router.push("/categoods?cid="+id)
         }
  },
  created() {
        
        this.getData();

  },
  mounted() {}
}
</script>
<style lang="less">
#fenlei{
  >p:nth-of-type(1){
    width: 100%;
    height: 0.5rem;
    border-bottom: 0.01rem solid #F3F3F3;
    display: flex;
    align-items: center;
    input{
      width: 3.47rem;
      height: 0.35rem;
      background: #F5F5F5;
      border: none;
      border-radius: 0.2rem;
      margin-left: 0.2rem;
      padding-left: 0.2rem;

    }
  }
  >div:nth-of-type(1){
    display: flex;
    ol{
      width: 1.27rem;
      border-right: 0.01rem solid #E9E9E9;
      // height: 5.3rem;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0.51rem;
      overflow: auto;
      background: white;
      z-index: 1;
      li{
        width: 1.27rem;
        height: 0.5rem;
        // border-left: 0.03rem solid white;//#D41515
        font-size: 0.2rem;
        // color: #675D56;
        text-align: center;
        line-height: 0.5rem;
        margin-top: 0.1rem;
      }
    }
    >div{
      position: fixed;
      left: 1.27rem;
      top: 0.51rem;
      overflow: auto;
      height: 100%;
      >div{
        width: 3.92rem;
      }
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        // overflow: auto;
        // height: 5.3rem;
        width: 3.72rem;
        text-align: center;
        padding: 0 0.1rem;
        li{
          width: 30%;
          margin-top: 0.1rem;
          img{
            width: 1.1rem;
            height: 1.1rem;
            display: block;
          }
          p{
            font-size: 0.16rem;
            color: #3E4561;
            margin-top: 0.05rem;
          }
        }
      }
    }
  }
}
.red{
  border-left: 0.03rem solid #D41515;
  color: #D41515;
}
.feired{
  border-left: 0.03rem solid white;
  color: #675D56;
}
.feired.active{
    border-left: 0.03rem solid red;
    color: #f00;
}
.img_weixin{
  width: 100%;
  height: 1.8rem;
}
.antd_img{
  width: 80%;
  margin: 0 auto;
  border-radius: 0.06rem;
  margin-top: 0.1rem;
}
</style>