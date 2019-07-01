<template>
  <div id="app">
    <img alt="Vue logo" :src="logo" class="logo">
    <router-view></router-view>
    <div class="photo">
      <img id="current" :src="current" alt>
      <img id="replace" :src="file" alt>
    </div>
    <div id="form">
      <input type="file" id="file" ref="file" name="file" @change="changeFile">
      <input type="submit" id="submit" value="对比" @click="submitFile()">
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "app",
  data() {
    return {
      logo: require("./assets/logo.png"),
      current: require("./assets/a.jpg"),
      file: require("./assets/1.jpg")
    };
  },
  // components: {
  //   HelloWorld
  // },
  mounted() {
    // console.log(this.$store.state.loading);
    // this.$store.commit("showLoading");
    // console.log(this.$store.state.loading);
    // var formData = new FormData();
    // formData.append("phoneNum", "15057159482");
    // formData.append("verCode", "本又");
    // this.$ajax
    //   .post("/u/reg/sendPhoneCode2", formData)
    //   .then(res => {
    //     console.log("发送短信成功");
    //   })
    //   .catch(err => {
    //     console.log("发送短信失败");
    //   });
    // var formData2 = new FormData();
    // formData2.append("auth", "93j4");
    // formData2.append("mobile", "15057159482");
    // this.$ajax
    //   .post(
    //     "/api/SendMsg?callback=jQuery18307117823286996661_1559183587954",
    //     formData2
    //   )
    //   .then(res => {
    //     console.log("发送短信成功");
    //   })
    //   .catch(err => {
    //     console.log("发送短信失败");
    //   });
    // var formData3 = new FormData();
    // formData3.append("from", "mobile");
    // formData3.append("format", "json");
    // formData3.append("name", "15057159482");
    // this.$ajax
    //   .post("/signup/check_user.php", formData3)
    //   .then(res => {
    //     console.log("发送短信成功");
    //   })
    //   .catch(err => {
    //     console.log("发送短信失败");
    //   });
  },
  methods: {
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    changeFile(event) {
      console.log(event.target.value)
      this.file = this.getObjectURL(event.target.files[0]);
    },
    submitFile() {
      this.$ajax
        .get("/python/index", {
          current: this.current,
          file: this.file
        })
        .then(res => {
          console.log(123, res);
        })
        .catch(err => {
          console.log(456, err);
        });
    }
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
.photo {
  height: 200px;
  text-align: center;
}

.photo img {
  width: auto;
  height: 100%;
}

#form {
  text-align: center;
  margin: 30px 0;
}
</style>
