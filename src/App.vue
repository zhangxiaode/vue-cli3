<template>
  <div id="app">
    <img alt="Vue logo" :src="logo" class="logo">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "app",
  data() {
    return {
      logo: require("./assets/logo.png")
    };
  },
  // components: {
  //   HelloWorld
  // },
  mounted() {
    // console.log(this.$store.state.loading);
    // this.$store.commit("showLoading");
    // console.log(this.$store.state.loading);
    // this.$ajax
    //   .get("/apis/helloworld")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background: url("./assets/logo.png") no-repeat center center; */
  .logo {
    width: 50px;
    height: 50px;
  }
}
</style>
