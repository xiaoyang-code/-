<template>
  <div id="log">
    <div>
      <p>新用户注册</p>
      <p>很高兴您将成为商城的会员（注册只需一步）</p>
      <p><input autofocus="autofocus"
               type="tel"
               placeholder="手机号码" v-model="tel" />
        <span style="display: none;">必填</span>
        <i class="el-icon-mobile-phone"></i>
      </p>
      <p>
        <input type="password" placeholder="密码" v-model="pwd" />
        <input type="text"
               placeholder="密码"
               style="display: none;">
       <van-icon name="closed-eye" />
          
       <van-icon name="eye-o" />
        </p>
      <p>
          <input type="password"
               placeholder="确认密码"> <input type="text"
               placeholder="确认密码"
               style="display: none;">

              <van-icon name="closed-eye" />
              <van-icon name="eye-o" />
          </p>
      <p>
          <input type="text"
               placeholder="用户名"> 
             <van-icon name="manager-o" />
          </p>
      <p>
          <input type="text" v-model="pic"> 
          <img :src="imgcode + key" alt="" @click="updateImg">
       </p>
      <p></p>
      <p>
          <input type="text" v-model="code" /> 
          <span @click="getCode">获取验证码</span> <span style="display: none;"></span>
          </p>
      <p @click="zhuce">立即注册</p>
      <p class="">已有账号？ 立即登录</p>
      <!---->
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import qs from "qs";

export default {
  components: {},
  props: {},
  data() {
    return {
        imgcode:"https://api.it120.cc/small4/verification/pic/get?key=",
        key:uuidv4(),
        tel:"",
        pic:"",
        pwd:""
    }
  },
  watch: {},
  computed: {},
  methods: {
      updateImg(){
         
         //this.imgcode = "https://api.it120.cc/small4/verification/pic/get?key=" +uuidv4()
        this.key = uuidv4()
      },
      getCode(){
           
           //alert(this.tel)
           var data = {"mobile":this.tel,picCode:this.pic,key:this.key}
           
           this.http.post("https://api.it120.cc/small4/verification/sms/get",qs.stringify(data)).then((msg)=>{

               console.log(msg)

           })
         
      },
      zhuce(){

           var data = {"mobile":this.tel,pwd:this.pwd,code:this.code}
           this.http.post("https://api.it120.cc/small4/user/m/register",qs.stringify(data)).then((msg)=>{

               console.log(msg)

           })
      }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="less">
#log {
  padding: 0.26rem;
  _height: 2rem;
  min-height: 2rem;
  > div:nth-of-type(1) {
    width: 3.8rem;
    padding: 0 0.44rem;
    _height: 10rem;
    min-height: 10rem;
    border: 0.02rem solid #f5f5f5;
    > p:nth-of-type(1) {
      font-size: 0.3rem;
      margin-top: 0.5rem;
    }
    > p:nth-of-type(2) {
      font-size: 0.2rem;
      color: #909090;
      margin-top: 0.5rem;
      margin-bottom: 0.23rem;
    }
    > p:nth-of-type(3) {
      width: 3.72rem;
      height: 0.66rem;
      border-radius: 0.08rem;
      background: #f5f5f5;
      margin-top: 0.44rem;
      display: flex;
      align-items: center;
      position: relative;
      border: 1px solid #f5f5f5; //e12c1e
      input {
        margin-left: 0.2rem;
        width: 2.6rem;
        height: 0.4rem;
        border: none;
        outline: none;
        background: #f5f5f5;
        font-size: 0.2rem;
        color: #bfbfbf;
      }
      > span {
        font-size: 0.18rem;
        color: #e12c1e;
      }
      i {
        font-size: 0.22rem;
        color: #d1cfce;
        // margin-left: 0.1rem;
        position: absolute;
        left: 3.3rem;
        top: 0.24rem;
      }
    }
    > p:nth-of-type(4),
    > p:nth-of-type(5),
    > p:nth-of-type(6) {
      width: 3.72rem;
      height: 0.66rem;
      border-radius: 0.08rem;
      background: #f5f5f5;
      margin-top: 0.24rem;
      display: flex;
      align-items: center;
      position: relative;
      border: 1px solid #f5f5f5; //e12c1e
      input {
        margin-left: 0.2rem;
        width: 2.6rem;
        height: 0.4rem;
        border: none;
        outline: none;
        background: #f5f5f5;
        font-size: 0.2rem;
      }
      > span {
        font-size: 0.18rem;
        color: #e12c1e;
      }
      i {
        font-size: 0.22rem;
        color: #d1cfce;
        // margin-left: 0.1rem;
        position: absolute;
        left: 3.3rem;
        top: 0.24rem;
      }
    }

    > p:nth-of-type(7) {
      width: 3.72rem;
      height: 0.66rem;
      border-radius: 0.08rem;
      background: #f5f5f5;
      margin-top: 0.24rem;
      display: flex;
      align-items: center;
      position: relative;
      border: 1px solid #f5f5f5; //e12c1e
      input {
        margin-left: 0.2rem;
        width: 1.5rem;
        height: 0.4rem;
        border: none;
        outline: none;
        background: #f5f5f5;
        font-size: 0.2rem;
      }
      img {
        width: 2rem;
        height: 0.65rem;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    > p:nth-of-type(8) {
      width: 3.72rem;
      height: 0.66rem;
      border-radius: 0.08rem;
      background: #f5f5f5;
      margin-top: 0.24rem;
      display: flex;
      align-items: center;
      position: relative;
      border: 1px solid #f5f5f5;
      font-size: 0.2rem;
      span {
        margin-left: 0.2rem;
      }
    }
    > p:nth-of-type(9) {
      width: 3.72rem;
      height: 0.66rem;
      border-radius: 0.08rem;
      background: #f5f5f5;
      margin-top: 0.24rem;
      display: flex;
      align-items: center;
      position: relative;
      border: 1px solid #f5f5f5; //e12c1e
      input {
        margin-left: 0.2rem;
        width: 1.7rem;
        height: 0.4rem;
        border: none;
        outline: none;
        background: #f5f5f5;
        font-size: 0.2rem;
      }
      span {
        display: block;
        width: 1.7rem;
        height: 0.65rem;
        border-left: 0.01rem solid #e1e1e1;
        font-size: 0.2rem;
        text-align: center;
        line-height: 0.65rem;
        cursor: pointer;
      }
    }
    > p:nth-of-type(10) {
      width: 2.91rem;
      height: 0.57rem;
      border-radius: 0.06rem;
      background: linear-gradient(90deg, #5ea6f8, #bb87f6);
      text-align: center;
      line-height: 0.57rem;
      font-size: 0.2rem;
      color: white;
      letter-spacing: 0.06rem;
      margin: 0 auto;
      margin-top: 0.24rem;
    }
    > p:nth-of-type(11) {
      font-size: 0.2rem;
      color: #549ff9;
      margin-top: 0.27rem;
      text-align: center;
    }
  }
}
</style>