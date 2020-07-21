<template>
        <li class="">
        <div>
            <img :src="good.pic"
               alt="">
          <div>
            <p>{{ good.name }}</p>
            <p>{{ good.characteristic==""?"1909B 校服":good.characteristic }}</p>
            <ol>
              <li>
                <p>￥{{ good.minPrice }}</p>
                <p>低价</p>
              </li>
              <li>
                <p>￥{{ good.originalPrice }}</p>
                <p>原价</p>
              </li>
              <li>
                <p>{{ good.stores }}件</p>
                <p>限量</p>
              </li>
            </ol>
          </div>
        </div>
      </li>
</template>

<script>
export default {
  components:{},
  props:["good"],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style >

</style>