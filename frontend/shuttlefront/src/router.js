import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Gyms from "@/views/Gyms";
import Error404 from "@/views/Error404";
 
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/gyms",
      name: "gyms",
      component: Gyms
    },
    {
      path: "*",
      name: "404",
      component: Error404
    }
  ]
});
