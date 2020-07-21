<template>
  <div class="wrapper">
11111111111
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                {{ item }}
            </li>
        </ul>

        <input type="button" value="aaaaaaa" @click="edit" >
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        arr:[
            "aaaa",
            "bbbb",
            "ccccc"
        ]
    }
  },
  watch:{},
  computed:{},
  methods:{
      edit(){
            //  var a = JSON.parse(JSON.stringify(this.arr));

              //a[1] = "hello 1909B";
              
              //console.log(a)

            // this.arr.push("aaaaaaaaaaaaa")

        //    this.arr = this.arr.filter((item,index)=>{

        //          return index == 1

        //     })
            
          //  this.arr[1] =111111

          this.$set(this.arr,1,"hello world")
      }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.wrapper{}
</style>