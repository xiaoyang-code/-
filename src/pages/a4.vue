<template>
  <div class="wrapper">
      个人中心
      <button @click="logout()">退出</button>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      logout(){

           localStorage.removeItem("token");
           this.$router.push("/login")
      }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.wrapper{}
</style>