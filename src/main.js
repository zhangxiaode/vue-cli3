import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import ajax from "./utils/ajax";

Vue.config.productionTip = false;
Vue.prototype.$ajax = ajax;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
