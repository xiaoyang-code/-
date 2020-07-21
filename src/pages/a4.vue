<template>
  <div>
    <h1 style="font-size:0.3rem;text-align:center;height:0.5rem; line-height: 0.5rem;">个人中心</h1>
    <button @click="logout()">退出</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
button {
  display: block;
  width: 0.8rem;
  height: 0.3rem;
  margin: 0 auto;
  font-size: 0.2rem;
}
</style>