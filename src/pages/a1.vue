<template>
  <div class="wrapper">
       <Banner />
       <Kj />
       <Zt />
       <Tj />
  </div>
</template>

<script>
import Banner  from "../components/Banner"
import Kj  from "../components/Kj"
import Zt  from "../components/Zt"
import Tj  from "../components/Tj"
export default {
  components:{
      Banner,
      Kj,
      Zt,
      Tj
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
      console.log("index11111111111")
  }
}
</script>
<style scoped>
.wrapper{}
</style>