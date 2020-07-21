<template>
  <div>
    <div id="address_top"><i class="van-icon van-icon-arrow-left">
        <!----></i>
      <p>新增地址</p>
    </div>
    <ul id="address_content">
      <li>
        <div>
            <label for="name">联系人</label> 
            <input type="text" id="name" placeholder="姓名" v-model="linkMan" >
        </div>
        <p></p>
      </li>
      <li>
        <div>
            <label for="name">手机号码</label> 
            <input type="text" id="name" placeholder="11位手机号" v-model="mobile" >
        </div>
        <p></p>
      </li>
      <li>
        <div @click="ad"><label>选择地区</label> </div>
       
      </li>
      <li>
        <div>
            <label for="name">详细地址</label> 
            <input type="text" id="name" placeholder="街道门牌信息" v-model="address">
            <div v-if="ares.length>0">
                <span>
                    {{ ares[0].name }}
                </span>
                <span>
                    {{ ares[1].name }}
                </span>
                <span>
                    {{ ares[2].name }}
                </span>
            </div>

        </div>
        <p></p>
      </li>
      <li>
        <div>
            <label for="name">邮政编码</label> 
            <input type="text" id="name" placeholder="邮政编码" v-model="code" ></div>
        <p></p>
      </li>
    </ul>
    <div id="btn">
      <p @click="save">保存</p>
      <p>从微信读取</p>
      <p>取消</p>
    </div>
    <!---->

    <van-popup v-model="show" position="bottom">
        <van-area title="选择地区" :area-list="areaList" @confirm="ok" @cancel="cancel" />
    </van-popup>
  </div>
</template>

<script>
import  areaList from "../area"
import qs from "qs"
export default {
  components: {},
  props: {},
  data() {
    return {
        areaList:areaList,
        show:false,
        ares:[],
        linkMan:"",
        mobile:"",
        address:"",
        code:""
    }
  },
  watch: {},
  computed: {},
  methods: {
      ad(){
          this.show = true
      },
      ok(data){
           
           console.log(data)
           this.ares = data
           this.show = false
            
      },
      cancel(){
          this.show = false
      },
      save(){
           
           var data = {
               address:this.address,
               cityId:this.ares[1].code,
               code:this.code,
               linkMan:this.linkMan,
               mobile:this.mobile,
               provinceId:this.ares[0].code,
               token:localStorage.getItem("token")
           }
           var d = qs.stringify(data)

           this.http.post("https://api.it120.cc/small4/user/shipping-address/add",d).then((msg)=>{

                   console.log(msg)
                   if(msg.data.msg == "success"){

                       this.$router.push("/addresslist")
                   }

           })


      }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="less">
#address_top{
    height: 0.72rem;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    >i{
        font-size: 0.26rem;
        margin-left: 0.33rem;
    }
    >p{
        font-size: 0.2rem;
        margin-left: 1.73rem;
    }
}
#address_content{
    padding: 0.72rem 0.2rem 0 0.2rem;
    background: #FFFFFF;
    li{
        height: 0.71rem;
        >div{
            border-bottom: 0.01rem solid #DDDDDD;
            display: flex;
            align-items: center;
            height: 0.7rem;
            margin-left: 0.02rem;
            label{
                font-size: 0.2rem;
                width: 1.1rem;
            }
            >p{
                font-size: 0.2rem;
                margin-left: 0.08rem;
            }
            >p:nth-of-type(1){
                margin-left: 0;
            }
            >input{
                font-size: 0.2rem;
                height: 0.2rem;
                width: 3.67rem;
                border: none;
                background: #FFFFFF;
                height: 0.64rem;
            }
        }
        >p{
            height: 0.01rem;
            width: 0%;
            margin: 0 auto;
            background: #0098E9;
            transition: all 1s;
        }
    }
}
#btn{
    padding: 0 0.2rem;
    p{
        width: 100%;
        // height: 0.3rem;
        background: #DDDDDD;
        text-align: center;
        line-height: 0.56rem;
        color: white;
        margin-top: 0.23rem;
        font-size: 0.22rem;
        letter-spacing: 0.02rem;
        border-radius: 0.06rem;
        height: 0.56rem;
    }
    p:nth-of-type(1){
        background: linear-gradient(to right, #81C125, #1AAC19);
    }
    p:nth-of-type(2){
        background: linear-gradient(to right, #4bb0ff, #6149f6);
    }
}

</style>