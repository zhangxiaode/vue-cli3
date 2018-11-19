import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/homePage"
    },
    {
      path: "/homePage",
      name: "homePage",
      component: HomePage
    }
  ]
});
